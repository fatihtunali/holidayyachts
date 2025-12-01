import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Charter | Check Availability",
  description:
    "Book your luxury gulet charter in Turkey. Check real-time availability, select your yacht, choose dates and itinerary. Instant confirmation. Secure booking with Holiday Yacht.",
  keywords: [
    "book yacht charter turkey",
    "gulet availability",
    "reserve blue cruise",
    "yacht booking fethiye",
    "charter boat online",
  ],
  openGraph: {
    title: "Book Your Charter | Holiday Yacht Turkey",
    description:
      "Check availability and book your dream sailing holiday in Turkey.",
    images: ["/assets/images/og-image.jpg"],
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
