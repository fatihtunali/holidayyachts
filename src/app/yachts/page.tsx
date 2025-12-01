"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { YachtCard } from "@/components/yacht/YachtCard";
import { YachtFilters } from "@/components/yacht/YachtFilters";
import { getAllYachts } from "@/data/yachts";
import { Anchor, Ship } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FilterState {
  guests: number | null;
  minLength: number | null;
  maxPrice: number | null;
}

export default function YachtsPage() {
  const { t } = useLanguage();
  const allYachts = getAllYachts();

  const [filters, setFilters] = useState<FilterState>({
    guests: null,
    minLength: null,
    maxPrice: null,
  });

  const filteredYachts = useMemo(() => {
    return allYachts.filter((yacht) => {
      if (filters.guests && yacht.guests < filters.guests) return false;
      if (filters.minLength && yacht.length < filters.minLength) return false;
      if (filters.maxPrice && yacht.pricePerWeek.low > filters.maxPrice) return false;
      return true;
    });
  }, [allYachts, filters]);

  const hasActiveFilters = filters.guests !== null ||
    filters.minLength !== null ||
    filters.maxPrice !== null;

  const stats = [
    { value: "4", labelKey: "yachts.stats.gulets" },
    { value: "8-12", labelKey: "yachts.stats.capacity" },
    { value: "24-32m", labelKey: "yachts.stats.length" },
    { value: "2015-2019", labelKey: "yachts.stats.builtYears" },
  ];

  const features = [
    {
      titleKey: "yachts.why.quality.title",
      descKey: "yachts.why.quality.desc",
    },
    {
      titleKey: "yachts.why.crew.title",
      descKey: "yachts.why.crew.desc",
    },
    {
      titleKey: "yachts.why.amenities.title",
      descKey: "yachts.why.amenities.desc",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/yachts/holiday10/01.jpg"
            alt={t("yachts.title")}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/90 text-white text-sm font-semibold rounded-full mb-4">
            <Anchor className="h-4 w-4" />
            {t("yachts.badge")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("yachts.title")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t("yachts.subtitle")}
          </p>
        </div>
      </section>

      {/* Yachts Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 p-6 bg-slate-50 rounded-xl">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-amber-500">{stat.value}</p>
                <p className="text-sm text-slate-600">{t(stat.labelKey)}</p>
              </div>
            ))}
          </div>

          {/* Filters */}
          <YachtFilters
            onFilterChange={setFilters}
            activeFilters={filters}
          />

          {/* Yachts */}
          {filteredYachts.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-xl">
              <Ship className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-700 mb-2">
                {t("yachts.filters.noResults")}
              </h3>
              <p className="text-slate-500">
                {t("yachts.filters.noResultsDesc")}
              </p>
            </div>
          ) : (
            <>
              {/* Featured Yacht (only show if not filtering) */}
              {!hasActiveFilters && (
                <div className="mb-12">
                  <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4">
                    {t("yachts.featured")}
                  </h2>
                  <YachtCard yacht={filteredYachts[0]} variant="featured" />
                </div>
              )}

              {/* All Yachts */}
              <div>
                <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4">
                  {t("yachts.allYachts")} ({filteredYachts.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(hasActiveFilters ? filteredYachts : filteredYachts.slice(1)).map((yacht) => (
                    <YachtCard key={yacht.id} yacht={yacht} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Why Choose Our Fleet */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("yachts.whyChoose")}</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {t("yachts.whyChooseDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 rounded-xl border border-white/10"
              >
                <h3 className="text-xl font-semibold text-amber-400 mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-slate-300">{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
