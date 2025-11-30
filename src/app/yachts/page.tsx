"use client";

import Image from "next/image";
import { YachtCard } from "@/components/yacht/YachtCard";
import { getAllYachts } from "@/data/yachts";
import { Anchor } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function YachtsPage() {
  const { t } = useLanguage();
  const yachts = getAllYachts();

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
          <div className="flex flex-wrap justify-center gap-8 mb-12 p-6 bg-slate-50 rounded-xl">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-amber-500">{stat.value}</p>
                <p className="text-sm text-slate-600">{t(stat.labelKey)}</p>
              </div>
            ))}
          </div>

          {/* Featured Yacht */}
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4">
              {t("yachts.featured")}
            </h2>
            <YachtCard yacht={yachts[0]} variant="featured" />
          </div>

          {/* All Yachts */}
          <div>
            <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4">
              {t("yachts.allYachts")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {yachts.slice(1).map((yacht) => (
                <YachtCard key={yacht.id} yacht={yacht} />
              ))}
            </div>
          </div>
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
