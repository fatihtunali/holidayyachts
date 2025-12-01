"use client";

import Image from "next/image";
import Link from "next/link";
import { getAllItineraries, getTranslatedItinerary } from "@/data/itineraries";
import { Button } from "@/components/ui/Button";
import { Clock, MapPin, Anchor, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ItinerariesPage() {
  const { t, language } = useLanguage();
  const rawItineraries = getAllItineraries();
  const itineraries = rawItineraries.map(it => getTranslatedItinerary(it, language));

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/itineraries/fethiye.jpg"
            alt={t("itineraries.title")}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/90 text-white text-sm font-semibold rounded-full mb-4">
            <MapPin className="h-4 w-4" />
            {t("itineraries.badge")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("itineraries.title")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t("itineraries.subtitle")}
          </p>
        </div>
      </section>

      {/* Itineraries Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {itineraries.map((itinerary, index) => (
              <div
                key={itinerary.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-[400px] rounded-2xl overflow-hidden ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={itinerary.thumbnail}
                    alt={itinerary.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 bg-amber-500 text-white font-semibold rounded-full">
                    {itinerary.duration} {t("itineraries.days")}
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-2 text-amber-500 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {itinerary.startPort} → {itinerary.endPort}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    {itinerary.name}
                  </h2>
                  <p className="text-slate-600 mb-6">{itinerary.description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-slate-800 mb-3">
                      {t("itineraries.highlights")}:
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {itinerary.highlights.slice(0, 4).map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-slate-600"
                        >
                          <Anchor className="h-4 w-4 text-amber-500 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={`/itineraries/${itinerary.slug}`}>
                    <Button
                      variant="primary"
                      size="lg"
                      rightIcon={<ChevronRight className="h-4 w-4" />}
                    >
                      {t("itineraries.viewFull")}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Routes CTA */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t("itineraries.customRoute")}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            {t("itineraries.customRouteDesc")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {t("itineraries.requestCustom")}
              </Button>
            </Link>
            <a href="tel:+902526144757">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                {t("common.callUs")}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
