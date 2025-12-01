import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { ApiResponse, ContactSubmission } from "@/types/database";

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

    // Create submission
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
      language: body.language || "en",
    });

    // TODO: Send email notification to admin
    // await sendEmailNotification({
    //   to: "info@holidayyachts.com",
    //   subject: `New Contact Form: ${body.subject}`,
    //   body: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
    // });

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
