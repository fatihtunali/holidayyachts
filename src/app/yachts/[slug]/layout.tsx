import type { Metadata } from "next";
import { getYachtBySlug, getAllYachts } from "@/data/yachts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const yacht = getYachtBySlug(slug);

  if (!yacht) {
    return {
      title: "Yacht Not Found",
    };
  }

  return {
    title: `${yacht.name} | ${yacht.length}m Gulet Charter`,
    description: `Charter ${yacht.name}, a luxurious ${yacht.length}m gulet with ${yacht.cabins} cabins for ${yacht.guests} guests. ${yacht.shortDescription} Professional crew, all-inclusive. From €${yacht.pricePerDay?.aprilMay || yacht.pricePerWeek?.low || 0}${yacht.pricePerDay ? '/day' : '/week'}.`,
    keywords: [
      yacht.name.toLowerCase(),
      `${yacht.length}m gulet`,
      `${yacht.cabins} cabin yacht`,
      `${yacht.guests} guest boat`,
      "yacht charter turkey",
      "gulet rental fethiye",
    ],
    openGraph: {
      title: `${yacht.name} | Luxury Gulet Charter Turkey`,
      description: yacht.shortDescription,
      images: [
        {
          url: yacht.thumbnail,
          width: 1200,
          height: 630,
          alt: yacht.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${yacht.name} | Holiday Yacht Turkey`,
      description: yacht.shortDescription,
      images: [yacht.thumbnail],
    },
  };
}

export async function generateStaticParams() {
  const yachts = getAllYachts();
  return yachts.map((yacht) => ({
    slug: yacht.slug,
  }));
}

export default function YachtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
