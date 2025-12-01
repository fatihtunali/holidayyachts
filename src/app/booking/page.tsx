"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BookingForm } from "@/components/booking/BookingForm";
import { Button } from "@/components/ui/Button";
import { getAllYachts, getYachtById } from "@/data/yachts";
import type { Yacht } from "@/types";
import { Calendar, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function BookingContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const yachtParam = searchParams.get("yacht");

  const [selectedYacht, setSelectedYacht] = useState<Yacht | null>(null);
  const [step, setStep] = useState<"select" | "book">("select");

  const allYachts = getAllYachts();

  useEffect(() => {
    if (yachtParam) {
      const yacht = getYachtById(yachtParam);
      if (yacht) {
        setSelectedYacht(yacht);
        setStep("book");
      }
    }
  }, [yachtParam]);

  const handleYachtSelect = (yacht: Yacht) => {
    setSelectedYacht(yacht);
    setStep("book");
    // Update URL
    window.history.pushState({}, "", `/booking?yacht=${yacht.id}`);
  };

  // Mock blocked dates for demo
  const blockedDates = [
    new Date(2025, 6, 10),
    new Date(2025, 6, 11),
    new Date(2025, 6, 12),
    new Date(2025, 6, 13),
    new Date(2025, 6, 14),
    new Date(2025, 6, 15),
    new Date(2025, 6, 16),
    new Date(2025, 7, 1),
    new Date(2025, 7, 2),
    new Date(2025, 7, 3),
    new Date(2025, 7, 4),
    new Date(2025, 7, 5),
    new Date(2025, 7, 6),
    new Date(2025, 7, 7),
  ];

  const whyBookItems = [
    { titleKey: "booking.bestPrice", icon: "💰" },
    { titleKey: "booking.noHiddenFees", icon: "✓" },
    { titleKey: "booking.flexibleCancellation", icon: "📅" },
    { titleKey: "booking.support247", icon: "📞" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero/py.jpg"
            alt={t("booking.title")}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/90 text-white text-sm font-semibold rounded-full mb-4">
            <Calendar className="h-4 w-4" />
            {t("nav.booking")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("booking.title")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t("booking.subtitle")}
          </p>
        </div>
      </section>

      {/* Booking Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          {step === "select" ? (
            <>
              {/* Yacht Selection */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  {t("booking.selectYacht")}
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  {t("booking.selectYachtDesc")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {allYachts.map((yacht) => (
                  <div
                    key={yacht.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                    onClick={() => handleYachtSelect(yacht)}
                  >
                    <div className="relative h-64">
                      <Image
                        src={yacht.thumbnail}
                        alt={yacht.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white">
                          {yacht.name}
                        </h3>
                        <p className="text-white/80">
                          {yacht.length}m • {yacht.cabins} {t("yacht.cabins")} •{" "}
                          {yacht.guests} {t("yacht.guests")}
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600 mb-4 line-clamp-2">
                        {yacht.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-500">{t("common.from")}</p>
                          <p className="text-2xl font-bold text-amber-500">
                            €{(yacht.pricePerDay?.aprilMay || yacht.pricePerWeek?.low || 0).toLocaleString()}
                            <span className="text-sm font-normal text-slate-500">
                              {yacht.pricePerDay ? t("yacht.perDayShort") : t("yacht.perWeek")}
                            </span>
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          rightIcon={<ChevronRight className="h-4 w-4" />}
                        >
                          {t("common.select")}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Selected Yacht Info */}
              {selectedYacht && (
                <div className="mb-8">
                  <button
                    onClick={() => {
                      setStep("select");
                      setSelectedYacht(null);
                      window.history.pushState({}, "", "/booking");
                    }}
                    className="text-amber-500 hover:text-amber-600 font-medium mb-4 inline-flex items-center gap-1"
                  >
                    {t("booking.changeYacht")}
                  </button>

                  <div className="bg-slate-50 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={selectedYacht.thumbnail}
                        alt={selectedYacht.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-2xl font-bold text-slate-800">
                        {selectedYacht.name}
                      </h2>
                      <p className="text-slate-600">
                        {selectedYacht.length}m • {selectedYacht.cabins} {t("yacht.cabins")}
                        • {t("booking.guests")}: {selectedYacht.guests}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                        {selectedYacht.amenities.slice(0, 4).map((amenity) => (
                          <span
                            key={amenity}
                            className="px-2 py-1 bg-white text-slate-600 text-xs rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-slate-500">{t("common.from")}</p>
                      <p className="text-3xl font-bold text-amber-500">
                        €{(selectedYacht.pricePerDay?.aprilMay || selectedYacht.pricePerWeek?.low || 0).toLocaleString()}
                      </p>
                      <p className="text-sm text-slate-500">
                        {selectedYacht.pricePerDay ? t("yacht.perDayShort") : t("common.perWeek")}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Booking Form */}
              {selectedYacht && (
                <BookingForm
                  yacht={selectedYacht}
                  blockedDates={blockedDates}
                />
              )}
            </>
          )}
        </div>
      </section>

      {/* Why Book Direct */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-lg font-semibold text-slate-800 mb-8">
            {t("booking.whyBookDirect")}
          </h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {whyBookItems.map((item, index) => (
              <div key={index} className="text-center">
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <p className="font-medium text-slate-700">{t(item.titleKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600 mb-4">
            {t("booking.needHelp")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+902526144757">
              <Button variant="outline" size="lg">
                📞 {t("common.callUs")} +90 252 614 47 57
              </Button>
            </a>
            <a
              href="https://wa.me/905496144757"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                💬 {t("common.whatsapp")}
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                ✉️ {t("contact.send")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
