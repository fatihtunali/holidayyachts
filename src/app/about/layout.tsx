import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Holiday Yacht Since 1989",
  description:
    "Holiday Yacht has been providing luxury gulet charters in Turkey since 1989. Family-owned business with 35+ years of experience. Professional crews, safety certified, award-winning service along the Turquoise Coast.",
  keywords: [
    "holiday yacht company",
    "turkish yacht charter company",
    "fethiye yacht rental",
    "family yacht business turkey",
    "blue cruise operator",
  ],
  openGraph: {
    title: "About Holiday Yacht | 35+ Years of Excellence",
    description:
      "Family-owned luxury yacht charter company serving the Turkish coast since 1989.",
    images: ["/assets/images/about/about-h4.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
