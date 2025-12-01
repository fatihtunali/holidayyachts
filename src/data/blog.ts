import { Language } from "@/contexts/LanguageContext";

export interface BlogPostTranslation {
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  image: string;
  category: "destinations" | "tips" | "guides" | "news";
  author: string;
  publishedAt: string;
  readTime: number;
  translations: Record<Language, BlogPostTranslation>;
}

export interface TranslatedBlogPost extends BlogPost, BlogPostTranslation {}

export const blogPosts: BlogPost[] = [
  {
    id: "best-time-blue-cruise-turkey",
    slug: "best-time-for-blue-cruise-turkey",
    image: "/assets/images/itineraries/kekova.jpg",
    category: "guides",
    author: "Holiday Yacht Team",
    publishedAt: "2024-11-15",
    readTime: 5,
    translations: {
      en: {
        title: "Best Time for a Blue Cruise in Turkey: Complete 2025 Guide",
        excerpt:
          "Discover the perfect months to sail Turkey's Turquoise Coast. From weather conditions to crowd levels, we cover everything you need to plan your ideal yacht charter.",
        content: `
## When is the Best Time for a Blue Cruise in Turkey?

The Turkish coast offers incredible sailing conditions from May through October, but each month brings its own unique advantages.

### Peak Season: July & August

**Weather:** Hot and sunny, 30-35°C air temperature, 25-28°C water temperature
**Pros:** Perfect swimming conditions, longest days, vibrant nightlife
**Cons:** Most crowded, highest prices, popular bays can be busy

This is ideal for families with school-age children and those who love warm weather and social atmospheres.

### Shoulder Season: June & September

**Weather:** Warm and pleasant, 25-30°C air, 22-25°C water
**Pros:** Fewer crowds, moderate prices, comfortable temperatures
**Cons:** Slightly cooler water in early June

Many experienced sailors consider these the best months - you get excellent weather without the peak season crowds.

### Early/Late Season: May & October

**Weather:** Mild, 20-25°C air, 18-22°C water
**Pros:** Lowest prices, empty bays, green landscapes
**Cons:** Cooler evenings, occasional rain, shorter days

Perfect for those seeking tranquility and the best value for money.

## Our Recommendation

For first-time visitors, we recommend **early June or mid-September**. You'll enjoy:
- Warm but not scorching temperatures
- Calm, crystal-clear waters
- Availability at the best anchorages
- Better rates than peak season

## Book Early for Best Selection

Popular yachts book 4-6 months in advance for summer dates. Contact us early to secure your preferred yacht and itinerary.
        `,
        tags: ["blue cruise", "turkey", "best time", "weather", "planning"],
      },
      tr: {
        title: "Türkiye'de Mavi Yolculuk İçin En İyi Zaman: 2025 Rehberi",
        excerpt:
          "Türkiye'nin Turkuaz Kıyısı'nda yelken açmak için en uygun ayları keşfedin. Hava koşullarından kalabalık seviyelerine kadar ideal yat kiralama planınız için bilmeniz gereken her şeyi ele alıyoruz.",
        content: `
## Türkiye'de Mavi Yolculuk İçin En İyi Zaman Ne Zaman?

Türk kıyıları Mayıs'tan Ekim'e kadar muhteşem yelken koşulları sunar, ancak her ayın kendine özgü avantajları vardır.

### Yüksek Sezon: Temmuz ve Ağustos

**Hava:** Sıcak ve güneşli, 30-35°C hava sıcaklığı, 25-28°C su sıcaklığı
**Artıları:** Mükemmel yüzme koşulları, en uzun günler, canlı gece hayatı
**Eksileri:** En kalabalık dönem, en yüksek fiyatlar, popüler koylar yoğun olabilir

Bu dönem okul çağındaki çocuklu aileler ve sıcak havayı ve sosyal ortamları sevenler için idealdir.

### Ara Sezon: Haziran ve Eylül

**Hava:** Ilık ve keyifli, 25-30°C hava, 22-25°C su
**Artıları:** Daha az kalabalık, uygun fiyatlar, konforlu sıcaklıklar
**Eksileri:** Haziran başında su biraz daha serin olabilir

Deneyimli denizcilerin çoğu bu ayları en iyi dönem olarak değerlendiriyor - yoğun sezon kalabalığı olmadan mükemmel hava koşullarının tadını çıkarırsınız.

### Erken/Geç Sezon: Mayıs ve Ekim

**Hava:** Ilıman, 20-25°C hava, 18-22°C su
**Artıları:** En düşük fiyatlar, boş koylar, yeşil manzaralar
**Eksileri:** Akşamları serin, ara sıra yağmur, daha kısa günler

Huzur arayanlar ve en iyi fiyat-performans oranını isteyenler için mükemmel.

## Önerimiz

İlk kez gelenler için **Haziran başı veya Eylül ortası** öneriyoruz. Şunların tadını çıkaracaksınız:
- Ilık ama bunaltıcı olmayan sıcaklıklar
- Sakin, kristal berraklığında sular
- En iyi demir yerlerinde uygunluk
- Yüksek sezonda daha iyi fiyatlar

## En İyi Seçim İçin Erken Rezervasyon Yapın

Popüler yatlar yaz tarihleri için 4-6 ay önceden rezerve edilir. Tercih ettiğiniz yat ve güzergahı güvence altına almak için bizimle erken iletişime geçin.
        `,
        tags: ["mavi yolculuk", "türkiye", "en iyi zaman", "hava", "planlama"],
      },
      de: {
        title: "Beste Zeit für eine Blaue Reise in der Türkei: Vollständiger Leitfaden 2025",
        excerpt:
          "Entdecken Sie die perfekten Monate, um an der türkischen Türkisküste zu segeln. Von Wetterbedingungen bis zu Besucherzahlen - wir behandeln alles, was Sie für Ihren idealen Yachtcharter planen müssen.",
        content: `
## Wann ist die beste Zeit für eine Blaue Reise in der Türkei?

Die türkische Küste bietet von Mai bis Oktober unglaubliche Segelbedingungen, aber jeder Monat bringt seine eigenen einzigartigen Vorteile.

### Hochsaison: Juli & August

**Wetter:** Heiß und sonnig, 30-35°C Lufttemperatur, 25-28°C Wassertemperatur
**Vorteile:** Perfekte Schwimmbedingungen, längste Tage, lebhaftes Nachtleben
**Nachteile:** Am meisten überfüllt, höchste Preise, beliebte Buchten können voll sein

Dies ist ideal für Familien mit schulpflichtigen Kindern und alle, die warmes Wetter und gesellige Atmosphäre lieben.

### Zwischensaison: Juni & September

**Wetter:** Warm und angenehm, 25-30°C Luft, 22-25°C Wasser
**Vorteile:** Weniger Menschenmassen, moderate Preise, angenehme Temperaturen
**Nachteile:** Etwas kühleres Wasser Anfang Juni

Viele erfahrene Segler betrachten diese Monate als die besten - Sie bekommen ausgezeichnetes Wetter ohne die Menschenmassen der Hochsaison.

### Früh-/Spätsaison: Mai & Oktober

**Wetter:** Mild, 20-25°C Luft, 18-22°C Wasser
**Vorteile:** Niedrigste Preise, leere Buchten, grüne Landschaften
**Nachteile:** Kühlere Abende, gelegentlich Regen, kürzere Tage

Perfekt für alle, die Ruhe und das beste Preis-Leistungs-Verhältnis suchen.

## Unsere Empfehlung

Für Erstbesucher empfehlen wir **Anfang Juni oder Mitte September**. Sie genießen:
- Warme, aber nicht sengende Temperaturen
- Ruhiges, kristallklares Wasser
- Verfügbarkeit an den besten Ankerplätzen
- Bessere Preise als in der Hochsaison

## Früh Buchen für die Beste Auswahl

Beliebte Yachten werden 4-6 Monate im Voraus für Sommertermine gebucht. Kontaktieren Sie uns früh, um Ihre bevorzugte Yacht und Route zu sichern.
        `,
        tags: ["blaue reise", "türkei", "beste zeit", "wetter", "planung"],
      },
    },
  },
  {
    id: "fethiye-vs-bodrum",
    slug: "fethiye-vs-bodrum-which-to-choose",
    image: "/assets/images/itineraries/fethiye.jpg",
    category: "destinations",
    author: "Holiday Yacht Team",
    publishedAt: "2024-10-28",
    readTime: 6,
    translations: {
      en: {
        title: "Fethiye vs Bodrum: Which Turkish Sailing Destination is Right for You?",
        excerpt:
          "Comparing Turkey's two most popular yacht charter destinations. Discover the unique characteristics of each region to choose your perfect blue cruise starting point.",
        content: `
## Fethiye vs Bodrum: The Ultimate Comparison

Both Fethiye and Bodrum offer world-class sailing, but they cater to different preferences. Here's our insider guide to choosing between them.

### Fethiye Region

**Best For:** Nature lovers, families, relaxation seekers

**Highlights:**
- Oludeniz Blue Lagoon - Turkey's most photographed beach
- Butterfly Valley - Pristine nature reserve
- 12 Islands Tour - Classic day sailing route
- Göcek - Upscale marina town with protected bays
- Kekova - Sunken city and ancient ruins

**Character:** More laid-back, natural beauty, protected waters, excellent for first-time sailors

### Bodrum Region

**Best For:** History buffs, nightlife lovers, Greek island hoppers

**Highlights:**
- Bodrum Castle - Impressive crusader fortress
- Greek Islands - Easy sailing to Kos, Rhodes, Symi
- Türkbükü - Celebrity hotspot
- Gümüşlük - Charming fishing village
- Ancient theater with sea views

**Character:** More cosmopolitan, historic sites, open waters, livelier atmosphere

### Which Should You Choose?

**Choose Fethiye if you want:**
- Calmer, more protected waters
- Focus on natural beauty and swimming
- Family-friendly atmosphere
- Best value for money

**Choose Bodrum if you want:**
- International Greek island hopping
- Historic sites and culture
- Vibrant nightlife options
- Celebrity marina scene

### Our Verdict

For a classic Turkish Blue Cruise focused on relaxation and natural beauty, **Fethiye is hard to beat**. It's why we base our fleet here - the combination of stunning scenery, protected anchorages, and authentic Turkish hospitality creates the perfect sailing holiday.

For those wanting to combine Turkey with Greek islands or seeking a more cosmopolitan experience, Bodrum is an excellent choice.
        `,
        tags: ["fethiye", "bodrum", "comparison", "destinations", "turkey"],
      },
      tr: {
        title: "Fethiye vs Bodrum: Hangi Türk Yelken Destinasyonu Size Uygun?",
        excerpt:
          "Türkiye'nin en popüler iki yat kiralama destinasyonunu karşılaştırıyoruz. Mükemmel mavi yolculuk başlangıç noktanızı seçmek için her bölgenin benzersiz özelliklerini keşfedin.",
        content: `
## Fethiye vs Bodrum: Kapsamlı Karşılaştırma

Hem Fethiye hem de Bodrum dünya standartlarında yelken imkanı sunar, ancak farklı tercihlere hitap ederler. İşte aralarında seçim yapmanız için içeriden bir rehber.

### Fethiye Bölgesi

**En Uygun:** Doğa severler, aileler, dinlenme arayanlar

**Öne Çıkanlar:**
- Ölüdeniz Mavi Lagünü - Türkiye'nin en çok fotoğraflanan plajı
- Kelebekler Vadisi - El değmemiş doğa koruma alanı
- 12 Adalar Turu - Klasik günlük yelken rotası
- Göcek - Korunaklı koyları olan lüks marina kasabası
- Kekova - Batık şehir ve antik kalıntılar

**Karakteri:** Daha sakin, doğal güzellik, korunaklı sular, ilk kez yelken açanlar için mükemmel

### Bodrum Bölgesi

**En Uygun:** Tarih meraklıları, gece hayatı severler, Yunan adalarına gitmek isteyenler

**Öne Çıkanlar:**
- Bodrum Kalesi - Etkileyici Haçlı kalesi
- Yunan Adaları - Kos, Rodos, Symi'ye kolay yelken
- Türkbükü - Ünlülerin buluşma noktası
- Gümüşlük - Şirin balıkçı köyü
- Deniz manzaralı antik tiyatro

**Karakteri:** Daha kozmopolit, tarihi mekanlar, açık sular, daha canlı atmosfer

### Hangisini Seçmelisiniz?

**Fethiye'yi seçin eğer istiyorsanız:**
- Daha sakin, daha korunaklı sular
- Doğal güzellik ve yüzme odaklı tatil
- Aile dostu atmosfer
- En iyi fiyat-performans oranı

**Bodrum'u seçin eğer istiyorsanız:**
- Uluslararası Yunan adası gezileri
- Tarihi mekanlar ve kültür
- Canlı gece hayatı seçenekleri
- Ünlü marina sahnesi

### Bizim Değerlendirmemiz

Rahatlama ve doğal güzelliğe odaklanan klasik bir Türk Mavi Yolculuğu için **Fethiye'yi yenmek zor**. Filomuzu burada konuşlandırmamızın nedeni bu - muhteşem manzara, korunaklı demirleme yerleri ve otantik Türk misafirperverliği kombinasyonu mükemmel bir yelken tatili yaratıyor.

Türkiye'yi Yunan adalarıyla birleştirmek isteyenler veya daha kozmopolit bir deneyim arayanlar için Bodrum mükemmel bir seçim.
        `,
        tags: ["fethiye", "bodrum", "karşılaştırma", "destinasyonlar", "türkiye"],
      },
      de: {
        title: "Fethiye vs Bodrum: Welches türkische Segelziel ist das Richtige für Sie?",
        excerpt:
          "Vergleich der zwei beliebtesten Yachtcharter-Destinationen der Türkei. Entdecken Sie die einzigartigen Eigenschaften jeder Region, um Ihren perfekten Startpunkt für die Blaue Reise zu wählen.",
        content: `
## Fethiye vs Bodrum: Der ultimative Vergleich

Sowohl Fethiye als auch Bodrum bieten erstklassiges Segeln, aber sie sprechen unterschiedliche Vorlieben an. Hier ist unser Insider-Leitfaden zur Auswahl.

### Region Fethiye

**Ideal für:** Naturliebhaber, Familien, Erholungssuchende

**Highlights:**
- Ölüdeniz Blaue Lagune - Türkeis meistfotografierter Strand
- Schmetterlingstal - Unberührtes Naturschutzgebiet
- 12-Inseln-Tour - Klassische Tagessegelroute
- Göcek - Gehobene Marina-Stadt mit geschützten Buchten
- Kekova - Versunkene Stadt und antike Ruinen

**Charakter:** Entspannter, natürliche Schönheit, geschützte Gewässer, ausgezeichnet für Erstsegler

### Region Bodrum

**Ideal für:** Geschichtsinteressierte, Nachtlebenliebhaber, Griechische-Inseln-Hopper

**Highlights:**
- Burg von Bodrum - Beeindruckende Kreuzritterburg
- Griechische Inseln - Einfaches Segeln nach Kos, Rhodos, Symi
- Türkbükü - Promi-Hotspot
- Gümüşlük - Charmantes Fischerdorf
- Antikes Theater mit Meerblick

**Charakter:** Kosmopolitischer, historische Stätten, offene Gewässer, lebhaftere Atmosphäre

### Welches sollten Sie wählen?

**Wählen Sie Fethiye wenn Sie wollen:**
- Ruhigere, geschütztere Gewässer
- Fokus auf natürliche Schönheit und Schwimmen
- Familienfreundliche Atmosphäre
- Bestes Preis-Leistungs-Verhältnis

**Wählen Sie Bodrum wenn Sie wollen:**
- Internationales Griechische-Inseln-Hopping
- Historische Stätten und Kultur
- Lebhafte Nachtlebenoptionen
- Promi-Marina-Szene

### Unser Fazit

Für eine klassische türkische Blaue Reise mit Fokus auf Entspannung und natürliche Schönheit ist **Fethiye schwer zu schlagen**. Deshalb haben wir hier unsere Flotte stationiert - die Kombination aus atemberaubender Landschaft, geschützten Ankerplätzen und authentischer türkischer Gastfreundschaft schafft den perfekten Segelurlaub.

Für diejenigen, die die Türkei mit griechischen Inseln kombinieren möchten oder eine kosmopolitischere Erfahrung suchen, ist Bodrum eine ausgezeichnete Wahl.
        `,
        tags: ["fethiye", "bodrum", "vergleich", "destinationen", "türkei"],
      },
    },
  },
  {
    id: "what-to-pack-yacht-charter",
    slug: "what-to-pack-for-yacht-charter-turkey",
    image: "/assets/images/about/about-h4.jpg",
    category: "tips",
    author: "Holiday Yacht Team",
    publishedAt: "2024-10-15",
    readTime: 4,
    translations: {
      en: {
        title: "What to Pack for Your Yacht Charter: The Complete Packing List",
        excerpt:
          "Our essential packing guide for a gulet cruise in Turkey. From clothing to gadgets, here's everything you need for the perfect sailing holiday.",
        content: `
## The Essential Yacht Charter Packing List

Packing for a yacht charter is different from a regular holiday. Space is limited, and you'll be living in swimwear most of the time. Here's our tried-and-tested packing guide.

### The Golden Rules

1. **Use soft bags** - Hard suitcases don't fit in cabin storage
2. **Pack light** - You'll need less than you think
3. **Layer up** - Evenings can be cool on the water
4. **Non-marking soles only** - Protects the teak deck

### Clothing Essentials

**Daytime:**
- 3-4 swimsuits (they need time to dry)
- Light cover-ups and sarongs
- Shorts and t-shirts
- Light long-sleeve shirt (sun protection)

**Evening:**
- 2-3 casual evening outfits
- Light cardigan or jacket
- One smart-casual outfit for marina dinners

**Footwear:**
- Deck shoes with non-marking white soles
- Reef shoes for rocky beaches
- Sandals for shore excursions

### Sun Protection

- High SPF sunscreen (reef-safe preferred)
- Wide-brimmed hat
- Quality sunglasses with strap
- UV protection rash vest

### Practical Items

- Waterproof phone case
- Dry bag for excursions
- Snorkeling mask (we provide equipment, but your own fits better)
- Motion sickness remedies if needed
- Basic first aid and any medications

### What We Provide

Don't worry about bringing:
- Beach towels
- Bed linens
- Snorkeling equipment
- Water toys (kayaks, paddleboards)
- Toiletries basics

### Pro Tips from Our Crew

1. Bring a light windbreaker - sea breezes can be fresh
2. Pack quick-dry fabrics
3. Leave the jewelry at home - you won't need it
4. Bring a good book - perfect for sundeck relaxation
5. A small backpack for shore excursions is handy

### What NOT to Bring

- High heels (seriously!)
- Excessive luggage
- Valuable jewelry
- Dark-soled shoes
- Hair dryers (we have them onboard)

Travel light, live light, and enjoy every moment of your blue cruise adventure!
        `,
        tags: ["packing", "tips", "preparation", "what to bring"],
      },
      tr: {
        title: "Yat Kiralama İçin Ne Paketlemeli: Eksiksiz Paketleme Listesi",
        excerpt:
          "Türkiye'de gulet turu için temel paketleme rehberimiz. Kıyafetten cihazlara kadar mükemmel yelken tatili için ihtiyacınız olan her şey.",
        content: `
## Temel Yat Kiralama Paketleme Listesi

Yat kiralama için bavul hazırlamak normal bir tatilden farklıdır. Alan sınırlıdır ve zamanınızın çoğunu mayo ile geçireceksiniz. İşte denenmiş ve test edilmiş paketleme rehberimiz.

### Altın Kurallar

1. **Yumuşak çantalar kullanın** - Sert valizler kabin deposuna sığmaz
2. **Hafif paketleyin** - Düşündüğünüzden daha azına ihtiyacınız olacak
3. **Kat kat giyin** - Akşamları denizde serin olabilir
4. **Sadece iz bırakmayan tabanlar** - Tik güverteyi korur

### Temel Kıyafetler

**Gündüz:**
- 3-4 mayo (kurumaları için zamana ihtiyaçları var)
- Hafif örtüler ve parolar
- Şort ve tişörtler
- Hafif uzun kollu gömlek (güneş koruması)

**Akşam:**
- 2-3 günlük akşam kıyafeti
- Hafif hırka veya ceket
- Marina yemekleri için bir şık-günlük kıyafet

**Ayakkabı:**
- İz bırakmayan beyaz tabanlı güverte ayakkabısı
- Kayalık plajlar için deniz ayakkabısı
- Kıyı gezileri için sandaletler

### Güneş Koruması

- Yüksek SPF güneş kremi (resif dostu tercih edilir)
- Geniş kenarlı şapka
- Kayışlı kaliteli güneş gözlüğü
- UV korumalı döşeme yeleği

### Pratik Eşyalar

- Su geçirmez telefon kılıfı
- Geziler için kuru çanta
- Şnorkel maskesi (ekipman sağlıyoruz, ancak kendinizinki daha iyi oturur)
- Gerekirse deniz tutması ilaçları
- Temel ilk yardım ve ilaçlar

### Bizim Sağladıklarımız

Getirmenize gerek yok:
- Plaj havluları
- Yatak takımları
- Şnorkel ekipmanı
- Su oyuncakları (kayaklar, kürekli tahtalar)
- Temel tuvalet malzemeleri

### Mürettebatımızdan Profesyonel İpuçları

1. Hafif bir rüzgarlık getirin - deniz esintileri serin olabilir
2. Çabuk kuruyan kumaşlar paketleyin
3. Mücevherleri evde bırakın - ihtiyacınız olmayacak
4. İyi bir kitap getirin - güneşlenme güvertesinde rahatlama için mükemmel
5. Kıyı gezileri için küçük bir sırt çantası kullanışlıdır

### GETİRMEMENİZ Gerekenler

- Yüksek topuklu ayakkabılar (ciddiyiz!)
- Aşırı bagaj
- Değerli mücevherler
- Koyu tabanlı ayakkabılar
- Saç kurutma makineleri (gemide var)

Hafif seyahat edin, hafif yaşayın ve mavi yolculuk maceranızın her anının tadını çıkarın!
        `,
        tags: ["paketleme", "ipuçları", "hazırlık", "ne getirmeli"],
      },
      de: {
        title: "Was Sie für Ihren Yachtcharter einpacken sollten: Die komplette Packliste",
        excerpt:
          "Unser essentieller Packführer für eine Gulet-Kreuzfahrt in der Türkei. Von Kleidung bis Gadgets - hier ist alles, was Sie für den perfekten Segelurlaub brauchen.",
        content: `
## Die essentielle Yachtcharter-Packliste

Das Packen für einen Yachtcharter unterscheidet sich von einem normalen Urlaub. Der Platz ist begrenzt, und Sie werden die meiste Zeit in Badekleidung verbringen. Hier ist unser bewährter Packführer.

### Die goldenen Regeln

1. **Verwenden Sie weiche Taschen** - Hartschalenkoffer passen nicht in den Kabinenspeicher
2. **Packen Sie leicht** - Sie brauchen weniger als Sie denken
3. **Schichten Sie** - Abende können kühl auf dem Wasser sein
4. **Nur nicht markierende Sohlen** - Schützt das Teakdeck

### Kleidungsgrundlagen

**Tagsüber:**
- 3-4 Badeanzüge (sie brauchen Zeit zum Trocknen)
- Leichte Überwürfe und Sarongs
- Shorts und T-Shirts
- Leichtes langärmeliges Hemd (Sonnenschutz)

**Abends:**
- 2-3 lässige Abendoutfits
- Leichte Strickjacke oder Jacke
- Ein smart-casual Outfit für Marina-Abendessen

**Schuhe:**
- Deckschuhe mit nicht markierenden weißen Sohlen
- Riffschuhe für felsige Strände
- Sandalen für Landausflüge

### Sonnenschutz

- Sonnencreme mit hohem LSF (riffsicher bevorzugt)
- Breitkrempiger Hut
- Qualitäts-Sonnenbrille mit Band
- UV-Schutz-Rashguard

### Praktische Gegenstände

- Wasserdichte Handyhülle
- Trockentasche für Ausflüge
- Schnorchelmaske (wir stellen Ausrüstung bereit, aber Ihre eigene passt besser)
- Mittel gegen Seekrankheit bei Bedarf
- Grundlegende Erste Hilfe und alle Medikamente

### Was wir bereitstellen

Keine Sorge, Sie müssen nicht mitbringen:
- Strandtücher
- Bettwäsche
- Schnorchelausrüstung
- Wasserspielzeug (Kajaks, Paddleboards)
- Grundlegende Toilettenartikel

### Profi-Tipps von unserer Crew

1. Bringen Sie eine leichte Windjacke mit - Meerbrisen können frisch sein
2. Packen Sie schnelltrocknende Stoffe
3. Lassen Sie den Schmuck zu Hause - Sie werden ihn nicht brauchen
4. Bringen Sie ein gutes Buch mit - perfekt für Entspannung auf dem Sonnendeck
5. Ein kleiner Rucksack für Landausflüge ist praktisch

### Was Sie NICHT mitbringen sollten

- High Heels (im Ernst!)
- Übermäßiges Gepäck
- Wertvoller Schmuck
- Schuhe mit dunklen Sohlen
- Haartrockner (wir haben sie an Bord)

Reisen Sie leicht, leben Sie leicht und genießen Sie jeden Moment Ihres Blaue-Reise-Abenteuers!
        `,
        tags: ["packen", "tipps", "vorbereitung", "was mitbringen"],
      },
    },
  },
  {
    id: "turkish-cuisine-on-gulet",
    slug: "turkish-cuisine-gulet-experience",
    image: "/assets/images/about/about-h41.jpg",
    category: "guides",
    author: "Holiday Yacht Team",
    publishedAt: "2024-09-20",
    readTime: 5,
    translations: {
      en: {
        title: "A Culinary Journey: Turkish Cuisine on Your Gulet Charter",
        excerpt:
          "Discover the delicious world of Turkish cuisine prepared fresh daily by our onboard chefs. From mezze to fresh seafood, every meal is a celebration.",
        content: `
## Turkish Cuisine: A Highlight of Your Blue Cruise

One of the most memorable aspects of a gulet charter is the exceptional food. Our onboard chefs prepare authentic Turkish cuisine using fresh, local ingredients daily.

### A Typical Day of Dining

**Breakfast (08:30-10:00)**
A lavish spread awaits you each morning:
- Fresh bread from local bakeries
- Turkish cheeses and olives
- Organic eggs prepared your way
- Honey, jams, and clotted cream
- Fresh fruits and vegetables
- Turkish tea and coffee

**Lunch (13:00-14:00)**
Light but satisfying meals perfect for warm days:
- Fresh salads with local produce
- Grilled fish or chicken
- Mediterranean mezze selection
- Pasta dishes
- Turkish pide (flatbread)

**Dinner (20:00-21:30)**
The main culinary event:
- Multiple mezze starters
- Fresh catch of the day
- Grilled meats or seafood
- Traditional Turkish dishes
- Homemade desserts

### Signature Turkish Dishes You'll Enjoy

- **Mezze** - Small dishes like hummus, stuffed vine leaves, eggplant salads
- **Fresh Fish** - Caught locally, grilled to perfection
- **Köfte** - Turkish meatballs with herbs and spices
- **İmam Bayıldı** - Stuffed eggplant in olive oil
- **Baklava** - Layered pastry with nuts and honey
- **Turkish Delight** - Sweet treats with tea

### Dietary Requirements

Our chefs happily accommodate:
- Vegetarian and vegan diets
- Gluten-free requirements
- Food allergies
- Children's preferences
- Religious dietary needs

Please inform us when booking so we can prepare accordingly.

### Fresh and Local

We source ingredients from:
- Morning fish markets
- Local farmers' markets
- Regional producers
- Onboard herb garden

Everything is prepared fresh - no pre-packaged meals here!

### The Social Experience

Meals on a gulet are social occasions. Dining together on the aft deck under the stars, with the gentle sound of waves, creates unforgettable memories. It's not just food - it's an experience.
        `,
        tags: ["food", "cuisine", "turkish", "dining", "chef"],
      },
      tr: {
        title: "Bir Lezzet Yolculuğu: Gulet Kiralamada Türk Mutfağı",
        excerpt:
          "Gemideki şeflerimiz tarafından her gün taze hazırlanan Türk mutfağının lezzetli dünyasını keşfedin. Mezeden taze deniz ürünlerine, her öğün bir kutlama.",
        content: `
## Türk Mutfağı: Mavi Yolculuğunuzun Öne Çıkanı

Gulet kiralamanın en unutulmaz yönlerinden biri olağanüstü yemeklerdir. Gemideki şeflerimiz her gün taze, yerel malzemeler kullanarak otantik Türk mutfağı hazırlar.

### Tipik Bir Yemek Günü

**Kahvaltı (08:30-10:00)**
Her sabah zengin bir sofra sizi bekliyor:
- Yerel fırınlardan taze ekmek
- Türk peynirleri ve zeytinler
- İstediğiniz şekilde hazırlanan organik yumurtalar
- Bal, reçeller ve kaymak
- Taze meyveler ve sebzeler
- Türk çayı ve kahvesi

**Öğle Yemeği (13:00-14:00)**
Sıcak günler için mükemmel, hafif ama doyurucu yemekler:
- Yerel ürünlerle taze salatalar
- Izgara balık veya tavuk
- Akdeniz meze seçkisi
- Makarna yemekleri
- Türk pidesi

**Akşam Yemeği (20:00-21:30)**
Ana mutfak etkinliği:
- Çeşitli meze başlangıçlar
- Günün taze avı
- Izgara etler veya deniz ürünleri
- Geleneksel Türk yemekleri
- Ev yapımı tatlılar

### Tadacağınız İmza Türk Yemekleri

- **Meze** - Humus, sarma, patlıcan salataları gibi küçük tabaklar
- **Taze Balık** - Yerelde avlanan, mükemmelce ızgara edilmiş
- **Köfte** - Otlar ve baharatlarla Türk köftesi
- **İmam Bayıldı** - Zeytinyağlı dolma patlıcan
- **Baklava** - Fındık ve ballı katmanlı hamur işi
- **Lokum** - Çayla servis edilen tatlı ikramlar

### Diyet Gereksinimleri

Şeflerimiz memnuniyetle karşılar:
- Vejetaryen ve vegan diyetler
- Glutensiz gereksinimler
- Gıda alerjileri
- Çocuk tercihleri
- Dini beslenme ihtiyaçları

Lütfen buna göre hazırlanabilmemiz için rezervasyon yaparken bizi bilgilendirin.

### Taze ve Yerel

Malzemeleri şuralardan temin ediyoruz:
- Sabah balık pazarları
- Yerel çiftçi pazarları
- Bölgesel üreticiler
- Gemideki bahçemiz

Her şey taze hazırlanır - burada paketlenmiş yemek yok!

### Sosyal Deneyim

Gulette yemekler sosyal olaylardır. Yıldızların altında, dalgaların nazik sesiyle kıç güvertede birlikte yemek yemek unutulmaz anılar yaratır. Bu sadece yemek değil - bir deneyim.
        `,
        tags: ["yemek", "mutfak", "türk", "yemek yeme", "şef"],
      },
      de: {
        title: "Eine kulinarische Reise: Türkische Küche auf Ihrem Gulet-Charter",
        excerpt:
          "Entdecken Sie die köstliche Welt der türkischen Küche, die täglich frisch von unseren Bordköchen zubereitet wird. Von Mezze bis frische Meeresfrüchte - jede Mahlzeit ist ein Fest.",
        content: `
## Türkische Küche: Ein Höhepunkt Ihrer Blauen Reise

Einer der unvergesslichsten Aspekte eines Gulet-Charters ist das außergewöhnliche Essen. Unsere Bordköche bereiten täglich authentische türkische Küche mit frischen, lokalen Zutaten zu.

### Ein typischer Essenstag

**Frühstück (08:30-10:00)**
Ein üppiges Buffet erwartet Sie jeden Morgen:
- Frisches Brot von lokalen Bäckereien
- Türkische Käse und Oliven
- Bio-Eier nach Ihrem Geschmack zubereitet
- Honig, Marmeladen und Clotted Cream
- Frisches Obst und Gemüse
- Türkischer Tee und Kaffee

**Mittagessen (13:00-14:00)**
Leichte, aber sättigende Mahlzeiten perfekt für warme Tage:
- Frische Salate mit lokalen Produkten
- Gegrillter Fisch oder Hühnchen
- Mediterrane Mezze-Auswahl
- Pasta-Gerichte
- Türkisches Pide (Fladenbrot)

**Abendessen (20:00-21:30)**
Das kulinarische Hauptereignis:
- Mehrere Mezze-Vorspeisen
- Frischer Tagesfang
- Gegrilltes Fleisch oder Meeresfrüchte
- Traditionelle türkische Gerichte
- Hausgemachte Desserts

### Türkische Signature-Gerichte, die Sie genießen werden

- **Mezze** - Kleine Gerichte wie Hummus, gefüllte Weinblätter, Auberginensalate
- **Frischer Fisch** - Lokal gefangen, perfekt gegrillt
- **Köfte** - Türkische Fleischbällchen mit Kräutern und Gewürzen
- **İmam Bayıldı** - Gefüllte Aubergine in Olivenöl
- **Baklava** - Schichtgebäck mit Nüssen und Honig
- **Lokum** - Süße Leckereien zum Tee

### Ernährungsanforderungen

Unsere Köche berücksichtigen gerne:
- Vegetarische und vegane Ernährung
- Glutenfreie Anforderungen
- Lebensmittelallergien
- Kinderpräferenzen
- Religiöse Ernährungsbedürfnisse

Bitte informieren Sie uns bei der Buchung, damit wir entsprechend vorbereiten können.

### Frisch und Lokal

Wir beziehen Zutaten von:
- Morgendlichen Fischmärkten
- Lokalen Bauernmärkten
- Regionalen Erzeugern
- Bordkräutergarten

Alles wird frisch zubereitet - keine vorverpackten Mahlzeiten hier!

### Das soziale Erlebnis

Mahlzeiten auf einem Gulet sind gesellschaftliche Anlässe. Gemeinsam auf dem Achterdeck unter den Sternen zu speisen, mit dem sanften Klang der Wellen, schafft unvergessliche Erinnerungen. Es ist nicht nur Essen - es ist ein Erlebnis.
        `,
        tags: ["essen", "küche", "türkisch", "speisen", "koch"],
      },
    },
  },
];

export function getTranslatedBlogPost(
  post: BlogPost,
  language: Language
): TranslatedBlogPost {
  const translation = post.translations[language] || post.translations.en;
  return { ...post, ...translation };
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return blogPosts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
