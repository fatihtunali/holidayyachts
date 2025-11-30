"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home, Ship, Phone } from "lucide-react";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Decorative Element */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-amber-100 rounded-full animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Ship className="h-16 w-16 text-amber-500" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-8xl font-bold text-slate-200 mb-4">404</h1>

        {/* Title */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          {t("error.pageNotFound")}
        </h2>

        {/* Description */}
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          {t("error.pageNotFoundDesc")}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" size="lg" leftIcon={<Home className="h-5 w-5" />}>
              {t("error.backToHome")}
            </Button>
          </Link>
          <Link href="/yachts">
            <Button variant="outline" size="lg" leftIcon={<Ship className="h-5 w-5" />}>
              {t("error.viewFleet")}
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" size="lg" leftIcon={<Phone className="h-5 w-5" />}>
              {t("error.contactUs")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
