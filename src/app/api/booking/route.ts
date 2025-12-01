import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { ApiResponse, BookingSubmission } from "@/types/database";

// Validation helper
function validateBookingData(data: Record<string, unknown>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Yacht info
  if (!data.yachtId || typeof data.yachtId !== "string") {
    errors.push("Yacht selection is required");
  }

  // Date validation
  if (!data.startDate || typeof data.startDate !== "string") {
    errors.push("Start date is required");
  }
  if (!data.endDate || typeof data.endDate !== "string") {
    errors.push("End date is required");
  }

  // Check date order
  if (data.startDate && data.endDate) {
    const start = new Date(data.startDate as string);
    const end = new Date(data.endDate as string);
    if (end <= start) {
      errors.push("End date must be after start date");
    }
    // Check minimum nights (7)
    const nights = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    if (nights < 7) {
      errors.push("Minimum booking is 7 nights");
    }
  }

  // Guest info
  if (!data.firstName || typeof data.firstName !== "string" || data.firstName.trim().length < 2) {
    errors.push("First name is required");
  }
  if (!data.lastName || typeof data.lastName !== "string" || data.lastName.trim().length < 2) {
    errors.push("Last name is required");
  }
  if (!data.email || typeof data.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Valid email is required");
  }
  if (!data.phone || typeof data.phone !== "string") {
    errors.push("Phone number is required");
  }
  if (!data.country || typeof data.country !== "string") {
    errors.push("Country is required");
  }

  // Guests
  if (!data.guests || typeof data.guests !== "number" || data.guests < 1) {
    errors.push("Number of guests is required");
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse<BookingSubmission>>> {
  try {
    const body = await request.json();

    // Validate input
    const validation = validateBookingData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: validation.errors.join(", ") },
        { status: 400 }
      );
    }

    // Calculate nights
    const startDate = new Date(body.startDate);
    const endDate = new Date(body.endDate);
    const nights = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

    // Get metadata from request
    const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const userAgent = request.headers.get("user-agent") || undefined;

    // Create submission
    const submission = await db.createBookingSubmission({
      yachtId: body.yachtId,
      yachtName: body.yachtName || body.yachtId,
      startDate: body.startDate,
      endDate: body.endDate,
      nights,
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      country: body.country.trim(),
      guests: body.guests,
      specialRequests: body.specialRequests?.trim() || undefined,
      totalPrice: body.totalPrice || undefined,
      currency: body.currency || "EUR",
      status: "pending",
      ipAddress,
      userAgent,
      language: body.language || "en",
    });

    // TODO: Send email notification to admin
    // await sendEmailNotification({
    //   to: "bookings@holidayyachts.com",
    //   subject: `New Booking Request: ${body.yachtName}`,
    //   body: `
    //     New booking request received!
    //
    //     Guest: ${body.firstName} ${body.lastName}
    //     Email: ${body.email}
    //     Phone: ${body.phone}
    //
    //     Yacht: ${body.yachtName}
    //     Dates: ${body.startDate} - ${body.endDate}
    //     Guests: ${body.guests}
    //
    //     Special Requests: ${body.specialRequests || "None"}
    //   `,
    // });

    // TODO: Send confirmation email to guest
    // await sendEmailNotification({
    //   to: body.email,
    //   subject: "Booking Request Received - Holiday Yacht",
    //   template: "booking-confirmation",
    //   data: submission,
    // });

    return NextResponse.json(
      {
        success: true,
        data: submission,
        message: "Your booking request has been submitted successfully. We will contact you within 24 hours!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API] Booking form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit booking. Please try again." },
      { status: 500 }
    );
  }
}

// GET endpoint for admin dashboard (future use)
export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<BookingSubmission[]>>> {
  try {
    // TODO: Add authentication check for admin access
    // const session = await getServerSession();
    // if (!session?.user?.isAdmin) {
    //   return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    // }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || undefined;
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!) : undefined;

    const submissions = await db.getBookingSubmissions({ status, limit });

    return NextResponse.json({ success: true, data: submissions });
  } catch (error) {
    console.error("[API] Get bookings error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}
