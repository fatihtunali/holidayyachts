"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getYachtBySlug } from "@/data/yachts";
import { formatPrice } from "@/lib/utils";
import type { Yacht } from "@/types";
import {
  Bed,
  Calendar,
  Check,
  ChevronLeft,
  Mail,
  Phone,
  Ruler,
  Users,
  Wrench,
} from "lucide-react";

export default function YachtPage() {
  const { t } = useLanguage();
  const params = useParams();
  const [yacht, setYacht] = useState<Yacht | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = params.slug as string;
    const yachtData = getYachtBySlug(slug);
    if (yachtData) {
      setYacht(yachtData);
    }
    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (!yacht) {
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
            <p className="text-xl text-white/80">{yacht.shortDescription}</p>
          </div>
        </div>
      </section>

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
                  {yacht.description.split("\n\n").map((paragraph, index) => (
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
                  {yacht.images.map((image) => (
                    <div
                      key={image.id}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
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
                    {formatPrice(yacht.pricePerWeek.low, yacht.currency)}
                  </p>
                  <p className="text-slate-500">{t("yachtDetail.perWeek")}</p>
                </div>

                {/* Season Prices */}
                <div className="space-y-3 mb-6">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
