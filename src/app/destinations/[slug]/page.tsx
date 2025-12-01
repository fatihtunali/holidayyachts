"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDestinationBySlug, getTranslatedDestination, Destination, DestinationTranslation } from "@/data/destinations";
import { getAllItineraries, getTranslatedItinerary } from "@/data/itineraries";
import { getAllYachts } from "@/data/yachts";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Check,
  Users,
  Anchor,
  Sun,
  Camera,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/Button";
import { YachtCard } from "@/components/yacht/YachtCard";

export default function DestinationPage() {
  const { t, language } = useLanguage();
  const params = useParams();
  const [destination, setDestination] = useState<(Destination & DestinationTranslation) | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = params.slug as string;
    const destData = getDestinationBySlug(slug);
    if (destData) {
      setDestination(getTranslatedDestination(destData, language));
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

  if (!destination) {
    notFound();
  }

  const rawItineraries = getAllItineraries();
  const relatedItineraries = rawItineraries
    .filter((it) => destination.relatedItineraries.includes(it.slug))
    .map((it) => getTranslatedItinerary(it, language));
  const yachts = getAllYachts().slice(0, 4);

  // Destination schema for SEO
  const destinationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.description,
    image: `https://www.holidayyachts.com${destination.image}`,
    url: `https://www.holidayyachts.com/destinations/${destination.slug}`,
    touristType: destination.idealFor,
    includesAttraction: destination.keyAttractions.map((attr) => ({
      "@type": "TouristAttraction",
      name: attr.name,
      description: attr.description,
    })),
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.holidayyachts.com" },
          { name: "Destinations", url: "https://www.holidayyachts.com/destinations" },
          {
            name: destination.name,
            url: `https://www.holidayyachts.com/destinations/${destination.slug}`,
          },
        ]}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={destination.image || "/assets/images/hero/holiday10-hero.jpg"}
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pb-12">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            {t("destinations.allDestinations")}
          </Link>

          <div className="flex items-center gap-2 text-amber-400 mb-2">
            <MapPin className="h-5 w-5" />
            <span className="font-medium uppercase tracking-wider">
              {destination.name}, {t("destinations.turkey")}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {destination.title}
          </h1>

          <p className="text-xl text-white/80 max-w-3xl">
            {destination.description}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb
          items={[
            { label: t("nav.destinations"), href: "/destinations" },
            { label: destination.name },
          ]}
        />
      </div>

      {/* Quick Info Bar */}
      <section className="bg-slate-50 py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <Sun className="h-5 w-5 text-amber-500" />
              <span className="text-slate-600">{t("destinations.bestTime")}:</span>
              <span className="font-medium text-slate-800">{destination.bestTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-amber-500" />
              <span className="text-slate-600">{t("destinations.mustSee")}:</span>
              <span className="font-medium text-slate-800">
                {destination.keyAttractions.length}+
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Anchor className="h-5 w-5 text-amber-500" />
              <span className="text-slate-600">{t("itineraries.badge")}:</span>
              <span className="font-medium text-slate-800">
                {relatedItineraries.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  {t("destinations.about")} {destination.name}
                </h2>
                <div className="prose prose-slate max-w-none">
                  {destination.longDescription
                    .trim()
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index} className="text-slate-600 mb-4 leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  {t("destinations.whyVisit")} {destination.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg"
                    >
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Attractions */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  {t("destinations.mustSee")}
                </h2>
                <div className="space-y-4">
                  {destination.keyAttractions.map((attraction, index) => (
                    <div
                      key={index}
                      className="p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {attraction.name}
                      </h3>
                      <p className="text-slate-600">{attraction.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Itineraries */}
              {relatedItineraries.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">
                    {t("destinations.itinerariesFrom")} {destination.name}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {relatedItineraries.map((itinerary) => (
                      <Link
                        key={itinerary.id}
                        href={`/itineraries/${itinerary.slug}`}
                        className="group relative h-48 rounded-xl overflow-hidden"
                      >
                        <Image
                          src={itinerary.thumbnail}
                          alt={itinerary.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center gap-2 text-amber-400 text-sm mb-1">
                            <Clock className="h-4 w-4" />
                            {itinerary.duration} {t("itineraries.days")}
                          </div>
                          <h3 className="text-lg font-bold text-white">
                            {itinerary.name}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-amber-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {t("destinations.planCruise")} {destination.name}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {t("destinations.planCruiseDesc")} {destination.name}.
                  </p>
                  <Link href="/booking" className="block">
                    <Button variant="primary" size="lg" className="w-full">
                      <Calendar className="h-5 w-5 mr-2" />
                      {t("itineraries.checkAvailability")}
                    </Button>
                  </Link>
                  <Link href="/contact" className="block mt-3">
                    <Button variant="outline" size="lg" className="w-full">
                      {t("destinations.contactExperts")}
                    </Button>
                  </Link>
                </div>

                {/* Ideal For */}
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-amber-500" />
                    {t("destinations.idealFor")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {destination.idealFor.map((ideal) => (
                      <span
                        key={ideal}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                      >
                        {ideal}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Best Time */}
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Sun className="h-5 w-5 text-amber-500" />
                    {t("destinations.bestTime")}
                  </h3>
                  <p className="text-slate-600">{destination.bestTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Yachts Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              {t("destinations.sailInStyle")} {destination.name}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t("destinations.sailInStyleDesc")} {destination.name}.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {yachts.map((yacht) => (
              <YachtCard key={yacht.id} yacht={yacht} variant="compact" />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/yachts">
              <Button
                variant="outline"
                size="lg"
                rightIcon={<ChevronRight className="h-4 w-4" />}
              >
                {t("home.fleet.viewAll")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Destinations */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
            {t("destinations.exploreOther")}
          </h2>
          <div className="flex justify-center">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-amber-600 font-medium hover:gap-4 transition-all"
            >
              {t("destinations.viewAll")}
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
