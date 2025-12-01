import { Language } from "@/contexts/LanguageContext";

export interface DestinationTranslation {
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
  bestTime: string;
  idealFor: string[];
  keyAttractions: {
    name: string;
    description: string;
  }[];
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  image: string;
  thumbnail: string;
  relatedItineraries: string[];
  translations: Record<Language, DestinationTranslation>;
}

export const destinations: Destination[] = [
  {
    id: "fethiye",
    slug: "fethiye",
    name: "Fethiye",
    image: "/assets/images/itineraries/fethiye.jpg",
    thumbnail: "/assets/images/itineraries/fethiye.jpg",
    relatedItineraries: [
      "fethiye-gocek-fethiye",
      "fethiye-kekova-fethiye",
      "fethiye-marmaris-fethiye",
    ],
    translations: {
      en: {
        title: "Fethiye - Gateway to the Turquoise Coast",
        description:
          "Discover Fethiye, the stunning harbor town that serves as the perfect starting point for your Blue Cruise adventure along Turkey's magnificent Turquoise Coast.",
        longDescription: `Fethiye is one of Turkey's most beautiful coastal towns and the premier departure point for Blue Cruises. Nestled against a backdrop of pine-clad mountains, this vibrant harbor town offers a perfect blend of natural beauty, rich history, and modern amenities.

The natural harbor of Fethiye has been a maritime hub for centuries, originally known as Telmessos in ancient times. Today, it serves as home port for hundreds of traditional Turkish gulets, making it the ideal starting location for your yacht charter adventure.

The surrounding coastline features some of the Mediterranean's most spectacular scenery - crystal-clear waters, hidden coves, ancient ruins, and the famous "12 Islands" archipelago that has made this region world-renowned among sailing enthusiasts.

Whether you're seeking relaxation on secluded beaches, exploring ancient Lycian tombs carved into cliffsides, or enjoying fresh seafood at waterfront restaurants, Fethiye delivers an unforgettable experience.`,
        highlights: [
          "Protected natural harbor with calm waters",
          "Gateway to the famous 12 Islands",
          "Ancient Lycian rock tombs",
          "Vibrant Old Town and fish market",
          "Close to Oludeniz Blue Lagoon",
          "Excellent restaurants and nightlife",
        ],
        bestTime: "May through October, with June and September being ideal",
        idealFor: [
          "Families with children",
          "First-time yacht charter guests",
          "Nature lovers",
          "History enthusiasts",
          "Beach lovers",
        ],
        keyAttractions: [
          {
            name: "Oludeniz Blue Lagoon",
            description:
              "Turkey's most photographed beach, featuring stunning turquoise waters and a protected lagoon perfect for swimming.",
          },
          {
            name: "12 Islands Cruise",
            description:
              "A classic day sailing route through pristine islands and bays, each offering unique swimming and snorkeling spots.",
          },
          {
            name: "Butterfly Valley",
            description:
              "A spectacular canyon accessible only by boat, home to numerous butterfly species and a beautiful waterfall.",
          },
          {
            name: "Kayakoy Ghost Village",
            description:
              "An atmospheric abandoned Greek village, now a UNESCO site, offering fascinating history and stunning views.",
          },
          {
            name: "Lycian Rock Tombs",
            description:
              "Ancient tombs carved directly into the cliffs overlooking the town, dating back to 350 BC.",
          },
        ],
      },
      tr: {
        title: "Fethiye - Turkuaz Kıyısının Kapısı",
        description:
          "Türkiye'nin muhteşem Turkuaz Kıyısı boyunca Mavi Yolculuk maceranız için mükemmel başlangıç noktası olan büyüleyici liman kasabası Fethiye'yi keşfedin.",
        longDescription: `Fethiye, Türkiye'nin en güzel kıyı kasabalarından biri ve Mavi Yolculukların birinci sınıf kalkış noktasıdır. Çam kaplı dağların arka planına yaslanmış bu canlı liman kasabası, doğal güzellik, zengin tarih ve modern olanaklarla mükemmel bir karışım sunar.

Fethiye'nin doğal limanı, antik çağlarda Telmessos olarak bilinen yüzyıllardır denizcilik merkezi olmuştur. Bugün yüzlerce geleneksel Türk guletine ev sahipliği yaparak yat kiralama maceranız için ideal başlangıç noktası olmaktadır.

Çevredeki kıyı şeridi Akdeniz'in en muhteşem manzaralarından bazılarını sunar - kristal berraklığında sular, gizli koylar, antik kalıntılar ve bu bölgeyi yelken tutkunları arasında dünyaca ünlü yapan "12 Adalar" takımadası.

İster tenha plajlarda dinlenmek, ister kayalıklara oyulmuş antik Likya mezarlarını keşfetmek, ister sahildeki restoranlarda taze deniz ürünlerinin tadını çıkarmak isteyin, Fethiye unutulmaz bir deneyim sunar.`,
        highlights: [
          "Sakin sulara sahip korunaklı doğal liman",
          "Ünlü 12 Adalar'a açılan kapı",
          "Antik Likya kaya mezarları",
          "Canlı Eski Şehir ve balık pazarı",
          "Ölüdeniz Mavi Lagün'e yakın",
          "Mükemmel restoranlar ve gece hayatı",
        ],
        bestTime: "Mayıs - Ekim arası, Haziran ve Eylül ideal",
        idealFor: [
          "Çocuklu aileler",
          "İlk kez yat kiralayan misafirler",
          "Doğa severler",
          "Tarih meraklıları",
          "Plaj severler",
        ],
        keyAttractions: [
          {
            name: "Ölüdeniz Mavi Lagün",
            description:
              "Türkiye'nin en çok fotoğraflanan plajı, muhteşem turkuaz suları ve yüzme için mükemmel korunaklı lagünü ile.",
          },
          {
            name: "12 Adalar Turu",
            description:
              "Her biri benzersiz yüzme ve şnorkel noktaları sunan bozulmamış adalar ve koylardan geçen klasik günlük yelken rotası.",
          },
          {
            name: "Kelebek Vadisi",
            description:
              "Sadece tekneyle ulaşılabilen, çok sayıda kelebek türüne ve güzel bir şelaleye ev sahipliği yapan muhteşem kanyon.",
          },
          {
            name: "Kayaköy Hayalet Köyü",
            description:
              "Şimdi UNESCO mirası olan, büyüleyici tarihi ve muhteşem manzaraları sunan atmosferik terk edilmiş Rum köyü.",
          },
          {
            name: "Likya Kaya Mezarları",
            description:
              "MÖ 350'ye dayanan, kasabaya bakan kayalıklara doğrudan oyulmuş antik mezarlar.",
          },
        ],
      },
      de: {
        title: "Fethiye - Tor zur Türkisküste",
        description:
          "Entdecken Sie Fethiye, die atemberaubende Hafenstadt, die der perfekte Ausgangspunkt für Ihr Blaue Reise-Abenteuer entlang der prächtigen Türkisküste der Türkei ist.",
        longDescription: `Fethiye ist eine der schönsten Küstenstädte der Türkei und der erstklassige Abfahrtsort für Blaue Reisen. Diese lebendige Hafenstadt, eingebettet vor der Kulisse von kiefernbewachsenen Bergen, bietet eine perfekte Mischung aus natürlicher Schönheit, reicher Geschichte und modernen Annehmlichkeiten.

Der natürliche Hafen von Fethiye ist seit Jahrhunderten ein maritimes Zentrum, in der Antike als Telmessos bekannt. Heute beherbergt er Hunderte von traditionellen türkischen Gulets und ist damit der ideale Ausgangspunkt für Ihr Yachtcharter-Abenteuer.

Die umliegende Küste bietet einige der spektakulärsten Landschaften des Mittelmeers - kristallklares Wasser, versteckte Buchten, antike Ruinen und den berühmten "12 Inseln"-Archipel, der diese Region bei Segelenthusiasten weltberühmt gemacht hat.

Ob Sie Entspannung an abgelegenen Stränden suchen, antike lykische Gräber erkunden, die in Felswände gehauen wurden, oder frische Meeresfrüchte in Restaurants am Wasser genießen möchten - Fethiye bietet ein unvergessliches Erlebnis.`,
        highlights: [
          "Geschützter Naturhafen mit ruhigen Gewässern",
          "Tor zu den berühmten 12 Inseln",
          "Antike lykische Felsengräber",
          "Lebhafte Altstadt und Fischmarkt",
          "Nahe der Blauen Lagune von Ölüdeniz",
          "Ausgezeichnete Restaurants und Nachtleben",
        ],
        bestTime: "Mai bis Oktober, Juni und September sind ideal",
        idealFor: [
          "Familien mit Kindern",
          "Erstmalige Yachtcharter-Gäste",
          "Naturliebhaber",
          "Geschichtsbegeisterte",
          "Strandliebhaber",
        ],
        keyAttractions: [
          {
            name: "Ölüdeniz Blaue Lagune",
            description:
              "Der meistfotografierte Strand der Türkei mit atemberaubendem türkisfarbenem Wasser und einer geschützten Lagune, perfekt zum Schwimmen.",
          },
          {
            name: "12-Inseln-Kreuzfahrt",
            description:
              "Eine klassische Tagessegel-Route durch unberührte Inseln und Buchten, die jeweils einzigartige Schwimm- und Schnorchelplätze bieten.",
          },
          {
            name: "Schmetterlingstal",
            description:
              "Eine spektakuläre Schlucht, die nur per Boot erreichbar ist und zahlreiche Schmetterlingsarten sowie einen wunderschönen Wasserfall beherbergt.",
          },
          {
            name: "Kayaköy Geisterdorf",
            description:
              "Ein atmosphärisches verlassenes griechisches Dorf, heute UNESCO-Welterbe, mit faszinierender Geschichte und atemberaubenden Ausblicken.",
          },
          {
            name: "Lykische Felsengräber",
            description:
              "Antike Gräber, die direkt in die Klippen über der Stadt gehauen wurden und auf 350 v. Chr. zurückgehen.",
          },
        ],
      },
    },
  },
  {
    id: "gocek",
    slug: "gocek",
    name: "Göcek",
    image: "/assets/images/yachts/holiday6/05.webp",
    thumbnail: "/assets/images/yachts/holiday6/05.webp",
    relatedItineraries: ["fethiye-gocek-fethiye"],
    translations: {
      en: {
        title: "Gocek - Exclusive Yachting Paradise",
        description:
          "Experience Gocek, an upscale marina village surrounded by 12 islands and countless secluded bays, perfect for discerning yacht charter guests.",
        longDescription: `Gocek is a charming village that has become synonymous with luxury yachting in Turkey. Unlike busier tourist destinations, Gocek has maintained its authentic character while developing world-class marina facilities.

Surrounded by pine-forested mountains and fronted by the Gocek Bay with its famous 12 Islands, this location offers perhaps the most sheltered and pristine sailing waters on the Turkish coast. The area is protected from development, ensuring that the natural beauty remains unspoiled.

The village itself is compact and walkable, with a pleasant waterfront promenade lined with cafes, restaurants, and boutique shops. Six marinas serve the yachting community, ranging from simple to ultra-luxurious.

Gocek is particularly popular among experienced sailors who appreciate its calm waters, excellent facilities, and easy access to some of the Mediterranean's most beautiful anchorages.`,
        highlights: [
          "Six world-class marinas",
          "Protected waters ideal for sailing",
          "Exclusive, upscale atmosphere",
          "Surrounded by 12 pristine islands",
          "Excellent waterfront dining",
          "Gateway to Dalyan and Kaunos",
        ],
        bestTime: "April through November, perfect conditions from May to October",
        idealFor: [
          "Experienced sailors",
          "Luxury seekers",
          "Couples and honeymooners",
          "Privacy-focused travelers",
          "Sailing enthusiasts",
        ],
        keyAttractions: [
          {
            name: "Gocek Islands",
            description:
              "A collection of islands offering secluded bays, crystal waters, and excellent swimming spots away from crowds.",
          },
          {
            name: "Tersane Island",
            description:
              "Features ancient shipyard ruins and one of the region's most popular swimming bays with a beach restaurant.",
          },
          {
            name: "Bedri Rahmi Bay",
            description:
              "Named after a famous Turkish poet and painter, this beautiful bay features his fish painting on a rock.",
          },
          {
            name: "Cleopatra's Bath",
            description:
              "A stunning natural cove with crystal-clear waters, according to legend visited by Cleopatra herself.",
          },
          {
            name: "Sarsala Bay",
            description:
              "A spectacular fjord-like inlet surrounded by dramatic cliffs and pine forests.",
          },
        ],
      },
      tr: {
        title: "Göcek - Özel Yatçılık Cenneti",
        description:
          "12 ada ve sayısız tenha koy ile çevrili, seçici yat kiralama misafirleri için mükemmel üst düzey marina köyü Göcek'i deneyimleyin.",
        longDescription: `Göcek, Türkiye'de lüks yatçılığın simgesi haline gelmiş büyüleyici bir köydür. Daha kalabalık turistik destinasyonların aksine, Göcek dünya standartlarında marina tesisleri geliştirirken otantik karakterini korumuştur.

Çam ormanlarıyla kaplı dağlarla çevrili ve ünlü 12 Adası ile Göcek Körfezi'ne bakan bu konum, belki de Türk kıyılarındaki en korunaklı ve el değmemiş yelken sularını sunmaktadır. Bölge gelişmeden korunmuş olup doğal güzelliğin bozulmamış kalmasını sağlamaktadır.

Köyün kendisi kompakt ve yürünebilir, kafeler, restoranlar ve butik mağazalarla kaplı hoş bir sahil promenadına sahiptir. Altı marina yatçılık topluluğuna hizmet vermekte, basitten ultra lükse kadar çeşitlilik sunmaktadır.

Göcek, özellikle sakin sularını, mükemmel tesislerini ve Akdeniz'in en güzel demir yerlerinden bazılarına kolay erişimini takdir eden deneyimli denizciler arasında popülerdir.`,
        highlights: [
          "Altı dünya standartlarında marina",
          "Yelken için ideal korunaklı sular",
          "Özel, üst düzey atmosfer",
          "12 bozulmamış ada ile çevrili",
          "Mükemmel sahil yemekleri",
          "Dalyan ve Kaunos'a açılan kapı",
        ],
        bestTime: "Nisan - Kasım arası, Mayıs - Ekim arası mükemmel koşullar",
        idealFor: [
          "Deneyimli denizciler",
          "Lüks arayanlar",
          "Çiftler ve balayı çiftleri",
          "Mahremiyet odaklı gezginler",
          "Yelken tutkunları",
        ],
        keyAttractions: [
          {
            name: "Göcek Adaları",
            description:
              "Kalabalıktan uzak tenha koylar, kristal sular ve mükemmel yüzme noktaları sunan bir ada koleksiyonu.",
          },
          {
            name: "Tersane Adası",
            description:
              "Antik tersane kalıntıları ve plaj restoranı ile bölgenin en popüler yüzme koylarından birine sahip.",
          },
          {
            name: "Bedri Rahmi Koyu",
            description:
              "Ünlü Türk şair ve ressamın adını taşıyan bu güzel koy, bir kayanın üzerindeki balık resmini sergiler.",
          },
          {
            name: "Kleopatra Hamamı",
            description:
              "Efsaneye göre Kleopatra'nın ziyaret ettiği kristal berraklığında sulara sahip muhteşem doğal koy.",
          },
          {
            name: "Sarsala Koyu",
            description:
              "Dramatik uçurumlar ve çam ormanlarıyla çevrili muhteşem fiyort benzeri girinti.",
          },
        ],
      },
      de: {
        title: "Göcek - Exklusives Yachtparadies",
        description:
          "Erleben Sie Göcek, ein gehobenes Marinadorf, umgeben von 12 Inseln und unzähligen abgelegenen Buchten, perfekt für anspruchsvolle Yachtcharter-Gäste.",
        longDescription: `Göcek ist ein charmantes Dorf, das zum Synonym für Luxusyachting in der Türkei geworden ist. Im Gegensatz zu belebteren Touristenzielen hat Göcek seinen authentischen Charakter bewahrt und gleichzeitig erstklassige Marinaeinrichtungen entwickelt.

Umgeben von kiefernbewaldeten Bergen und mit Blick auf die Göcek-Bucht mit ihren berühmten 12 Inseln bietet dieser Ort vielleicht die geschütztesten und unberührtesten Segelgewässer an der türkischen Küste. Das Gebiet ist vor Bebauung geschützt, wodurch die natürliche Schönheit unberührt bleibt.

Das Dorf selbst ist kompakt und begehbar, mit einer angenehmen Uferpromenade, die von Cafés, Restaurants und Boutiquen gesäumt ist. Sechs Marinas bedienen die Yachtgemeinschaft, von einfach bis ultraluxuriös.

Göcek ist besonders beliebt bei erfahrenen Seglern, die seine ruhigen Gewässer, ausgezeichneten Einrichtungen und den einfachen Zugang zu einigen der schönsten Ankerplätze des Mittelmeers schätzen.`,
        highlights: [
          "Sechs erstklassige Marinas",
          "Geschützte Gewässer ideal zum Segeln",
          "Exklusive, gehobene Atmosphäre",
          "Umgeben von 12 unberührten Inseln",
          "Ausgezeichnetes Essen am Wasser",
          "Tor nach Dalyan und Kaunos",
        ],
        bestTime: "April bis November, perfekte Bedingungen von Mai bis Oktober",
        idealFor: [
          "Erfahrene Segler",
          "Luxussuchende",
          "Paare und Flitterwöchner",
          "Auf Privatsphäre bedachte Reisende",
          "Segelenthusiasten",
        ],
        keyAttractions: [
          {
            name: "Göcek-Inseln",
            description:
              "Eine Sammlung von Inseln mit abgelegenen Buchten, kristallklarem Wasser und ausgezeichneten Badestellen abseits der Massen.",
          },
          {
            name: "Tersane-Insel",
            description:
              "Mit antiken Werftruinen und einer der beliebtesten Badebuchten der Region mit Strandrestaurant.",
          },
          {
            name: "Bedri Rahmi Bucht",
            description:
              "Benannt nach einem berühmten türkischen Dichter und Maler, zeigt diese schöne Bucht sein Fischgemälde auf einem Felsen.",
          },
          {
            name: "Kleopatras Bad",
            description:
              "Eine atemberaubende natürliche Bucht mit kristallklarem Wasser, der Legende nach von Kleopatra selbst besucht.",
          },
          {
            name: "Sarsala-Bucht",
            description:
              "Ein spektakulärer fjordartiger Einlass, umgeben von dramatischen Klippen und Kiefernwäldern.",
          },
        ],
      },
    },
  },
  {
    id: "marmaris",
    slug: "marmaris",
    name: "Marmaris",
    image: "/assets/images/itineraries/marmaris.jpg",
    thumbnail: "/assets/images/itineraries/marmaris.jpg",
    relatedItineraries: ["fethiye-marmaris-fethiye"],
    translations: {
      en: {
        title: "Marmaris - Where the Aegean Meets the Mediterranean",
        description:
          "Explore Marmaris, a vibrant coastal city set in a stunning bay where the Aegean and Mediterranean seas meet, offering diverse sailing experiences.",
        longDescription: `Marmaris occupies one of the most dramatic natural harbors in the Mediterranean, where forested mountains sweep down to meet the sea in a perfect crescent-shaped bay. This strategic location, where the Aegean Sea meets the Mediterranean, has made Marmaris a maritime center since ancient times.

Today, Marmaris is a cosmopolitan resort town offering something for everyone - from the bustling marina and lively bar street to quiet coves and nature reserves just minutes away. The town features an impressive medieval castle, charming old quarter, and one of Turkey's largest yacht marinas.

What makes Marmaris particularly special for yacht charters is its position as a gateway to multiple sailing regions. Head north into the Gokova Gulf for dramatic landscapes and ancient ruins, sail south toward Datca and the Greek islands, or explore the coastline toward Fethiye.

The surrounding coastline features an incredible variety of landscapes, from pine-clad peninsulas to sandy beaches, from ancient cities to modern resorts.`,
        highlights: [
          "Spectacular natural harbor",
          "Gateway to Aegean and Mediterranean",
          "Historic castle and old town",
          "Large modern marina",
          "Access to Greek islands",
          "Vibrant nightlife and dining",
        ],
        bestTime: "May through October, June-September for warmest waters",
        idealFor: [
          "Groups seeking variety",
          "History and culture lovers",
          "Active travelers",
          "Those wanting Greek island options",
          "Nightlife enthusiasts",
        ],
        keyAttractions: [
          {
            name: "Marmaris Castle",
            description:
              "A 16th-century Ottoman castle offering panoramic views and an excellent archaeology museum.",
          },
          {
            name: "Datca Peninsula",
            description:
              "A pristine peninsula with ancient Knidos, almond orchards, and some of Turkey's most beautiful beaches.",
          },
          {
            name: "Sedir Island (Cleopatra Island)",
            description:
              "Features a unique beach of golden sand allegedly brought from Egypt for Cleopatra by Mark Antony.",
          },
          {
            name: "Turunç Bay",
            description:
              "A charming fishing village with a beautiful beach and crystal-clear waters, just a short sail from Marmaris.",
          },
          {
            name: "Paradise Island",
            description:
              "A popular swimming spot in the bay featuring beach clubs and excellent snorkeling.",
          },
        ],
      },
      tr: {
        title: "Marmaris - Ege'nin Akdeniz ile Buluştuğu Yer",
        description:
          "Ege ve Akdeniz'in buluştuğu muhteşem bir körfezde yer alan, çeşitli yelken deneyimleri sunan canlı kıyı şehri Marmaris'i keşfedin.",
        longDescription: `Marmaris, Akdeniz'in en dramatik doğal limanlarından birinde yer alır; ormanlık dağların mükemmel hilal şeklinde bir körfezde denizle buluştuğu yer. Ege Denizi'nin Akdeniz ile buluştuğu bu stratejik konum, Marmaris'i antik çağlardan beri denizcilik merkezi yapmıştır.

Bugün Marmaris, herkese hitap eden kozmopolit bir tatil beldesidir - hareketli marinadan ve canlı bar caddesinden sadece birkaç dakika uzaklıktaki sessiz koylara ve doğa koruma alanlarına kadar. Şehir, etkileyici bir ortaçağ kalesi, büyüleyici eski mahalle ve Türkiye'nin en büyük yat marinalarından birine sahiptir.

Marmaris'i yat kiralamaları için özellikle özel kılan, birden fazla yelken bölgesine açılan kapı konumudur. Dramatik manzaralar ve antik kalıntılar için kuzeye Gökova Körfezi'ne gidin, güneye Datça'ya ve Yunan adalarına doğru yelken açın veya Fethiye yönündeki kıyı şeridini keşfedin.

Çevredeki kıyı şeridi, çam kaplı yarımadalardan kumlu plajlara, antik şehirlerden modern tatil beldelerine kadar inanılmaz çeşitlilik sunar.`,
        highlights: [
          "Muhteşem doğal liman",
          "Ege ve Akdeniz'e açılan kapı",
          "Tarihi kale ve eski şehir",
          "Büyük modern marina",
          "Yunan adalarına erişim",
          "Canlı gece hayatı ve yemek",
        ],
        bestTime: "Mayıs - Ekim arası, Haziran - Eylül arası en sıcak sular",
        idealFor: [
          "Çeşitlilik arayan gruplar",
          "Tarih ve kültür severler",
          "Aktif gezginler",
          "Yunan adası seçenekleri isteyenler",
          "Gece hayatı tutkunları",
        ],
        keyAttractions: [
          {
            name: "Marmaris Kalesi",
            description:
              "Panoramik manzaralar ve mükemmel bir arkeoloji müzesi sunan 16. yüzyıldan kalma Osmanlı kalesi.",
          },
          {
            name: "Datça Yarımadası",
            description:
              "Antik Knidos, badem bahçeleri ve Türkiye'nin en güzel plajlarından bazılarına sahip el değmemiş yarımada.",
          },
          {
            name: "Sedir Adası (Kleopatra Adası)",
            description:
              "Efsaneye göre Marcus Antonius'un Kleopatra için Mısır'dan getirdiği altın kumdan benzersiz bir plaja sahip.",
          },
          {
            name: "Turunç Koyu",
            description:
              "Marmaris'e kısa bir yelken mesafesinde, güzel bir plaj ve kristal berraklığında sulara sahip sevimli balıkçı köyü.",
          },
          {
            name: "Cennet Adası",
            description:
              "Körfezde plaj kulüpleri ve mükemmel şnorkel olanakları sunan popüler yüzme noktası.",
          },
        ],
      },
      de: {
        title: "Marmaris - Wo die Ägäis auf das Mittelmeer trifft",
        description:
          "Erkunden Sie Marmaris, eine lebhafte Küstenstadt in einer atemberaubenden Bucht, wo die Ägäis auf das Mittelmeer trifft und vielfältige Segelerlebnisse bietet.",
        longDescription: `Marmaris liegt in einem der dramatischsten Naturhäfen des Mittelmeers, wo bewaldete Berge in einer perfekt halbmondförmigen Bucht auf das Meer treffen. Diese strategische Lage, wo die Ägäis auf das Mittelmeer trifft, hat Marmaris seit der Antike zu einem maritimen Zentrum gemacht.

Heute ist Marmaris ein kosmopolitischer Ferienort, der für jeden etwas bietet - von der belebten Marina und der lebhaften Barstraße bis zu ruhigen Buchten und Naturreservaten nur wenige Minuten entfernt. Die Stadt verfügt über eine beeindruckende mittelalterliche Burg, ein charmantes Altstadtviertel und eine der größten Yachtmarinas der Türkei.

Was Marmaris für Yachtcharter besonders macht, ist seine Position als Tor zu mehreren Segelregionen. Fahren Sie nach Norden in den Golf von Gökova für dramatische Landschaften und antike Ruinen, segeln Sie nach Süden Richtung Datça und die griechischen Inseln, oder erkunden Sie die Küste Richtung Fethiye.

Die umliegende Küste bietet eine unglaubliche Vielfalt an Landschaften, von kiefernbewachsenen Halbinseln bis zu Sandstränden, von antiken Städten bis zu modernen Resorts.`,
        highlights: [
          "Spektakulärer Naturhafen",
          "Tor zur Ägäis und zum Mittelmeer",
          "Historische Burg und Altstadt",
          "Große moderne Marina",
          "Zugang zu griechischen Inseln",
          "Lebhaftes Nachtleben und Restaurants",
        ],
        bestTime: "Mai bis Oktober, Juni-September für wärmste Gewässer",
        idealFor: [
          "Gruppen, die Abwechslung suchen",
          "Geschichts- und Kulturliebhaber",
          "Aktive Reisende",
          "Diejenigen, die griechische Inseloptionen wünschen",
          "Nachtleben-Enthusiasten",
        ],
        keyAttractions: [
          {
            name: "Burg von Marmaris",
            description:
              "Eine osmanische Burg aus dem 16. Jahrhundert mit Panoramablick und einem ausgezeichneten Archäologiemuseum.",
          },
          {
            name: "Datça-Halbinsel",
            description:
              "Eine unberührte Halbinsel mit dem antiken Knidos, Mandelhainen und einigen der schönsten Strände der Türkei.",
          },
          {
            name: "Sedir-Insel (Kleopatra-Insel)",
            description:
              "Mit einem einzigartigen Strand aus goldenem Sand, der angeblich von Marcus Antonius für Kleopatra aus Ägypten gebracht wurde.",
          },
          {
            name: "Turunç-Bucht",
            description:
              "Ein charmantes Fischerdorf mit einem wunderschönen Strand und kristallklarem Wasser, nur eine kurze Segelfahrt von Marmaris entfernt.",
          },
          {
            name: "Paradise Island",
            description:
              "Ein beliebter Badeplatz in der Bucht mit Strandclubs und ausgezeichneten Schnorchelmöglichkeiten.",
          },
        ],
      },
    },
  },
  {
    id: "bodrum",
    slug: "bodrum",
    name: "Bodrum",
    image: "/assets/images/itineraries/bodrum.jpg",
    thumbnail: "/assets/images/itineraries/bodrum.jpg",
    relatedItineraries: ["bodrum-gokova-bodrum"],
    translations: {
      en: {
        title: "Bodrum - Ancient History Meets Modern Luxury",
        description:
          "Discover Bodrum, the legendary ancient Halicarnassus, now a sophisticated resort town blending rich history with cosmopolitan Mediterranean lifestyle.",
        longDescription: `Bodrum, ancient Halicarnassus, is where the Mausoleum - one of the Seven Wonders of the Ancient World - once stood. Today, this storied city on the Aegean coast has reinvented itself as Turkey's most glamorous resort destination while preserving its remarkable heritage.

The city is defined by its stunning medieval Castle of St. Peter, built by the Knights of St. John using stones from the ancient Mausoleum. The castle now houses one of the world's finest underwater archaeology museums.

Bodrum has long been a magnet for Turkey's artistic and intellectual elite, giving it a uniquely sophisticated atmosphere. The town features excellent restaurants, chic boutiques, and a famous nightlife scene, while the surrounding peninsula offers quieter villages, ancient ruins, and beautiful beaches.

For yacht charters, Bodrum provides easy access to the stunning Gokova Gulf and, uniquely, to the nearby Greek islands of Kos, Rhodes, and Symi, making it ideal for international sailing itineraries.`,
        highlights: [
          "Historic Castle of St. Peter",
          "Gateway to Greek islands",
          "Sophisticated marina scene",
          "Famous Bodrum nightlife",
          "Access to Gokova Gulf",
          "Rich ancient history",
        ],
        bestTime: "May through October, June-September for best weather",
        idealFor: [
          "History enthusiasts",
          "Greek island hoppers",
          "Nightlife lovers",
          "Culture seekers",
          "Sophisticated travelers",
        ],
        keyAttractions: [
          {
            name: "Castle of St. Peter",
            description:
              "A magnificent crusader castle housing the Museum of Underwater Archaeology with ancient shipwreck artifacts.",
          },
          {
            name: "Gokova Gulf",
            description:
              "A spectacular sailing destination with dramatic scenery, ancient ruins, and excellent swimming bays.",
          },
          {
            name: "Greek Islands",
            description:
              "Easy day sails to Kos, or longer voyages to Rhodes and Symi for international sailing adventures.",
          },
          {
            name: "Turkbuku",
            description:
              "An exclusive bay village that serves as a celebrity hangout and features excellent beach clubs.",
          },
          {
            name: "Gumusluk (Myndos)",
            description:
              "A charming artists' village built on ancient Myndos, famous for sunset fish restaurants.",
          },
        ],
      },
      tr: {
        title: "Bodrum - Antik Tarih ve Modern Lüksün Buluşması",
        description:
          "Efsanevi antik Halikarnas olan, şimdi zengin tarihi kozmopolit Akdeniz yaşam tarzıyla harmanlayan sofistike tatil beldesi Bodrum'u keşfedin.",
        longDescription: `Bodrum, antik Halikarnas, Dünyanın Yedi Harikası'ndan biri olan Mozole'nin bir zamanlar yükseldiği yerdir. Bugün Ege kıyısındaki bu hikaye dolu şehir, olağanüstü mirasını korurken Türkiye'nin en göz alıcı tatil destinasyonu olarak kendini yeniden keşfetti.

Şehir, antik Mozole'nin taşları kullanılarak St. John Şövalyeleri tarafından inşa edilen muhteşem ortaçağ St. Peter Kalesi ile tanımlanır. Kale şimdi dünyanın en iyi sualtı arkeoloji müzelerinden birine ev sahipliği yapmaktadır.

Bodrum uzun süredir Türkiye'nin sanatsal ve entelektüel elitinin çekim merkezi olmuş, bu da ona benzersiz sofistike bir atmosfer kazandırmıştır. Şehir mükemmel restoranlar, şık butikler ve ünlü gece hayatı sahnesi sunarken, çevredeki yarımada daha sessiz köyler, antik kalıntılar ve güzel plajlar sunmaktadır.

Yat kiralamaları için Bodrum, muhteşem Gökova Körfezi'ne ve benzersiz olarak yakın Yunan adaları Kos, Rodos ve Symi'ye kolay erişim sağlayarak uluslararası yelken rotaları için ideal kılmaktadır.`,
        highlights: [
          "Tarihi St. Peter Kalesi",
          "Yunan adalarına açılan kapı",
          "Sofistike marina ortamı",
          "Ünlü Bodrum gece hayatı",
          "Gökova Körfezi'ne erişim",
          "Zengin antik tarih",
        ],
        bestTime: "Mayıs - Ekim arası, Haziran - Eylül arası en iyi hava",
        idealFor: [
          "Tarih meraklıları",
          "Yunan adaları gezginleri",
          "Gece hayatı severler",
          "Kültür arayanlar",
          "Sofistike gezginler",
        ],
        keyAttractions: [
          {
            name: "St. Peter Kalesi",
            description:
              "Antik gemi enkazı eserleriyle Sualtı Arkeoloji Müzesi'ne ev sahipliği yapan muhteşem haçlı kalesi.",
          },
          {
            name: "Gökova Körfezi",
            description:
              "Dramatik manzaralar, antik kalıntılar ve mükemmel yüzme koyları sunan muhteşem yelken destinasyonu.",
          },
          {
            name: "Yunan Adaları",
            description:
              "Kos'a kolay günlük yelken veya uluslararası yelken maceraları için Rodos ve Symi'ye daha uzun yolculuklar.",
          },
          {
            name: "Türkbükü",
            description:
              "Ünlülerin buluşma noktası olan ve mükemmel plaj kulüplerine sahip özel koy köyü.",
          },
          {
            name: "Gümüşlük (Myndos)",
            description:
              "Antik Myndos üzerine kurulmuş, gün batımı balık restoranlarıyla ünlü büyüleyici sanatçı köyü.",
          },
        ],
      },
      de: {
        title: "Bodrum - Antike Geschichte trifft modernen Luxus",
        description:
          "Entdecken Sie Bodrum, das legendäre antike Halikarnassos, heute ein anspruchsvoller Ferienort, der reiche Geschichte mit kosmopolitischem mediterranem Lebensstil verbindet.",
        longDescription: `Bodrum, das antike Halikarnassos, ist der Ort, an dem einst das Mausoleum - eines der Sieben Weltwunder - stand. Heute hat sich diese geschichtsträchtige Stadt an der Ägäisküste als glamourösestes Reiseziel der Türkei neu erfunden und dabei ihr bemerkenswertes Erbe bewahrt.

Die Stadt wird durch ihre atemberaubende mittelalterliche Burg St. Peter definiert, die von den Johanniterrittern mit Steinen aus dem antiken Mausoleum erbaut wurde. Die Burg beherbergt heute eines der weltbesten Unterwasser-Archäologiemuseen.

Bodrum ist seit langem ein Anziehungspunkt für die künstlerische und intellektuelle Elite der Türkei, was ihm eine einzigartig anspruchsvolle Atmosphäre verleiht. Die Stadt bietet ausgezeichnete Restaurants, schicke Boutiquen und eine berühmte Nachtlebensszene, während die umliegende Halbinsel ruhigere Dörfer, antike Ruinen und wunderschöne Strände bietet.

Für Yachtcharter bietet Bodrum einfachen Zugang zum atemberaubenden Golf von Gökova und einzigartig zu den nahe gelegenen griechischen Inseln Kos, Rhodos und Symi, was es ideal für internationale Segelrouten macht.`,
        highlights: [
          "Historische Burg St. Peter",
          "Tor zu griechischen Inseln",
          "Anspruchsvolle Marina-Szene",
          "Berühmtes Bodrum-Nachtleben",
          "Zugang zum Golf von Gökova",
          "Reiche antike Geschichte",
        ],
        bestTime: "Mai bis Oktober, Juni-September für bestes Wetter",
        idealFor: [
          "Geschichtsbegeisterte",
          "Griechische Insel-Hopper",
          "Nachtleben-Liebhaber",
          "Kultursuchende",
          "Anspruchsvolle Reisende",
        ],
        keyAttractions: [
          {
            name: "Burg St. Peter",
            description:
              "Eine prächtige Kreuzritterburg, die das Museum für Unterwasserarchäologie mit antiken Schiffswrack-Artefakten beherbergt.",
          },
          {
            name: "Golf von Gökova",
            description:
              "Ein spektakuläres Segelziel mit dramatischer Landschaft, antiken Ruinen und ausgezeichneten Badebuchten.",
          },
          {
            name: "Griechische Inseln",
            description:
              "Einfache Tagessegeltouren nach Kos oder längere Reisen nach Rhodos und Symi für internationale Segelabenteuer.",
          },
          {
            name: "Türkbükü",
            description:
              "Ein exklusives Buchtdorf, das als Promi-Treffpunkt dient und ausgezeichnete Strandclubs bietet.",
          },
          {
            name: "Gümüşlük (Myndos)",
            description:
              "Ein charmantes Künstlerdorf, erbaut auf dem antiken Myndos, berühmt für Sonnenuntergangs-Fischrestaurants.",
          },
        ],
      },
    },
  },
  {
    id: "kekova",
    slug: "kekova",
    name: "Kekova",
    image: "/assets/images/itineraries/kekova.jpg",
    thumbnail: "/assets/images/itineraries/kekova.jpg",
    relatedItineraries: ["fethiye-kekova-fethiye"],
    translations: {
      en: {
        title: "Kekova - The Sunken City Mystery",
        description:
          "Visit Kekova, home to the famous Sunken City, ancient Lycian ruins, and some of Turkey's most pristine and protected sailing waters.",
        longDescription: `Kekova is one of Turkey's most magical destinations - a region of extraordinary natural beauty and fascinating ancient history, centered on the remarkable Sunken City. This protected marine area offers some of the Mediterranean's clearest waters and most atmospheric anchorages.

The Sunken City was partially submerged by earthquakes in the 2nd century AD, leaving ancient buildings, stairways, and harbor walls visible beneath the crystal-clear waters. The area is protected and can only be viewed from boats, making a yacht charter the perfect way to experience this wonder.

Opposite Kekova Island sits the picture-perfect village of Kaleköy (ancient Simena), crowned by a medieval castle and accessible only by boat. Time seems to have stood still here - there are no cars, no roads, just ancient walls, simple pensions, and friendly locals.

The surrounding coastline features numerous Lycian archaeological sites, including impressive sarcophagi, rock tombs, and ancient harbors, making this region a paradise for history lovers and nature enthusiasts alike.`,
        highlights: [
          "Famous Sunken City ruins",
          "Crystal-clear protected waters",
          "Car-free village of Kaleköy",
          "Ancient Lycian ruins",
          "Spectacular snorkeling",
          "Remote and unspoiled",
        ],
        bestTime: "May through October, with September offering magical light",
        idealFor: [
          "History and archaeology lovers",
          "Snorkeling enthusiasts",
          "Photographers",
          "Those seeking tranquility",
          "Adventure seekers",
        ],
        keyAttractions: [
          {
            name: "Sunken City",
            description:
              "Ancient Lycian city partially submerged by earthquakes, with ruins visible beneath the crystal-clear waters.",
          },
          {
            name: "Kaleköy (Simena)",
            description:
              "A charming car-free village with a medieval castle, Lycian tombs, and atmospheric waterfront restaurants.",
          },
          {
            name: "Üçağız",
            description:
              "A peaceful fishing village surrounded by Lycian sarcophagi and ancient harbor remains.",
          },
          {
            name: "Tersane Bay",
            description:
              "A stunning anchorage featuring ancient boatyard ruins and excellent swimming.",
          },
          {
            name: "Gökkaya Bay",
            description:
              "A spectacular pirate's cove with deep blue waters and dramatic rock formations.",
          },
        ],
      },
      tr: {
        title: "Kekova - Batık Şehir Gizemi",
        description:
          "Ünlü Batık Şehir'e, antik Likya kalıntılarına ve Türkiye'nin en bozulmamış ve korunaklı yelken sularından bazılarına ev sahipliği yapan Kekova'yı ziyaret edin.",
        longDescription: `Kekova, Türkiye'nin en büyülü destinasyonlarından biridir - olağanüstü doğal güzellik ve dikkat çekici Batık Şehir merkezli büyüleyici antik tarih bölgesi. Bu korumalı deniz alanı, Akdeniz'in en berrak sularından ve en atmosferik demir yerlerinden bazılarını sunmaktadır.

Batık Şehir, MS 2. yüzyılda depremlerle kısmen su altında kalmış, antik binalar, merdivenler ve liman duvarlarını kristal berraklığında suların altında görünür bırakmıştır. Alan koruma altındadır ve sadece teknelerden görülebilir, bu da yat kiralamasını bu harikayı deneyimlemenin mükemmel yolu yapmaktadır.

Kekova Adası'nın karşısında, ortaçağ kalesiyle taçlanmış ve sadece tekneyle ulaşılabilen resim gibi Kaleköy köyü (antik Simena) yer almaktadır. Zaman burada durmuş gibi görünüyor - araba yok, yol yok, sadece antik duvarlar, basit pansiyonlar ve dost canlısı yerel halk.

Çevredeki kıyı şeridi, etkileyici lahitler, kaya mezarları ve antik limanlar dahil çok sayıda Likya arkeolojik alanına ev sahipliği yaparak bu bölgeyi tarih severler ve doğa tutkunları için cennet haline getirmektedir.`,
        highlights: [
          "Ünlü Batık Şehir kalıntıları",
          "Kristal berraklığında korunaklı sular",
          "Arabasız Kaleköy köyü",
          "Antik Likya kalıntıları",
          "Muhteşem şnorkel",
          "Uzak ve bozulmamış",
        ],
        bestTime: "Mayıs - Ekim arası, Eylül büyüleyici ışık sunar",
        idealFor: [
          "Tarih ve arkeoloji severler",
          "Şnorkel tutkunları",
          "Fotoğrafçılar",
          "Huzur arayanlar",
          "Macera arayanlar",
        ],
        keyAttractions: [
          {
            name: "Batık Şehir",
            description:
              "Depremlerle kısmen su altında kalmış antik Likya şehri, kristal berraklığında suların altında görünen kalıntılarla.",
          },
          {
            name: "Kaleköy (Simena)",
            description:
              "Ortaçağ kalesi, Likya mezarları ve atmosferik sahil restoranlarına sahip büyüleyici arabasız köy.",
          },
          {
            name: "Üçağız",
            description:
              "Likya lahitleri ve antik liman kalıntılarıyla çevrili huzurlu balıkçı köyü.",
          },
          {
            name: "Tersane Koyu",
            description:
              "Antik tersane kalıntıları ve mükemmel yüzme imkanı sunan muhteşem demir yeri.",
          },
          {
            name: "Gökkaya Koyu",
            description:
              "Derin mavi suları ve dramatik kaya oluşumlarıyla muhteşem korsan koyu.",
          },
        ],
      },
      de: {
        title: "Kekova - Das Geheimnis der versunkenen Stadt",
        description:
          "Besuchen Sie Kekova, Heimat der berühmten Versunkenen Stadt, antiker lykischer Ruinen und einiger der unberührtesten und geschütztesten Segelgewässer der Türkei.",
        longDescription: `Kekova ist eines der magischsten Reiseziele der Türkei - eine Region von außergewöhnlicher natürlicher Schönheit und faszinierender antiker Geschichte, zentriert auf die bemerkenswerte Versunkene Stadt. Dieses geschützte Meeresgebiet bietet einige der klarsten Gewässer und atmosphärischsten Ankerplätze des Mittelmeers.

Die Versunkene Stadt wurde im 2. Jahrhundert n. Chr. durch Erdbeben teilweise unter Wasser gesetzt, wobei antike Gebäude, Treppen und Hafenmauern unter dem kristallklaren Wasser sichtbar blieben. Das Gebiet ist geschützt und kann nur von Booten aus betrachtet werden, was einen Yachtcharter zum perfekten Weg macht, dieses Wunder zu erleben.

Gegenüber der Insel Kekova liegt das bilderbuchschöne Dorf Kaleköy (das antike Simena), gekrönt von einer mittelalterlichen Burg und nur per Boot erreichbar. Die Zeit scheint hier stillgestanden zu sein - keine Autos, keine Straßen, nur antike Mauern, einfache Pensionen und freundliche Einheimische.

Die umliegende Küste beherbergt zahlreiche lykische archäologische Stätten, darunter beeindruckende Sarkophage, Felsengräber und antike Häfen, was diese Region zu einem Paradies für Geschichtsliebhaber und Naturbegeisterte gleichermaßen macht.`,
        highlights: [
          "Berühmte Ruinen der Versunkenen Stadt",
          "Kristallklare geschützte Gewässer",
          "Autofreies Dorf Kaleköy",
          "Antike lykische Ruinen",
          "Spektakuläres Schnorcheln",
          "Abgelegen und unberührt",
        ],
        bestTime: "Mai bis Oktober, September bietet magisches Licht",
        idealFor: [
          "Geschichts- und Archäologieliebhaber",
          "Schnorchel-Enthusiasten",
          "Fotografen",
          "Ruhe-Suchende",
          "Abenteurer",
        ],
        keyAttractions: [
          {
            name: "Versunkene Stadt",
            description:
              "Antike lykische Stadt, durch Erdbeben teilweise versunken, mit unter dem kristallklaren Wasser sichtbaren Ruinen.",
          },
          {
            name: "Kaleköy (Simena)",
            description:
              "Ein charmantes autofreies Dorf mit einer mittelalterlichen Burg, lykischen Gräbern und atmosphärischen Restaurants am Wasser.",
          },
          {
            name: "Üçağız",
            description:
              "Ein friedliches Fischerdorf, umgeben von lykischen Sarkophagen und antiken Hafenresten.",
          },
          {
            name: "Tersane-Bucht",
            description:
              "Ein atemberaubender Ankerplatz mit antiken Werftruinen und ausgezeichneten Bademöglichkeiten.",
          },
          {
            name: "Gökkaya-Bucht",
            description:
              "Eine spektakuläre Piratenbucht mit tiefblauem Wasser und dramatischen Felsformationen.",
          },
        ],
      },
    },
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((dest) => dest.slug === slug);
}

export function getAllDestinations(): Destination[] {
  return destinations;
}

// Helper function to get translated destination data
export function getTranslatedDestination(
  destination: Destination,
  language: Language
): Destination & DestinationTranslation {
  const translation = destination.translations[language] || destination.translations.en;
  return {
    ...destination,
    ...translation,
  };
}
