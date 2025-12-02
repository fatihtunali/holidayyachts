import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendBookingNotificationToAdmin, sendBookingConfirmationToCustomer } from "@/lib/email";
import type { ApiResponse, BookingSubmission } from "@/types/database";

// TravelQuoteBot API Configuration
const TQB_API_URL = process.env.TQB_API_URL || "http://134.209.137.11:3004";
const TQB_API_KEY = process.env.TQB_API_KEY || "myg_live_sk_7f8a9b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a";

// Send booking to TravelQuoteBot
async function sendToTravelQuoteBot(bookingData: {
  yachtId: string;
  yachtName: string;
  startDate: string;
  endDate: string;
  nights: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  guests: number;
  specialRequests?: string;
  totalPrice?: number;
  currency: string;
  ipAddress: string;
  language: string;
}): Promise<{ success: boolean; quoteId?: number; quoteNumber?: string; error?: string }> {
  try {
    const response = await fetch(`${TQB_API_URL}/api/external/yacht-quote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": TQB_API_KEY,
      },
      body: JSON.stringify({
        yacht_slug: bookingData.yachtId,
        yacht_name: bookingData.yachtName,
        start_date: bookingData.startDate,
        end_date: bookingData.endDate,
        nights: bookingData.nights,
        customer_name: `${bookingData.firstName} ${bookingData.lastName}`,
        customer_email: bookingData.email,
        customer_phone: bookingData.phone,
        customer_country: bookingData.country,
        guests: bookingData.guests,
        special_requests: bookingData.specialRequests,
        total_price: bookingData.totalPrice,
        currency: bookingData.currency,
        source_url: "https://holidaygulet.com",
        ip_address: bookingData.ipAddress,
        language: bookingData.language,
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log(`[TQB] Quote created: ${result.data.quote_number}`);
      return {
        success: true,
        quoteId: result.data.quote_id,
        quoteNumber: result.data.quote_number,
      };
    } else {
      console.error("[TQB] Failed to create quote:", result.error);
      return { success: false, error: result.error };
    }
  } catch (error) {
    console.error("[TQB] API error:", error);
    return { success: false, error: "TravelQuoteBot API unavailable" };
  }
}

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
    const language = body.language || "en";

    // Prepare booking data
    const bookingData = {
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
      ipAddress,
      language,
    };

    // 1. Save to local MySQL database (backup)
    const submission = await db.createBookingSubmission({
      ...bookingData,
      status: "pending",
      userAgent,
    });

    // 2. Send to TravelQuoteBot for management
    const tqbResult = await sendToTravelQuoteBot(bookingData);
    if (tqbResult.success) {
      console.log(`[API] Booking ${submission.id} synced to TQB as ${tqbResult.quoteNumber}`);
    } else {
      // Log error but don't fail the request - local save succeeded
      console.error(`[API] Booking ${submission.id} failed to sync to TQB:`, tqbResult.error);
    }

    // Send email notifications (non-blocking)
    sendBookingNotificationToAdmin({
      firstName: bookingData.firstName,
      lastName: bookingData.lastName,
      email: bookingData.email,
      phone: bookingData.phone,
      yachtName: bookingData.yachtName,
      startDate: bookingData.startDate,
      endDate: bookingData.endDate,
      guests: bookingData.guests,
      specialRequests: bookingData.specialRequests,
      totalPrice: bookingData.totalPrice,
      currency: bookingData.currency,
    }).catch(err => console.error("[API] Failed to send admin notification:", err));

    sendBookingConfirmationToCustomer({
      firstName: bookingData.firstName,
      lastName: bookingData.lastName,
      email: bookingData.email,
      yachtName: bookingData.yachtName,
      startDate: bookingData.startDate,
      endDate: bookingData.endDate,
      guests: bookingData.guests,
      totalPrice: bookingData.totalPrice,
      currency: bookingData.currency,
      language: bookingData.language,
    }).catch(err => console.error("[API] Failed to send customer confirmation:", err));

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
