"use client";

import { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import { format, addDays, isBefore, isAfter } from "date-fns";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight, Calendar, Info } from "lucide-react";
import "react-day-picker/dist/style.css";

interface AvailabilityCalendarProps {
  blockedDates?: Date[];
  selectedRange?: DateRange;
  onRangeSelect?: (range: DateRange | undefined) => void;
  minNights?: number;
  maxNights?: number;
  className?: string;
}

export function AvailabilityCalendar({
  blockedDates = [],
  selectedRange,
  onRangeSelect,
  minNights = 7,
  maxNights = 28,
  className,
}: AvailabilityCalendarProps) {
  const { t } = useLanguage();
  const [range, setRange] = useState<DateRange | undefined>(selectedRange);

  // Minimum date is tomorrow
  const minDate = addDays(new Date(), 1);
  // Maximum date is 18 months from now
  const maxDate = addDays(new Date(), 540);

  const handleSelect = (newRange: DateRange | undefined) => {
    if (newRange?.from && newRange?.to) {
      // Calculate nights
      const nights = Math.round(
        (newRange.to.getTime() - newRange.from.getTime()) / (1000 * 60 * 60 * 24)
      );

      // Adjust if over max nights
      if (nights > maxNights) {
        newRange.to = addDays(newRange.from, maxNights);
      }

      // Check if any blocked date is within range
      const hasBlockedDate = blockedDates.some(
        (blockedDate) =>
          newRange.from &&
          newRange.to &&
          isAfter(blockedDate, newRange.from) &&
          isBefore(blockedDate, newRange.to)
      );

      if (hasBlockedDate) {
        // Reset selection to just the start date
        setRange({ from: newRange.from, to: undefined });
        onRangeSelect?.({ from: newRange.from, to: undefined });
        return;
      }

      // Allow selection even if less than minNights - the UI will show warning
      // and the Continue button will be disabled in the parent component
    }

    setRange(newRange);
    onRangeSelect?.(newRange);
  };

  // Custom modifier for blocked dates
  const modifiers = {
    blocked: blockedDates,
    booked: blockedDates,
  };

  const modifiersStyles = {
    blocked: {
      backgroundColor: "#fecaca",
      color: "#dc2626",
      textDecoration: "line-through",
    },
  };

  return (
    <div className={cn("bg-white rounded-xl shadow-lg p-6", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-amber-500" />
          <h3 className="font-semibold text-slate-800">{t("calendar.selectDates")}</h3>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Info className="h-4 w-4" />
          <span>{t("calendar.minNights").replace("{min}", String(minNights))}</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-100 border border-green-400" />
          <span className="text-slate-600">{t("calendar.available")}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-100 border border-red-400" />
          <span className="text-slate-600">{t("calendar.booked")}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-amber-100 border border-amber-400" />
          <span className="text-slate-600">{t("calendar.selected")}</span>
        </div>
      </div>

      {/* Calendar */}
      <div className="availability-calendar flex justify-center">
        <style jsx global>{`
          .availability-calendar .rdp-root {
            --rdp-cell-size: 44px;
            --rdp-accent-color: #f59e0b;
            --rdp-background-color: #fef3c7;
          }
          .availability-calendar .rdp-months {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          @media (min-width: 640px) {
            .availability-calendar .rdp-months {
              grid-template-columns: repeat(2, 1fr);
              gap: 2rem;
            }
          }
          @media (min-width: 1024px) {
            .availability-calendar .rdp-months {
              grid-template-columns: repeat(4, 1fr);
              gap: 1.5rem;
            }
          }
          .availability-calendar .rdp-month {
            background: white;
          }
          .availability-calendar .rdp-month_caption {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.75rem;
            font-weight: 600;
            font-size: 1rem;
            color: #1e293b;
            position: relative;
          }
          .availability-calendar .rdp-nav {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            padding: 0.75rem;
          }
          .availability-calendar .rdp-button_previous,
          .availability-calendar .rdp-button_next {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
          }
          .availability-calendar .rdp-button_previous:hover,
          .availability-calendar .rdp-button_next:hover {
            background: #f1f5f9;
            border-color: #cbd5e1;
          }
          .availability-calendar .rdp-month_grid {
            border-collapse: separate;
            border-spacing: 0;
            margin-top: 0.5rem;
          }
          .availability-calendar .rdp-weekdays {
            display: grid !important;
            grid-template-columns: repeat(7, var(--rdp-cell-size));
          }
          .availability-calendar .rdp-weekday {
            width: var(--rdp-cell-size);
            height: 32px;
            font-size: 0.75rem;
            font-weight: 600;
            color: #64748b;
            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
          }
          .availability-calendar .rdp-weeks {
            display: flex;
            flex-direction: column;
          }
          .availability-calendar .rdp-week {
            display: grid !important;
            grid-template-columns: repeat(7, var(--rdp-cell-size));
          }
          .availability-calendar .rdp-day {
            width: var(--rdp-cell-size);
            height: var(--rdp-cell-size);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2px;
          }
          .availability-calendar .rdp-day_button {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            border: none;
            background: transparent;
            cursor: pointer;
            font-size: 0.875rem;
            font-weight: 500;
            transition: all 0.15s;
            color: #334155;
          }
          .availability-calendar .rdp-day_button:hover:not(:disabled) {
            background: #f1f5f9;
          }
          .availability-calendar .rdp-today .rdp-day_button {
            background: #e2e8f0;
            font-weight: 700;
          }
          .availability-calendar .rdp-selected .rdp-day_button {
            background: #f59e0b !important;
            color: white !important;
          }
          .availability-calendar .rdp-selected .rdp-day_button:hover {
            background: #d97706 !important;
          }
          .availability-calendar .rdp-range_middle .rdp-day_button {
            background: #fef3c7 !important;
            color: #92400e !important;
            border-radius: 0;
          }
          .availability-calendar .rdp-range_start .rdp-day_button {
            border-radius: 50% 0 0 50%;
          }
          .availability-calendar .rdp-range_end .rdp-day_button {
            border-radius: 0 50% 50% 0;
          }
          .availability-calendar .rdp-outside .rdp-day_button {
            color: #cbd5e1;
          }
          .availability-calendar .rdp-disabled .rdp-day_button {
            color: #cbd5e1 !important;
            cursor: not-allowed;
            background: transparent !important;
          }
          .availability-calendar .rdp-hidden {
            visibility: hidden;
          }
        `}</style>
        <DayPicker
          mode="range"
          selected={range}
          onSelect={handleSelect}
          numberOfMonths={4}
          weekStartsOn={6}
          disabled={[
            { before: minDate },
            { after: maxDate },
            ...blockedDates,
          ]}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          showOutsideDays={false}
          components={{
            Chevron: ({ orientation }) =>
              orientation === "left" ? (
                <ChevronLeft className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              ),
          }}
        />
      </div>

      {/* Selected Range Info */}
      {range?.from && (
        <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">{t("calendar.checkIn")}</p>
              <p className="font-semibold text-slate-800">
                {format(range.from, "EEE, MMM d, yyyy")}
              </p>
            </div>
            {range.to && (
              <>
                <div className="text-amber-500 font-bold">→</div>
                <div className="text-right">
                  <p className="text-sm text-slate-600">{t("calendar.checkOut")}</p>
                  <p className="font-semibold text-slate-800">
                    {format(range.to, "EEE, MMM d, yyyy")}
                  </p>
                </div>
              </>
            )}
          </div>
          {range.to && (() => {
            const nights = Math.round(
              (range.to.getTime() - range.from.getTime()) / (1000 * 60 * 60 * 24)
            );
            const isValidDuration = nights >= minNights;
            return (
              <div className="mt-3 pt-3 border-t border-amber-200 text-center">
                <span className="text-sm text-slate-600">{t("calendar.duration")}: </span>
                <span className={cn("font-bold", isValidDuration ? "text-amber-600" : "text-red-500")}>
                  {nights} {t("calendar.nights")}
                </span>
                {!isValidDuration && (
                  <p className="text-red-500 text-sm mt-2">
                    {t("calendar.minNightsWarning").replace("{min}", String(minNights))}
                  </p>
                )}
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
