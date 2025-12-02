import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendContactNotificationToAdmin } from "@/lib/email";
import type { ApiResponse, ContactSubmission } from "@/types/database";

// TravelQuoteBot API Configuration
const TQB_API_URL = process.env.TQB_API_URL || "http://134.209.137.11:3004";
const TQB_API_KEY = process.env.TQB_API_KEY || "myg_live_sk_7f8a9b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a";

// Send contact to TravelQuoteBot
async function sendToTravelQuoteBot(contactData: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  yacht?: string;
  ipAddress: string;
  language: string;
}): Promise<{ success: boolean; clientId?: number; error?: string }> {
  try {
    const response = await fetch(`${TQB_API_URL}/api/external/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": TQB_API_KEY,
      },
      body: JSON.stringify({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        subject: contactData.subject,
        message: contactData.message,
        yacht_interest: contactData.yacht,
        source_url: "https://holidaygulet.com",
        ip_address: contactData.ipAddress,
        language: contactData.language,
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log(`[TQB] Contact saved: client ${result.data.client_id}`);
      return {
        success: true,
        clientId: result.data.client_id,
      };
    } else {
      console.error("[TQB] Failed to save contact:", result.error);
      return { success: false, error: result.error };
    }
  } catch (error) {
    console.error("[TQB] API error:", error);
    return { success: false, error: "TravelQuoteBot API unavailable" };
  }
}

// Validation helper
function validateContactData(data: Record<string, unknown>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    errors.push("Name is required (minimum 2 characters)");
  }

  if (!data.email || typeof data.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Valid email is required");
  }

  if (!data.subject || typeof data.subject !== "string") {
    errors.push("Subject is required");
  }

  if (!data.message || typeof data.message !== "string" || data.message.trim().length < 10) {
    errors.push("Message is required (minimum 10 characters)");
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse<ContactSubmission>>> {
  try {
    const body = await request.json();

    // Validate input
    const validation = validateContactData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: validation.errors.join(", ") },
        { status: 400 }
      );
    }

    // Get metadata from request
    const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const userAgent = request.headers.get("user-agent") || undefined;
    const language = body.language || "en";

    // Create submission in local DB (backup)
    const submission = await db.createContactSubmission({
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim() || undefined,
      subject: body.subject,
      yacht: body.yacht || undefined,
      message: body.message.trim(),
      status: "new",
      ipAddress,
      userAgent,
      language,
    });

    // Send to TravelQuoteBot for management
    const tqbResult = await sendToTravelQuoteBot({
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim(),
      subject: body.subject,
      message: body.message.trim(),
      yacht: body.yacht,
      ipAddress,
      language,
    });
    if (tqbResult.success) {
      console.log(`[API] Contact ${submission.id} synced to TQB as client ${tqbResult.clientId}`);
    } else {
      console.error(`[API] Contact ${submission.id} failed to sync to TQB:`, tqbResult.error);
    }

    // Send email notification to admin (non-blocking)
    sendContactNotificationToAdmin({
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim(),
      subject: body.subject,
      yacht: body.yacht,
      message: body.message.trim(),
    }).catch(err => console.error("[API] Failed to send contact notification:", err));

    return NextResponse.json(
      {
        success: true,
        data: submission,
        message: "Your message has been sent successfully. We will get back to you soon!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API] Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit message. Please try again." },
      { status: 500 }
    );
  }
}

// GET endpoint for admin dashboard (future use)
export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<ContactSubmission[]>>> {
  try {
    // TODO: Add authentication check for admin access
    // const session = await getServerSession();
    // if (!session?.user?.isAdmin) {
    //   return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    // }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || undefined;
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!) : undefined;

    const submissions = await db.getContactSubmissions({ status, limit });

    return NextResponse.json({ success: true, data: submissions });
  } catch (error) {
    console.error("[API] Get contacts error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}
