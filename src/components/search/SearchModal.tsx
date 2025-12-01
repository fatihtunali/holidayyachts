"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Search, X, Ship, Map, Calendar, FileText, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAllYachts, getTranslatedYacht } from "@/data/yachts";
import { getAllItineraries, getTranslatedItinerary } from "@/data/itineraries";
import { getAllDestinations, getTranslatedDestination } from "@/data/destinations";
import { getAllBlogPosts, getTranslatedBlogPost } from "@/data/blog";

interface SearchResult {
  type: "yacht" | "itinerary" | "destination" | "blog";
  id: string;
  title: string;
  description: string;
  slug: string;
  image?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  // Build search index
  const searchIndex = useMemo(() => {
    const items: SearchResult[] = [];

    // Add yachts
    getAllYachts().forEach((yacht) => {
      const translated = getTranslatedYacht(yacht, language);
      items.push({
        type: "yacht",
        id: yacht.id,
        title: yacht.name,
        description: translated.shortDescription,
        slug: `/yachts/${yacht.slug}`,
        image: yacht.thumbnail,
      });
    });

    // Add itineraries
    getAllItineraries().forEach((itinerary) => {
      const translated = getTranslatedItinerary(itinerary, language);
      items.push({
        type: "itinerary",
        id: itinerary.id,
        title: translated.name,
        description: translated.description.slice(0, 100) + "...",
        slug: `/itineraries/${itinerary.slug}`,
        image: itinerary.thumbnail,
      });
    });

    // Add destinations
    getAllDestinations().forEach((destination) => {
      const translated = getTranslatedDestination(destination, language);
      items.push({
        type: "destination",
        id: destination.id,
        title: translated.name,
        description: translated.description.slice(0, 100) + "...",
        slug: `/destinations/${destination.slug}`,
        image: destination.image,
      });
    });

    // Add blog posts
    getAllBlogPosts().forEach((post) => {
      const translated = getTranslatedBlogPost(post, language);
      items.push({
        type: "blog",
        id: post.id,
        title: translated.title,
        description: translated.excerpt.slice(0, 100) + "...",
        slug: `/blog/${post.slug}`,
        image: post.image,
      });
    });

    return items;
  }, [language]);

  // Search function
  const search = useCallback(
    (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      const lowerQuery = searchQuery.toLowerCase();
      const matches = searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerQuery) ||
          item.description.toLowerCase().includes(lowerQuery)
      );

      setResults(matches.slice(0, 8));
    },
    [searchIndex]
  );

  useEffect(() => {
    search(query);
  }, [query, search]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (!isOpen) {
          // Parent component should handle opening
        } else {
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleResultClick = (slug: string) => {
    router.push(slug);
    onClose();
    setQuery("");
  };

  const getTypeIcon = (type: SearchResult["type"]) => {
    switch (type) {
      case "yacht":
        return <Ship className="h-4 w-4" />;
      case "itinerary":
        return <Calendar className="h-4 w-4" />;
      case "destination":
        return <Map className="h-4 w-4" />;
      case "blog":
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeLabel = (type: SearchResult["type"]) => {
    switch (type) {
      case "yacht":
        return t("nav.yachts");
      case "itinerary":
        return t("nav.itineraries");
      case "destination":
        return t("nav.destinations");
      case "blog":
        return t("nav.blog");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("search.placeholder")}
            className="flex-1 text-lg text-slate-800 placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query && results.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              {t("search.noResults")}
            </div>
          )}

          {results.length > 0 && (
            <div className="p-2">
              {results.map((result) => (
                <button
                  key={`${result.type}-${result.id}`}
                  onClick={() => handleResultClick(result.slug)}
                  className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                >
                  {result.image && (
                    <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={result.image}
                        alt={result.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="flex items-center gap-1 text-xs text-amber-600 font-medium">
                        {getTypeIcon(result.type)}
                        {getTypeLabel(result.type)}
                      </span>
                    </div>
                    <h4 className="font-medium text-slate-800 truncate">
                      {result.title}
                    </h4>
                    <p className="text-sm text-slate-500 truncate">
                      {result.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-amber-500 transition-colors flex-shrink-0" />
                </button>
              ))}
            </div>
          )}

          {/* Quick Links when no query */}
          {!query && (
            <div className="p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">
                {t("search.quickLinks")}
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleResultClick("/yachts")}
                  className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <Ship className="h-4 w-4 text-amber-500" />
                  <span className="text-slate-700">{t("nav.yachts")}</span>
                </button>
                <button
                  onClick={() => handleResultClick("/itineraries")}
                  className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <Calendar className="h-4 w-4 text-amber-500" />
                  <span className="text-slate-700">{t("nav.itineraries")}</span>
                </button>
                <button
                  onClick={() => handleResultClick("/destinations")}
                  className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <Map className="h-4 w-4 text-amber-500" />
                  <span className="text-slate-700">{t("nav.destinations")}</span>
                </button>
                <button
                  onClick={() => handleResultClick("/blog")}
                  className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <FileText className="h-4 w-4 text-amber-500" />
                  <span className="text-slate-700">{t("nav.blog")}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>{t("search.hint")}</span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-white rounded border text-slate-600">ESC</kbd>
            {t("search.toClose")}
          </span>
        </div>
      </div>
    </div>
  );
}
