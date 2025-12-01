export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Holiday Yacht",
    alternateName: "Holiday Yachts Turkey",
    url: "https://www.holidayyachts.com",
    logo: "https://www.holidayyachts.com/assets/images/logo.png",
    description:
      "Premium luxury gulet charter company in Turkey offering blue cruise experiences along the Turquoise Coast since 1989.",
    foundingDate: "1989",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fethiye Marina",
      addressLocality: "Fethiye",
      addressRegion: "Mugla",
      postalCode: "48300",
      addressCountry: "TR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-252-614-4757",
      contactType: "customer service",
      availableLanguage: ["English", "Turkish", "German"],
    },
    sameAs: [
      "https://www.facebook.com/holidayyacht",
      "https://www.instagram.com/holidayyacht",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Holiday Yacht",
    image: "https://www.holidayyachts.com/assets/images/og-image.jpg",
    "@id": "https://www.holidayyachts.com",
    url: "https://www.holidayyachts.com",
    telephone: "+90-252-614-4757",
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fethiye Marina",
      addressLocality: "Fethiye",
      addressRegion: "Mugla",
      postalCode: "48300",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.6222,
      longitude: 29.1094,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Holiday Yacht",
    url: "https://www.holidayyachts.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.holidayyachts.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface YachtSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  priceFrom: number;
  currency: string;
  guests: number;
  cabins: number;
  length: number;
}

export function YachtSchema({
  name,
  description,
  image,
  url,
  priceFrom,
  currency,
  guests,
  cabins,
  length,
}: YachtSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    image: image,
    url: url,
    brand: {
      "@type": "Brand",
      name: "Holiday Yacht",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: currency,
      price: priceFrom,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Holiday Yacht",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Michael S.",
        },
        reviewBody: "Amazing experience! The crew was exceptional and the yacht was beautiful.",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Sarah J.",
        },
        reviewBody: "Perfect holiday. The food was incredible and the coastline breathtaking.",
      },
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Guests",
        value: guests,
      },
      {
        "@type": "PropertyValue",
        name: "Cabins",
        value: cabins,
      },
      {
        "@type": "PropertyValue",
        name: "Length",
        value: `${length}m`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
