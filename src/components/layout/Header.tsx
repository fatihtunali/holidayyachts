"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Anchor,
  Heart,
} from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const { favoritesCount } = useFavorites();

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.yachts"), href: "/yachts" },
    { name: t("nav.itineraries"), href: "/itineraries" },
    { name: t("nav.destinations"), href: "/destinations" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+902526144757"
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              +90 252 614 47 57
            </a>
            <a
              href="mailto:info@holidayyachts.com"
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Mail className="h-4 w-4" />
              info@holidayyachts.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Luxury Yacht Charters Since 1989</span>
            <LanguageSwitcher variant="dark" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <Anchor className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-slate-800">
                  Holiday Yacht
                </h1>
                <p className="text-xs text-slate-500">Luxury Gulet Charters</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative py-2",
                    pathname === item.href
                      ? "text-amber-500"
                      : "text-slate-700 hover:text-amber-500"
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* Favorites Button */}
              <Link
                href="/favorites"
                className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors"
                title={t("favorites.title")}
              >
                <Heart
                  className={cn(
                    "h-5 w-5 transition-colors",
                    favoritesCount > 0 ? "text-red-500 fill-red-500" : "text-slate-600"
                  )}
                />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {favoritesCount > 9 ? "9+" : favoritesCount}
                  </span>
                )}
              </Link>

              <div className="hidden sm:block lg:hidden">
                <LanguageSwitcher />
              </div>
              <Link href="/booking" className="hidden sm:block">
                <Button variant="primary" size="md">
                  {t("nav.booking")}
                </Button>
              </Link>

              <button
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-slate-700" />
                ) : (
                  <Menu className="h-6 w-6 text-slate-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <nav className="container mx-auto px-4 py-4 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block py-3 text-base font-medium border-b border-slate-100",
                  pathname === item.href
                    ? "text-amber-500"
                    : "text-slate-700 hover:text-amber-500"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Favorites link in mobile */}
            <Link
              href="/favorites"
              className={cn(
                "flex items-center gap-3 py-3 text-base font-medium border-b border-slate-100",
                pathname === "/favorites"
                  ? "text-amber-500"
                  : "text-slate-700 hover:text-amber-500"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Heart className={cn("h-5 w-5", favoritesCount > 0 && "fill-red-500 text-red-500")} />
              {t("favorites.title")}
              {favoritesCount > 0 && (
                <span className="ml-auto px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full">
                  {favoritesCount}
                </span>
              )}
            </Link>

            <div className="pt-4 space-y-4">
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
              <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" size="lg" className="w-full">
                  {t("nav.booking")}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
