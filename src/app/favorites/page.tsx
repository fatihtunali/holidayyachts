"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAllYachts, getTranslatedYacht } from "@/data/yachts";
import { getAllItineraries, getTranslatedItinerary } from "@/data/itineraries";
import { YachtCard } from "@/components/yacht/YachtCard";
import { Button } from "@/components/ui/Button";
import { Heart, Ship, Calendar, Trash2, ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/utils";

type TabType = "yachts" | "itineraries";

export default function FavoritesPage() {
  const { t, language } = useLanguage();
  const { favorites, getFavoritesByType, clearAllFavorites, removeFavorite } = useFavorites();
  const [activeTab, setActiveTab] = useState<TabType>("yachts");

  const yachtFavorites = getFavoritesByType("yacht");
  const itineraryFavorites = getFavoritesByType("itinerary");

  const allYachts = getAllYachts();
  const allItineraries = getAllItineraries();

  const favoriteYachts = allYachts.filter((yacht) =>
    yachtFavorites.some((fav) => fav.id === yacht.id)
  );

  const favoriteItineraries = allItineraries.filter((itinerary) =>
    itineraryFavorites.some((fav) => fav.id === itinerary.id)
  );

  const tabs = [
    { id: "yachts" as TabType, label: t("favorites.yachts"), count: yachtFavorites.length, icon: Ship },
    { id: "itineraries" as TabType, label: t("favorites.itineraries"), count: itineraryFavorites.length, icon: Calendar },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[200px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/90 text-white text-sm font-semibold rounded-full mb-4">
            <Heart className="h-4 w-4 fill-current" />
            {favorites.length} {t("favorites.title")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("favorites.title")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t("favorites.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          {favorites.length === 0 ? (
            // Empty State
            <div className="text-center py-16 bg-slate-50 rounded-xl">
              <Heart className="h-20 w-20 text-slate-300 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-slate-700 mb-3">
                {t("favorites.empty")}
              </h3>
              <p className="text-slate-500 mb-8 max-w-md mx-auto">
                {t("favorites.emptyDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/yachts">
                  <Button variant="primary" size="lg">
                    <Ship className="h-5 w-5 mr-2" />
                    {t("favorites.browseYachts")}
                  </Button>
                </Link>
                <Link href="/itineraries">
                  <Button variant="outline" size="lg">
                    <Calendar className="h-5 w-5 mr-2" />
                    {t("favorites.browseItineraries")}
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Tabs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex gap-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                        activeTab === tab.id
                          ? "bg-amber-500 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      <tab.icon className="h-4 w-4" />
                      {tab.label}
                      <span
                        className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                          activeTab === tab.id
                            ? "bg-white/20 text-white"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {tab.count}
                      </span>
                    </button>
                  ))}
                </div>

                {favorites.length > 0 && (
                  <button
                    onClick={clearAllFavorites}
                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                    {t("favorites.clearAll")}
                  </button>
                )}
              </div>

              {/* Yachts Tab */}
              {activeTab === "yachts" && (
                <div>
                  {favoriteYachts.length === 0 ? (
                    <div className="text-center py-12 bg-slate-50 rounded-xl">
                      <Ship className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                      <p className="text-slate-500">{t("favorites.empty")}</p>
                      <Link href="/yachts" className="inline-block mt-4">
                        <Button variant="outline">
                          {t("favorites.browseYachts")}
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {favoriteYachts.map((yacht) => (
                        <YachtCard key={yacht.id} yacht={yacht} />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Itineraries Tab */}
              {activeTab === "itineraries" && (
                <div>
                  {favoriteItineraries.length === 0 ? (
                    <div className="text-center py-12 bg-slate-50 rounded-xl">
                      <Calendar className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                      <p className="text-slate-500">{t("favorites.empty")}</p>
                      <Link href="/itineraries" className="inline-block mt-4">
                        <Button variant="outline">
                          {t("favorites.browseItineraries")}
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {favoriteItineraries.map((itinerary) => {
                        const translated = getTranslatedItinerary(itinerary, language);
                        return (
                          <div
                            key={itinerary.id}
                            className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow-lg overflow-hidden"
                          >
                            <div className="relative w-full md:w-80 h-48 md:h-auto flex-shrink-0">
                              <Image
                                src={itinerary.thumbnail}
                                alt={translated.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 p-6">
                              <div className="flex items-start justify-between">
                                <div>
                                  <span className="text-sm text-amber-500 font-medium">
                                    {itinerary.duration} {t("itineraries.days")}
                                  </span>
                                  <h3 className="text-xl font-bold text-slate-800 mt-1">
                                    {translated.name}
                                  </h3>
                                  <p className="text-slate-600 mt-2 line-clamp-2">
                                    {translated.description}
                                  </p>
                                </div>
                                <button
                                  onClick={() => removeFavorite(itinerary.id, "itinerary")}
                                  className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                >
                                  <Heart className="h-5 w-5 fill-current" />
                                </button>
                              </div>
                              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                                <p className="text-sm text-slate-500">
                                  {itinerary.startPort} - {itinerary.endPort}
                                </p>
                                <Link href={`/itineraries/${itinerary.slug}`}>
                                  <Button variant="primary" size="sm">
                                    {t("common.viewDetails")}
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
