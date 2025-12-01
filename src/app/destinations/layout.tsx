import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sailing Destinations | Turquoise Coast Harbors | Holiday Yacht",
  description:
    "Discover Turkey's stunning sailing destinations including Fethiye, Gocek, Marmaris, Bodrum, and Kekova. Explore the Turquoise Coast for your dream blue cruise.",
  keywords: [
    "Turkey sailing destinations",
    "Turquoise Coast harbors",
    "Fethiye yacht charter",
    "Gocek marina",
    "Marmaris sailing",
    "Bodrum yacht",
    "Kekova sunken city",
    "Turkish Riviera destinations",
    "Mediterranean sailing spots",
    "Blue cruise destinations",
  ],
  openGraph: {
    title: "Sailing Destinations | Turquoise Coast Harbors | Holiday Yacht",
    description:
      "Discover Turkey's stunning sailing destinations including Fethiye, Gocek, Marmaris, Bodrum, and Kekova for your dream blue cruise.",
    type: "website",
    locale: "en_US",
    siteName: "Holiday Yacht",
    images: [
      {
        url: "/assets/images/itineraries/fethiye.jpg",
        width: 1200,
        height: 630,
        alt: "Turkish Coast Sailing Destinations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sailing Destinations | Turquoise Coast Harbors | Holiday Yacht",
    description:
      "Discover Turkey's stunning sailing destinations for your dream blue cruise.",
  },
  alternates: {
    languages: {
      "en-US": "/destinations",
      "tr-TR": "/destinations",
      "de-DE": "/destinations",
    },
  },
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
