import sgMail from "@sendgrid/mail";

// Initialize SendGrid
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || "info@holidaygulet.com";
const ADMIN_EMAIL = "info@holidaygulet.com";
const LOGO_URL = "https://holidaygulet.com/assets/images/logo/logo-main.png";
const SITE_URL = "https://holidaygulet.com";

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

// Base email template with logo
function getEmailTemplate(content: string, footerText: string = ""): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Holiday Yachts</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f1f5f9;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header with Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%); padding: 30px; text-align: center;">
              <a href="${SITE_URL}" style="text-decoration: none;">
                <img src="${LOGO_URL}" alt="Holiday Yachts" width="200" style="max-width: 200px; height: auto;" />
              </a>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #1e293b; padding: 30px; text-align: center;">
              <p style="margin: 0 0 15px 0; color: #94a3b8; font-size: 14px;">
                ${footerText || "This email was automatically sent from holidaygulet.com"}
              </p>
              <p style="margin: 0 0 10px 0; color: #64748b; font-size: 12px;">
                Tuzla Mahallesi, 509. Sokak No:6, Fethiye, Mugla 48300, Turkey
              </p>
              <p style="margin: 0; color: #64748b; font-size: 12px;">
                Tel: +90 252 614 47 57 | WhatsApp: +90 549 614 47 57
              </p>
              <p style="margin: 15px 0 0 0; color: #64748b; font-size: 11px;">
                © ${new Date().getFullYear()} Holiday Yachts. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

async function sendEmail(options: EmailOptions): Promise<boolean> {
  if (!SENDGRID_API_KEY) {
    console.warn("[Email] SendGrid API key not configured, skipping email");
    return false;
  }

  try {
    await sgMail.send({
      to: options.to,
      from: {
        email: FROM_EMAIL,
        name: "Holiday Yachts",
      },
      subject: options.subject,
      text: options.text,
      html: options.html,
    });
    console.log(`[Email] Sent to ${options.to}: ${options.subject}`);
    return true;
  } catch (error) {
    console.error("[Email] Failed to send:", error);
    return false;
  }
}

// Booking notification to admin
export async function sendBookingNotificationToAdmin(booking: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  yachtName: string;
  startDate: string;
  endDate: string;
  guests: number;
  specialRequests?: string;
  totalPrice?: number;
  currency?: string;
}): Promise<boolean> {
  const subject = `New Booking Request: ${booking.yachtName}`;

  const text = `
New booking request received!

Guest Information:
- Name: ${booking.firstName} ${booking.lastName}
- Email: ${booking.email}
- Phone: ${booking.phone}

Booking Details:
- Yacht: ${booking.yachtName}
- Dates: ${booking.startDate} - ${booking.endDate}
- Guests: ${booking.guests}
${booking.totalPrice ? `- Total Price: ${booking.totalPrice} ${booking.currency || "EUR"}` : ""}

Special Requests:
${booking.specialRequests || "None"}

---
This email was automatically sent from holidaygulet.com
  `.trim();

  const content = `
    <div style="text-align: center; margin-bottom: 30px;">
      <div style="display: inline-block; background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 12px 24px; border-radius: 30px; font-size: 16px; font-weight: 600;">
        New Booking Request
      </div>
    </div>

    <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 24px; text-align: center;">${booking.yachtName}</h2>

    <!-- Guest Information -->
    <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
      <h3 style="color: #0369a1; margin: 0 0 15px 0; font-size: 16px; border-bottom: 2px solid #0369a1; padding-bottom: 8px;">
        Guest Information
      </h3>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="8">
        <tr>
          <td style="color: #64748b; width: 120px;">Name:</td>
          <td style="color: #1e293b; font-weight: 600;">${booking.firstName} ${booking.lastName}</td>
        </tr>
        <tr>
          <td style="color: #64748b;">Email:</td>
          <td><a href="mailto:${booking.email}" style="color: #0369a1;">${booking.email}</a></td>
        </tr>
        <tr>
          <td style="color: #64748b;">Phone:</td>
          <td><a href="tel:${booking.phone}" style="color: #0369a1;">${booking.phone}</a></td>
        </tr>
      </table>
    </div>

    <!-- Booking Details -->
    <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
      <h3 style="color: #0369a1; margin: 0 0 15px 0; font-size: 16px; border-bottom: 2px solid #0369a1; padding-bottom: 8px;">
        Booking Details
      </h3>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="8">
        <tr>
          <td style="color: #64748b; width: 120px;">Yacht:</td>
          <td style="color: #1e293b; font-weight: 600;">${booking.yachtName}</td>
        </tr>
        <tr>
          <td style="color: #64748b;">Start Date:</td>
          <td style="color: #1e293b; font-weight: 600;">${booking.startDate}</td>
        </tr>
        <tr>
          <td style="color: #64748b;">End Date:</td>
          <td style="color: #1e293b; font-weight: 600;">${booking.endDate}</td>
        </tr>
        <tr>
          <td style="color: #64748b;">Guests:</td>
          <td style="color: #1e293b; font-weight: 600;">${booking.guests} people</td>
        </tr>
        ${booking.totalPrice ? `
        <tr>
          <td style="color: #64748b;">Price:</td>
          <td style="color: #059669; font-weight: 700; font-size: 20px;">${booking.totalPrice} ${booking.currency || "EUR"}</td>
        </tr>
        ` : ""}
      </table>
    </div>

    ${booking.specialRequests ? `
    <!-- Special Requests -->
    <div style="background: #fef3c7; border-radius: 8px; padding: 20px; border-left: 4px solid #f59e0b;">
      <h3 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">Special Requests</h3>
      <p style="color: #78350f; margin: 0; line-height: 1.6;">${booking.specialRequests}</p>
    </div>
    ` : ""}
  `;

  const html = getEmailTemplate(content);
  return sendEmail({ to: ADMIN_EMAIL, subject, text, html });
}

