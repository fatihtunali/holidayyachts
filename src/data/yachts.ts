import type { Yacht } from "@/types";

export const yachts: Yacht[] = [
  {
    id: "holiday10",
    slug: "ms-holiday-10",
    name: "M/S Holiday 10",
    type: "gulet",
    length: 32,
    beam: 7.5,
    cabins: 6,
    guests: 12,
    crew: 4,
    year: 2018,
    renovated: 2023,
    description: `M/S Holiday 10 is a luxurious 32-meter gulet offering the perfect blend of traditional Turkish craftsmanship and modern comfort. With 6 elegantly appointed cabins, she comfortably accommodates up to 12 guests for an unforgettable blue cruise experience along the stunning Turkish coastline.

Built in 2018 and renovated in 2023, Holiday 10 features spacious sun decks, a stylish saloon, and world-class amenities. Her experienced crew of 4 ensures impeccable service throughout your voyage, from gourmet Mediterranean cuisine to personalized excursions.

Whether you're seeking a romantic getaway, a family adventure, or an exclusive group charter, M/S Holiday 10 delivers an exceptional sailing experience with breathtaking views of the Aegean and Mediterranean seas.`,
    shortDescription: "Luxury 32m gulet with 6 cabins, perfect for groups of up to 12 guests seeking the ultimate blue cruise experience.",
    features: [
      { icon: "ruler", label: "Length", value: "32m" },
      { icon: "users", label: "Guests", value: "12" },
      { icon: "bed", label: "Cabins", value: "6" },
      { icon: "users-cog", label: "Crew", value: "4" },
      { icon: "calendar", label: "Built", value: "2018" },
      { icon: "wrench", label: "Renovated", value: "2023" },
    ],
    amenities: [
      "Air Conditioning",
      "Generator",
      "WiFi",
      "TV/DVD",
      "Sound System",
      "Water Maker",
      "Ice Maker",
      "Snorkeling Equipment",
      "Fishing Equipment",
      "Kayak",
      "SUP Board",
      "Sun Mattresses",
      "Deck Shower",
      "BBQ",
    ],
    images: [
      { id: "h10-1", src: "/assets/images/yachts/holiday10/01.jpg", alt: "M/S Holiday 10 Exterior", category: "exterior" },
      { id: "h10-2", src: "/assets/images/yachts/holiday10/02.jpg", alt: "M/S Holiday 10 Deck", category: "deck" },
      { id: "h10-3", src: "/assets/images/yachts/holiday10/03.jpg", alt: "M/S Holiday 10 Interior", category: "interior" },
      { id: "h10-4", src: "/assets/images/yachts/holiday10/04.jpg", alt: "M/S Holiday 10 Cabin", category: "cabin" },
      { id: "h10-5", src: "/assets/images/yachts/holiday10/05.jpg", alt: "M/S Holiday 10 Dining", category: "interior" },
      { id: "h10-6", src: "/assets/images/yachts/holiday10/06.jpg", alt: "M/S Holiday 10 Saloon", category: "interior" },
    ],
    thumbnail: "/assets/images/yachts/holiday10/01.jpg",
    pricePerWeek: {
      low: 14000,
      mid: 18000,
      high: 24000,
    },
    currency: "EUR",
    available: true,
  },
  {
    id: "holiday5",
    slug: "ms-holiday-5",
    name: "M/S Holiday 5",
    type: "gulet",
    length: 28,
    beam: 6.8,
    cabins: 5,
    guests: 10,
    crew: 3,
    year: 2015,
    renovated: 2022,
    description: `M/S Holiday 5 is a beautifully crafted 28-meter gulet that embodies the spirit of traditional Turkish sailing. With 5 comfortable cabins accommodating up to 10 guests, she offers an intimate and personalized cruising experience.

Renovated in 2022, Holiday 5 combines classic wooden yacht aesthetics with contemporary amenities. Her warm teak interiors, spacious deck areas, and attentive crew of 3 create the perfect setting for exploring hidden coves and picturesque harbors along the Turquoise Coast.

Ideal for families and small groups, M/S Holiday 5 provides the authentic blue cruise experience with all the comforts of home.`,
    shortDescription: "Classic 28m gulet with 5 cabins, ideal for intimate cruises with up to 10 guests.",
    features: [
      { icon: "ruler", label: "Length", value: "28m" },
      { icon: "users", label: "Guests", value: "10" },
      { icon: "bed", label: "Cabins", value: "5" },
      { icon: "users-cog", label: "Crew", value: "3" },
      { icon: "calendar", label: "Built", value: "2015" },
      { icon: "wrench", label: "Renovated", value: "2022" },
    ],
    amenities: [
      "Air Conditioning",
      "Generator",
      "WiFi",
      "TV/DVD",
      "Sound System",
      "Snorkeling Equipment",
      "Fishing Equipment",
      "Kayak",
      "Sun Mattresses",
      "Deck Shower",
      "BBQ",
    ],
    images: [
      { id: "h5-1", src: "/assets/images/yachts/holiday5/01.jpg", alt: "M/S Holiday 5 Exterior", category: "exterior" },
      { id: "h5-2", src: "/assets/images/yachts/holiday5/02.jpg", alt: "M/S Holiday 5 Deck", category: "deck" },
      { id: "h5-3", src: "/assets/images/yachts/holiday5/03.jpg", alt: "M/S Holiday 5 Interior", category: "interior" },
      { id: "h5-4", src: "/assets/images/yachts/holiday5/04.jpg", alt: "M/S Holiday 5 Cabin", category: "cabin" },
      { id: "h5-5", src: "/assets/images/yachts/holiday5/05.jpg", alt: "M/S Holiday 5 Dining", category: "interior" },
      { id: "h5-6", src: "/assets/images/yachts/holiday5/06.jpg", alt: "M/S Holiday 5 Saloon", category: "interior" },
    ],
    thumbnail: "/assets/images/yachts/holiday5/01.jpg",
    pricePerWeek: {
      low: 11000,
      mid: 14000,
      high: 19000,
    },
    currency: "EUR",
    available: true,
  },
  {
    id: "holiday6",
    slug: "ms-holiday-6",
    name: "M/S Holiday 6",
    type: "gulet",
    length: 24,
    beam: 6.2,
    cabins: 4,
    guests: 8,
    crew: 3,
    year: 2019,
    description: `M/S Holiday 6 is a modern 24-meter gulet designed for comfort and style. Her 4 well-appointed cabins comfortably host up to 8 guests, making her perfect for smaller groups and families seeking a premium sailing experience.

Built in 2019 with attention to every detail, Holiday 6 features contemporary interiors, efficient deck layouts, and state-of-the-art navigation equipment. Her dedicated crew of 3 provides personalized service and expert local knowledge.

Discover the magic of the Turkish Riviera aboard M/S Holiday 6, where modern luxury meets timeless seafaring tradition.`,
    shortDescription: "Modern 24m gulet with 4 cabins, perfect for families and small groups of up to 8 guests.",
    features: [
      { icon: "ruler", label: "Length", value: "24m" },
      { icon: "users", label: "Guests", value: "8" },
      { icon: "bed", label: "Cabins", value: "4" },
      { icon: "users-cog", label: "Crew", value: "3" },
      { icon: "calendar", label: "Built", value: "2019" },
    ],
    amenities: [
      "Air Conditioning",
      "Generator",
      "WiFi",
      "TV",
      "Sound System",
      "Snorkeling Equipment",
      "Kayak",
      "Sun Mattresses",
      "Deck Shower",
      "BBQ",
    ],
    images: [
      { id: "h6-1", src: "/assets/images/yachts/holiday6/01.webp", alt: "M/S Holiday 6 Exterior", category: "exterior" },
      { id: "h6-2", src: "/assets/images/yachts/holiday6/02.webp", alt: "M/S Holiday 6 Deck", category: "deck" },
      { id: "h6-3", src: "/assets/images/yachts/holiday6/03.webp", alt: "M/S Holiday 6 Interior", category: "interior" },
      { id: "h6-4", src: "/assets/images/yachts/holiday6/04.webp", alt: "M/S Holiday 6 Cabin", category: "cabin" },
      { id: "h6-5", src: "/assets/images/yachts/holiday6/05.webp", alt: "M/S Holiday 6 Dining", category: "interior" },
      { id: "h6-6", src: "/assets/images/yachts/holiday6/06.webp", alt: "M/S Holiday 6 Saloon", category: "interior" },
    ],
    thumbnail: "/assets/images/yachts/holiday6/01.webp",
    pricePerWeek: {
      low: 9000,
      mid: 12000,
      high: 16000,
    },
    currency: "EUR",
    available: true,
  },
  {
    id: "holidaym",
    slug: "ms-holiday-m",
    name: "M/S Holiday M",
    type: "gulet",
    length: 26,
    beam: 6.5,
    cabins: 4,
    guests: 8,
    crew: 3,
    year: 2017,
    renovated: 2024,
    description: `M/S Holiday M is an elegant 26-meter gulet that combines traditional charm with modern refinement. Recently renovated in 2024, she offers 4 spacious cabins for up to 8 guests, each designed with comfort and privacy in mind.

Holiday M stands out with her exceptional attention to detail, from handcrafted wood finishes to premium bedding and designer bathroom fittings. Her professional crew of 3 takes pride in delivering an unparalleled charter experience.

Set sail on M/S Holiday M and discover why she has become a favorite among discerning travelers seeking the perfect balance of adventure and luxury.`,
    shortDescription: "Elegant 26m gulet with 4 cabins, recently renovated in 2024 for the ultimate comfort.",
    features: [
      { icon: "ruler", label: "Length", value: "26m" },
      { icon: "users", label: "Guests", value: "8" },
      { icon: "bed", label: "Cabins", value: "4" },
      { icon: "users-cog", label: "Crew", value: "3" },
      { icon: "calendar", label: "Built", value: "2017" },
      { icon: "wrench", label: "Renovated", value: "2024" },
    ],
    amenities: [
      "Air Conditioning",
      "Generator",
      "WiFi",
      "Smart TV",
      "Premium Sound System",
      "Water Maker",
      "Snorkeling Equipment",
      "Fishing Equipment",
      "Kayak",
      "SUP Board",
      "Sun Mattresses",
      "Deck Shower",
      "BBQ",
      "Espresso Machine",
    ],
    images: [
      { id: "hm-1", src: "/assets/images/yachts/holidayM/01.webp", alt: "M/S Holiday M Exterior", category: "exterior" },
      { id: "hm-2", src: "/assets/images/yachts/holidayM/02.webp", alt: "M/S Holiday M Deck", category: "deck" },
      { id: "hm-3", src: "/assets/images/yachts/holidayM/03.webp", alt: "M/S Holiday M Interior", category: "interior" },
      { id: "hm-4", src: "/assets/images/yachts/holidayM/07.jpg", alt: "M/S Holiday M Cabin", category: "cabin" },
      { id: "hm-5", src: "/assets/images/yachts/holidayM/08.jpg", alt: "M/S Holiday M Dining", category: "interior" },
      { id: "hm-6", src: "/assets/images/yachts/holidayM/09.jpg", alt: "M/S Holiday M Saloon", category: "interior" },
    ],
    thumbnail: "/assets/images/yachts/holidayM/01.webp",
    pricePerWeek: {
      low: 10000,
      mid: 13000,
      high: 17000,
    },
    currency: "EUR",
    available: true,
  },
];

export function getYachtBySlug(slug: string): Yacht | undefined {
  return yachts.find((yacht) => yacht.slug === slug);
}

export function getYachtById(id: string): Yacht | undefined {
  return yachts.find((yacht) => yacht.id === id);
}

export function getAllYachts(): Yacht[] {
  return yachts;
}

export function getAvailableYachts(): Yacht[] {
  return yachts.filter((yacht) => yacht.available);
}
