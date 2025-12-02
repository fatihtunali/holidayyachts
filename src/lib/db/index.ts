// Database abstraction layer - MySQL implementation
import mysql from "mysql2/promise";
import type {
  ContactSubmission,
  BookingSubmission,
  NewsletterSubscription,
  DatabaseAdapter,
} from "@/types/database";

// MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || "134.209.137.11",
  user: process.env.DB_USER || "holidaygulet",
  password: process.env.DB_PASSWORD || "Sk235672.-Yt",
  database: process.env.DB_NAME || "holidaygulet",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ============================================
// Database Adapter Implementation (MySQL)
// ============================================

export const db: DatabaseAdapter = {
  // Contact Submissions
  async createContactSubmission(data) {
    const [result] = await pool.execute(
      `INSERT INTO contacts (name, email, phone, subject, yacht, message, status, ip_address, user_agent, language)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.name,
        data.email,
        data.phone || null,
        data.subject,
        data.yacht || null,
        data.message,
        data.status || "new",
        data.ipAddress || null,
        data.userAgent || null,
        data.language || "en",
      ]
    );

    const insertId = (result as mysql.ResultSetHeader).insertId;
    console.log("[DB] Contact submission saved:", insertId);

    return {
      ...data,
      id: insertId.toString(),
      status: data.status || "new",
      createdAt: new Date(),
    } as ContactSubmission;
  },

  async getContactSubmissions(options = {}) {
    let query = "SELECT * FROM contacts";
    const params: (string | number)[] = [];

    if (options.status) {
      query += " WHERE status = ?";
      params.push(options.status);
    }

    query += " ORDER BY created_at DESC";

    if (options.limit) {
      query += " LIMIT ?";
      params.push(options.limit);
    }

    const [rows] = await pool.execute(query, params);
    return (rows as mysql.RowDataPacket[]).map((row) => ({
      id: row.id.toString(),
      name: row.name,
      email: row.email,
      phone: row.phone,
      subject: row.subject,
      yacht: row.yacht,
      message: row.message,
      status: row.status,
      ipAddress: row.ip_address,
      userAgent: row.user_agent,
      language: row.language,
      createdAt: new Date(row.created_at),
      updatedAt: row.updated_at ? new Date(row.updated_at) : undefined,
    })) as ContactSubmission[];
  },

  async updateContactSubmission(id, data) {
    const updates: string[] = [];
    const params: (string | number | null)[] = [];

    if (data.status !== undefined) {
      updates.push("status = ?");
      params.push(data.status);
    }

    if (updates.length === 0) {
      throw new Error("No fields to update");
    }

    params.push(parseInt(id));

    await pool.execute(
      `UPDATE contacts SET ${updates.join(", ")} WHERE id = ?`,
      params
    );

    const [rows] = await pool.execute("SELECT * FROM contacts WHERE id = ?", [
      parseInt(id),
    ]);
    const row = (rows as mysql.RowDataPacket[])[0];

    if (!row) {
      throw new Error("Contact submission not found");
    }

    return {
      id: row.id.toString(),
      name: row.name,
      email: row.email,
      phone: row.phone,
      subject: row.subject,
      yacht: row.yacht,
      message: row.message,
      status: row.status,
      ipAddress: row.ip_address,
      userAgent: row.user_agent,
      language: row.language,
      createdAt: new Date(row.created_at),
      updatedAt: row.updated_at ? new Date(row.updated_at) : undefined,
    } as ContactSubmission;
  },

  // Booking Submissions
  async createBookingSubmission(data) {
    const [result] = await pool.execute(
      `INSERT INTO bookings (yacht_id, yacht_name, start_date, end_date, nights, first_name, last_name, email, phone, country, guests, special_requests, total_price, currency, status, ip_address, user_agent, language)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.yachtId,
        data.yachtName,
        data.startDate,
        data.endDate,
        data.nights,
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.country,
        data.guests,
        data.specialRequests || null,
        data.totalPrice || null,
        data.currency || "EUR",
        data.status || "pending",
        data.ipAddress || null,
        data.userAgent || null,
        data.language || "en",
      ]
    );

    const insertId = (result as mysql.ResultSetHeader).insertId;
    console.log("[DB] Booking submission saved:", insertId);

    return {
      ...data,
      id: insertId.toString(),
      status: data.status || "pending",
      createdAt: new Date(),
    } as BookingSubmission;
  },

  async getBookingSubmissions(options = {}) {
    let query = "SELECT * FROM bookings";
    const params: (string | number)[] = [];

    if (options.status) {
      query += " WHERE status = ?";
      params.push(options.status);
    }

    query += " ORDER BY created_at DESC";

    if (options.limit) {
      query += " LIMIT ?";
      params.push(options.limit);
    }

    const [rows] = await pool.execute(query, params);
    return (rows as mysql.RowDataPacket[]).map((row) => ({
      id: row.id.toString(),
      yachtId: row.yacht_id,
      yachtName: row.yacht_name,
      startDate: row.start_date,
      endDate: row.end_date,
      nights: row.nights,
      firstName: row.first_name,
      lastName: row.last_name,
      email: row.email,
      phone: row.phone,
      country: row.country,
      guests: row.guests,
      specialRequests: row.special_requests,
      totalPrice: row.total_price ? parseFloat(row.total_price) : undefined,
      currency: row.currency,
      status: row.status,
      ipAddress: row.ip_address,
      userAgent: row.user_agent,
      language: row.language,
      createdAt: new Date(row.created_at),
      updatedAt: row.updated_at ? new Date(row.updated_at) : undefined,
    })) as BookingSubmission[];
  },

  async updateBookingSubmission(id, data) {
    const updates: string[] = [];
    const params: (string | number | null)[] = [];

    if (data.status !== undefined) {
      updates.push("status = ?");
      params.push(data.status);
    }

    if (updates.length === 0) {
      throw new Error("No fields to update");
    }

    params.push(parseInt(id));

    await pool.execute(
      `UPDATE bookings SET ${updates.join(", ")} WHERE id = ?`,
      params
    );

    const [rows] = await pool.execute("SELECT * FROM bookings WHERE id = ?", [
      parseInt(id),
    ]);
    const row = (rows as mysql.RowDataPacket[])[0];

    if (!row) {
      throw new Error("Booking submission not found");
    }

    return {
      id: row.id.toString(),
      yachtId: row.yacht_id,
      yachtName: row.yacht_name,
      startDate: row.start_date,
      endDate: row.end_date,
      nights: row.nights,
      firstName: row.first_name,
      lastName: row.last_name,
      email: row.email,
      phone: row.phone,
      country: row.country,
      guests: row.guests,
      specialRequests: row.special_requests,
      totalPrice: row.total_price ? parseFloat(row.total_price) : undefined,
      currency: row.currency,
      status: row.status,
      ipAddress: row.ip_address,
      userAgent: row.user_agent,
      language: row.language,
      createdAt: new Date(row.created_at),
      updatedAt: row.updated_at ? new Date(row.updated_at) : undefined,
    } as BookingSubmission;
  },

  // Newsletter Subscriptions
  async createNewsletterSubscription(data) {
    // Check if already subscribed
    const [existing] = await pool.execute(
      "SELECT * FROM newsletter_subscriptions WHERE email = ?",
      [data.email]
    );

    const existingRows = existing as mysql.RowDataPacket[];
    if (existingRows.length > 0) {
      const row = existingRows[0];
      if (row.is_active) {
        throw new Error("Email already subscribed");
      }
      // Reactivate subscription
      await pool.execute(
        "UPDATE newsletter_subscriptions SET is_active = TRUE, unsubscribed_at = NULL WHERE email = ?",
        [data.email]
      );
      return {
        id: row.id.toString(),
        email: row.email,
        language: row.language,
        isActive: true,
        ipAddress: row.ip_address,
        source: row.source,
        subscribedAt: new Date(row.subscribed_at),
      } as NewsletterSubscription;
    }

    const [result] = await pool.execute(
      `INSERT INTO newsletter_subscriptions (email, language, is_active, ip_address, source)
       VALUES (?, ?, ?, ?, ?)`,
      [
        data.email,
        data.language || "en",
        data.isActive !== false,
        data.ipAddress || null,
        data.source || "website",
      ]
    );

    const insertId = (result as mysql.ResultSetHeader).insertId;
    console.log("[DB] Newsletter subscription saved:", data.email);

    return {
      ...data,
      id: insertId.toString(),
      isActive: data.isActive !== false,
      subscribedAt: new Date(),
    } as NewsletterSubscription;
  },

  async getNewsletterSubscriptions(options = {}) {
    let query = "SELECT * FROM newsletter_subscriptions";
    const params: (boolean | number)[] = [];

    if (options.isActive !== undefined) {
      query += " WHERE is_active = ?";
      params.push(options.isActive);
    }

    query += " ORDER BY subscribed_at DESC";

    const [rows] = await pool.execute(query, params);
    return (rows as mysql.RowDataPacket[]).map((row) => ({
      id: row.id.toString(),
      email: row.email,
      language: row.language,
      isActive: Boolean(row.is_active),
      ipAddress: row.ip_address,
      source: row.source,
      subscribedAt: new Date(row.subscribed_at),
      unsubscribedAt: row.unsubscribed_at
        ? new Date(row.unsubscribed_at)
        : undefined,
    })) as NewsletterSubscription[];
  },

  async unsubscribeNewsletter(email) {
    const [result] = await pool.execute(
      "UPDATE newsletter_subscriptions SET is_active = FALSE, unsubscribed_at = NOW() WHERE email = ? AND is_active = TRUE",
      [email]
    );

    const affectedRows = (result as mysql.ResultSetHeader).affectedRows;
    return affectedRows > 0;
  },
};

// Export for use in API routes
export default db;