// Contact form notification to admin
export async function sendContactNotificationToAdmin(contact: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  yacht?: string;
  message: string;
}): Promise<boolean> {
  const subjectLine = `New Contact Message: ${contact.subject}`;

  const text = `
New contact form message received!

Sender Information:
- Name: ${contact.name}
- Email: ${contact.email}
${contact.phone ? `- Phone: ${contact.phone}` : ""}

Subject: ${contact.subject}
${contact.yacht ? `Interested Yacht: ${contact.yacht}` : ""}

Message:
${contact.message}

---
This email was automatically sent from holidaygulet.com
  `.trim();

  const content = `
    <div style="text-align: center; margin-bottom: 30px;">
      <div style="display: inline-block; background: linear-gradient(135deg, #0369a1, #0c4a6e); color: white; padding: 12px 24px; border-radius: 30px; font-size: 16px; font-weight: 600;">
        New Contact Message
      </div>
    </div>

    <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 24px; text-align: center;">${contact.subject}</h2>

    <!-- Sender Information -->
    <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
      <h3 style="color: #0369a1; margin: 0 0 15px 0; font-size: 16px; border-bottom: 2px solid #0369a1; padding-bottom: 8px;">
        Sender Information
      </h3>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="8">
        <tr>
          <td style="color: #64748b; width: 120px;">Name:</td>
          <td style="color: #1e293b; font-weight: 600;">${contact.name}</td>
        </tr>
        <tr>
          <td style="color: #64748b;">Email:</td>
          <td><a href="mailto:${contact.email}" style="color: #0369a1;">${contact.email}</a></td>
        </tr>
        ${contact.phone ? `
        <tr>
          <td style="color: #64748b;">Phone:</td>
          <td><a href="tel:${contact.phone}" style="color: #0369a1;">${contact.phone}</a></td>
        </tr>
        ` : ""}
        ${contact.yacht ? `
        <tr>
          <td style="color: #64748b;">Interested Yacht:</td>
          <td style="color: #1e293b; font-weight: 600;">${contact.yacht}</td>
        </tr>
        ` : ""}
      </table>
    </div>

    <!-- Message -->
    <div style="background: #f0f9ff; border-radius: 8px; padding: 20px; border-left: 4px solid #0369a1;">
      <h3 style="color: #0c4a6e; margin: 0 0 10px 0; font-size: 16px;">Message</h3>
      <p style="color: #1e293b; margin: 0; line-height: 1.8; white-space: pre-wrap;">${contact.message}</p>
    </div>
  `;

  const html = getEmailTemplate(content);
  return sendEmail({ to: ADMIN_EMAIL, subject: subjectLine, text, html });
}

