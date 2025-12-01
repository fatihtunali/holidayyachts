"use client";

import Image from "next/image";
import Link from "next/link";
import { getAllDestinations, getTranslatedDestination } from "@/data/destinations";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, ChevronRight, Anchor } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function DestinationsPage() {
  const { t, language } = useLanguage();
  const rawDestinations = getAllDestinations();
  const destinations = rawDestinations.map(dest => getTranslatedDestination(dest, language));

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero/holiday10-hero.jpg"
            alt="Turkish Coast Destinations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-amber-500/90 text-white text-sm font-semibold rounded-full mb-4">
              {t("destinations.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("destinations.title")}
            </h1>
            <p className="text-xl text-white/80">
              {t("destinations.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: t("destinations.allDestinations") }]} />
      </div>

      {/* Intro Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              {t("destinations.turquoiseAwaits")}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t("destinations.turquoiseDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {destinations.map((destination, index) => (
              <Link
                key={destination.id}
                href={`/destinations/${destination.slug}`}
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0 ? "md:col-span-2 h-[400px]" : "h-[350px]"
                }`}
              >
                <Image
                  src={destination.image || "/assets/images/hero/holiday10-hero.jpg"}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 text-amber-400 mb-2">
                    <MapPin className="h-5 w-5" />
                    <span className="text-sm font-medium uppercase tracking-wider">
                      {destination.name}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {destination.title}
                  </h3>

                  <p className="text-white/80 mb-4 line-clamp-2 max-w-2xl">
                    {destination.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.idealFor.slice(0, 3).map((ideal) => (
                      <span
                        key={ideal}
                        className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                      >
                        {ideal}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-amber-400 font-medium group-hover:gap-4 transition-all">
                    {t("destinations.explore")} {destination.name}
                    <ChevronRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-slate-900">
          <Image
            src="/assets/images/about/about-h41.jpg"
            alt="Yacht sailing"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Anchor className="h-12 w-12 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("destinations.notSure")}
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {t("destinations.notSureDesc")}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
          >
            {t("destinations.contactExperts")}
          </Link>
        </div>
      </section>
    </>
  );
}
