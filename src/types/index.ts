import type { Language } from "@/contexts/LanguageContext";

// Yacht Types
export interface YachtTranslation {
  description: string;
  shortDescription: string;
}

export interface Yacht {
  id: string;
  slug: string;
  name: string;
  type: 'gulet' | 'motor-yacht' | 'sailing-yacht';
  length: number; // meters
  beam: number; // meters
  cabins: number;
  guests: number;
  crew: number;
  year: number;
  renovated?: number;
  description: string;
  shortDescription: string;
  translations?: Record<Language, YachtTranslation>;
  features: YachtFeature[];
  amenities: string[];
  images: YachtImage[];
  thumbnail: string;
  pricePerWeek: {
    low: number;
    mid: number;
    high: number;
  };
  currency: 'EUR' | 'USD' | 'TRY';
  available: boolean;
}

export interface TranslatedYacht extends Omit<Yacht, 'translations'> {
  description: string;
  shortDescription: string;
}

export interface YachtFeature {
  icon: string;
  label: string;
  value: string;
}

export interface YachtImage {
  id: string;
  src: string;
  alt: string;
  category: 'exterior' | 'interior' | 'cabin' | 'deck' | 'amenities';
}

// Itinerary Types
export interface Itinerary {
  id: string;
  slug: string;
  name: string;
  duration: number; // days
  startPort: string;
  endPort: string;
  description: string;
  highlights: string[];
  dailySchedule: DaySchedule[];
  thumbnail: string;
  images: string[];
  recommendedYachts: string[]; // yacht IDs
}

export interface DaySchedule {
  day: number;
  title: string;
  description: string;
  port?: string;
  activities: string[];
}

// Booking & Availability Types
export interface Availability {
  yachtId: string;
  date: string; // ISO date string
  status: 'available' | 'booked' | 'maintenance' | 'option';
  bookingId?: string;
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface BookingRequest {
  id?: string;
  yachtId: string;
  yachtName: string;
  startDate: string;
  endDate: string;
  guests: number;
  customerInfo: CustomerInfo;
  itineraryId?: string;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  totalPrice?: number;
  currency?: string;
  createdAt?: string;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  address?: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  yachtInterest?: string;
  preferredDates?: string;
}

// TravelQuoteBot Integration Types
export interface TQBQuoteRequest {
  operator_id: string;
  yacht_id: string;
  start_date: string;
  end_date: string;
  guests: number;
  customer_name: string;
  customer_email: string;
  special_requests?: string;
}

export interface TQBQuoteResponse {
  success: boolean;
  quote_id?: string;
  estimated_price?: number;
  currency?: string;
  message?: string;
  availability?: boolean;
}

export interface TQBAvailabilityRequest {
  yacht_id: string;
  start_date: string;
  end_date: string;
}

export interface TQBAvailabilityResponse {
  available: boolean;
  blocked_dates?: string[];
  next_available?: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// SEO Types
export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}
