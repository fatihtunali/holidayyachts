import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/ui/FloatingButtons";

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
    default: "Holiday Yacht | Luxury Gulet Charter in Turkey",
    template: "%s | Holiday Yacht",
  },
  description:
    "Experience the ultimate luxury yacht charter along Turkey's stunning Turquoise Coast. Premium gulet rentals with professional crew since 1989.",
  keywords: [
    "yacht charter turkey",
    "gulet rental",
    "blue cruise",
    "luxury boat charter",
    "fethiye yacht",
    "turkish riviera cruise",
    "mediterranean sailing",
  ],
  authors: [{ name: "Holiday Yacht" }],
  creator: "Holiday Yacht",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.holidayyachts.com",
    siteName: "Holiday Yacht",
    title: "Holiday Yacht | Luxury Gulet Charter in Turkey",
    description:
      "Experience the ultimate luxury yacht charter along Turkey's stunning Turquoise Coast.",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Holiday Yacht - Luxury Gulet Charter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holiday Yacht | Luxury Gulet Charter in Turkey",
    description:
      "Experience the ultimate luxury yacht charter along Turkey's stunning Turquoise Coast.",
    images: ["/assets/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-slate-900">
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingButtons />
        </Providers>
      </body>
    </html>
  );
}
