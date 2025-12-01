import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";
import { OrganizationSchema, LocalBusinessSchema, WebsiteSchema } from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover", // For iPhone notch support
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.holidayyachts.com"),
  title: {
    default: "Holiday Yacht | Luxury Gulet Charter in Turkey | Blue Cruise Fethiye",
    template: "%s | Holiday Yacht Turkey",
  },
  description:
    "Experience the ultimate luxury gulet charter along Turkey's stunning Turquoise Coast. Premium yacht rentals with professional crew, gourmet cuisine & water sports. Blue cruise from Fethiye, Bodrum, Marmaris. Book your dream sailing holiday today!",
  keywords: [
    "yacht charter turkey",
    "gulet rental turkey",
    "blue cruise turkey",
    "luxury boat charter fethiye",
    "fethiye yacht charter",
    "turkish riviera cruise",
    "mediterranean sailing holiday",
    "gulet cruise bodrum",
    "marmaris yacht rental",
    "private yacht charter turkey",
    "sailing turkey",
    "blue voyage turkey",
    "cabin charter turkey",
    "luxury gulet holiday",
    "turkish coast sailing",
  ],
  authors: [{ name: "Holiday Yacht", url: "https://www.holidayyachts.com" }],
  creator: "Holiday Yacht",
  publisher: "Holiday Yacht",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.holidayyachts.com",
    languages: {
      "en-US": "https://www.holidayyachts.com",
      "tr-TR": "https://www.holidayyachts.com/tr",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    url: "https://www.holidayyachts.com",
    siteName: "Holiday Yacht",
    title: "Holiday Yacht | Luxury Gulet Charter in Turkey",
    description:
      "Experience the ultimate luxury gulet charter along Turkey's stunning Turquoise Coast. Premium yacht rentals with professional crew since 1989.",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Holiday Yacht - Luxury Gulet Charter in Turkey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holiday Yacht | Luxury Gulet Charter in Turkey",
    description:
      "Experience the ultimate luxury gulet charter along Turkey's stunning Turquoise Coast. Book your dream sailing holiday!",
    images: ["/assets/images/og-image.jpg"],
    creator: "@holidayyacht",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebsiteSchema />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        <Providers>
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-white focus:rounded-md focus:outline-none"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-h-screen" role="main">
            {children}
          </main>
          <Footer />
          <FloatingButtons />
        </Providers>
      </body>
    </html>
  );
}
