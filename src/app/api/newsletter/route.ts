import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { ApiResponse, NewsletterSubscription } from "@/types/database";

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

    // Create subscription
    const subscription = await db.createNewsletterSubscription({
      email: body.email.trim().toLowerCase(),
      language: body.language || "en",
      isActive: true,
      ipAddress,
      source: body.source || "website",
    });

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
