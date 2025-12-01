import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book Your Yacht Charter",
  description:
    "Contact Holiday Yacht for your luxury gulet charter in Turkey. Get a free quote, check availability, or ask questions. Phone: +90 252 614 4757. Based in Fethiye Marina. We speak English, Turkish & German.",
  keywords: [
    "contact yacht charter turkey",
    "book gulet fethiye",
    "yacht rental inquiry",
    "blue cruise booking",
    "fethiye marina yacht",
  ],
  openGraph: {
    title: "Contact Holiday Yacht | Get Your Free Quote",
    description:
      "Reach out for availability, pricing, and custom itinerary requests.",
    images: ["/assets/images/og-image.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
