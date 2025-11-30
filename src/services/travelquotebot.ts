/**
 * TravelQuoteBot API Integration Service
 *
 * This service handles all communication with the TravelQuoteBot API
 * for availability checking, quote generation, and booking management.
 */

import type {
  TQBQuoteRequest,
  TQBQuoteResponse,
  TQBAvailabilityRequest,
  TQBAvailabilityResponse,
  BookingRequest,
  ApiResponse,
} from "@/types";

// TravelQuoteBot API Configuration
const TQB_API_BASE_URL = process.env.NEXT_PUBLIC_TQB_API_URL || "https://api.travelquotebot.com";
const TQB_OPERATOR_ID = process.env.TQB_OPERATOR_ID || "holidayyachts";
const TQB_API_KEY = process.env.TQB_API_KEY || "";

class TravelQuoteBotService {
  private baseUrl: string;
  private operatorId: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = TQB_API_BASE_URL;
    this.operatorId = TQB_OPERATOR_ID;
    this.apiKey = TQB_API_KEY;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.apiKey}`,
          "X-Operator-ID": this.operatorId,
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || "API request failed",
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error("TravelQuoteBot API Error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Network error",
      };
    }
  }

  /**
   * Check yacht availability for a date range
   */
  async checkAvailability(
    yachtId: string,
    startDate: string,
    endDate: string
  ): Promise<ApiResponse<TQBAvailabilityResponse>> {
    const payload: TQBAvailabilityRequest = {
      yacht_id: yachtId,
      start_date: startDate,
      end_date: endDate,
    };

    return this.request<TQBAvailabilityResponse>("/tqb-ai/check-availability", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  }

  /**
   * Get blocked dates for a yacht in a specific month/year
   */
  async getBlockedDates(
    yachtId: string,
    year: number,
    month: number
  ): Promise<ApiResponse<string[]>> {
    return this.request<string[]>(
      `/availability/${yachtId}?year=${year}&month=${month}`,
      { method: "GET" }
    );
  }

  /**
   * Request a quote for a charter
   */
  async requestQuote(
    request: TQBQuoteRequest
  ): Promise<ApiResponse<TQBQuoteResponse>> {
    const payload = {
      ...request,
      operator_id: this.operatorId,
    };

    return this.request<TQBQuoteResponse>("/tqb-ai/generate-itinerary", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  }

  /**
   * Submit a booking request
   */
  async submitBooking(
    booking: BookingRequest
  ): Promise<ApiResponse<{ bookingId: string; status: string }>> {
    return this.request("/bookings", {
      method: "POST",
      body: JSON.stringify({
        operator_id: this.operatorId,
        ...booking,
      }),
    });
  }

  /**
   * Get booking status
   */
  async getBookingStatus(
    bookingId: string
  ): Promise<ApiResponse<BookingRequest>> {
    return this.request<BookingRequest>(`/bookings/${bookingId}`, {
      method: "GET",
    });
  }

  /**
   * Cancel a booking
   */
  async cancelBooking(
    bookingId: string,
    reason?: string
  ): Promise<ApiResponse<{ success: boolean }>> {
    return this.request(`/bookings/${bookingId}/cancel`, {
      method: "POST",
      body: JSON.stringify({ reason }),
    });
  }
}

// Export singleton instance
export const travelQuoteBot = new TravelQuoteBotService();

// Export class for testing
export { TravelQuoteBotService };
