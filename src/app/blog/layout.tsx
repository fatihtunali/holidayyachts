import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Blue Cruise Tips & Travel Guides | Holiday Yacht",
  description:
    "Expert advice, destination guides, and insider tips for your perfect yacht charter experience along Turkey's Turquoise Coast. Read our latest articles on blue cruises.",
  keywords: [
    "blue cruise blog",
    "yacht charter tips",
    "Turkey travel guide",
    "Turquoise Coast blog",
    "sailing tips Turkey",
    "gulet cruise advice",
    "Turkish coast guide",
    "yacht vacation tips",
    "Mediterranean sailing blog",
    "Fethiye travel tips",
  ],
  openGraph: {
    title: "Blog | Blue Cruise Tips & Travel Guides | Holiday Yacht",
    description:
      "Expert advice, destination guides, and insider tips for your perfect yacht charter experience along Turkey's Turquoise Coast.",
    type: "website",
    locale: "en_US",
    siteName: "Holiday Yacht",
    images: [
      {
        url: "/assets/images/hero/holiday10-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Holiday Yacht Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Blue Cruise Tips & Travel Guides | Holiday Yacht",
    description:
      "Expert advice, destination guides, and insider tips for your perfect yacht charter experience.",
  },
  alternates: {
    languages: {
      "en-US": "/blog",
      "tr-TR": "/blog",
      "de-DE": "/blog",
    },
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
