import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Gulet Fleet | Yacht Charter Turkey",
  description:
    "Explore our fleet of 4 premium gulets for charter in Turkey. From intimate 8-guest yachts to spacious 20-guest vessels. Air-conditioned cabins, professional crew, gourmet cuisine. Book your blue cruise today!",
  keywords: [
    "gulet fleet turkey",
    "yacht charter fethiye",
    "luxury boat rental turkey",
    "blue cruise boats",
    "gulet hire bodrum",
    "private yacht turkey",
  ],
  openGraph: {
    title: "Luxury Gulet Fleet | Holiday Yacht Turkey",
    description:
      "Explore our fleet of premium gulets for charter along Turkey's Turquoise Coast.",
    images: ["/assets/images/yachts/holiday10/01.jpg"],
  },
};

export default function YachtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
