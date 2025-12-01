// Database abstraction layer
// Currently uses in-memory storage, can be swapped for real database

import type {
  ContactSubmission,
  BookingSubmission,
  NewsletterSubscription,
  DatabaseAdapter,
} from "@/types/database";

// Generate unique IDs
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

// ============================================
// In-Memory Storage (Replace with real DB)
// ============================================

// These arrays simulate database tables
// In production, replace with actual database queries
const contactSubmissions: ContactSubmission[] = [];
const bookingSubmissions: BookingSubmission[] = [];
const newsletterSubscriptions: NewsletterSubscription[] = [];

// ============================================
// Database Adapter Implementation
// ============================================

export const db: DatabaseAdapter = {
  // Contact Submissions
  async createContactSubmission(data) {
    const submission: ContactSubmission = {
      ...data,
      id: generateId(),
      status: "new",
      createdAt: new Date(),
    };
    contactSubmissions.push(submission);

    // TODO: When you add a real database, replace with:
    // return await prisma.contactSubmission.create({ data: submission });
    // or
    // return await db.insert(contactSubmissions).values(submission).returning();

    console.log("[DB] Contact submission saved:", submission.id);
    return submission;
  },

  async getContactSubmissions(options = {}) {
    let results = [...contactSubmissions];

    if (options.status) {
      results = results.filter((s) => s.status === options.status);
    }

    results.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    if (options.limit) {
      results = results.slice(0, options.limit);
    }

    return results;
  },

  async updateContactSubmission(id, data) {
    const index = contactSubmissions.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new Error("Contact submission not found");
    }

    contactSubmissions[index] = {
      ...contactSubmissions[index],
      ...data,
      updatedAt: new Date(),
    };

    return contactSubmissions[index];
  },

  // Booking Submissions
  async createBookingSubmission(data) {
    const submission: BookingSubmission = {
      ...data,
      id: generateId(),
      status: "pending",
      createdAt: new Date(),
    };
    bookingSubmissions.push(submission);

    console.log("[DB] Booking submission saved:", submission.id);
    return submission;
  },

  async getBookingSubmissions(options = {}) {
    let results = [...bookingSubmissions];

    if (options.status) {
      results = results.filter((s) => s.status === options.status);
    }

    results.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    if (options.limit) {
      results = results.slice(0, options.limit);
    }

    return results;
  },

  async updateBookingSubmission(id, data) {
    const index = bookingSubmissions.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new Error("Booking submission not found");
    }

    bookingSubmissions[index] = {
      ...bookingSubmissions[index],
      ...data,
      updatedAt: new Date(),
    };

    return bookingSubmissions[index];
  },

  // Newsletter Subscriptions
  async createNewsletterSubscription(data) {
    // Check if already subscribed
    const existing = newsletterSubscriptions.find((s) => s.email === data.email);
    if (existing) {
      if (existing.isActive) {
        throw new Error("Email already subscribed");
      }
      // Reactivate subscription
      existing.isActive = true;
      existing.unsubscribedAt = undefined;
      return existing;
    }

    const subscription: NewsletterSubscription = {
      ...data,
      id: generateId(),
      subscribedAt: new Date(),
      isActive: true,
    };
    newsletterSubscriptions.push(subscription);

    console.log("[DB] Newsletter subscription saved:", subscription.email);
    return subscription;
  },

  async getNewsletterSubscriptions(options = {}) {
    let results = [...newsletterSubscriptions];

    if (options.isActive !== undefined) {
      results = results.filter((s) => s.isActive === options.isActive);
    }

    return results;
  },

  async unsubscribeNewsletter(email) {
    const subscription = newsletterSubscriptions.find((s) => s.email === email);
    if (!subscription) {
      return false;
    }

    subscription.isActive = false;
    subscription.unsubscribedAt = new Date();
    return true;
  },
};

// Export for use in API routes
export default db;
