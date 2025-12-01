import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blue Cruise Itineraries | Sailing Routes Turkey",
  description:
    "Discover our curated blue cruise itineraries along Turkey's Turquoise Coast. Fethiye to Olympos, Bodrum Peninsula, Greek Islands routes. 4-14 day sailing adventures with hidden coves, ancient ruins & pristine beaches.",
  keywords: [
    "blue cruise itinerary",
    "fethiye sailing route",
    "bodrum cruise route",
    "12 islands tour",
    "greek islands yacht",
    "turkey sailing routes",
    "gocek bay cruise",
  ],
  openGraph: {
    title: "Blue Cruise Itineraries | Holiday Yacht Turkey",
    description:
      "Explore our carefully crafted sailing routes along Turkey's stunning coastline.",
    images: ["/assets/images/itineraries/fethiye.jpg"],
  },
};

export default function ItinerariesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
