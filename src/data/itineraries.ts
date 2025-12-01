import { Language } from "@/contexts/LanguageContext";

export interface DaySchedule {
  day: number;
  title: string;
  description: string;
  port?: string;
  activities: string[];
}

export interface ItineraryTranslation {
  name: string;
  description: string;
  highlights: string[];
  dailySchedule: DaySchedule[];
}

export interface Itinerary {
  id: string;
  slug: string;
  duration: number;
  startPort: string;
  endPort: string;
  thumbnail: string;
  images: string[];
  recommendedYachts: string[];
  translations: Record<Language, ItineraryTranslation>;
}

export interface TranslatedItinerary extends Omit<Itinerary, 'translations'>, ItineraryTranslation {}

export const itineraries: Itinerary[] = [
  {
    id: "fethiye-gocek",
    slug: "fethiye-gocek-fethiye",
    duration: 7,
    startPort: "Fethiye",
    endPort: "Fethiye",
    thumbnail: "/assets/images/itineraries/fethiye.jpg",
    images: ["/assets/images/itineraries/fethiye.jpg"],
    recommendedYachts: ["holiday10", "holiday5", "holiday6", "holidaym"],
    translations: {
      en: {
        name: "Fethiye - Gocek - Fethiye",
        description: "Discover the stunning beauty of the Turquoise Coast on this classic 7-day route. From the vibrant harbor of Fethiye to the secluded bays of Gocek, experience crystal-clear waters, ancient ruins, and authentic Turkish hospitality.",
        highlights: [
          "Butterfly Valley - A hidden paradise",
          "Oludeniz Blue Lagoon",
          "12 Islands of Gocek",
          "Ancient city of Kayakoy",
          "St. Nicholas Island",
          "Traditional Turkish villages",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Fethiye Departure",
            port: "Fethiye",
            description: "Board your gulet at Fethiye Harbor. After a welcome drink and safety briefing, we set sail towards Tersane Island.",
            activities: ["Welcome aboard", "Lunch on deck", "Swimming at Tersane Bay", "Overnight at Tersane Island"],
          },
          {
            day: 2,
            title: "Gocek Bays",
            port: "Gocek",
            description: "Cruise through the famous 12 Islands, stopping at secluded bays for swimming and snorkeling.",
            activities: ["Breakfast cruise", "Yassica Islands", "Swimming & snorkeling", "BBQ dinner on deck"],
          },
          {
            day: 3,
            title: "Tomb Bay & Cleopatra's Bath",
            port: "Tomb Bay",
            description: "Visit the mysterious Lycian rock tombs and swim in the therapeutic waters of Cleopatra's Bath.",
            activities: ["Explore Lycian tombs", "Cleopatra's Bath", "Lunch at Tomb Bay", "Sunset sailing"],
          },
          {
            day: 4,
            title: "Butterfly Valley",
            port: "Butterfly Valley",
            description: "Anchor at the breathtaking Butterfly Valley, home to hundreds of butterfly species.",
            activities: ["Hike to waterfall", "Beach time", "Snorkeling", "Overnight at Butterfly Valley"],
          },
          {
            day: 5,
            title: "Oludeniz Blue Lagoon",
            port: "Oludeniz",
            description: "Visit the world-famous Blue Lagoon of Oludeniz with its stunning turquoise waters.",
            activities: ["Blue Lagoon visit", "Optional paragliding", "Beach clubs", "Scenic photography"],
          },
          {
            day: 6,
            title: "Gemiler Island",
            port: "Gemiler",
            description: "Explore the ruins of Byzantine churches on St. Nicholas Island.",
            activities: ["Island exploration", "Historical tour", "Swimming", "Captain's dinner"],
          },
          {
            day: 7,
            title: "Return to Fethiye",
            port: "Fethiye",
            description: "Final morning swim and leisurely return to Fethiye Harbor.",
            activities: ["Farewell breakfast", "Final swim", "Return to Fethiye", "Disembarkation by 10:00"],
          },
        ],
      },
      tr: {
        name: "Fethiye - Göcek - Fethiye",
        description: "Bu klasik 7 günlük rotada Turkuaz Kıyısı'nın muhteşem güzelliğini keşfedin. Fethiye'nin canlı limanından Göcek'in tenha koylarına, kristal berraklığında suları, antik kalıntıları ve otantik Türk misafirperverliğini deneyimleyin.",
        highlights: [
          "Kelebekler Vadisi - Gizli bir cennet",
          "Ölüdeniz Mavi Lagünü",
          "Göcek 12 Adaları",
          "Antik Kayaköy şehri",
          "Gemiler Adası",
          "Geleneksel Türk köyleri",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Fethiye'den Kalkış",
            port: "Fethiye",
            description: "Fethiye Limanı'nda guletinize binin. Hoş geldin içeceği ve güvenlik brifinginden sonra Tersane Adası'na doğru yelken açıyoruz.",
            activities: ["Gemiye hoş geldiniz", "Güvertede öğle yemeği", "Tersane Koyu'nda yüzme", "Tersane Adası'nda geceleme"],
          },
          {
            day: 2,
            title: "Göcek Koyları",
            port: "Göcek",
            description: "Ünlü 12 Adalar arasında seyir yapın, yüzme ve şnorkel için tenha koylarda durun.",
            activities: ["Kahvaltılı seyir", "Yassıca Adaları", "Yüzme ve şnorkel", "Güvertede barbekü akşam yemeği"],
          },
          {
            day: 3,
            title: "Mezar Koyu & Kleopatra Hamamı",
            port: "Mezar Koyu",
            description: "Gizemli Likya kaya mezarlarını ziyaret edin ve Kleopatra Hamamı'nın şifalı sularında yüzün.",
            activities: ["Likya mezarlarını keşfet", "Kleopatra Hamamı", "Mezar Koyu'nda öğle yemeği", "Gün batımı seyri"],
          },
          {
            day: 4,
            title: "Kelebekler Vadisi",
            port: "Kelebekler Vadisi",
            description: "Yüzlerce kelebek türüne ev sahipliği yapan nefes kesici Kelebekler Vadisi'nde demirleyin.",
            activities: ["Şelaleye yürüyüş", "Plaj zamanı", "Şnorkel", "Kelebekler Vadisi'nde geceleme"],
          },
          {
            day: 5,
            title: "Ölüdeniz Mavi Lagünü",
            port: "Ölüdeniz",
            description: "Muhteşem turkuaz sularıyla dünyaca ünlü Ölüdeniz Mavi Lagünü'nü ziyaret edin.",
            activities: ["Mavi Lagün ziyareti", "İsteğe bağlı yamaç paraşütü", "Plaj kulüpleri", "Manzara fotoğrafçılığı"],
          },
          {
            day: 6,
            title: "Gemiler Adası",
            port: "Gemiler",
            description: "Aziz Nikolas Adası'ndaki Bizans kiliselerinin kalıntılarını keşfedin.",
            activities: ["Ada keşfi", "Tarihi tur", "Yüzme", "Kaptan yemeği"],
          },
          {
            day: 7,
            title: "Fethiye'ye Dönüş",
            port: "Fethiye",
            description: "Son sabah yüzmesi ve Fethiye Limanı'na keyifli dönüş.",
            activities: ["Veda kahvaltısı", "Son yüzme", "Fethiye'ye dönüş", "10:00'da gemiden iniş"],
          },
        ],
      },
      de: {
        name: "Fethiye - Göcek - Fethiye",
        description: "Entdecken Sie die atemberaubende Schönheit der Türkisküste auf dieser klassischen 7-tägigen Route. Vom lebhaften Hafen von Fethiye bis zu den abgelegenen Buchten von Göcek erleben Sie kristallklares Wasser, antike Ruinen und authentische türkische Gastfreundschaft.",
        highlights: [
          "Schmetterlingstal - Ein verstecktes Paradies",
          "Ölüdeniz Blaue Lagune",
          "12 Inseln von Göcek",
          "Antike Stadt Kayaköy",
          "St. Nikolaus Insel",
          "Traditionelle türkische Dörfer",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Abfahrt von Fethiye",
            port: "Fethiye",
            description: "Gehen Sie an Bord Ihres Gulets im Hafen von Fethiye. Nach einem Willkommensgetränk und Sicherheitsbriefing setzen wir Segel zur Tersane-Insel.",
            activities: ["Willkommen an Bord", "Mittagessen an Deck", "Schwimmen in der Tersane-Bucht", "Übernachtung auf Tersane-Insel"],
          },
          {
            day: 2,
            title: "Göcek-Buchten",
            port: "Göcek",
            description: "Kreuzfahrt durch die berühmten 12 Inseln, mit Stopps an abgelegenen Buchten zum Schwimmen und Schnorcheln.",
            activities: ["Frühstückskreuzfahrt", "Yassica-Inseln", "Schwimmen & Schnorcheln", "BBQ-Dinner an Deck"],
          },
          {
            day: 3,
            title: "Grabbucht & Kleopatras Bad",
            port: "Grabbucht",
            description: "Besuchen Sie die geheimnisvollen lykischen Felsengräber und schwimmen Sie im therapeutischen Wasser von Kleopatras Bad.",
            activities: ["Lykische Gräber erkunden", "Kleopatras Bad", "Mittagessen in der Grabbucht", "Sonnenuntergangssegeln"],
          },
          {
            day: 4,
            title: "Schmetterlingstal",
            port: "Schmetterlingstal",
            description: "Ankern Sie im atemberaubenden Schmetterlingstal, Heimat von Hunderten von Schmetterlingsarten.",
            activities: ["Wanderung zum Wasserfall", "Strandzeit", "Schnorcheln", "Übernachtung im Schmetterlingstal"],
          },
          {
            day: 5,
            title: "Ölüdeniz Blaue Lagune",
            port: "Ölüdeniz",
            description: "Besuchen Sie die weltberühmte Blaue Lagune von Ölüdeniz mit ihrem atemberaubenden türkisfarbenen Wasser.",
            activities: ["Besuch der Blauen Lagune", "Optionales Paragliding", "Strandclubs", "Landschaftsfotografie"],
          },
          {
            day: 6,
            title: "Gemiler-Insel",
            port: "Gemiler",
            description: "Erkunden Sie die Ruinen byzantinischer Kirchen auf der St. Nikolaus-Insel.",
            activities: ["Inselerkundung", "Historische Tour", "Schwimmen", "Kapitänsdinner"],
          },
          {
            day: 7,
            title: "Rückkehr nach Fethiye",
            port: "Fethiye",
            description: "Letztes Morgenschwimmen und gemütliche Rückkehr zum Hafen von Fethiye.",
            activities: ["Abschiedsfrühstück", "Letztes Schwimmen", "Rückkehr nach Fethiye", "Ausschiffung bis 10:00 Uhr"],
          },
        ],
      },
    },
  },
  {
    id: "fethiye-kekova",
    slug: "fethiye-kekova-fethiye",
    duration: 7,
    startPort: "Fethiye",
    endPort: "Fethiye",
    thumbnail: "/assets/images/itineraries/kekova.jpg",
    images: ["/assets/images/itineraries/kekova.jpg"],
    recommendedYachts: ["holiday10", "holiday5"],
    translations: {
      en: {
        name: "Fethiye - Kekova - Fethiye",
        description: "Journey east to the enchanting Kekova region, famous for its sunken city and dramatic coastline. This route combines natural beauty with rich historical heritage.",
        highlights: [
          "Kekova Sunken City",
          "Simena Castle",
          "Kas old town",
          "Ucagiz fishing village",
          "Patara Beach",
          "Kalkan harbor",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Fethiye to Kalkan",
            port: "Kalkan",
            description: "Depart Fethiye and sail east to the charming town of Kalkan.",
            activities: ["Welcome lunch", "Scenic sailing", "Kalkan harbor dinner", "Town exploration"],
          },
          {
            day: 2,
            title: "Kas",
            port: "Kas",
            description: "Visit the bohemian town of Kas, known for its diving and artistic atmosphere.",
            activities: ["Optional diving", "Town exploration", "Art galleries", "Seafood dinner"],
          },
          {
            day: 3,
            title: "Kekova Sunken City",
            port: "Kekova",
            description: "Glide over the mysterious sunken city, visible through crystal-clear waters.",
            activities: ["Sunken city tour", "Sea kayaking", "Swimming", "Stargazing"],
          },
          {
            day: 4,
            title: "Simena & Ucagiz",
            port: "Simena",
            description: "Climb to Simena Castle and explore the traditional village of Ucagiz.",
            activities: ["Castle hike", "Village visit", "Traditional lunch", "Relaxation"],
          },
          {
            day: 5,
            title: "Return via Demre",
            port: "Demre",
            description: "Optional visit to the ancient city of Myra and Church of St. Nicholas.",
            activities: ["Historical excursion", "Swimming stops", "BBQ lunch", "Evening sail"],
          },
          {
            day: 6,
            title: "Patara & Butterfly Valley",
            port: "Patara",
            description: "Visit Turkey's longest beach and return to Butterfly Valley.",
            activities: ["Patara Beach", "Swimming", "Butterfly Valley", "Captain's farewell dinner"],
          },
          {
            day: 7,
            title: "Return to Fethiye",
            port: "Fethiye",
            description: "Leisurely cruise back to Fethiye Harbor.",
            activities: ["Breakfast", "Final swim", "Fethiye arrival", "Disembarkation"],
          },
        ],
      },
      tr: {
        name: "Fethiye - Kekova - Fethiye",
        description: "Batık şehri ve dramatik kıyı şeridiyle ünlü büyüleyici Kekova bölgesine doğuya yolculuk yapın. Bu rota doğal güzelliği zengin tarihi mirasla birleştiriyor.",
        highlights: [
          "Kekova Batık Şehri",
          "Simena Kalesi",
          "Kaş eski şehir",
          "Üçağız balıkçı köyü",
          "Patara Plajı",
          "Kalkan limanı",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Fethiye'den Kalkan'a",
            port: "Kalkan",
            description: "Fethiye'den ayrılın ve şirin Kalkan kasabasına doğuya yelken açın.",
            activities: ["Hoş geldin öğle yemeği", "Manzaralı seyir", "Kalkan limanında akşam yemeği", "Kasaba keşfi"],
          },
          {
            day: 2,
            title: "Kaş",
            port: "Kaş",
            description: "Dalış ve sanatsal atmosferiyle tanınan bohem Kaş kasabasını ziyaret edin.",
            activities: ["İsteğe bağlı dalış", "Kasaba keşfi", "Sanat galerileri", "Deniz ürünleri akşam yemeği"],
          },
          {
            day: 3,
            title: "Kekova Batık Şehri",
            port: "Kekova",
            description: "Kristal berraklığında sular arasından görülebilen gizemli batık şehrin üzerinden geçin.",
            activities: ["Batık şehir turu", "Deniz kayağı", "Yüzme", "Yıldız gözlemi"],
          },
          {
            day: 4,
            title: "Simena & Üçağız",
            port: "Simena",
            description: "Simena Kalesi'ne tırmanın ve geleneksel Üçağız köyünü keşfedin.",
            activities: ["Kale yürüyüşü", "Köy ziyareti", "Geleneksel öğle yemeği", "Dinlenme"],
          },
          {
            day: 5,
            title: "Demre Üzerinden Dönüş",
            port: "Demre",
            description: "Antik Myra şehrine ve Aziz Nikolas Kilisesi'ne isteğe bağlı ziyaret.",
            activities: ["Tarihi gezi", "Yüzme molaları", "Barbekü öğle yemeği", "Akşam seyri"],
          },
          {
            day: 6,
            title: "Patara & Kelebekler Vadisi",
            port: "Patara",
            description: "Türkiye'nin en uzun plajını ziyaret edin ve Kelebekler Vadisi'ne dönün.",
            activities: ["Patara Plajı", "Yüzme", "Kelebekler Vadisi", "Kaptanın veda yemeği"],
          },
          {
            day: 7,
            title: "Fethiye'ye Dönüş",
            port: "Fethiye",
            description: "Fethiye Limanı'na keyifli geri dönüş.",
            activities: ["Kahvaltı", "Son yüzme", "Fethiye varışı", "Gemiden iniş"],
          },
        ],
      },
      de: {
        name: "Fethiye - Kekova - Fethiye",
        description: "Reisen Sie nach Osten in die bezaubernde Region Kekova, berühmt für ihre versunkene Stadt und dramatische Küstenlinie. Diese Route verbindet natürliche Schönheit mit reichem historischem Erbe.",
        highlights: [
          "Kekova Versunkene Stadt",
          "Simena-Burg",
          "Kaş Altstadt",
          "Üçağız Fischerdorf",
          "Patara-Strand",
          "Kalkan-Hafen",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Fethiye nach Kalkan",
            port: "Kalkan",
            description: "Verlassen Sie Fethiye und segeln Sie nach Osten zur charmanten Stadt Kalkan.",
            activities: ["Willkommensmittagessen", "Landschaftliches Segeln", "Abendessen im Hafen von Kalkan", "Stadterkundung"],
          },
          {
            day: 2,
            title: "Kaş",
            port: "Kaş",
            description: "Besuchen Sie die Bohème-Stadt Kaş, bekannt für Tauchen und künstlerische Atmosphäre.",
            activities: ["Optionales Tauchen", "Stadterkundung", "Kunstgalerien", "Meeresfrüchte-Abendessen"],
          },
          {
            day: 3,
            title: "Kekova Versunkene Stadt",
            port: "Kekova",
            description: "Gleiten Sie über die mysteriöse versunkene Stadt, sichtbar durch kristallklares Wasser.",
            activities: ["Tour durch die versunkene Stadt", "Seekajakfahren", "Schwimmen", "Sternenbeobachtung"],
          },
          {
            day: 4,
            title: "Simena & Üçağız",
            port: "Simena",
            description: "Besteigen Sie die Burg Simena und erkunden Sie das traditionelle Dorf Üçağız.",
            activities: ["Burgwanderung", "Dorfbesuch", "Traditionelles Mittagessen", "Entspannung"],
          },
          {
            day: 5,
            title: "Rückkehr über Demre",
            port: "Demre",
            description: "Optionaler Besuch der antiken Stadt Myra und der St. Nikolaus-Kirche.",
            activities: ["Historischer Ausflug", "Schwimmstopps", "BBQ-Mittagessen", "Abendsegeln"],
          },
          {
            day: 6,
            title: "Patara & Schmetterlingstal",
            port: "Patara",
            description: "Besuchen Sie den längsten Strand der Türkei und kehren Sie zum Schmetterlingstal zurück.",
            activities: ["Patara-Strand", "Schwimmen", "Schmetterlingstal", "Kapitäns-Abschiedsdinner"],
          },
          {
            day: 7,
            title: "Rückkehr nach Fethiye",
            port: "Fethiye",
            description: "Gemütliche Kreuzfahrt zurück zum Hafen von Fethiye.",
            activities: ["Frühstück", "Letztes Schwimmen", "Ankunft in Fethiye", "Ausschiffung"],
          },
        ],
      },
    },
  },
  {
    id: "fethiye-marmaris",
    slug: "fethiye-marmaris-fethiye",
    duration: 7,
    startPort: "Fethiye",
    endPort: "Fethiye",
    thumbnail: "/assets/images/itineraries/marmaris.jpg",
    images: ["/assets/images/itineraries/marmaris.jpg"],
    recommendedYachts: ["holiday10", "holiday6", "holidaym"],
    translations: {
      en: {
        name: "Fethiye - Marmaris - Fethiye",
        description: "Sail the western Turquoise Coast from Fethiye to Marmaris, exploring pine-covered coves and visiting the historic resort town.",
        highlights: [
          "Marmaris Castle",
          "Ekincik Bay",
          "Dalyan River",
          "Iztuzu Turtle Beach",
          "Sarsala Bay",
          "Historic Marmaris",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Fethiye to Gocek",
            port: "Gocek",
            description: "Short sail to Gocek, Turkey's premier yachting destination.",
            activities: ["Embarkation", "Welcome lunch", "Gocek exploration", "Marina dinner"],
          },
          {
            day: 2,
            title: "Ekincik Bay",
            port: "Ekincik",
            description: "Cruise to beautiful Ekincik Bay, gateway to Dalyan.",
            activities: ["Scenic sailing", "Swimming", "Optional Dalyan tour", "Beach BBQ"],
          },
          {
            day: 3,
            title: "Dalyan & Turtle Beach",
            port: "Dalyan",
            description: "River boat to Dalyan, mud baths, and Iztuzu Turtle Beach.",
            activities: ["River cruise", "Mud baths", "Turtle Beach", "Ancient Kaunos"],
          },
          {
            day: 4,
            title: "Marmaris",
            port: "Marmaris",
            description: "Arrive at the vibrant resort town of Marmaris.",
            activities: ["Harbor arrival", "Castle visit", "Bazaar shopping", "Nightlife"],
          },
          {
            day: 5,
            title: "Sarsala Bay",
            port: "Sarsala",
            description: "Return via the pristine Sarsala Bay.",
            activities: ["Morning swim", "Sailing", "Sarsala relaxation", "Sunset dinner"],
          },
          {
            day: 6,
            title: "Gocek Islands",
            port: "Gocek",
            description: "Explore more of Gocek's beautiful 12 Islands.",
            activities: ["Island hopping", "Snorkeling", "Beach time", "Captain's dinner"],
          },
          {
            day: 7,
            title: "Return to Fethiye",
            port: "Fethiye",
            description: "Final morning and return to Fethiye.",
            activities: ["Breakfast", "Swimming", "Fethiye arrival", "Disembarkation"],
          },
        ],
      },
      tr: {
        name: "Fethiye - Marmaris - Fethiye",
        description: "Fethiye'den Marmaris'e batı Turkuaz Kıyısı'nda yelken açın, çam ağaçlarıyla kaplı koyları keşfedin ve tarihi tatil beldesini ziyaret edin.",
        highlights: [
          "Marmaris Kalesi",
          "Ekincik Koyu",
          "Dalyan Nehri",
          "İztuzu Kaplumbağa Plajı",
          "Sarsala Koyu",
          "Tarihi Marmaris",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Fethiye'den Göcek'e",
            port: "Göcek",
            description: "Türkiye'nin önde gelen yat destinasyonu Göcek'e kısa seyir.",
            activities: ["Gemiye biniş", "Hoş geldin öğle yemeği", "Göcek keşfi", "Marina akşam yemeği"],
          },
          {
            day: 2,
            title: "Ekincik Koyu",
            port: "Ekincik",
            description: "Dalyan'ın kapısı olan güzel Ekincik Koyu'na seyir.",
            activities: ["Manzaralı seyir", "Yüzme", "İsteğe bağlı Dalyan turu", "Plajda barbekü"],
          },
          {
            day: 3,
            title: "Dalyan & Kaplumbağa Plajı",
            port: "Dalyan",
            description: "Dalyan'a nehir gezisi, çamur banyoları ve İztuzu Kaplumbağa Plajı.",
            activities: ["Nehir turu", "Çamur banyoları", "Kaplumbağa Plajı", "Antik Kaunos"],
          },
          {
            day: 4,
            title: "Marmaris",
            port: "Marmaris",
            description: "Canlı tatil beldesi Marmaris'e varış.",
            activities: ["Limana varış", "Kale ziyareti", "Çarşı alışverişi", "Gece hayatı"],
          },
          {
            day: 5,
            title: "Sarsala Koyu",
            port: "Sarsala",
            description: "El değmemiş Sarsala Koyu üzerinden dönüş.",
            activities: ["Sabah yüzmesi", "Yelken", "Sarsala'da dinlenme", "Gün batımı yemeği"],
          },
          {
            day: 6,
            title: "Göcek Adaları",
            port: "Göcek",
            description: "Göcek'in güzel 12 Adasını daha fazla keşfedin.",
            activities: ["Ada gezisi", "Şnorkel", "Plaj zamanı", "Kaptan yemeği"],
          },
          {
            day: 7,
            title: "Fethiye'ye Dönüş",
            port: "Fethiye",
            description: "Son sabah ve Fethiye'ye dönüş.",
            activities: ["Kahvaltı", "Yüzme", "Fethiye varışı", "Gemiden iniş"],
          },
        ],
      },
      de: {
        name: "Fethiye - Marmaris - Fethiye",
        description: "Segeln Sie die westliche Türkisküste von Fethiye nach Marmaris, erkunden Sie kiefernbedeckte Buchten und besuchen Sie die historische Ferienstadt.",
        highlights: [
          "Marmaris-Burg",
          "Ekincik-Bucht",
          "Dalyan-Fluss",
          "Iztuzu-Schildkrötenstrand",
          "Sarsala-Bucht",
          "Historisches Marmaris",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Fethiye nach Göcek",
            port: "Göcek",
            description: "Kurze Fahrt nach Göcek, Türkeis führendem Yachtziel.",
            activities: ["Einschiffung", "Willkommensmittagessen", "Göcek-Erkundung", "Marina-Abendessen"],
          },
          {
            day: 2,
            title: "Ekincik-Bucht",
            port: "Ekincik",
            description: "Kreuzfahrt zur wunderschönen Ekincik-Bucht, dem Tor zu Dalyan.",
            activities: ["Landschaftliches Segeln", "Schwimmen", "Optionale Dalyan-Tour", "Strand-BBQ"],
          },
          {
            day: 3,
            title: "Dalyan & Schildkrötenstrand",
            port: "Dalyan",
            description: "Flussboot nach Dalyan, Schlammbäder und Iztuzu-Schildkrötenstrand.",
            activities: ["Flusskreuzfahrt", "Schlammbäder", "Schildkrötenstrand", "Antikes Kaunos"],
          },
          {
            day: 4,
            title: "Marmaris",
            port: "Marmaris",
            description: "Ankunft in der lebhaften Ferienstadt Marmaris.",
            activities: ["Hafenankunft", "Burgbesuch", "Basar-Shopping", "Nachtleben"],
          },
          {
            day: 5,
            title: "Sarsala-Bucht",
            port: "Sarsala",
            description: "Rückkehr über die unberührte Sarsala-Bucht.",
            activities: ["Morgenschwimmen", "Segeln", "Entspannung in Sarsala", "Sonnenuntergangs-Dinner"],
          },
          {
            day: 6,
            title: "Göcek-Inseln",
            port: "Göcek",
            description: "Erkunden Sie mehr von Göceks wunderschönen 12 Inseln.",
            activities: ["Inselhopping", "Schnorcheln", "Strandzeit", "Kapitänsdinner"],
          },
          {
            day: 7,
            title: "Rückkehr nach Fethiye",
            port: "Fethiye",
            description: "Letzter Morgen und Rückkehr nach Fethiye.",
            activities: ["Frühstück", "Schwimmen", "Ankunft in Fethiye", "Ausschiffung"],
          },
        ],
      },
    },
  },
  {
    id: "bodrum-gokova",
    slug: "bodrum-gokova-bodrum",
    duration: 7,
    startPort: "Bodrum",
    endPort: "Bodrum",
    thumbnail: "/assets/images/itineraries/bodrum.jpg",
    images: ["/assets/images/itineraries/bodrum.jpg"],
    recommendedYachts: ["holiday10", "holiday5", "holidaym"],
    translations: {
      en: {
        name: "Bodrum - Gokova - Bodrum",
        description: "Explore the dramatic Gokova Gulf from cosmopolitan Bodrum. This route offers a perfect blend of sophisticated nightlife and pristine natural bays.",
        highlights: [
          "Bodrum Castle",
          "Gokova Gulf",
          "Sedir Island (Cleopatra Beach)",
          "English Harbour",
          "Amazon Creek",
          "Seven Islands",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Bodrum Departure",
            port: "Bodrum",
            description: "Board in Bodrum and sail into Gokova Gulf.",
            activities: ["Bodrum harbor", "Welcome aboard", "First bay swim", "Dinner on deck"],
          },
          {
            day: 2,
            title: "Orak Island",
            port: "Orak",
            description: "Visit the stunning Orak Island with its crystal waters.",
            activities: ["Swimming", "Snorkeling", "Beach exploration", "Stargazing"],
          },
          {
            day: 3,
            title: "Sedir Island",
            port: "Sedir",
            description: "Walk on the famous Cleopatra Beach with its unique golden sand.",
            activities: ["Cleopatra Beach", "Ancient theater", "Swimming", "History tour"],
          },
          {
            day: 4,
            title: "English Harbour",
            port: "English Harbour",
            description: "Anchor in the peaceful English Harbour surrounded by pine forests.",
            activities: ["Hiking trails", "Swimming", "Kayaking", "Forest picnic"],
          },
          {
            day: 5,
            title: "Amazon Creek",
            port: "Amazon",
            description: "Explore the mysterious Amazon Creek, accessible only by small boats.",
            activities: ["Creek exploration", "Swimming", "Nature watching", "Seafood dinner"],
          },
          {
            day: 6,
            title: "Seven Islands",
            port: "Seven Islands",
            description: "Island hop through the beautiful Seven Islands area.",
            activities: ["Island hopping", "Snorkeling", "Beach BBQ", "Captain's dinner"],
          },
          {
            day: 7,
            title: "Return to Bodrum",
            port: "Bodrum",
            description: "Return to Bodrum harbor.",
            activities: ["Final swim", "Breakfast cruise", "Bodrum arrival", "Disembarkation"],
          },
        ],
      },
      tr: {
        name: "Bodrum - Gökova - Bodrum",
        description: "Kozmopolit Bodrum'dan dramatik Gökova Körfezi'ni keşfedin. Bu rota, sofistike gece hayatı ve el değmemiş doğal koyların mükemmel bir karışımını sunuyor.",
        highlights: [
          "Bodrum Kalesi",
          "Gökova Körfezi",
          "Sedir Adası (Kleopatra Plajı)",
          "İngiliz Limanı",
          "Amazon Koyu",
          "Yedi Adalar",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Bodrum'dan Kalkış",
            port: "Bodrum",
            description: "Bodrum'da gemiye binin ve Gökova Körfezi'ne yelken açın.",
            activities: ["Bodrum limanı", "Gemiye hoş geldiniz", "İlk koy yüzmesi", "Güvertede akşam yemeği"],
          },
          {
            day: 2,
            title: "Orak Adası",
            port: "Orak",
            description: "Kristal berraklığında sularıyla muhteşem Orak Adası'nı ziyaret edin.",
            activities: ["Yüzme", "Şnorkel", "Plaj keşfi", "Yıldız gözlemi"],
          },
          {
            day: 3,
            title: "Sedir Adası",
            port: "Sedir",
            description: "Eşsiz altın kumuyla ünlü Kleopatra Plajı'nda yürüyün.",
            activities: ["Kleopatra Plajı", "Antik tiyatro", "Yüzme", "Tarih turu"],
          },
          {
            day: 4,
            title: "İngiliz Limanı",
            port: "İngiliz Limanı",
            description: "Çam ormanlarıyla çevrili huzurlu İngiliz Limanı'nda demirleyin.",
            activities: ["Yürüyüş parkurları", "Yüzme", "Kano", "Orman pikniği"],
          },
          {
            day: 5,
            title: "Amazon Koyu",
            port: "Amazon",
            description: "Sadece küçük teknelerle ulaşılabilen gizemli Amazon Koyu'nu keşfedin.",
            activities: ["Koy keşfi", "Yüzme", "Doğa izleme", "Deniz ürünleri akşam yemeği"],
          },
          {
            day: 6,
            title: "Yedi Adalar",
            port: "Yedi Adalar",
            description: "Güzel Yedi Adalar bölgesinde ada gezisi yapın.",
            activities: ["Ada gezisi", "Şnorkel", "Plaj barbekü", "Kaptan yemeği"],
          },
          {
            day: 7,
            title: "Bodrum'a Dönüş",
            port: "Bodrum",
            description: "Bodrum limanına dönüş.",
            activities: ["Son yüzme", "Kahvaltılı seyir", "Bodrum varışı", "Gemiden iniş"],
          },
        ],
      },
      de: {
        name: "Bodrum - Gökova - Bodrum",
        description: "Erkunden Sie den dramatischen Golf von Gökova vom kosmopolitischen Bodrum aus. Diese Route bietet eine perfekte Mischung aus anspruchsvollem Nachtleben und unberührten Naturbuchten.",
        highlights: [
          "Burg von Bodrum",
          "Golf von Gökova",
          "Sedir-Insel (Kleopatra-Strand)",
          "Englischer Hafen",
          "Amazonas-Bucht",
          "Sieben Inseln",
        ],
        dailySchedule: [
          {
            day: 1,
            title: "Abfahrt von Bodrum",
            port: "Bodrum",
            description: "Gehen Sie in Bodrum an Bord und segeln Sie in den Golf von Gökova.",
            activities: ["Hafen von Bodrum", "Willkommen an Bord", "Erstes Bucht-Schwimmen", "Abendessen an Deck"],
          },
          {
            day: 2,
            title: "Orak-Insel",
            port: "Orak",
            description: "Besuchen Sie die atemberaubende Orak-Insel mit ihrem kristallklaren Wasser.",
            activities: ["Schwimmen", "Schnorcheln", "Stranderkundung", "Sternenbeobachtung"],
          },
          {
            day: 3,
            title: "Sedir-Insel",
            port: "Sedir",
            description: "Spazieren Sie am berühmten Kleopatra-Strand mit seinem einzigartigen goldenen Sand.",
            activities: ["Kleopatra-Strand", "Antikes Theater", "Schwimmen", "Geschichtstour"],
          },
          {
            day: 4,
            title: "Englischer Hafen",
            port: "Englischer Hafen",
            description: "Ankern Sie im friedlichen Englischen Hafen, umgeben von Kiefernwäldern.",
            activities: ["Wanderwege", "Schwimmen", "Kajakfahren", "Waldpicknick"],
          },
          {
            day: 5,
            title: "Amazonas-Bucht",
            port: "Amazonas",
            description: "Erkunden Sie die mysteriöse Amazonas-Bucht, nur mit kleinen Booten erreichbar.",
            activities: ["Bucht-Erkundung", "Schwimmen", "Naturbeobachtung", "Meeresfrüchte-Abendessen"],
          },
          {
            day: 6,
            title: "Sieben Inseln",
            port: "Sieben Inseln",
            description: "Inselhopping durch das wunderschöne Gebiet der Sieben Inseln.",
            activities: ["Inselhopping", "Schnorcheln", "Strand-BBQ", "Kapitänsdinner"],
          },
          {
            day: 7,
            title: "Rückkehr nach Bodrum",
            port: "Bodrum",
            description: "Rückkehr zum Hafen von Bodrum.",
            activities: ["Letztes Schwimmen", "Frühstückskreuzfahrt", "Ankunft in Bodrum", "Ausschiffung"],
          },
        ],
      },
    },
  },
];

export function getTranslatedItinerary(
  itinerary: Itinerary,
  language: Language
): TranslatedItinerary {
  const translation = itinerary.translations[language] || itinerary.translations.en;
  const { translations, ...rest } = itinerary;
  return { ...rest, ...translation };
}

export function getItineraryBySlug(slug: string): Itinerary | undefined {
  return itineraries.find((itinerary) => itinerary.slug === slug);
}

export function getItineraryById(id: string): Itinerary | undefined {
  return itineraries.find((itinerary) => itinerary.id === id);
}

export function getAllItineraries(): Itinerary[] {
  return itineraries;
}
