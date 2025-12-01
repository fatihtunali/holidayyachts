"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Shield, Mail, Phone } from "lucide-react";

export default function PrivacyPage() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: January 2025",
      intro: "At Holiday Yacht, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.",
      sections: [
        {
          title: "1. Information We Collect",
          content: `We collect information that you provide directly to us, including:

• **Personal Information**: Name, email address, phone number, and mailing address when you make a booking inquiry or contact us.
• **Booking Information**: Travel dates, yacht preferences, number of guests, special requests, and dietary requirements.
• **Payment Information**: Credit card details and billing information (processed securely through our payment providers).
• **Communication Data**: Records of your correspondence with us via email, phone, or contact forms.

We also automatically collect certain information when you visit our website:
• **Usage Data**: Pages visited, time spent on pages, clicks, and navigation patterns.
• **Device Information**: Browser type, operating system, IP address, and device identifiers.
• **Cookies**: We use cookies to enhance your browsing experience and analyze website traffic.`
        },
        {
          title: "2. How We Use Your Information",
          content: `We use the information we collect to:

• Process and manage your yacht charter bookings
• Communicate with you about your reservations and inquiries
• Send you important updates about your trip
• Provide customer support and respond to your questions
• Improve our website and services
• Send promotional offers and newsletters (with your consent)
• Comply with legal obligations and protect our rights`
        },
        {
          title: "3. Information Sharing",
          content: `We may share your information with:

• **Service Providers**: Third-party companies that help us operate our business (payment processors, email services, yacht operators)
• **Yacht Crew**: Essential information needed to provide your charter experience
• **Legal Requirements**: When required by law or to protect our rights
• **Business Partners**: With your consent, for joint marketing activities

We never sell your personal information to third parties for their marketing purposes.`
        },
        {
          title: "4. Data Security",
          content: `We implement appropriate technical and organizational measures to protect your personal information, including:

• SSL encryption for all data transmissions
• Secure servers and databases
• Regular security assessments
• Employee training on data protection
• Limited access to personal information on a need-to-know basis

While we strive to protect your information, no method of transmission over the Internet is 100% secure.`
        },
        {
          title: "5. Your Rights",
          content: `Under applicable data protection laws, you have the right to:

• **Access**: Request a copy of your personal data
• **Rectification**: Correct inaccurate or incomplete data
• **Erasure**: Request deletion of your personal data
• **Restriction**: Limit how we process your data
• **Portability**: Receive your data in a structured format
• **Objection**: Object to certain processing activities
• **Withdraw Consent**: Revoke previously given consent

To exercise these rights, please contact us using the details below.`
        },
        {
          title: "6. Cookies Policy",
          content: `Our website uses cookies to:

• Remember your preferences and settings
• Analyze website traffic and usage patterns
• Provide personalized content
• Enable social media features

You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.

**Types of cookies we use:**
• Essential cookies: Required for basic website functionality
• Analytics cookies: Help us understand how visitors use our site
• Marketing cookies: Used to deliver relevant advertisements`
        },
        {
          title: "7. International Transfers",
          content: `Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.`
        },
        {
          title: "8. Children's Privacy",
          content: `Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.`
        },
        {
          title: "9. Changes to This Policy",
          content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.`
        },
        {
          title: "10. Contact Us",
          content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

**Holiday Yacht Charter**
Address: Fethiye Marina, Muğla, Turkey
Email: info@holidayyachts.com
Phone: +90 252 614 47 57

For data protection inquiries, you may also contact our Data Protection Officer at privacy@holidayyachts.com.`
        }
      ]
    },
    tr: {
      title: "Gizlilik Politikası",
      lastUpdated: "Son güncelleme: Ocak 2025",
      intro: "Holiday Yacht olarak, gizliliğinizi korumaya ve kişisel bilgilerinizin güvenliğini sağlamaya kararlıyız. Bu Gizlilik Politikası, web sitemizi ve hizmetlerimizi kullandığınızda verilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.",
      sections: [
        {
          title: "1. Topladığımız Bilgiler",
          content: `Doğrudan bize sağladığınız bilgileri topluyoruz:

• **Kişisel Bilgiler**: Rezervasyon talebi yaptığınızda veya bizimle iletişime geçtiğinizde ad, e-posta adresi, telefon numarası ve posta adresi.
• **Rezervasyon Bilgileri**: Seyahat tarihleri, yat tercihleri, misafir sayısı, özel istekler ve diyet gereksinimleri.
• **Ödeme Bilgileri**: Kredi kartı bilgileri ve fatura bilgileri (ödeme sağlayıcılarımız aracılığıyla güvenli bir şekilde işlenir).
• **İletişim Verileri**: E-posta, telefon veya iletişim formları aracılığıyla bizimle yaptığınız yazışma kayıtları.

Web sitemizi ziyaret ettiğinizde otomatik olarak belirli bilgileri de topluyoruz:
• **Kullanım Verileri**: Ziyaret edilen sayfalar, sayfalarda geçirilen süre, tıklamalar ve gezinme kalıpları.
• **Cihaz Bilgileri**: Tarayıcı türü, işletim sistemi, IP adresi ve cihaz tanımlayıcıları.
• **Çerezler**: Göz atma deneyiminizi geliştirmek ve web sitesi trafiğini analiz etmek için çerezler kullanıyoruz.`
        },
        {
          title: "2. Bilgilerinizi Nasıl Kullanıyoruz",
          content: `Topladığımız bilgileri şu amaçlarla kullanıyoruz:

• Yat kiralama rezervasyonlarınızı işlemek ve yönetmek
• Rezervasyonlarınız ve sorularınız hakkında sizinle iletişim kurmak
• Seyahatiniz hakkında önemli güncellemeler göndermek
• Müşteri desteği sağlamak ve sorularınızı yanıtlamak
• Web sitemizi ve hizmetlerimizi geliştirmek
• Promosyon teklifleri ve bültenler göndermek (onayınızla)
• Yasal yükümlülüklere uymak ve haklarımızı korumak`
        },
        {
          title: "3. Bilgi Paylaşımı",
          content: `Bilgilerinizi şu taraflarla paylaşabiliriz:

• **Hizmet Sağlayıcılar**: İşimizi yürütmemize yardımcı olan üçüncü taraf şirketler (ödeme işlemcileri, e-posta hizmetleri, yat operatörleri)
• **Yat Mürettebatı**: Kiralama deneyiminizi sağlamak için gerekli temel bilgiler
• **Yasal Gereklilikler**: Yasaların gerektirdiği durumlarda veya haklarımızı korumak için
• **İş Ortakları**: Onayınızla, ortak pazarlama faaliyetleri için

Kişisel bilgilerinizi asla pazarlama amaçlı üçüncü taraflara satmıyoruz.`
        },
        {
          title: "4. Veri Güvenliği",
          content: `Kişisel bilgilerinizi korumak için uygun teknik ve organizasyonel önlemler uyguluyoruz:

• Tüm veri aktarımları için SSL şifrelemesi
• Güvenli sunucular ve veritabanları
• Düzenli güvenlik değerlendirmeleri
• Veri koruma konusunda çalışan eğitimi
• Kişisel bilgilere yalnızca bilmesi gereken kişilerin erişimi

Bilgilerinizi korumak için çaba göstermemize rağmen, internet üzerinden hiçbir iletim yöntemi %100 güvenli değildir.`
        },
        {
          title: "5. Haklarınız",
          content: `Geçerli veri koruma yasaları kapsamında şu haklara sahipsiniz:

• **Erişim**: Kişisel verilerinizin bir kopyasını talep etme
• **Düzeltme**: Yanlış veya eksik verileri düzeltme
• **Silme**: Kişisel verilerinizin silinmesini talep etme
• **Kısıtlama**: Verilerinizi nasıl işlediğimizi sınırlama
• **Taşınabilirlik**: Verilerinizi yapılandırılmış bir formatta alma
• **İtiraz**: Belirli işleme faaliyetlerine itiraz etme
• **Onayı Geri Çekme**: Daha önce verilen onayı iptal etme

Bu hakları kullanmak için lütfen aşağıdaki iletişim bilgilerini kullanarak bizimle iletişime geçin.`
        },
        {
          title: "6. Çerez Politikası",
          content: `Web sitemiz şu amaçlarla çerez kullanır:

• Tercihlerinizi ve ayarlarınızı hatırlamak
• Web sitesi trafiğini ve kullanım kalıplarını analiz etmek
• Kişiselleştirilmiş içerik sunmak
• Sosyal medya özelliklerini etkinleştirmek

Çerezleri tarayıcı ayarlarınız aracılığıyla kontrol edebilirsiniz. Çerezleri devre dışı bırakmanın web sitesi işlevselliğini etkileyebileceğini unutmayın.

**Kullandığımız çerez türleri:**
• Temel çerezler: Temel web sitesi işlevselliği için gerekli
• Analitik çerezler: Ziyaretçilerin sitemizi nasıl kullandığını anlamamıza yardımcı olur
• Pazarlama çerezleri: İlgili reklamları sunmak için kullanılır`
        },
        {
          title: "7. Uluslararası Aktarımlar",
          content: `Bilgileriniz, kendi ülkeniz dışındaki ülkelere aktarılabilir ve orada işlenebilir. Bu Gizlilik Politikası ve geçerli yasalara uygun olarak verilerinizi korumak için uygun güvencelerin mevcut olmasını sağlıyoruz.`
        },
        {
          title: "8. Çocukların Gizliliği",
          content: `Hizmetlerimiz 18 yaşın altındaki bireylere yönelik değildir. Çocuklardan bilerek kişisel bilgi toplamıyoruz. Bir çocuktan bilgi topladığımıza inanıyorsanız, lütfen derhal bizimle iletişime geçin.`
        },
        {
          title: "9. Bu Politikadaki Değişiklikler",
          content: `Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Yeni politikayı bu sayfada yayınlayarak ve "Son güncelleme" tarihini güncelleyerek önemli değişiklikleri size bildireceğiz. Bu politikayı düzenli olarak gözden geçirmenizi öneririz.`
        },
        {
          title: "10. Bize Ulaşın",
          content: `Bu Gizlilik Politikası veya veri uygulamalarımız hakkında sorularınız varsa, lütfen bizimle iletişime geçin:

**Holiday Yacht Charter**
Adres: Fethiye Marina, Muğla, Türkiye
E-posta: info@holidayyachts.com
Telefon: +90 252 614 47 57

Veri koruma sorularınız için Veri Koruma Görevlimize privacy@holidayyachts.com adresinden de ulaşabilirsiniz.`
        }
      ]
    },
    de: {
      title: "Datenschutzerklärung",
      lastUpdated: "Zuletzt aktualisiert: Januar 2025",
      intro: "Bei Holiday Yacht sind wir bestrebt, Ihre Privatsphäre zu schützen und die Sicherheit Ihrer persönlichen Daten zu gewährleisten. Diese Datenschutzerklärung erklärt, wie wir Ihre Daten erfassen, verwenden und schützen, wenn Sie unsere Website und Dienste nutzen.",
      sections: [
        {
          title: "1. Informationen, die wir erfassen",
          content: `Wir erfassen Informationen, die Sie uns direkt zur Verfügung stellen:

• **Persönliche Informationen**: Name, E-Mail-Adresse, Telefonnummer und Postanschrift, wenn Sie eine Buchungsanfrage stellen oder uns kontaktieren.
• **Buchungsinformationen**: Reisedaten, Yachtpräferenzen, Anzahl der Gäste, besondere Wünsche und Ernährungsanforderungen.
• **Zahlungsinformationen**: Kreditkartendaten und Rechnungsinformationen (sicher über unsere Zahlungsanbieter verarbeitet).
• **Kommunikationsdaten**: Aufzeichnungen Ihrer Korrespondenz mit uns per E-Mail, Telefon oder Kontaktformularen.

Wir erfassen auch automatisch bestimmte Informationen, wenn Sie unsere Website besuchen:
• **Nutzungsdaten**: Besuchte Seiten, auf Seiten verbrachte Zeit, Klicks und Navigationsmuster.
• **Geräteinformationen**: Browsertyp, Betriebssystem, IP-Adresse und Gerätekennungen.
• **Cookies**: Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern und den Website-Verkehr zu analysieren.`
        },
        {
          title: "2. Wie wir Ihre Informationen verwenden",
          content: `Wir verwenden die erfassten Informationen, um:

• Ihre Yachtcharter-Buchungen zu bearbeiten und zu verwalten
• Mit Ihnen über Ihre Reservierungen und Anfragen zu kommunizieren
• Ihnen wichtige Updates über Ihre Reise zu senden
• Kundensupport zu bieten und Ihre Fragen zu beantworten
• Unsere Website und Dienste zu verbessern
• Werbeangebote und Newsletter zu senden (mit Ihrer Zustimmung)
• Rechtlichen Verpflichtungen nachzukommen und unsere Rechte zu schützen`
        },
        {
          title: "3. Informationsweitergabe",
          content: `Wir können Ihre Informationen mit folgenden Parteien teilen:

• **Dienstleister**: Drittunternehmen, die uns bei der Führung unseres Geschäfts helfen (Zahlungsabwickler, E-Mail-Dienste, Yachtbetreiber)
• **Yachtcrew**: Wesentliche Informationen, die für Ihr Charter-Erlebnis erforderlich sind
• **Rechtliche Anforderungen**: Wenn gesetzlich vorgeschrieben oder zum Schutz unserer Rechte
• **Geschäftspartner**: Mit Ihrer Zustimmung für gemeinsame Marketingaktivitäten

Wir verkaufen Ihre persönlichen Daten niemals an Dritte für deren Marketingzwecke.`
        },
        {
          title: "4. Datensicherheit",
          content: `Wir implementieren angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer persönlichen Daten:

• SSL-Verschlüsselung für alle Datenübertragungen
• Sichere Server und Datenbanken
• Regelmäßige Sicherheitsbewertungen
• Mitarbeiterschulung zum Datenschutz
• Beschränkter Zugang zu persönlichen Daten nach dem Need-to-know-Prinzip

Obwohl wir uns bemühen, Ihre Daten zu schützen, ist keine Übertragungsmethode über das Internet 100% sicher.`
        },
        {
          title: "5. Ihre Rechte",
          content: `Nach geltendem Datenschutzrecht haben Sie das Recht auf:

• **Auskunft**: Anforderung einer Kopie Ihrer persönlichen Daten
• **Berichtigung**: Korrektur ungenauer oder unvollständiger Daten
• **Löschung**: Anforderung der Löschung Ihrer persönlichen Daten
• **Einschränkung**: Begrenzung der Verarbeitung Ihrer Daten
• **Datenübertragbarkeit**: Erhalt Ihrer Daten in einem strukturierten Format
• **Widerspruch**: Einspruch gegen bestimmte Verarbeitungsaktivitäten
• **Widerruf der Einwilligung**: Widerruf einer zuvor erteilten Einwilligung

Um diese Rechte auszuüben, kontaktieren Sie uns bitte über die unten angegebenen Kontaktdaten.`
        },
        {
          title: "6. Cookie-Richtlinie",
          content: `Unsere Website verwendet Cookies, um:

• Ihre Präferenzen und Einstellungen zu speichern
• Website-Traffic und Nutzungsmuster zu analysieren
• Personalisierte Inhalte bereitzustellen
• Social-Media-Funktionen zu ermöglichen

Sie können Cookies über Ihre Browsereinstellungen steuern. Beachten Sie, dass das Deaktivieren von Cookies die Website-Funktionalität beeinträchtigen kann.

**Arten von Cookies, die wir verwenden:**
• Essenzielle Cookies: Erforderlich für grundlegende Website-Funktionalität
• Analyse-Cookies: Helfen uns zu verstehen, wie Besucher unsere Seite nutzen
• Marketing-Cookies: Werden verwendet, um relevante Werbung zu liefern`
        },
        {
          title: "7. Internationale Übertragungen",
          content: `Ihre Informationen können in andere Länder als Ihr eigenes übertragen und dort verarbeitet werden. Wir stellen sicher, dass angemessene Schutzmaßnahmen zum Schutz Ihrer Daten gemäß dieser Datenschutzerklärung und den geltenden Gesetzen vorhanden sind.`
        },
        {
          title: "8. Datenschutz für Kinder",
          content: `Unsere Dienste richten sich nicht an Personen unter 18 Jahren. Wir erfassen wissentlich keine persönlichen Daten von Kindern. Wenn Sie glauben, dass wir Informationen von einem Kind erfasst haben, kontaktieren Sie uns bitte umgehend.`
        },
        {
          title: "9. Änderungen dieser Richtlinie",
          content: `Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über wesentliche Änderungen informieren, indem wir die neue Richtlinie auf dieser Seite veröffentlichen und das Datum der "Letzten Aktualisierung" aktualisieren. Wir empfehlen Ihnen, diese Richtlinie regelmäßig zu überprüfen.`
        },
        {
          title: "10. Kontaktieren Sie uns",
          content: `Wenn Sie Fragen zu dieser Datenschutzerklärung oder unseren Datenpraktiken haben, kontaktieren Sie uns bitte:

**Holiday Yacht Charter**
Adresse: Fethiye Marina, Muğla, Türkei
E-Mail: info@holidayyachts.com
Telefon: +90 252 614 47 57

Für Datenschutzanfragen können Sie auch unseren Datenschutzbeauftragten unter privacy@holidayyachts.com kontaktieren.`
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
              <Shield className="h-8 w-8 text-amber-400" />
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
