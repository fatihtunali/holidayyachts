import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendNewsletterWelcome } from "@/lib/email";
import type { ApiResponse, NewsletterSubscription } from "@/types/database";

// TravelQuoteBot API Configuration
const TQB_API_URL = process.env.TQB_API_URL || "http://134.209.137.11:3004";
const TQB_API_KEY = process.env.TQB_API_KEY || "myg_live_sk_7f8a9b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a";

// Save newsletter subscriber to TQB as a client
async function saveToTravelQuoteBot(email: string, ipAddress: string, language: string): Promise<void> {
  try {
    await fetch(`${TQB_API_URL}/api/external/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": TQB_API_KEY,
      },
      body: JSON.stringify({
        name: email.split("@")[0], // Use email prefix as name
        email: email,
        subject: "Newsletter Subscription",
        message: "Newsletter subscriber from website",
        source_url: "https://holidaygulet.com",
        ip_address: ipAddress,
        language: language,
      }),
    });
    console.log(`[TQB] Newsletter subscriber saved: ${email}`);
  } catch (error) {
    console.error("[TQB] Failed to save newsletter subscriber:", error);
  }
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse<NewsletterSubscription>>> {
  try {
    const body = await request.json();

    // Validate email
    if (!body.email || typeof body.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Get metadata
    const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const language = body.language || "en";

    // Create subscription in local DB
    const subscription = await db.createNewsletterSubscription({
      email: body.email.trim().toLowerCase(),
      language,
      isActive: true,
      ipAddress,
      source: body.source || "website",
    });

    // Also save to TQB as a client (non-blocking)
    saveToTravelQuoteBot(body.email.trim().toLowerCase(), ipAddress, language);

    // Send welcome email (non-blocking)
    sendNewsletterWelcome(body.email.trim().toLowerCase(), language)
      .catch(err => console.error("[API] Failed to send newsletter welcome:", err));

    return NextResponse.json(
      {
        success: true,
        data: subscription,
        message: "Thank you for subscribing to our newsletter!",
      },
      { status: 201 }
    );
  } catch (error) {
    // Check for duplicate subscription
    if (error instanceof Error && error.message === "Email already subscribed") {
      return NextResponse.json(
        { success: false, error: "This email is already subscribed to our newsletter" },
        { status: 409 }
      );
    }

    console.error("[API] Newsletter subscription error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}

// Unsubscribe endpoint
export async function DELETE(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const success = await db.unsubscribeNewsletter(email.toLowerCase());

    if (!success) {
      return NextResponse.json(
        { success: false, error: "Email not found in our subscription list" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "You have been successfully unsubscribed from our newsletter",
    });
  } catch (error) {
    console.error("[API] Newsletter unsubscribe error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to unsubscribe. Please try again." },
      { status: 500 }
    );
  }
}
