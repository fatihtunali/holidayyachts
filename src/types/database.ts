// Database types for form submissions
// These types define the structure for storing form data

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  yacht?: string;
  message: string;
  status: "new" | "read" | "replied" | "archived";
  createdAt: Date;
  updatedAt?: Date;
  // Metadata
  ipAddress?: string;
  userAgent?: string;
  language?: string;
}

export interface BookingSubmission {
  id?: string;
  // Yacht info
  yachtId: string;
  yachtName: string;
  // Dates
  startDate: string;
  endDate: string;
  nights: number;
  // Guest info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  guests: number;
  // Booking details
  specialRequests?: string;
  totalPrice?: number;
  currency: string;
  // Status tracking
  status: "pending" | "confirmed" | "cancelled" | "completed";
  createdAt: Date;
  updatedAt?: Date;
  // Metadata
  ipAddress?: string;
  userAgent?: string;
  language?: string;
}

export interface NewsletterSubscription {
  id?: string;
  email: string;
  language?: string;
  subscribedAt: Date;
  unsubscribedAt?: Date;
  isActive: boolean;
  // Metadata
  ipAddress?: string;
  source?: string; // where they subscribed from (footer, popup, etc.)
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// For database adapter pattern (swap databases easily)
export interface DatabaseAdapter {
  // Contact submissions
  createContactSubmission(data: Omit<ContactSubmission, "id" | "createdAt">): Promise<ContactSubmission>;
  getContactSubmissions(options?: { status?: string; limit?: number }): Promise<ContactSubmission[]>;
  updateContactSubmission(id: string, data: Partial<ContactSubmission>): Promise<ContactSubmission>;

  // Booking submissions
  createBookingSubmission(data: Omit<BookingSubmission, "id" | "createdAt">): Promise<BookingSubmission>;
  getBookingSubmissions(options?: { status?: string; limit?: number }): Promise<BookingSubmission[]>;
  updateBookingSubmission(id: string, data: Partial<BookingSubmission>): Promise<BookingSubmission>;

  // Newsletter subscriptions
  createNewsletterSubscription(data: Omit<NewsletterSubscription, "id" | "subscribedAt">): Promise<NewsletterSubscription>;
  getNewsletterSubscriptions(options?: { isActive?: boolean }): Promise<NewsletterSubscription[]>;
  unsubscribeNewsletter(email: string): Promise<boolean>;
}
