import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number,
  currency: string = "EUR",
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatDate(
  date: Date | string,
  locale: string = "en-US"
): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

export function formatDateRange(
  startDate: Date | string,
  endDate: Date | string,
  locale: string = "en-US"
): string {
  const start = typeof startDate === "string" ? new Date(startDate) : startDate;
  const end = typeof endDate === "string" ? new Date(endDate) : endDate;

  const formatter = new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
  });

  const yearFormatter = new Intl.DateTimeFormat(locale, {
    year: "numeric",
  });

  return `${formatter.format(start)} - ${formatter.format(end)}, ${yearFormatter.format(end)}`;
}

export function calculateNights(startDate: Date, endDate: Date): number {
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export function getSeasonType(date: Date): "low" | "mid" | "high" {
  const month = date.getMonth() + 1; // 1-12

  // High season: July, August
  if (month >= 7 && month <= 8) return "high";

  // Mid season: May, June, September, October
  if ((month >= 5 && month <= 6) || (month >= 9 && month <= 10)) return "mid";

  // Low season: November - April
  return "low";
}

export function calculateTotalPrice(
  pricePerWeek: { low: number; mid: number; high: number },
  startDate: Date,
  endDate: Date
): number {
  const nights = calculateNights(startDate, endDate);
  const season = getSeasonType(startDate);
  const weeklyPrice = pricePerWeek[season];
  const dailyPrice = weeklyPrice / 7;

  return Math.round(dailyPrice * nights);
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

export function getImagePath(path: string): string {
  // Ensure path starts with /assets
  if (path.startsWith("/")) return path;
  if (path.startsWith("assets/")) return `/${path}`;
  return `/assets/${path}`;
}
