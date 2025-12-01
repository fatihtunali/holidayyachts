import type { Yacht, TranslatedYacht } from "@/types";
import type { Language } from "@/contexts/LanguageContext";

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
    translations: {
      en: {
        description: `M/S Holiday 10 is a luxurious 32-meter gulet offering the perfect blend of traditional Turkish craftsmanship and modern comfort. With 6 elegantly appointed cabins, she comfortably accommodates up to 12 guests for an unforgettable blue cruise experience along the stunning Turkish coastline.

Built in 2018 and renovated in 2023, Holiday 10 features spacious sun decks, a stylish saloon, and world-class amenities. Her experienced crew of 4 ensures impeccable service throughout your voyage, from gourmet Mediterranean cuisine to personalized excursions.

Whether you're seeking a romantic getaway, a family adventure, or an exclusive group charter, M/S Holiday 10 delivers an exceptional sailing experience with breathtaking views of the Aegean and Mediterranean seas.`,
        shortDescription: "Luxury 32m gulet with 6 cabins, perfect for groups of up to 12 guests seeking the ultimate blue cruise experience.",
      },
      tr: {
        description: `M/S Holiday 10, geleneksel Türk işçiliği ile modern konforu mükemmel bir şekilde harmanlayan lüks bir 32 metrelik gulettir. 6 zarif kamarası ile muhteşem Türkiye kıyıları boyunca unutulmaz bir mavi yolculuk deneyimi için 12 misafire kadar rahatça ev sahipliği yapar.

2018 yılında inşa edilmiş ve 2023 yılında yenilenmiş olan Holiday 10, geniş güneşlenme güverteleri, şık bir salon ve dünya standartlarında olanaklar sunar. 4 kişilik deneyimli mürettebatı, gurme Akdeniz mutfağından kişiselleştirilmiş gezilere kadar yolculuğunuz boyunca kusursuz hizmet sağlar.

İster romantik bir kaçamak, ister aile macerası, ister özel bir grup kiralama arıyor olun, M/S Holiday 10 Ege ve Akdeniz'in nefes kesici manzaraları eşliğinde olağanüstü bir yelken deneyimi sunar.`,
        shortDescription: "6 kamaralı 32m lüks gulet, 12 kişiye kadar gruplar için mükemmel mavi yolculuk deneyimi.",
      },
      de: {
        description: `Die M/S Holiday 10 ist eine luxuriöse 32-Meter-Gulet, die die perfekte Mischung aus traditioneller türkischer Handwerkskunst und modernem Komfort bietet. Mit 6 elegant eingerichteten Kabinen bietet sie bequem Platz für bis zu 12 Gäste für ein unvergessliches Blaue-Reise-Erlebnis entlang der atemberaubenden türkischen Küste.

Die 2018 erbaute und 2023 renovierte Holiday 10 verfügt über geräumige Sonnendecks, einen stilvollen Salon und erstklassige Annehmlichkeiten. Ihre erfahrene 4-köpfige Crew sorgt für tadellosen Service während Ihrer gesamten Reise, von der mediterranen Gourmetküche bis hin zu personalisierten Ausflügen.

Ob Sie einen romantischen Urlaub, ein Familienabenteuer oder einen exklusiven Gruppencharter suchen - die M/S Holiday 10 bietet ein außergewöhnliches Segelerlebnis mit atemberaubenden Ausblicken auf die Ägäis und das Mittelmeer.`,
        shortDescription: "Luxuriöse 32m Gulet mit 6 Kabinen, perfekt für Gruppen bis zu 12 Gäste für das ultimative Blaue-Reise-Erlebnis.",
      },
    },
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
      { id: "h10-1", src: "/assets/images/yachts/holiday10/01.jpg", alt: "M/S Holiday 10 Aerial View", category: "exterior" },
      { id: "h10-2", src: "/assets/images/yachts/holiday10/02.jpg", alt: "M/S Holiday 10 Bay View", category: "exterior" },
      { id: "h10-3", src: "/assets/images/yachts/holiday10/03.jpg", alt: "M/S Holiday 10 Foredeck", category: "deck" },
      { id: "h10-4", src: "/assets/images/yachts/holiday10/04.jpg", alt: "M/S Holiday 10 Aft Deck", category: "deck" },
      { id: "h10-5", src: "/assets/images/yachts/holiday10/05.jpg", alt: "M/S Holiday 10 Saloon", category: "interior" },
      { id: "h10-6", src: "/assets/images/yachts/holiday10/06.jpg", alt: "M/S Holiday 10 Cabin", category: "cabin" },
      { id: "h10-7", src: "/assets/images/yachts/holiday10/07.jpg", alt: "M/S Holiday 10 Sun Deck", category: "deck" },
    ],
    thumbnail: "/assets/images/yachts/holiday10.jpg",
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
    length: 31,
    beam: 8,
    cabins: 10,
    guests: 20,
    crew: 4,
    year: 2020,
    renovated: 2025,
    description: `M/S Holiday 5 is an impressive 31-meter motor-sailer, the flagship of the Holiday Yachts fleet. With 10 spacious cabins (8 double and 2 twin), she accommodates up to 20 guests, making her ideal for large groups, family reunions, and corporate events.

Completely refitted in 2025, Holiday 5 features modern interiors, expansive deck areas with multiple dining and lounging spaces, and a comprehensive range of water toys including canoes and paddleboards. Her professional crew of 4 delivers exceptional service and authentic Turkish hospitality.

Experience the ultimate blue cruise adventure aboard M/S Holiday 5, where generous space meets refined comfort along the stunning Turquoise Coast.`,
    shortDescription: "Flagship 31m motor-sailer with 10 cabins, perfect for large groups of up to 20 guests.",
    translations: {
      en: {
        description: `M/S Holiday 5 is an impressive 31-meter motor-sailer, the flagship of the Holiday Yachts fleet. With 10 spacious cabins (8 double and 2 twin), she accommodates up to 20 guests, making her ideal for large groups, family reunions, and corporate events.

Completely refitted in 2025, Holiday 5 features modern interiors, expansive deck areas with multiple dining and lounging spaces, and a comprehensive range of water toys including canoes and paddleboards. Her professional crew of 4 delivers exceptional service and authentic Turkish hospitality.

Experience the ultimate blue cruise adventure aboard M/S Holiday 5, where generous space meets refined comfort along the stunning Turquoise Coast.`,
        shortDescription: "Flagship 31m motor-sailer with 10 cabins, perfect for large groups of up to 20 guests.",
      },
      tr: {
        description: `M/S Holiday 5, Holiday Yachts filosunun amiral gemisi olan etkileyici 31 metrelik bir motor yelkenlidir. 10 geniş kamarası (8 çift kişilik ve 2 twin) ile 20 misafire kadar ev sahipliği yaparak büyük gruplar, aile buluşmaları ve kurumsal etkinlikler için idealdir.

2025 yılında tamamen yenilenmiş olan Holiday 5, modern iç mekanlar, çoklu yemek ve dinlenme alanlarına sahip geniş güverte alanları ve kano ve kürek tahtaları dahil kapsamlı su oyuncakları sunar. 4 kişilik profesyonel mürettebatı olağanüstü hizmet ve otantik Türk misafirperverliği sunar.

Cömert alanın zarif konforla buluştuğu muhteşem Turkuaz Kıyısı boyunca M/S Holiday 5'te nihai mavi yolculuk macerasını yaşayın.`,
        shortDescription: "10 kamaralı 31m amiral gemi motor yelkenli, 20 kişiye kadar büyük gruplar için mükemmel.",
      },
      de: {
        description: `Die M/S Holiday 5 ist ein beeindruckender 31-Meter-Motorsegler, das Flaggschiff der Holiday Yachts Flotte. Mit 10 geräumigen Kabinen (8 Doppel- und 2 Zweibettkabinen) bietet sie Platz für bis zu 20 Gäste und ist damit ideal für große Gruppen, Familientreffen und Firmenveranstaltungen.

Die 2025 komplett renovierte Holiday 5 verfügt über moderne Innenräume, großzügige Deckbereiche mit mehreren Ess- und Loungebereichen sowie eine umfassende Auswahl an Wasserspielzeug einschließlich Kanus und Paddleboards. Ihre professionelle 4-köpfige Crew bietet außergewöhnlichen Service und authentische türkische Gastfreundschaft.

Erleben Sie das ultimative Blaue-Reise-Abenteuer an Bord der M/S Holiday 5, wo großzügiger Raum auf raffinierten Komfort entlang der atemberaubenden Türkisküste trifft.`,
        shortDescription: "Flaggschiff 31m Motorsegler mit 10 Kabinen, perfekt für große Gruppen bis zu 20 Gäste.",
      },
    },
    features: [
      { icon: "ruler", label: "Length", value: "31m" },
      { icon: "users", label: "Guests", value: "20" },
      { icon: "bed", label: "Cabins", value: "10" },
      { icon: "users-cog", label: "Crew", value: "4" },
      { icon: "calendar", label: "Built", value: "2020" },
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
    pricePerWeek: {
      low: 18000,
      mid: 24000,
      high: 32000,
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
    translations: {
      en: {
        description: `M/S Holiday 6 is a modern 24-meter gulet designed for comfort and style. Her 4 well-appointed cabins comfortably host up to 8 guests, making her perfect for smaller groups and families seeking a premium sailing experience.

Built in 2019 with attention to every detail, Holiday 6 features contemporary interiors, efficient deck layouts, and state-of-the-art navigation equipment. Her dedicated crew of 3 provides personalized service and expert local knowledge.

Discover the magic of the Turkish Riviera aboard M/S Holiday 6, where modern luxury meets timeless seafaring tradition.`,
        shortDescription: "Modern 24m gulet with 4 cabins, perfect for families and small groups of up to 8 guests.",
      },
      tr: {
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
    translations: {
      en: {
        description: `M/S Holiday M is an elegant 26-meter gulet that combines traditional charm with modern refinement. Recently renovated in 2024, she offers 4 spacious cabins for up to 8 guests, each designed with comfort and privacy in mind.

Holiday M stands out with her exceptional attention to detail, from handcrafted wood finishes to premium bedding and designer bathroom fittings. Her professional crew of 3 takes pride in delivering an unparalleled charter experience.

Set sail on M/S Holiday M and discover why she has become a favorite among discerning travelers seeking the perfect balance of adventure and luxury.`,
        shortDescription: "Elegant 26m gulet with 4 cabins, recently renovated in 2024 for the ultimate comfort.",
      },
      tr: {
        description: `M/S Holiday M, geleneksel cazibe ile modern inceliği birleştiren zarif bir 26 metrelik gulettir. 2024 yılında yeni yenilenmiş olup, her biri konfor ve mahremiyet düşünülerek tasarlanmış 4 geniş kamarada 8 misafire kadar ev sahipliği yapar.

Holiday M, el işi ahşap kaplamalardan premium yatak takımlarına ve tasarımcı banyo armatürlerine kadar detaylara olağanüstü dikkat ile öne çıkar. 3 kişilik profesyonel mürettebatı eşsiz bir kiralama deneyimi sunmaktan gurur duyar.

M/S Holiday M ile yelken açın ve macera ile lüksün mükemmel dengesini arayan seçici gezginler arasında neden favori olduğunu keşfedin.`,
        shortDescription: "4 kamaralı zarif 26m gulet, nihai konfor için 2024 yılında yeni yenilenmiş.",
      },
      de: {
        description: `Die M/S Holiday M ist eine elegante 26-Meter-Gulet, die traditionellen Charme mit moderner Raffinesse verbindet. Kürzlich 2024 renoviert, bietet sie 4 geräumige Kabinen für bis zu 8 Gäste, jede mit Komfort und Privatsphäre im Sinn gestaltet.

Die Holiday M besticht durch ihre außergewöhnliche Liebe zum Detail, von handgefertigten Holzoberflächen über Premium-Bettwäsche bis hin zu Designer-Badezimmerarmaturen. Ihre professionelle 3-köpfige Crew ist stolz darauf, ein unvergleichliches Charter-Erlebnis zu bieten.

Setzen Sie die Segel auf der M/S Holiday M und entdecken Sie, warum sie zum Favoriten unter anspruchsvollen Reisenden geworden ist, die die perfekte Balance zwischen Abenteuer und Luxus suchen.`,
        shortDescription: "Elegante 26m Gulet mit 4 Kabinen, kürzlich 2024 renoviert für ultimativen Komfort.",
      },
    },
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
