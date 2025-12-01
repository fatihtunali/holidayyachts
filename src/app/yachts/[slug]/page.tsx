"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getYachtBySlug, getTranslatedYacht } from "@/data/yachts";
import { formatPrice } from "@/lib/utils";
import type { Yacht, TranslatedYacht } from "@/types";
import {
  Bed,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Ruler,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SocialShare } from "@/components/ui/SocialShare";
import { YachtSchema } from "@/components/seo/StructuredData";

export default function YachtPage() {
  const { t, language } = useLanguage();
  const params = useParams();
  const [yacht, setYacht] = useState<Yacht | null>(null);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slug = params.slug as string;
    const yachtData = getYachtBySlug(slug);
    if (yachtData) {
      setYacht(yachtData);
    }
    setLoading(false);
  }, [params.slug]);

  const translatedYacht = useMemo(() => {
    if (!yacht) return null;
    return getTranslatedYacht(yacht, language);
  }, [yacht, language]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  }, []);

  const goToPrevious = useCallback(() => {
    if (!yacht) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? yacht.images.length - 1 : prev - 1
    );
  }, [yacht]);

  const goToNext = useCallback(() => {
    if (!yacht) return;
    setCurrentImageIndex((prev) =>
      prev === yacht.images.length - 1 ? 0 : prev + 1
    );
  }, [yacht]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, goToPrevious, goToNext]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (!yacht || !translatedYacht) {
    notFound();
  }

  const features = [
    { icon: Ruler, labelKey: "yacht.length", value: `${yacht.length}m` },
    { icon: Users, labelKey: "yacht.guests", value: yacht.guests },
    { icon: Bed, labelKey: "yacht.cabins", value: yacht.cabins },
    { icon: Users, labelKey: "yacht.crew", value: yacht.crew },
    { icon: Calendar, labelKey: "yachtDetail.built", value: yacht.year },
    ...(yacht.renovated
      ? [{ icon: Wrench, labelKey: "yachtDetail.renovated", value: yacht.renovated }]
      : []),
  ];

  return (
    <>
      {/* Yacht Schema for SEO */}
      <YachtSchema
        name={yacht.name}
        description={translatedYacht.shortDescription}
        image={`https://www.holidayyachts.com${yacht.thumbnail}`}
        url={`https://www.holidayyachts.com/yachts/${yacht.slug}`}
        priceFrom={yacht.pricePerDay?.aprilMay || yacht.pricePerWeek?.low || 0}
        currency={yacht.currency}
        guests={yacht.guests}
        cabins={yacht.cabins}
        length={yacht.length}
      />

      {/* Hero Gallery */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <Image
            src={yacht.thumbnail}
            alt={yacht.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link
              href="/yachts"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              {t("yachtDetail.backToFleet")}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {yacht.name}
            </h1>
            <p className="text-xl text-white/80">{translatedYacht.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <Breadcrumb
          items={[
            { label: "Yachts", href: "/yachts" },
            { label: yacht.name },
          ]}
        />
        <SocialShare
          url={`https://www.holidayyachts.com/yachts/${yacht.slug}`}
          title={`${yacht.name} - Luxury Gulet Charter`}
          description={translatedYacht.shortDescription}
        />
      </div>

      {/* Quick Info Bar */}
      <section className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <feature.icon className="h-5 w-5 text-amber-400" />
                <span className="text-slate-400">{t(feature.labelKey)}:</span>
                <span className="font-semibold">{feature.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  {t("yachtDetail.about")} {yacht.name}
                </h2>
                <div className="prose prose-slate max-w-none">
                  {translatedYacht.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-slate-600 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  {t("yachtDetail.photoGallery")}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {yacht.images.map((image, index) => (
                    <div
                      key={image.id}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                          Click to enlarge
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  {t("yachtDetail.amenitiesFeatures")}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {yacht.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg"
                    >
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl shadow-xl p-6 border">
                <div className="text-center mb-6">
                  <p className="text-slate-500 text-sm">{t("yachtDetail.startingFrom")}</p>
                  <p className="text-4xl font-bold text-slate-800">
                    {formatPrice(yacht.pricePerDay?.aprilMay || yacht.pricePerWeek?.low || 0, yacht.currency)}
                  </p>
                  <p className="text-slate-500">
                    {yacht.pricePerDay ? t("yachtDetail.perDay") : t("yachtDetail.perWeek")}
                  </p>
                  {yacht.minDays && (
                    <p className="text-sm text-amber-600 font-medium mt-1">
                      {t("yachtDetail.minDays").replace("{days}", String(yacht.minDays))}
                    </p>
                  )}
                </div>

                {/* Season Prices */}
                <div className="space-y-3 mb-6">
                  {yacht.pricePerDay ? (
                    <>
                      <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-slate-600">{t("yacht.aprilMay")}</span>
                        <span className="font-semibold text-green-700">
                          {formatPrice(yacht.pricePerDay.aprilMay, yacht.currency)}{t("yacht.perDayShort")}
                        </span>
                      </div>
                      <div className="flex justify-between p-3 bg-amber-50 rounded-lg">
                        <span className="text-slate-600">{t("yacht.juneSeptember")}</span>
                        <span className="font-semibold text-amber-700">
                          {formatPrice(yacht.pricePerDay.juneSeptember, yacht.currency)}{t("yacht.perDayShort")}
                        </span>
                      </div>
                      <div className="flex justify-between p-3 bg-red-50 rounded-lg">
                        <span className="text-slate-600">{t("yacht.julyAugust")}</span>
                        <span className="font-semibold text-red-700">
                          {formatPrice(yacht.pricePerDay.julyAugust, yacht.currency)}{t("yacht.perDayShort")}
                        </span>
                      </div>
                      <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-slate-600">{t("yacht.october")}</span>
                        <span className="font-semibold text-green-700">
                          {formatPrice(yacht.pricePerDay.october, yacht.currency)}{t("yacht.perDayShort")}
                        </span>
                      </div>
                    </>
                  ) : yacht.pricePerWeek ? (
                    <>
                      <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-slate-600">{t("yacht.lowSeason")}</span>
                        <span className="font-semibold text-green-700">
                          {formatPrice(yacht.pricePerWeek.low, yacht.currency)}
                        </span>
                      </div>
                      <div className="flex justify-between p-3 bg-amber-50 rounded-lg">
                        <span className="text-slate-600">{t("yacht.midSeason")}</span>
                        <span className="font-semibold text-amber-700">
                          {formatPrice(yacht.pricePerWeek.mid, yacht.currency)}
                        </span>
                      </div>
                      <div className="flex justify-between p-3 bg-red-50 rounded-lg">
                        <span className="text-slate-600">{t("yacht.highSeason")}</span>
                        <span className="font-semibold text-red-700">
                          {formatPrice(yacht.pricePerWeek.high, yacht.currency)}
                        </span>
                      </div>
                    </>
                  ) : null}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link href={`/booking?yacht=${yacht.id}`} className="block">
                    <Button variant="primary" size="lg" className="w-full">
                      <Calendar className="h-5 w-5 mr-2" />
                      {t("itineraries.checkAvailability")}
                    </Button>
                  </Link>

                  <a href="tel:+902526144757" className="block">
                    <Button variant="outline" size="lg" className="w-full">
                      <Phone className="h-5 w-5 mr-2" />
                      {t("yachtDetail.callForQuote")}
                    </Button>
                  </a>

                  <Link href="/contact" className="block">
                    <Button variant="ghost" size="lg" className="w-full">
                      <Mail className="h-5 w-5 mr-2" />
                      {t("yachtDetail.sendInquiry")}
                    </Button>
                  </Link>
                </div>

                {/* Includes */}
                <div className="mt-6 pt-6 border-t">
                  <p className="font-semibold text-slate-800 mb-3">
                    {t("yachtDetail.charterIncludes")}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {yacht.inclusions ? (
                      yacht.inclusions.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))
                    ) : (
                      <>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          {t("yachtDetail.professionalCrew")}
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          {t("yachtDetail.fullBoardMeals")}
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          {t("yachtDetail.fuelCruising")}
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          {t("yachtDetail.waterSports")}
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          {t("yachtDetail.portFees")}
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                {/* Exclusions */}
                {yacht.exclusions && yacht.exclusions.length > 0 && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="font-semibold text-slate-800 mb-3">
                      {t("yachtDetail.notIncluded")}
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {yacht.exclusions.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <X className="h-4 w-4 text-red-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && yacht && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={yacht.images[currentImageIndex].src}
              alt={yacht.images[currentImageIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {currentImageIndex + 1} / {yacht.images.length}
          </div>
        </div>
      )}
    </>
  );
}
