"use client";

import Image from "next/image";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Yacht } from "@/types";
import { getTranslatedYacht } from "@/data/yachts";
import {
  Users,
  Bed,
  Ruler,
  Calendar,
  ArrowRight,
  Anchor,
} from "lucide-react";
import { FavoriteButton } from "@/components/ui/FavoriteButton";

interface YachtCardProps {
  yacht: Yacht;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

export function YachtCard({
  yacht,
  variant = "default",
  className,
}: YachtCardProps) {
  const { t, language } = useLanguage();
  const translatedYacht = getTranslatedYacht(yacht, language);

  const features = [
    { icon: Ruler, labelKey: "yacht.length", value: `${yacht.length}m` },
    { icon: Users, labelKey: "yacht.guests", value: yacht.guests },
    { icon: Bed, labelKey: "yacht.cabins", value: yacht.cabins },
    { icon: Calendar, labelKey: "yacht.built", value: yacht.renovated || yacht.year },
  ];

  if (variant === "compact") {
    return (
      <Link
        href={`/yachts/${yacht.slug}`}
        className={cn(
          "group flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all",
          className
        )}
      >
        <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={yacht.thumbnail}
            alt={yacht.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-800 truncate">{yacht.name}</h3>
          <p className="text-sm text-slate-500">
            {yacht.length}m • {yacht.cabins} {t("yacht.cabins")} • {yacht.guests} {t("yacht.guests")}
          </p>
          <p className="text-amber-500 font-semibold mt-1">
            {t("common.from")} {formatPrice(yacht.pricePerDay?.aprilMay || yacht.pricePerWeek?.low || 0, yacht.currency)}
            {yacht.pricePerDay ? t("yacht.perDayShort") : t("yacht.perWeek")}
          </p>
        </div>
        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <div
        className={cn(
          "group relative bg-white rounded-2xl shadow-xl overflow-hidden",
          className
        )}
      >
        {/* Image */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src={yacht.thumbnail}
            alt={yacht.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-sm font-semibold rounded-full">
            {t("yachts.featured")}
          </div>

          {/* Favorite Button */}
          <FavoriteButton
            id={yacht.id}
            type="yacht"
            variant="overlay"
            size="md"
            className="absolute top-4 right-4"
          />

          {/* Title on image */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{yacht.name}</h3>
            <p className="text-white/80 text-sm line-clamp-2">
              {translatedYacht.shortDescription}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Features Grid */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {features.map((feature) => (
              <div key={feature.labelKey} className="text-center">
                <feature.icon className="h-5 w-5 text-amber-500 mx-auto mb-1" />
                <p className="text-xs text-slate-500">{t(feature.labelKey)}</p>
                <p className="text-sm font-semibold text-slate-800">
                  {feature.value}
                </p>
              </div>
            ))}
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <p className="text-xs text-slate-500">{t("yacht.priceFrom")}</p>
              <p className="text-2xl font-bold text-slate-800">
                {formatPrice(yacht.pricePerDay?.aprilMay || yacht.pricePerWeek?.low || 0, yacht.currency)}
                <span className="text-sm font-normal text-slate-500">
                  {yacht.pricePerDay ? t("yacht.perDayShort") : t("yacht.perWeek")}
                </span>
              </p>
            </div>
            <Link href={`/yachts/${yacht.slug}`}>
              <Button variant="primary" size="lg">
                {t("common.viewDetails")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div
      className={cn(
        "group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={yacht.thumbnail}
          alt={yacht.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Favorite Button */}
        <FavoriteButton
          id={yacht.id}
          type="yacht"
          variant="overlay"
          size="sm"
          className="absolute top-3 right-3"
        />

        {/* Quick View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Link href={`/yachts/${yacht.slug}`}>
            <Button variant="primary" size="md">
              {t("common.viewDetails")}
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-bold text-lg text-slate-800 group-hover:text-amber-500 transition-colors">
              {yacht.name}
            </h3>
            <p className="text-sm text-slate-500 flex items-center gap-1">
              <Anchor className="h-3 w-3" />
              {yacht.type.charAt(0).toUpperCase() + yacht.type.slice(1)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500">{t("common.from")}</p>
            <p className="text-lg font-bold text-amber-500">
              {formatPrice(yacht.pricePerDay?.aprilMay || yacht.pricePerWeek?.low || 0, yacht.currency)}
              <span className="text-xs font-normal">
                {yacht.pricePerDay ? t("yacht.perDayShort") : ""}
              </span>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="flex items-center justify-between text-sm text-slate-600 pt-3 border-t">
          {features.slice(0, 3).map((feature) => (
            <div key={feature.labelKey} className="flex items-center gap-1">
              <feature.icon className="h-4 w-4 text-slate-400" />
              <span>{feature.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