// Booking confirmation to customer
export async function sendBookingConfirmationToCustomer(booking: {
  firstName: string;
  lastName: string;
  email: string;
  yachtName: string;
  startDate: string;
  endDate: string;
  guests: number;
  totalPrice?: number;
  currency?: string;
  language?: string;
}): Promise<boolean> {
  const lang = booking.language || "en";

  // Multi-language support
  const texts = {
    en: {
      subject: `Booking Request Received - ${booking.yachtName}`,
      greeting: `Dear ${booking.firstName} ${booking.lastName}`,
      received: `We have received your booking request for <strong>${booking.yachtName}</strong>! Our team will contact you shortly.`,
      detailsTitle: "Booking Details",
      yacht: "Yacht",
      startDate: "Start Date",
      endDate: "End Date",
      guests: "Guests",
      estimatedPrice: "Estimated Price",
      people: "people",
      contactTitle: "Contact Us",
      footer: "Your dream yacht adventure begins!",
    },
    de: {
      subject: `Buchungsanfrage erhalten - ${booking.yachtName}`,
      greeting: `Sehr geehrte(r) ${booking.firstName} ${booking.lastName}`,
      received: `Wir haben Ihre Buchungsanfrage für <strong>${booking.yachtName}</strong> erhalten! Unser Team wird sich in Kürze bei Ihnen melden.`,
      detailsTitle: "Buchungsdetails",
      yacht: "Yacht",
      startDate: "Startdatum",
      endDate: "Enddatum",
      guests: "Gäste",
      estimatedPrice: "Geschätzter Preis",
      people: "Personen",
      contactTitle: "Kontakt",
      footer: "Ihr Traumyacht-Abenteuer beginnt!",
    },
    fr: {
      subject: `Demande de réservation reçue - ${booking.yachtName}`,
      greeting: `Cher(e) ${booking.firstName} ${booking.lastName}`,
      received: `Nous avons reçu votre demande de réservation pour <strong>${booking.yachtName}</strong> ! Notre équipe vous contactera prochainement.`,
      detailsTitle: "Détails de la réservation",
      yacht: "Yacht",
      startDate: "Date de début",
      endDate: "Date de fin",
      guests: "Invités",
      estimatedPrice: "Prix estimé",
      people: "personnes",
      contactTitle: "Contactez-nous",
      footer: "Votre aventure de yacht de rêve commence !",
    },
  };

  const t = texts[lang as keyof typeof texts] || texts.en;

  const text = `
${t.greeting},

${t.received.replace(/<[^>]*>/g, "")}

${t.detailsTitle}:
- ${t.yacht}: ${booking.yachtName}
- ${t.startDate}: ${booking.startDate}
- ${t.endDate}: ${booking.endDate}
- ${t.guests}: ${booking.guests}
${booking.totalPrice ? `- ${t.estimatedPrice}: ${booking.totalPrice} ${booking.currency || "EUR"}` : ""}

${t.contactTitle}:
Tel: +90 252 614 47 57
WhatsApp: +90 549 614 47 57
Email: info@holidaygulet.com

Holiday Yachts Team
  `.trim();

  const content = `
    <div style="text-align: center; margin-bottom: 30px;">
      <div style="display: inline-block; background: linear-gradient(135deg, #059669, #047857); color: white; padding: 15px 30px; border-radius: 30px; font-size: 18px; font-weight: 600;">
        ${lang === "de" ? "Anfrage erfolgreich erhalten" : lang === "fr" ? "Demande reçue avec succès" : "Request Successfully Received"}
      </div>
    </div>

    <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
      ${t.greeting},
    </p>

    <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
      ${t.received}
    </p>

    <!-- Booking Details -->
    <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); border-radius: 12px; padding: 25px; margin-bottom: 25px; border: 1px solid #bae6fd;">
      <h3 style="color: #0369a1; margin: 0 0 20px 0; font-size: 18px; text-align: center;">
        ${t.detailsTitle}
      </h3>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="12" style="background: white; border-radius: 8px;">
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="color: #64748b;">${t.yacht}</td>
          <td style="color: #1e293b; font-weight: 600; text-align: right;">${booking.yachtName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="color: #64748b;">${t.startDate}</td>
          <td style="color: #1e293b; font-weight: 600; text-align: right;">${booking.startDate}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="color: #64748b;">${t.endDate}</td>
          <td style="color: #1e293b; font-weight: 600; text-align: right;">${booking.endDate}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="color: #64748b;">${t.guests}</td>
          <td style="color: #1e293b; font-weight: 600; text-align: right;">${booking.guests} ${t.people}</td>
        </tr>
        ${booking.totalPrice ? `
        <tr>
          <td style="color: #64748b;">${t.estimatedPrice}</td>
          <td style="color: #059669; font-weight: 700; font-size: 22px; text-align: right;">${booking.totalPrice} ${booking.currency || "EUR"}</td>
        </tr>
        ` : ""}
      </table>
    </div>

    <!-- Contact -->
    <div style="background: #1e293b; border-radius: 12px; padding: 25px; text-align: center;">
      <h3 style="color: #f59e0b; margin: 0 0 15px 0; font-size: 16px;">${t.contactTitle}</h3>
      <p style="margin: 8px 0; color: #e2e8f0;">
        Tel: <a href="tel:+902526144757" style="color: #f59e0b; text-decoration: none;">+90 252 614 47 57</a>
      </p>
      <p style="margin: 8px 0; color: #e2e8f0;">
        WhatsApp: <a href="https://wa.me/905496144757" style="color: #22c55e; text-decoration: none;">+90 549 614 47 57</a>
      </p>
      <p style="margin: 8px 0; color: #e2e8f0;">
        Email: <a href="mailto:info@holidaygulet.com" style="color: #f59e0b; text-decoration: none;">info@holidaygulet.com</a>
      </p>
    </div>
  `;

  const html = getEmailTemplate(content, t.footer);
  return sendEmail({ to: booking.email, subject: t.subject, text, html });
}

