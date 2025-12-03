import type { Yacht, TranslatedYacht } from "@/types";
import type { Language } from "@/contexts/LanguageContext";

export const yachts: Yacht[] = [
  {
    id: "holiday10",
    slug: "ms-holiday-10",
    name: "M/S Holiday 10",
    type: "gulet",
    length: 39,
    beam: 8.1,
    cabins: 10,
    guests: 22,
    crew: 5,
    year: 2005,
    renovated: 2017,
    engine: "2 x 460 Hp IVECO AIFO",
    cruisingSpeed: "12 knots",
    fuelCapacity: 5000,
    waterCapacity: 10000,
    generator: "2 x 42 KVA",
    description: `M/S Holiday 10 is a magnificent 39-meter ketch-rigged gulet, the crown jewel of our fleet. With 10 elegantly appointed cabins (6 double, 2 twin, 2 triple), she comfortably accommodates up to 22 guests for an unforgettable blue cruise experience along the stunning Turkish coastline.

Built in 2005 and renovated in 2017 with a partial renovation planned for 2025, Holiday 10 features spacious sun decks, a stylish saloon, and world-class amenities including satellite TV, ice machine, and air conditioning throughout. Her experienced crew of 5-6 ensures impeccable service throughout your voyage, from gourmet Mediterranean cuisine to personalized excursions.

Whether you're seeking a romantic getaway, a family reunion, or an exclusive group charter, M/S Holiday 10 delivers an exceptional sailing experience with breathtaking views of the Aegean and Mediterranean seas.`,
    shortDescription: "Magnificent 39m gulet with 10 cabins, perfect for large groups of up to 22 guests seeking the ultimate blue cruise experience.",
    translations: {
      en: {
        description: `M/S Holiday 10 is a magnificent 39-meter ketch-rigged gulet, the crown jewel of our fleet. With 10 elegantly appointed cabins (6 double, 2 twin, 2 triple), she comfortably accommodates up to 22 guests for an unforgettable blue cruise experience along the stunning Turkish coastline.

Built in 2005 and renovated in 2017 with a partial renovation planned for 2025, Holiday 10 features spacious sun decks, a stylish saloon, and world-class amenities including satellite TV, ice machine, and air conditioning throughout. Her experienced crew of 5-6 ensures impeccable service throughout your voyage, from gourmet Mediterranean cuisine to personalized excursions.

Whether you're seeking a romantic getaway, a family reunion, or an exclusive group charter, M/S Holiday 10 delivers an exceptional sailing experience with breathtaking views of the Aegean and Mediterranean seas.`,
        shortDescription: "Magnificent 39m gulet with 10 cabins, perfect for large groups of up to 22 guests seeking the ultimate blue cruise experience.",
      },
      fr: {
        description: `Le M/S Holiday 10 est un magnifique gulet à gréement ketch de 39 mètres, le joyau de notre flotte. Avec 10 cabines élégamment aménagées (6 doubles, 2 twin, 2 triples), il accueille confortablement jusqu'à 22 passagers pour une expérience de croisière bleue inoubliable le long de la magnifique côte turque.

Construit en 2005 et rénové en 2017 avec une rénovation partielle prévue pour 2025, Holiday 10 dispose de vastes ponts ensoleillés, d'un salon élégant et d'équipements de classe mondiale incluant TV satellite, machine à glace et climatisation dans tout le bateau. Son équipage expérimenté de 5-6 personnes assure un service impeccable tout au long de votre voyage, de la cuisine méditerranéenne gastronomique aux excursions personnalisées.

Que vous recherchiez une escapade romantique, une réunion de famille ou une location de groupe exclusive, le M/S Holiday 10 offre une expérience de navigation exceptionnelle avec des vues à couper le souffle sur la mer Égée et la Méditerranée.`,
        shortDescription: "Magnifique gulet de 39m avec 10 cabines, parfait pour les grands groupes jusqu'à 22 passagers.",
      },
      de: {
        description: `Die M/S Holiday 10 ist eine prächtige 39-Meter-Ketsch-getakelte Gulet, das Kronjuwel unserer Flotte. Mit 10 elegant eingerichteten Kabinen (6 Doppel-, 2 Twin-, 2 Dreibettkabinen) bietet sie bequem Platz für bis zu 22 Gäste für ein unvergessliches Blaue-Reise-Erlebnis entlang der atemberaubenden türkischen Küste.

2005 erbaut und 2017 renoviert mit einer Teilrenovierung für 2025 geplant, verfügt die Holiday 10 über geräumige Sonnendecks, einen stilvollen Salon und erstklassige Annehmlichkeiten wie Satelliten-TV, Eismaschine und durchgehende Klimaanlage. Ihre erfahrene 5-6-köpfige Crew sorgt für tadellosen Service während Ihrer gesamten Reise, von mediterraner Gourmetküche bis hin zu personalisierten Ausflügen.

Ob Sie einen romantischen Urlaub, ein Familientreffen oder einen exklusiven Gruppencharter suchen - die M/S Holiday 10 bietet ein außergewöhnliches Segelerlebnis mit atemberaubenden Ausblicken auf die Ägäis und das Mittelmeer.`,
        shortDescription: "Prächtige 39m Gulet mit 10 Kabinen, perfekt für große Gruppen bis zu 22 Gäste.",
      },
    },
    features: [
      { icon: "ruler", label: "Length", value: "39m" },
      { icon: "users", label: "Guests", value: "22" },
      { icon: "bed", label: "Cabins", value: "10" },
      { icon: "users-cog", label: "Crew", value: "5-6" },
      { icon: "calendar", label: "Built", value: "2005" },
      { icon: "wrench", label: "Renovated", value: "2017" },
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
      { id: "h10-1", src: "/assets/images/yachts/holiday10/01.jpg", alt: "M/S Holiday 10 Aerial View", category: "exterior" },
      { id: "h10-2", src: "/assets/images/yachts/holiday10/02.jpg", alt: "M/S Holiday 10 Bay View", category: "exterior" },
      { id: "h10-3", src: "/assets/images/yachts/holiday10/03.jpg", alt: "M/S Holiday 10 Foredeck", category: "deck" },
      { id: "h10-4", src: "/assets/images/yachts/holiday10/04.jpg", alt: "M/S Holiday 10 Aft Deck", category: "deck" },
      { id: "h10-5", src: "/assets/images/yachts/holiday10/05.jpg", alt: "M/S Holiday 10 Saloon", category: "interior" },
      { id: "h10-6", src: "/assets/images/yachts/holiday10/06.jpg", alt: "M/S Holiday 10 Cabin", category: "cabin" },
      { id: "h10-7", src: "/assets/images/yachts/holiday10/07.jpg", alt: "M/S Holiday 10 Sun Deck", category: "deck" },
    ],
    thumbnail: "/assets/images/yachts/holiday10.jpg",
    pricePerDay: {
      aprilMay: 3500,
      juneSeptember: 4000,
      julyAugust: 4500,
      october: 3500,
    },
    minDays: 7,
    inclusions: [
      "Fuel",
      "Boat rental, equipment, and crew",
      "Clean bed linen, beach towels, and bath towels",
      "Port taxes and permits",
      "Turkish transit log",
      "Fresh water",
      "Boat insurance",
    ],
    exclusions: [
      "20% VAT",
      "Food & beverages (including for the crew)",
      "Airport transfers (available at extra charge)",
      "Motorized water sports equipment",
      "Göcek mooring and anchorage buoy fees",
    ],
    currency: "EUR",
    available: true,
  },
  {
    id: "holiday5",
    slug: "ms-holiday-5",
    name: "M/S Holiday 5",
    type: "gulet",
    length: 31,
    beam: 8,
    cabins: 10,
    guests: 20,
    crew: 4,
    year: 1995,
    renovated: 2025,
    engine: "2 x 315 Hp Scania Diesel",
    cruisingSpeed: "11 knots",
    fuelCapacity: 6000,
    waterCapacity: 9000,
    generator: "42 KVA",
    description: `M/S Holiday 5 is an impressive 31-meter motor-sailer with a rich heritage in the Holiday Yachts fleet. With 10 spacious cabins (8 double and 2 twin), she accommodates up to 20 guests, making her ideal for large groups, family reunions, and corporate events.

Built in 1995, refurbished in 2015 and completely refitted in 2025, Holiday 5 features modern interiors, expansive deck areas with multiple dining and lounging spaces, and a comprehensive range of water toys including a Zodiac boat with 25 HP motor. Her professional crew of 4 delivers exceptional service and authentic Turkish hospitality.

Experience the ultimate blue cruise adventure aboard M/S Holiday 5, where generous space meets refined comfort along the stunning Turquoise Coast.`,
    shortDescription: "Classic 31m motor-sailer with 10 cabins, perfect for large groups of up to 20 guests.",
    translations: {
      en: {
        description: `M/S Holiday 5 is an impressive 31-meter motor-sailer with a rich heritage in the Holiday Yachts fleet. With 10 spacious cabins (8 double and 2 twin), she accommodates up to 20 guests, making her ideal for large groups, family reunions, and corporate events.

Built in 1995, refurbished in 2015 and completely refitted in 2025, Holiday 5 features modern interiors, expansive deck areas with multiple dining and lounging spaces, and a comprehensive range of water toys including a Zodiac boat with 25 HP motor. Her professional crew of 4 delivers exceptional service and authentic Turkish hospitality.

Experience the ultimate blue cruise adventure aboard M/S Holiday 5, where generous space meets refined comfort along the stunning Turquoise Coast.`,
        shortDescription: "Classic 31m motor-sailer with 10 cabins, perfect for large groups of up to 20 guests.",
      },
      fr: {
        description: `Le M/S Holiday 5 est un impressionnant voilier à moteur de 31 mètres avec un riche patrimoine dans la flotte Holiday Yachts. Avec 10 cabines spacieuses (8 doubles et 2 twin), il accueille jusqu'à 20 passagers, ce qui le rend idéal pour les grands groupes, les réunions de famille et les événements d'entreprise.

Construit en 1995, rénové en 2015 et entièrement refait en 2025, Holiday 5 dispose d'intérieurs modernes, de vastes espaces de pont avec plusieurs zones de restauration et de détente, et d'une gamme complète de jouets nautiques incluant un Zodiac avec moteur 25 CV. Son équipage professionnel de 4 personnes offre un service exceptionnel et une hospitalité turque authentique.

Vivez l'aventure ultime de la croisière bleue à bord du M/S Holiday 5, où l'espace généreux rencontre le confort raffiné le long de la magnifique Côte Turquoise.`,
        shortDescription: "Voilier à moteur classique de 31m avec 10 cabines, parfait pour les grands groupes jusqu'à 20 passagers.",
      },
      de: {
        description: `Die M/S Holiday 5 ist ein beeindruckender 31-Meter-Motorsegler mit reichem Erbe in der Holiday Yachts Flotte. Mit 10 geräumigen Kabinen (8 Doppel- und 2 Zweibettkabinen) bietet sie Platz für bis zu 20 Gäste und ist damit ideal für große Gruppen, Familientreffen und Firmenveranstaltungen.

1995 erbaut, 2015 renoviert und 2025 komplett überholt, verfügt die Holiday 5 über moderne Innenräume, großzügige Deckbereiche mit mehreren Ess- und Loungebereichen sowie eine umfassende Auswahl an Wasserspielzeug einschließlich eines Zodiac-Boots mit 25-PS-Motor. Ihre professionelle 4-köpfige Crew bietet außergewöhnlichen Service und authentische türkische Gastfreundschaft.

Erleben Sie das ultimative Blaue-Reise-Abenteuer an Bord der M/S Holiday 5, wo großzügiger Raum auf raffinierten Komfort entlang der atemberaubenden Türkisküste trifft.`,
        shortDescription: "Klassischer 31m Motorsegler mit 10 Kabinen, perfekt für große Gruppen bis zu 20 Gäste.",
      },
    },
    features: [
      { icon: "ruler", label: "Length", value: "31m" },
      { icon: "users", label: "Guests", value: "20" },
      { icon: "bed", label: "Cabins", value: "10" },
      { icon: "users-cog", label: "Crew", value: "4" },
      { icon: "calendar", label: "Built", value: "1995" },
      { icon: "wrench", label: "Renovated", value: "2025" },
    ],
    amenities: [
      "Air Conditioning",
      "Generator",
      "WiFi",
      "TV",
      "Sound System",
      "Snorkeling Equipment",
      "2 Canoes",
      "2 Paddleboards",
      "Sun Mattresses",
      "Deck Shower",
      "BBQ",
      "Multiple Dining Areas",
    ],
    images: [
      { id: "h5-1", src: "/assets/images/yachts/holiday5/01.jpg", alt: "M/S Holiday 5 Exterior", category: "exterior" },
      { id: "h5-2", src: "/assets/images/yachts/holiday5/02.jpg", alt: "M/S Holiday 5 Foredeck", category: "deck" },
      { id: "h5-3", src: "/assets/images/yachts/holiday5/03.jpg", alt: "M/S Holiday 5 Dining", category: "deck" },
      { id: "h5-4", src: "/assets/images/yachts/holiday5/04.jpg", alt: "M/S Holiday 5 Aft Deck", category: "deck" },
      { id: "h5-5", src: "/assets/images/yachts/holiday5/05.jpg", alt: "M/S Holiday 5 Bow View", category: "exterior" },
    ],
    thumbnail: "/assets/images/yachts/holiday5.jpg",
    pricePerDay: {
      aprilMay: 2250,
      juneSeptember: 2750,
      julyAugust: 3250,
      october: 2250,
    },
    minDays: 7,
    inclusions: [
      "Fuel",
      "Boat rental, equipment, and crew",
      "Clean bed linen, beach towels, and bath towels",
      "Port taxes and permits",
      "Turkish transit log",
      "Fresh water",
      "Boat insurance",
    ],
    exclusions: [
      "20% VAT",
      "Food & beverages (including for the crew)",
      "Airport transfers (available at extra charge)",
      "Motorized water sports equipment",
      "Göcek mooring and anchorage buoy fees",
    ],
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
    translations: {
      en: {
        description: `M/S Holiday 6 is a modern 24-meter gulet designed for comfort and style. Her 4 well-appointed cabins comfortably host up to 8 guests, making her perfect for smaller groups and families seeking a premium sailing experience.

Built in 2019 with attention to every detail, Holiday 6 features contemporary interiors, efficient deck layouts, and state-of-the-art navigation equipment. Her dedicated crew of 3 provides personalized service and expert local knowledge.

Discover the magic of the Turkish Riviera aboard M/S Holiday 6, where modern luxury meets timeless seafaring tradition.`,
        shortDescription: "Modern 24m gulet with 4 cabins, perfect for families and small groups of up to 8 guests.",
      },
      fr: {
        description: `M/S Holiday 6, konfor ve stil için tasarlanmış modern bir 24 metrelik gulettir. 4 iyi donatılmış kamarası ile 8 misafire kadar rahatça ev sahipliği yaparak premium bir yelken deneyimi arayan küçük gruplar ve aileler için mükemmeldir.

2019 yılında her detaya dikkat edilerek inşa edilmiş olan Holiday 6, çağdaş iç mekanlar, verimli güverte düzeni ve son teknoloji navigasyon ekipmanları sunar. 3 kişilik özel mürettebatı kişiselleştirilmiş hizmet ve uzman yerel bilgi sağlar.

Modern lüksün zamansız denizcilik geleneğiyle buluştuğu M/S Holiday 6'da Türkiye Rivierası'nın büyüsünü keşfedin.`,
        shortDescription: "4 kamaralı modern 24m gulet, 8 kişiye kadar aileler ve küçük gruplar için mükemmel.",
      },
      de: {
        description: `Die M/S Holiday 6 ist eine moderne 24-Meter-Gulet, die für Komfort und Stil konzipiert wurde. Ihre 4 gut ausgestatteten Kabinen bieten bequem Platz für bis zu 8 Gäste und sind damit perfekt für kleinere Gruppen und Familien, die ein erstklassiges Segelerlebnis suchen.

Die 2019 mit Liebe zum Detail erbaute Holiday 6 verfügt über zeitgenössische Innenräume, effiziente Deck-Layouts und modernste Navigationsausrüstung. Ihre engagierte 3-köpfige Crew bietet personalisierten Service und lokales Expertenwissen.

Entdecken Sie die Magie der türkischen Riviera an Bord der M/S Holiday 6, wo moderner Luxus auf zeitlose Seefahrertradition trifft.`,
        shortDescription: "Moderne 24m Gulet mit 4 Kabinen, perfekt für Familien und kleine Gruppen bis zu 8 Gäste.",
      },
    },
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
    length: 15,
    beam: 5,
    cabins: 3,
    guests: 12,
    crew: 2,
    year: 2011,
    renovated: 2014,
    description: `M/S Holiday M is a charming 15-meter gulet perfect for daily cruises and intimate group excursions. With 3 comfortable cabins and capacity for up to 12 guests, she offers an ideal way to explore the stunning Turkish coastline on day trips.

Built in 2011 and refurbished in 2014, Holiday M features air conditioning, a generator for comfort, and an inviting outdoor dining area with sun loungers for relaxation. Her dedicated crew of 2 ensures personalized service throughout your voyage.

Experience the beauty of the Turquoise Coast aboard M/S Holiday M - perfect for daily adventures, special celebrations, or simply enjoying the crystal-clear waters of the Aegean and Mediterranean seas.`,
    shortDescription: "Charming 15m gulet with 3 cabins, perfect for daily cruises with up to 12 guests.",
    translations: {
      en: {
        description: `M/S Holiday M is a charming 15-meter gulet perfect for daily cruises and intimate group excursions. With 3 comfortable cabins and capacity for up to 12 guests, she offers an ideal way to explore the stunning Turkish coastline on day trips.

Built in 2011 and refurbished in 2014, Holiday M features air conditioning, a generator for comfort, and an inviting outdoor dining area with sun loungers for relaxation. Her dedicated crew of 2 ensures personalized service throughout your voyage.

Experience the beauty of the Turquoise Coast aboard M/S Holiday M - perfect for daily adventures, special celebrations, or simply enjoying the crystal-clear waters of the Aegean and Mediterranean seas.`,
        shortDescription: "Charming 15m gulet with 3 cabins, perfect for daily cruises with up to 12 guests.",
      },
      fr: {
        description: `M/S Holiday M est un charmant gulet de 15 mètres parfait pour les croisières quotidiennes et les excursions en petit groupe. Avec 3 cabines confortables et une capacité de 12 passagers, il offre un moyen idéal d'explorer la magnifique côte turque lors d'excursions à la journée.

Construit en 2011 et rénové en 2014, Holiday M dispose de la climatisation, d'un générateur pour le confort, et d'un espace repas extérieur accueillant avec des chaises longues pour la détente. Son équipage dévoué de 2 personnes assure un service personnalisé tout au long de votre voyage.

Découvrez la beauté de la Côte Turquoise à bord du M/S Holiday M - parfait pour les aventures quotidiennes, les célébrations spéciales, ou simplement profiter des eaux cristallines de la mer Égée et de la Méditerranée.`,
        shortDescription: "Charmant gulet de 15m avec 3 cabines, parfait pour les croisières quotidiennes jusqu'à 12 passagers.",
      },
      de: {
        description: `Die M/S Holiday M ist eine charmante 15-Meter-Gulet, perfekt für Tageskreuzfahrten und intime Gruppenausflüge. Mit 3 komfortablen Kabinen und einer Kapazität von bis zu 12 Gästen bietet sie eine ideale Möglichkeit, die atemberaubende türkische Küste bei Tagesausflügen zu erkunden.

2011 erbaut und 2014 renoviert, verfügt die Holiday M über Klimaanlage, einen Generator für Komfort und einen einladenden Außenessbereich mit Sonnenliegen zur Entspannung. Ihre engagierte 2-köpfige Crew sorgt für persönlichen Service während Ihrer gesamten Reise.

Erleben Sie die Schönheit der Türkisküste an Bord der M/S Holiday M - perfekt für tägliche Abenteuer, besondere Feiern oder einfach um das kristallklare Wasser der Ägäis und des Mittelmeers zu genießen.`,
        shortDescription: "Charmante 15m Gulet mit 3 Kabinen, perfekt für Tageskreuzfahrten mit bis zu 12 Gästen.",
      },
    },
    features: [
      { icon: "ruler", label: "Length", value: "15m" },
      { icon: "users", label: "Guests", value: "12" },
      { icon: "bed", label: "Cabins", value: "3" },
      { icon: "users-cog", label: "Crew", value: "2" },
      { icon: "calendar", label: "Built", value: "2011" },
      { icon: "wrench", label: "Renovated", value: "2014" },
    ],
    amenities: [
      "Air Conditioning",
      "Generator",
      "Outdoor Dining Area",
      "Sun Loungers",
      "Shower",
      "2 Toilets",
      "Fishing Equipment",
      "Zodiac Boat",
      "Snorkeling Equipment",
      "Deck Shower",
      "Music System",
      "Freezer & Refrigerator",
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
    pricePerDay: {
      aprilMay: 800,
      juneSeptember: 1000,
      julyAugust: 1200,
      october: 800,
    },
    minDays: 1,
    inclusions: [
      "Fuel",
      "Boat rental, equipment, and crew",
      "Clean towels",
      "Port taxes and permits",
      "Fresh water",
      "Boat insurance",
    ],
    exclusions: [
      "20% VAT",
      "Food & beverages",
      "Airport transfers (available at extra charge)",
    ],
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

export function getTranslatedYacht(
  yacht: Yacht,
  language: Language
): TranslatedYacht {
  const translation = yacht.translations?.[language] || yacht.translations?.en;
  const { translations, ...rest } = yacht;

  if (translation) {
    return {
      ...rest,
      description: translation.description,
      shortDescription: translation.shortDescription,
    };
  }

  return rest as TranslatedYacht;
}
