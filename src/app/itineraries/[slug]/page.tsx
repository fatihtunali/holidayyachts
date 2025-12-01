"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { YachtCard } from "@/components/yacht/YachtCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { getItineraryBySlug, getTranslatedItinerary, TranslatedItinerary } from "@/data/itineraries";
import { getYachtById } from "@/data/yachts";
import type { Yacht } from "@/types";
import {
  Anchor,
  Calendar,
  ChevronLeft,
  MapPin,
} from "lucide-react";

export default function ItineraryPage() {
  const { t, language } = useLanguage();
  const params = useParams();
  const [itinerary, setItinerary] = useState<TranslatedItinerary | null>(null);
  const [recommendedYachts, setRecommendedYachts] = useState<Yacht[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = params.slug as string;
    const itineraryData = getItineraryBySlug(slug);
    if (itineraryData) {
      setItinerary(getTranslatedItinerary(itineraryData, language));
      const yachts = itineraryData.recommendedYachts
        .map((id) => getYachtById(id))
        .filter((yacht): yacht is Yacht => yacht !== undefined);
      setRecommendedYachts(yachts);
    }
    setLoading(false);
  }, [params.slug, language]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (!itinerary) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={itinerary.thumbnail}
            alt={itinerary.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 pb-12 relative z-10">
          <Link
            href="/itineraries"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"
          >
            <ChevronLeft className="h-4 w-4" />
            {t("itineraryDetail.allItineraries")}
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-4 py-2 bg-amber-500 text-white font-semibold rounded-full">
              {itinerary.duration} {t("itineraryDetail.days")}
            </span>
            <span className="flex items-center gap-2 text-white/80">
              <MapPin className="h-4 w-4" />
              {itinerary.startPort} → {itinerary.endPort}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {itinerary.name}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            {itinerary.description}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {itinerary.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm"
              >
                <Anchor className="h-4 w-4 text-amber-500" />
                <span className="text-slate-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              {t("itineraryDetail.dayByDay")}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t("itineraryDetail.dayByDayDesc")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {itinerary.dailySchedule.map((day, index) => (
              <div key={day.day} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline Line */}
                {index < itinerary.dailySchedule.length - 1 && (
                  <div className="absolute left-[15px] top-10 bottom-0 w-0.5 bg-amber-200" />
                )}

                {/* Day Number */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
                  {day.day}
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl shadow-lg p-6 ml-4">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h3 className="text-xl font-bold text-slate-800">
                      {day.title}
                    </h3>
                    {day.port && (
                      <span className="flex items-center gap-1 text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                        <MapPin className="h-3 w-3" />
                        {day.port}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-600 mb-4">{day.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {day.activities.map((activity, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Yachts */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t("itineraryDetail.recommendedYachts")}
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {t("itineraryDetail.recommendedYachtsDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedYachts.map(
              (yacht) =>
                yacht && <YachtCard key={yacht.id} yacht={yacht} />
            )}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              {t("itineraryDetail.readyToExperience")}
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              {t("itineraryDetail.contactUs")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/booking">
                <Button
                  variant="secondary"
                  size="xl"
                  leftIcon={<Calendar className="h-5 w-5" />}
                >
                  {t("itineraries.checkAvailability")}
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-white text-white hover:bg-white hover:text-amber-600"
                >
                  {t("itineraryDetail.getQuote")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