// Newsletter welcome email
export async function sendNewsletterWelcome(email: string, language: string = "en"): Promise<boolean> {
  const texts = {
    en: {
      subject: "Welcome to Our Newsletter! - Holiday Yachts",
      welcome: "Welcome to Our Newsletter!",
      thanks: "Thank you for subscribing! From now on, you'll receive special offers, new routes, and sailing tips.",
      cta: "Explore Our Yachts",
      unsubscribe: "Click here to unsubscribe",
      footer: "Thank you for joining the Holiday Yachts family!",
    },
    de: {
      subject: "Willkommen bei unserem Newsletter! - Holiday Yachts",
      welcome: "Willkommen bei unserem Newsletter!",
      thanks: "Vielen Dank für Ihre Anmeldung! Ab jetzt erhalten Sie Sonderangebote, neue Routen und Segeltipps.",
      cta: "Unsere Yachten entdecken",
      unsubscribe: "Hier klicken zum Abmelden",
      footer: "Danke, dass Sie der Holiday Yachts Familie beigetreten sind!",
    },
    fr: {
      subject: "Bienvenue dans notre newsletter ! - Holiday Yachts",
      welcome: "Bienvenue dans notre newsletter !",
      thanks: "Merci de vous être abonné ! Désormais, vous recevrez des offres spéciales, de nouveaux itinéraires et des conseils de navigation.",
      cta: "Découvrir nos yachts",
      unsubscribe: "Cliquez ici pour vous désabonner",
      footer: "Merci d'avoir rejoint la famille Holiday Yachts !",
    },
  };

  const t = texts[language as keyof typeof texts] || texts.en;

  const text = `
${t.welcome}

${t.thanks}

${SITE_URL}/yachts

---
${t.footer}
  `.trim();

  const content = `
    <div style="text-align: center;">
      <div style="font-size: 64px; margin-bottom: 20px;">⛵</div>

      <h1 style="color: #1e293b; margin: 0 0 15px 0; font-size: 28px;">
        ${t.welcome}
      </h1>

      <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
        ${t.thanks}
      </p>

      <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); border-radius: 12px; padding: 25px; margin-bottom: 30px;">
        <p style="color: #0c4a6e; font-size: 18px; margin: 0; line-height: 1.6;">
          ⚓ ${language === "de" ? "Entdecken Sie die schönsten Buchten der Türkei!" : language === "fr" ? "Découvrez les plus belles baies de Turquie !" : "Discover the most beautiful bays of Turkey!"}
        </p>
      </div>

      <a href="${SITE_URL}/yachts" style="display: inline-block; background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 16px 40px; border-radius: 30px; text-decoration: none; font-weight: 600; font-size: 16px; margin-bottom: 20px;">
        ${t.cta} →
      </a>

      <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
        <a href="${SITE_URL}/unsubscribe?email=${encodeURIComponent(email)}" style="color: #64748b;">${t.unsubscribe}</a>
      </p>
    </div>
  `;

  const html = getEmailTemplate(content, t.footer);
  return sendEmail({ to: email, subject: t.subject, text, html });
}
