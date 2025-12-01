"use client";

import Link from "next/link";
import {
  Anchor,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Award,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { nameKey: "nav.yachts", href: "/yachts" },
    { nameKey: "nav.itineraries", href: "/itineraries" },
    { nameKey: "nav.about", href: "/about" },
    { name: "Blog", href: "/blog" },
    { nameKey: "nav.contact", href: "/contact" },
    { nameKey: "nav.booking", href: "/booking" },
  ];

  const yachtLinks = [
    { name: "M/S Holiday 10", href: "/yachts/ms-holiday-10" },
    { name: "M/S Holiday 5", href: "/yachts/ms-holiday-5" },
    { name: "M/S Holiday 6", href: "/yachts/ms-holiday-6" },
    { name: "M/S Holiday M", href: "/yachts/ms-holiday-m" },
  ];

  const routeLinks = [
    { name: "Fethiye - Gocek", href: "/itineraries/fethiye-gocek-fethiye" },
    { name: "Fethiye - Kekova", href: "/itineraries/fethiye-kekova-fethiye" },
    { name: "Fethiye - Marmaris", href: "/itineraries/fethiye-marmaris-fethiye" },
    { name: "Bodrum - Gokova", href: "/itineraries/bodrum-gokova-bodrum" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <NewsletterSignup />
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <Anchor className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Holiday Yacht</h2>
                <p className="text-xs text-slate-400">Luxury Gulet Charters</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/light.tours/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/lighttours/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@lighttoursbluecruiseyachtc3738"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.nameKey || link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.name || t(link.nameKey!)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Yachts */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("home.fleet.badge")}</h3>
            <ul className="space-y-3">
              {yachtLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mt-8 mb-6">{t("itineraries.allRoutes")}</h3>
            <ul className="space-y-3">
              {routeLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("footer.contactInfo")}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+902526144757"
                  className="flex items-start gap-3 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm">+90 252 614 47 57</p>
                    <p className="text-sm">+90 549 614 47 57</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@holidayyachts.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">info@holidayyachts.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Tuzla Mahallesi, 509. Sokak No:6
                  <br />
                  Fethiye, Mugla 48300
                  <br />
                  Turkey
                </span>
              </li>
            </ul>

            {/* TURSAB Badge */}
            <div className="mt-8 p-4 bg-slate-800 rounded-lg">
              <div className="flex items-center gap-3">
                <Award className="h-10 w-10 text-amber-400" />
                <div>
                  <p className="text-sm font-semibold">{t("footer.tursab")}</p>
                  <p className="text-xs text-slate-400">{t("footer.workingHours")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Holiday Yacht. {t("footer.rights")}
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-slate-600">
                {t("home.partners.partOf")} Light Tours
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
