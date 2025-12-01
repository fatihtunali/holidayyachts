"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Ruler, Euro, X, Filter, ChevronDown } from "lucide-react";

interface FilterState {
  guests: number | null;
  minLength: number | null;
  maxPrice: number | null;
}

interface YachtFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  activeFilters: FilterState;
}

export function YachtFilters({ onFilterChange, activeFilters }: YachtFiltersProps) {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const guestOptions = [
    { value: null, label: t("yachts.filters.anyGuests") },
    { value: 8, label: "8+" },
    { value: 10, label: "10+" },
    { value: 12, label: "12+" },
  ];

  const lengthOptions = [
    { value: null, label: t("yachts.filters.anyLength") },
    { value: 24, label: "24m+" },
    { value: 28, label: "28m+" },
    { value: 30, label: "30m+" },
  ];

  const priceOptions = [
    { value: null, label: t("yachts.filters.anyPrice") },
    { value: 15000, label: t("yachts.filters.under15k") },
    { value: 20000, label: t("yachts.filters.under20k") },
    { value: 25000, label: t("yachts.filters.under25k") },
  ];

  const hasActiveFilters = activeFilters.guests !== null ||
    activeFilters.minLength !== null ||
    activeFilters.maxPrice !== null;

  const clearFilters = () => {
    onFilterChange({
      guests: null,
      minLength: null,
      maxPrice: null,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-8">
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full md:hidden"
      >
        <span className="flex items-center gap-2 font-medium text-slate-800">
          <Filter className="h-5 w-5 text-amber-500" />
          {t("yachts.filters.title")}
          {hasActiveFilters && (
            <span className="px-2 py-0.5 bg-amber-100 text-amber-600 text-xs rounded-full">
              {t("yachts.filters.active")}
            </span>
          )}
        </span>
        <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {/* Filters Content */}
      <div className={`${isExpanded ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Title - Desktop only */}
          <div className="hidden md:flex items-center gap-2 text-slate-700 font-medium">
            <Filter className="h-5 w-5 text-amber-500" />
            {t("yachts.filters.title")}
          </div>

          {/* Guests Filter */}
          <div className="flex-1">
            <label className="block text-xs text-slate-500 mb-1">{t("yachts.filters.guests")}</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <select
                value={activeFilters.guests ?? ""}
                onChange={(e) => onFilterChange({
                  ...activeFilters,
                  guests: e.target.value ? Number(e.target.value) : null,
                })}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 appearance-none cursor-pointer"
              >
                {guestOptions.map((option) => (
                  <option key={option.label} value={option.value ?? ""}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Length Filter */}
          <div className="flex-1">
            <label className="block text-xs text-slate-500 mb-1">{t("yachts.filters.length")}</label>
            <div className="relative">
              <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <select
                value={activeFilters.minLength ?? ""}
                onChange={(e) => onFilterChange({
                  ...activeFilters,
                  minLength: e.target.value ? Number(e.target.value) : null,
                })}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 appearance-none cursor-pointer"
              >
                {lengthOptions.map((option) => (
                  <option key={option.label} value={option.value ?? ""}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Price Filter */}
          <div className="flex-1">
            <label className="block text-xs text-slate-500 mb-1">{t("yachts.filters.weeklyPrice")}</label>
            <div className="relative">
              <Euro className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <select
                value={activeFilters.maxPrice ?? ""}
                onChange={(e) => onFilterChange({
                  ...activeFilters,
                  maxPrice: e.target.value ? Number(e.target.value) : null,
                })}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 appearance-none cursor-pointer"
              >
                {priceOptions.map((option) => (
                  <option key={option.label} value={option.value ?? ""}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-amber-600 transition-colors mt-2 md:mt-auto"
            >
              <X className="h-4 w-4" />
              {t("yachts.filters.clear")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
