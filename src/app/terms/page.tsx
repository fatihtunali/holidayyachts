"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FileText, Mail, Phone } from "lucide-react";

export default function TermsPage() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      title: "Terms & Conditions",
      lastUpdated: "Last updated: January 2025",
      intro: "Welcome to Holiday Yacht. These Terms and Conditions govern your use of our website and yacht charter services. By accessing our website or making a booking, you agree to be bound by these terms. Please read them carefully.",
      sections: [
        {
          title: "1. Definitions",
          content: `In these Terms and Conditions:

• **"Company," "we," "us," "our"** refers to Holiday Yacht Charter, operated by Light Tours, Fethiye, Turkey.
• **"Client," "you," "your"** refers to the person making the booking and all guests included in the charter.
• **"Charter"** refers to the yacht rental service provided by us.
• **"Yacht"** refers to the vessel booked for the charter period.
• **"Charter Period"** refers to the dates specified in the booking confirmation.
• **"Charter Fee"** refers to the total cost of the yacht rental as specified in the booking.`
        },
        {
          title: "2. Booking and Payment",
          content: `**2.1 Booking Process**
• All bookings are subject to availability and confirmation by Holiday Yacht.
• A booking is confirmed only after we receive the required deposit and send written confirmation.
• The person making the booking must be at least 18 years old and authorized to accept these terms on behalf of all guests.

**2.2 Payment Terms**
• A deposit of 50% of the total charter fee is required to confirm the booking.
• The remaining 50% balance must be paid no later than 30 days before the charter start date.
• For bookings made within 30 days of the charter date, full payment is required at the time of booking.
• Accepted payment methods: Bank transfer, credit card (Visa, MasterCard).

**2.3 Security Deposit**
• A security deposit may be required and will be specified in your booking confirmation.
• The deposit will be returned within 7 days after the charter ends, minus any deductions for damages or additional expenses.`
        },
        {
          title: "3. Cancellation Policy",
          content: `**3.1 Cancellation by Client**
• Cancellation more than 60 days before departure: Full refund minus €500 administration fee.
• Cancellation 30-60 days before departure: 50% of total charter fee retained.
• Cancellation less than 30 days before departure: No refund.
• All cancellations must be made in writing via email.

**3.2 Cancellation by Company**
• If we must cancel due to unforeseen circumstances, you will receive a full refund or the option to rebook.
• We are not liable for additional expenses incurred due to cancellation.

**3.3 Travel Insurance**
• We strongly recommend purchasing comprehensive travel insurance covering trip cancellation, medical emergencies, and personal belongings.
• Holiday Yacht is not responsible for any losses not covered by insurance.`
        },
        {
          title: "4. Charter Conditions",
          content: `**4.1 Embarkation and Disembarkation**
• Standard embarkation: 16:00 on the first day of the charter.
• Standard disembarkation: 10:00 on the last day of the charter.
• Early embarkation or late disembarkation may be arranged for an additional fee, subject to availability.

**4.2 Itinerary**
• Suggested itineraries are for guidance only.
• The Captain has final authority on navigation routes based on weather, sea conditions, and safety considerations.
• No refunds will be given for changes to the itinerary due to weather or safety reasons.

**4.3 Crew and Services**
• All yachts include a professional crew (Captain, cook, and deck hand).
• Crew accommodation and meals are included in the charter fee.
• The crew is responsible for the safe operation of the yacht and providing agreed services.

**4.4 Guest Capacity**
• The maximum number of guests must not exceed the number specified in the booking.
• Overnight guests not listed in the booking are not permitted without prior approval.`
        },
        {
          title: "5. Client Responsibilities",
          content: `**5.1 Conduct**
• Guests must follow all instructions given by the Captain and crew regarding safety.
• Illegal activities, including possession or use of illegal substances, are strictly prohibited.
• Guests must treat the yacht and equipment with care and respect.

**5.2 Damages**
• Clients are responsible for any damage to the yacht, equipment, or furnishings caused by negligence or misuse.
• Damage costs will be deducted from the security deposit or invoiced separately.

**5.3 Personal Belongings**
• Holiday Yacht is not responsible for loss, theft, or damage to personal belongings.
• Guests are advised to secure valuables and purchase appropriate travel insurance.

**5.4 Special Requirements**
• Dietary requirements, allergies, and medical conditions must be communicated at the time of booking.
• We will make reasonable efforts to accommodate special requests but cannot guarantee all requests.`
        },
        {
          title: "6. What's Included & Excluded",
          content: `**6.1 Included in Charter Fee**
• Professional crew (Captain, cook, deck hand)
• Full board meals (breakfast, lunch, dinner, snacks)
• Bed linens and towels
• Use of standard water sports equipment (varies by yacht)
• Port and harbor fees within the standard route
• VAT and applicable taxes

**6.2 Not Included**
• Fuel costs (charged separately based on consumption)
• Alcoholic beverages and special drink requests
• Marina fees outside standard route
• Tips for crew (discretionary, typically 10-15% of charter fee)
• Water sports equipment rentals (jetski, parasailing, etc.)
• Airport transfers
• Travel insurance`
        },
        {
          title: "7. Liability and Insurance",
          content: `**7.1 Company Liability**
• Holiday Yacht maintains comprehensive marine insurance for all vessels.
• Our liability is limited to the charter fee paid. We are not liable for:
  - Indirect or consequential losses
  - Personal injury except where caused by our negligence
  - Loss of enjoyment due to weather conditions
  - Costs arising from flight delays or cancellations

**7.2 Force Majeure**
• We are not liable for failure to perform due to circumstances beyond our control, including but not limited to:
  - Natural disasters, severe weather conditions
  - War, terrorism, civil unrest
  - Government actions, travel restrictions
  - Epidemics or pandemics`
        },
        {
          title: "8. Health and Safety",
          content: `**8.1 Medical Conditions**
• Guests must disclose any medical conditions that may affect their ability to participate in the charter safely.
• Guests with serious medical conditions should obtain medical clearance before booking.

**8.2 Swimming and Water Activities**
• Swimming and water activities are at guests' own risk.
• Children must be supervised at all times near or in the water.
• The Captain may prohibit swimming in certain areas due to safety concerns.

**8.3 Safety Equipment**
• Life jackets and safety equipment are provided on all yachts.
• Guests must attend the safety briefing at the start of the charter.`
        },
        {
          title: "9. Complaints and Disputes",
          content: `**9.1 Complaints Procedure**
• Any complaints during the charter should be reported immediately to the Captain.
• Written complaints must be submitted within 14 days of the charter end date.
• We will respond to all complaints within 28 days.

**9.2 Dispute Resolution**
• We aim to resolve all disputes amicably through direct communication.
• If a dispute cannot be resolved, it shall be subject to the exclusive jurisdiction of Turkish courts.
• These terms are governed by the laws of the Republic of Turkey.`
        },
        {
          title: "10. Website Use",
          content: `**10.1 Intellectual Property**
• All content on this website, including text, images, and logos, is owned by Holiday Yacht or its licensors.
• You may not reproduce, distribute, or use our content without written permission.

**10.2 Accuracy of Information**
• We strive to ensure all information on our website is accurate and up-to-date.
• Prices and availability are subject to change without notice.
• Images are for illustration purposes and actual yachts may vary slightly.

**10.3 Third-Party Links**
• Our website may contain links to third-party websites.
• We are not responsible for the content or privacy practices of external sites.`
        },
        {
          title: "11. Changes to Terms",
          content: `• We reserve the right to modify these Terms and Conditions at any time.
• Changes will be effective when posted on our website.
• The terms applicable to your booking are those in effect at the time of booking confirmation.
• Continued use of our services after changes constitutes acceptance of the modified terms.`
        },
        {
          title: "12. Contact Information",
          content: `For questions about these Terms and Conditions or your booking, please contact us:

**Holiday Yacht Charter**
Operated by: Light Tours
Address: Fethiye Marina, Muğla, Turkey
Email: info@holidayyachts.com
Phone: +90 252 614 47 57
TURSAB License: A-1234

Office Hours: Monday - Saturday, 09:00 - 18:00 (Turkey Time)`
        }
      ]
    },
    tr: {
      title: "Şartlar ve Koşullar",
      lastUpdated: "Son güncelleme: Ocak 2025",
      intro: "Holiday Yacht'a hoş geldiniz. Bu Şartlar ve Koşullar, web sitemizi ve yat kiralama hizmetlerimizi kullanımınızı düzenler. Web sitemize erişerek veya rezervasyon yaparak bu şartlara bağlı olmayı kabul etmiş olursunuz. Lütfen bunları dikkatlice okuyun.",
      sections: [
        {
          title: "1. Tanımlar",
          content: `Bu Şartlar ve Koşullarda:

• **"Şirket," "biz," "bizim"** Holiday Yacht Charter, Light Tours tarafından işletilen, Fethiye, Türkiye'yi ifade eder.
• **"Müşteri," "siz," "sizin"** rezervasyonu yapan kişi ve kiralama dahil tüm misafirleri ifade eder.
• **"Kiralama"** tarafımızca sağlanan yat kiralama hizmetini ifade eder.
• **"Yat"** kiralama dönemi için rezerve edilen tekneyi ifade eder.
• **"Kiralama Dönemi"** rezervasyon onayında belirtilen tarihleri ifade eder.
• **"Kiralama Ücreti"** rezervasyonda belirtilen toplam yat kiralama maliyetini ifade eder.`
        },
        {
          title: "2. Rezervasyon ve Ödeme",
          content: `**2.1 Rezervasyon Süreci**
• Tüm rezervasyonlar müsaitliğe ve Holiday Yacht tarafından onaya tabidir.
• Bir rezervasyon, yalnızca gerekli depozitoyu aldıktan ve yazılı onay gönderdikten sonra onaylanır.
• Rezervasyonu yapan kişi en az 18 yaşında olmalı ve tüm misafirler adına bu şartları kabul etme yetkisine sahip olmalıdır.

**2.2 Ödeme Koşulları**
• Rezervasyonu onaylamak için toplam kiralama ücretinin %50'si depozito olarak gereklidir.
• Kalan %50 bakiye, kiralama başlangıç tarihinden en geç 30 gün önce ödenmelidir.
• Kiralama tarihinden 30 gün içinde yapılan rezervasyonlar için rezervasyon anında tam ödeme gereklidir.
• Kabul edilen ödeme yöntemleri: Banka havalesi, kredi kartı (Visa, MasterCard).

**2.3 Güvenlik Depozitosu**
• Bir güvenlik depozitosu gerekebilir ve rezervasyon onayınızda belirtilecektir.
• Depozito, kiralama sona erdikten sonra 7 gün içinde, hasar veya ek masraflar için kesintiler düşülerek iade edilecektir.`
        },
        {
          title: "3. İptal Politikası",
          content: `**3.1 Müşteri Tarafından İptal**
• Hareket tarihinden 60 günden fazla önce iptal: €500 yönetim ücreti düşülerek tam iade.
• Hareket tarihinden 30-60 gün önce iptal: Toplam kiralama ücretinin %50'si alıkonur.
• Hareket tarihinden 30 günden az önce iptal: İade yok.
• Tüm iptaller e-posta yoluyla yazılı olarak yapılmalıdır.

**3.2 Şirket Tarafından İptal**
• Öngörülemeyen koşullar nedeniyle iptal etmemiz gerekirse, tam iade veya yeniden rezervasyon seçeneği alacaksınız.
• İptal nedeniyle oluşan ek masraflardan sorumlu değiliz.

**3.3 Seyahat Sigortası**
• Seyahat iptali, tıbbi acil durumlar ve kişisel eşyaları kapsayan kapsamlı seyahat sigortası satın almanızı şiddetle tavsiye ederiz.
• Holiday Yacht, sigorta kapsamında olmayan kayıplardan sorumlu değildir.`
        },
        {
          title: "4. Kiralama Koşulları",
          content: `**4.1 Biniş ve İniş**
• Standart biniş: Kiralamanın ilk günü saat 16:00.
• Standart iniş: Kiralamanın son günü saat 10:00.
• Erken biniş veya geç iniş, müsaitliğe bağlı olarak ek ücret karşılığında düzenlenebilir.

**4.2 Güzergah**
• Önerilen güzergahlar yalnızca rehberlik amaçlıdır.
• Kaptan, hava durumu, deniz koşulları ve güvenlik değerlendirmelerine dayanarak navigasyon rotaları konusunda nihai yetkiye sahiptir.
• Hava veya güvenlik nedenleriyle güzergah değişiklikleri için iade yapılmayacaktır.

**4.3 Mürettebat ve Hizmetler**
• Tüm yatlar profesyonel bir mürettebat içerir (Kaptan, aşçı ve güverte görevlisi).
• Mürettebat konaklama ve yemekleri kiralama ücretine dahildir.
• Mürettebat, yatın güvenli işletiminden ve kararlaştırılan hizmetlerin sağlanmasından sorumludur.

**4.4 Misafir Kapasitesi**
• Maksimum misafir sayısı, rezervasyonda belirtilen sayıyı aşmamalıdır.
• Rezervasyonda listelenmemiş gecelik misafirlere önceden onay alınmadan izin verilmez.`
        },
        {
          title: "5. Müşteri Sorumlulukları",
          content: `**5.1 Davranış**
• Misafirler, güvenlikle ilgili Kaptan ve mürettebat tarafından verilen tüm talimatları izlemelidir.
• Yasadışı maddelerin bulundurulması veya kullanılması dahil yasadışı faaliyetler kesinlikle yasaktır.
• Misafirler yata ve ekipmana özen ve saygıyla davranmalıdır.

**5.2 Hasarlar**
• Müşteriler, ihmal veya yanlış kullanımdan kaynaklanan yat, ekipman veya mobilyalardaki herhangi bir hasardan sorumludur.
• Hasar maliyetleri güvenlik depozitosundan düşülecek veya ayrıca faturalandırılacaktır.

**5.3 Kişisel Eşyalar**
• Holiday Yacht, kişisel eşyaların kaybı, çalınması veya hasarından sorumlu değildir.
• Misafirlerin değerli eşyalarını güvence altına almaları ve uygun seyahat sigortası satın almaları önerilir.

**5.4 Özel Gereksinimler**
• Diyet gereksinimleri, alerjiler ve tıbbi durumlar rezervasyon sırasında bildirilmelidir.
• Özel istekleri karşılamak için makul çaba göstereceğiz ancak tüm istekleri garanti edemeyiz.`
        },
        {
          title: "6. Dahil Olan ve Olmayan Hizmetler",
          content: `**6.1 Kiralama Ücretine Dahil**
• Profesyonel mürettebat (Kaptan, aşçı, güverte görevlisi)
• Tam pansiyon yemekler (kahvaltı, öğle yemeği, akşam yemeği, atıştırmalıklar)
• Yatak çarşafları ve havlular
• Standart su sporları ekipmanlarının kullanımı (yata göre değişir)
• Standart rota içindeki liman ve marina ücretleri
• KDV ve geçerli vergiler

**6.2 Dahil Olmayan**
• Yakıt maliyetleri (tüketime göre ayrıca ücretlendirilir)
• Alkollü içecekler ve özel içecek talepleri
• Standart rota dışındaki marina ücretleri
• Mürettebat için bahşişler (isteğe bağlı, genellikle kiralama ücretinin %10-15'i)
• Su sporları ekipmanı kiralamaları (jet ski, parasailing, vb.)
• Havalimanı transferleri
• Seyahat sigortası`
        },
        {
          title: "7. Sorumluluk ve Sigorta",
          content: `**7.1 Şirket Sorumluluğu**
• Holiday Yacht, tüm tekneler için kapsamlı deniz sigortası sağlar.
• Sorumluluğumuz ödenen kiralama ücreti ile sınırlıdır. Şunlardan sorumlu değiliz:
  - Dolaylı veya sonuç olarak ortaya çıkan kayıplar
  - İhmalimizden kaynaklanmayan kişisel yaralanmalar
  - Hava koşulları nedeniyle keyif kaybı
  - Uçuş gecikmelerinden veya iptallerinden kaynaklanan maliyetler

**7.2 Mücbir Sebepler**
• Kontrolümüz dışındaki koşullar nedeniyle yerine getiremememizden sorumlu değiliz, bunlar arasında:
  - Doğal afetler, şiddetli hava koşulları
  - Savaş, terör, sivil kargaşa
  - Hükümet eylemleri, seyahat kısıtlamaları
  - Salgınlar veya pandemiler`
        },
        {
          title: "8. Sağlık ve Güvenlik",
          content: `**8.1 Tıbbi Durumlar**
• Misafirler, kiralamaya güvenli bir şekilde katılma yeteneklerini etkileyebilecek tıbbi durumları açıklamalıdır.
• Ciddi tıbbi durumları olan misafirler rezervasyondan önce tıbbi onay almalıdır.

**8.2 Yüzme ve Su Aktiviteleri**
• Yüzme ve su aktiviteleri misafirlerin kendi sorumluluğundadır.
• Çocuklar su yakınında veya içinde her zaman gözetim altında tutulmalıdır.
• Kaptan, güvenlik endişeleri nedeniyle belirli alanlarda yüzmeyi yasaklayabilir.

**8.3 Güvenlik Ekipmanı**
• Tüm yatlarda can yelekleri ve güvenlik ekipmanı sağlanır.
• Misafirler kiralamanın başında güvenlik brifingine katılmalıdır.`
        },
        {
          title: "9. Şikayetler ve Anlaşmazlıklar",
          content: `**9.1 Şikayet Prosedürü**
• Kiralama sırasındaki şikayetler derhal Kaptana bildirilmelidir.
• Yazılı şikayetler kiralama bitiş tarihinden itibaren 14 gün içinde sunulmalıdır.
• Tüm şikayetlere 28 gün içinde yanıt vereceğiz.

**9.2 Anlaşmazlık Çözümü**
• Tüm anlaşmazlıkları doğrudan iletişim yoluyla dostane bir şekilde çözmeyi hedefliyoruz.
• Bir anlaşmazlık çözülemezse, Türk mahkemelerinin münhasır yargı yetkisine tabi olacaktır.
• Bu şartlar Türkiye Cumhuriyeti yasalarına tabidir.`
        },
        {
          title: "10. Web Sitesi Kullanımı",
          content: `**10.1 Fikri Mülkiyet**
• Bu web sitesindeki metin, resimler ve logolar dahil tüm içerik Holiday Yacht veya lisans verenlerine aittir.
• İçeriğimizi yazılı izin olmadan çoğaltamaz, dağıtamaz veya kullanamazsınız.

**10.2 Bilgi Doğruluğu**
• Web sitemizdeki tüm bilgilerin doğru ve güncel olmasını sağlamaya çalışıyoruz.
• Fiyatlar ve müsaitlik önceden haber vermeksizin değişebilir.
• Görseller illüstrasyon amaçlıdır ve gerçek yatlar biraz farklılık gösterebilir.

**10.3 Üçüncü Taraf Bağlantıları**
• Web sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir.
• Harici sitelerin içeriğinden veya gizlilik uygulamalarından sorumlu değiliz.`
        },
        {
          title: "11. Şartlarda Değişiklikler",
          content: `• Bu Şartlar ve Koşulları herhangi bir zamanda değiştirme hakkını saklı tutarız.
• Değişiklikler web sitemizde yayınlandığında yürürlüğe girecektir.
• Rezervasyonunuz için geçerli şartlar, rezervasyon onayı sırasında yürürlükte olan şartlardır.
• Değişikliklerden sonra hizmetlerimizi kullanmaya devam etmeniz, değiştirilen şartları kabul ettiğiniz anlamına gelir.`
        },
        {
          title: "12. İletişim Bilgileri",
          content: `Bu Şartlar ve Koşullar veya rezervasyonunuz hakkında sorularınız için lütfen bizimle iletişime geçin:

**Holiday Yacht Charter**
İşleten: Light Tours
Adres: Fethiye Marina, Muğla, Türkiye
E-posta: info@holidayyachts.com
Telefon: +90 252 614 47 57
TURSAB Lisansı: A-1234

Çalışma Saatleri: Pazartesi - Cumartesi, 09:00 - 18:00 (Türkiye Saati)`
        }
      ]
    },
    de: {
      title: "Allgemeine Geschäftsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: Januar 2025",
      intro: "Willkommen bei Holiday Yacht. Diese Allgemeinen Geschäftsbedingungen regeln Ihre Nutzung unserer Website und Yachtcharter-Dienste. Durch den Zugriff auf unsere Website oder eine Buchung erklären Sie sich mit diesen Bedingungen einverstanden. Bitte lesen Sie sie sorgfältig durch.",
      sections: [
        {
          title: "1. Definitionen",
          content: `In diesen Allgemeinen Geschäftsbedingungen:

• **"Unternehmen," "wir," "uns," "unser"** bezieht sich auf Holiday Yacht Charter, betrieben von Light Tours, Fethiye, Türkei.
• **"Kunde," "Sie," "Ihr"** bezieht sich auf die Person, die die Buchung vornimmt, und alle im Charter enthaltenen Gäste.
• **"Charter"** bezieht sich auf den von uns erbrachten Yachtverleih-Service.
• **"Yacht"** bezieht sich auf das für den Charterzeitraum gebuchte Schiff.
• **"Charterzeitraum"** bezieht sich auf die in der Buchungsbestätigung angegebenen Daten.
• **"Chartergebühr"** bezieht sich auf die in der Buchung angegebenen Gesamtkosten der Yachtmiete.`
        },
        {
          title: "2. Buchung und Zahlung",
          content: `**2.1 Buchungsprozess**
• Alle Buchungen unterliegen der Verfügbarkeit und Bestätigung durch Holiday Yacht.
• Eine Buchung ist erst nach Erhalt der erforderlichen Anzahlung und Versand einer schriftlichen Bestätigung bestätigt.
• Die buchende Person muss mindestens 18 Jahre alt sein und berechtigt sein, diese Bedingungen im Namen aller Gäste zu akzeptieren.

**2.2 Zahlungsbedingungen**
• Eine Anzahlung von 50% der gesamten Chartergebühr ist zur Bestätigung der Buchung erforderlich.
• Der verbleibende Restbetrag von 50% muss spätestens 30 Tage vor dem Charterbeginn bezahlt werden.
• Bei Buchungen innerhalb von 30 Tagen vor dem Charterdatum ist die vollständige Zahlung bei Buchung erforderlich.
• Akzeptierte Zahlungsmethoden: Banküberweisung, Kreditkarte (Visa, MasterCard).

**2.3 Kaution**
• Eine Kaution kann erforderlich sein und wird in Ihrer Buchungsbestätigung angegeben.
• Die Kaution wird innerhalb von 7 Tagen nach Charterende zurückerstattet, abzüglich etwaiger Abzüge für Schäden oder zusätzliche Ausgaben.`
        },
        {
          title: "3. Stornierungsbedingungen",
          content: `**3.1 Stornierung durch den Kunden**
• Stornierung mehr als 60 Tage vor Abreise: Vollständige Rückerstattung abzüglich €500 Verwaltungsgebühr.
• Stornierung 30-60 Tage vor Abreise: 50% der gesamten Chartergebühr werden einbehalten.
• Stornierung weniger als 30 Tage vor Abreise: Keine Rückerstattung.
• Alle Stornierungen müssen schriftlich per E-Mail erfolgen.

**3.2 Stornierung durch das Unternehmen**
• Wenn wir aufgrund unvorhergesehener Umstände stornieren müssen, erhalten Sie eine vollständige Rückerstattung oder die Möglichkeit zur Umbuchung.
• Wir haften nicht für zusätzliche Kosten, die durch die Stornierung entstehen.

**3.3 Reiseversicherung**
• Wir empfehlen dringend den Abschluss einer umfassenden Reiseversicherung, die Reiserücktritt, medizinische Notfälle und persönliche Gegenstände abdeckt.
• Holiday Yacht ist nicht verantwortlich für Verluste, die nicht von der Versicherung gedeckt sind.`
        },
        {
          title: "4. Charterbedingungen",
          content: `**4.1 Ein- und Ausschiffung**
• Standard-Einschiffung: 16:00 Uhr am ersten Tag des Charters.
• Standard-Ausschiffung: 10:00 Uhr am letzten Tag des Charters.
• Frühe Einschiffung oder späte Ausschiffung kann gegen Aufpreis vereinbart werden, vorbehaltlich der Verfügbarkeit.

**4.2 Reiseroute**
• Vorgeschlagene Routen dienen nur zur Orientierung.
• Der Kapitän hat die endgültige Autorität über Navigationsrouten basierend auf Wetter, Seebedingungen und Sicherheitsüberlegungen.
• Für Routenänderungen aufgrund von Wetter oder Sicherheitsgründen werden keine Rückerstattungen gewährt.

**4.3 Crew und Services**
• Alle Yachten beinhalten eine professionelle Crew (Kapitän, Koch und Deckshand).
• Unterkunft und Verpflegung der Crew sind in der Chartergebühr enthalten.
• Die Crew ist für den sicheren Betrieb der Yacht und die Erbringung vereinbarter Leistungen verantwortlich.

**4.4 Gästekapazität**
• Die maximale Gästezahl darf die in der Buchung angegebene Zahl nicht überschreiten.
• Übernachtungsgäste, die nicht in der Buchung aufgeführt sind, sind ohne vorherige Genehmigung nicht gestattet.`
        },
        {
          title: "5. Kundenpflichten",
          content: `**5.1 Verhalten**
• Gäste müssen alle Anweisungen des Kapitäns und der Crew bezüglich der Sicherheit befolgen.
• Illegale Aktivitäten, einschließlich Besitz oder Konsum illegaler Substanzen, sind streng verboten.
• Gäste müssen die Yacht und Ausrüstung pfleglich und respektvoll behandeln.

**5.2 Schäden**
• Kunden sind für alle Schäden an der Yacht, Ausrüstung oder Einrichtung verantwortlich, die durch Fahrlässigkeit oder Missbrauch verursacht wurden.
• Schadenskosten werden von der Kaution abgezogen oder separat in Rechnung gestellt.

**5.3 Persönliche Gegenstände**
• Holiday Yacht ist nicht verantwortlich für Verlust, Diebstahl oder Beschädigung persönlicher Gegenstände.
• Gästen wird empfohlen, Wertsachen zu sichern und eine angemessene Reiseversicherung abzuschließen.

**5.4 Besondere Anforderungen**
• Ernährungsanforderungen, Allergien und medizinische Bedingungen müssen zum Zeitpunkt der Buchung mitgeteilt werden.
• Wir werden angemessene Anstrengungen unternehmen, um besondere Wünsche zu erfüllen, können jedoch nicht alle Anfragen garantieren.`
        },
        {
          title: "6. Enthaltene und nicht enthaltene Leistungen",
          content: `**6.1 In der Chartergebühr enthalten**
• Professionelle Crew (Kapitän, Koch, Deckshand)
• Vollpension (Frühstück, Mittagessen, Abendessen, Snacks)
• Bettwäsche und Handtücher
• Nutzung der Standard-Wassersportausrüstung (je nach Yacht unterschiedlich)
• Hafen- und Hafengebühren innerhalb der Standardroute
• MwSt. und anfallende Steuern

**6.2 Nicht enthalten**
• Treibstoffkosten (werden separat nach Verbrauch berechnet)
• Alkoholische Getränke und spezielle Getränkewünsche
• Hafengebühren außerhalb der Standardroute
• Trinkgeld für die Crew (optional, typischerweise 10-15% der Chartergebühr)
• Wassersportausrüstung-Vermietung (Jetski, Parasailing, etc.)
• Flughafentransfers
• Reiseversicherung`
        },
        {
          title: "7. Haftung und Versicherung",
          content: `**7.1 Unternehmenshaftung**
• Holiday Yacht unterhält eine umfassende Schiffsversicherung für alle Schiffe.
• Unsere Haftung ist auf die gezahlte Chartergebühr beschränkt. Wir haften nicht für:
  - Indirekte oder Folgeschäden
  - Personenschäden, außer wenn durch unsere Fahrlässigkeit verursacht
  - Freudverlust aufgrund von Wetterbedingungen
  - Kosten durch Flugverspätungen oder -stornierungen

**7.2 Höhere Gewalt**
• Wir haften nicht für die Nichterfüllung aufgrund von Umständen außerhalb unserer Kontrolle, einschließlich, aber nicht beschränkt auf:
  - Naturkatastrophen, schwere Wetterbedingungen
  - Krieg, Terrorismus, zivile Unruhen
  - Regierungsmaßnahmen, Reisebeschränkungen
  - Epidemien oder Pandemien`
        },
        {
          title: "8. Gesundheit und Sicherheit",
          content: `**8.1 Medizinische Bedingungen**
• Gäste müssen alle medizinischen Bedingungen offenlegen, die ihre Fähigkeit zur sicheren Teilnahme am Charter beeinflussen könnten.
• Gäste mit ernsthaften medizinischen Bedingungen sollten vor der Buchung eine ärztliche Freigabe einholen.

**8.2 Schwimmen und Wasseraktivitäten**
• Schwimmen und Wasseraktivitäten erfolgen auf eigenes Risiko der Gäste.
• Kinder müssen in der Nähe oder im Wasser jederzeit beaufsichtigt werden.
• Der Kapitän kann das Schwimmen in bestimmten Bereichen aus Sicherheitsgründen untersagen.

**8.3 Sicherheitsausrüstung**
• Schwimmwesten und Sicherheitsausrüstung werden auf allen Yachten bereitgestellt.
• Gäste müssen an der Sicherheitseinweisung zu Beginn des Charters teilnehmen.`
        },
        {
          title: "9. Beschwerden und Streitigkeiten",
          content: `**9.1 Beschwerdeverfahren**
• Beschwerden während des Charters sollten sofort dem Kapitän gemeldet werden.
• Schriftliche Beschwerden müssen innerhalb von 14 Tagen nach Charterende eingereicht werden.
• Wir werden auf alle Beschwerden innerhalb von 28 Tagen antworten.

**9.2 Streitbeilegung**
• Wir streben an, alle Streitigkeiten gütlich durch direkte Kommunikation zu lösen.
• Wenn eine Streitigkeit nicht gelöst werden kann, unterliegt sie der ausschließlichen Zuständigkeit türkischer Gerichte.
• Diese Bedingungen unterliegen dem Recht der Republik Türkei.`
        },
        {
          title: "10. Website-Nutzung",
          content: `**10.1 Geistiges Eigentum**
• Alle Inhalte auf dieser Website, einschließlich Text, Bilder und Logos, sind Eigentum von Holiday Yacht oder seinen Lizenzgebern.
• Sie dürfen unsere Inhalte nicht ohne schriftliche Genehmigung vervielfältigen, verbreiten oder verwenden.

**10.2 Genauigkeit der Informationen**
• Wir bemühen uns sicherzustellen, dass alle Informationen auf unserer Website korrekt und aktuell sind.
• Preise und Verfügbarkeit können ohne Vorankündigung geändert werden.
• Bilder dienen Illustrationszwecken und tatsächliche Yachten können leicht abweichen.

**10.3 Links zu Dritten**
• Unsere Website kann Links zu Websites Dritter enthalten.
• Wir sind nicht verantwortlich für den Inhalt oder die Datenschutzpraktiken externer Seiten.`
        },
        {
          title: "11. Änderungen der Bedingungen",
          content: `• Wir behalten uns das Recht vor, diese Allgemeinen Geschäftsbedingungen jederzeit zu ändern.
• Änderungen werden wirksam, wenn sie auf unserer Website veröffentlicht werden.
• Die für Ihre Buchung geltenden Bedingungen sind die zum Zeitpunkt der Buchungsbestätigung gültigen.
• Die fortgesetzte Nutzung unserer Dienste nach Änderungen bedeutet die Annahme der geänderten Bedingungen.`
        },
        {
          title: "12. Kontaktinformationen",
          content: `Bei Fragen zu diesen Allgemeinen Geschäftsbedingungen oder Ihrer Buchung kontaktieren Sie uns bitte:

**Holiday Yacht Charter**
Betrieben von: Light Tours
Adresse: Fethiye Marina, Muğla, Türkei
E-Mail: info@holidayyachts.com
Telefon: +90 252 614 47 57
TURSAB-Lizenz: A-1234

Geschäftszeiten: Montag - Samstag, 09:00 - 18:00 (Türkei-Zeit)`
        }
      ]
    }
  };

  const pageContent = content[language] || content.en;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-6">
              <FileText className="h-8 w-8 text-amber-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {pageContent.title}
            </h1>
            <p className="text-slate-400">{pageContent.lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb
          items={[
            { label: t("nav.home"), href: "/" },
            { label: pageContent.title },
          ]}
        />
      </div>

      {/* Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              {pageContent.intro}
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {pageContent.sections.map((section, index) => (
                <div key={index} className="prose prose-slate max-w-none">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                    {section.title}
                  </h2>
                  <div className="text-slate-600 whitespace-pre-line leading-relaxed">
                    {section.content.split("**").map((part, i) =>
                      i % 2 === 1 ? (
                        <strong key={i} className="text-slate-800">
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Box */}
            <div className="mt-12 p-6 bg-slate-50 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                {language === "tr" ? "Sorularınız mı var?" : language === "de" ? "Haben Sie Fragen?" : "Have Questions?"}
              </h3>
              <div className="flex flex-wrap gap-6">
                <a
                  href="mailto:info@holidayyachts.com"
                  className="flex items-center gap-2 text-amber-600 hover:text-amber-700"
                >
                  <Mail className="h-5 w-5" />
                  info@holidayyachts.com
                </a>
                <a
                  href="tel:+902526144757"
                  className="flex items-center gap-2 text-amber-600 hover:text-amber-700"
                >
                  <Phone className="h-5 w-5" />
                  +90 252 614 47 57
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
