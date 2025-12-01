"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn, formatPrice, calculateTotalPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { AvailabilityCalendar } from "./AvailabilityCalendar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/components/ui/Toast";
import type { Yacht, CustomerInfo } from "@/types";
import {
  User,
  Mail,
  Phone,
  Globe,
  Users,
  MessageSquare,
  Check,
  AlertCircle,
} from "lucide-react";

interface BookingFormProps {
  yacht: Yacht;
  blockedDates?: Date[];
  className?: string;
}

interface FormData extends CustomerInfo {
  guests: number;
  specialRequests?: string;
  agreeToTerms: boolean;
}

export function BookingForm({
  yacht,
  blockedDates = [],
  className,
}: BookingFormProps) {
  const { t, language } = useLanguage();
  const { showToast } = useToast();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Anti-spam: honeypot field and timestamp
  const [honeypot, setHoneypot] = useState("");
  const formLoadTime = useRef(Date.now());

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      guests: 2,
      agreeToTerms: false,
    },
  });

  const guests = watch("guests");

  // Calculate price
  const calculatePrice = () => {
    if (!dateRange?.from || !dateRange?.to) return null;
    return calculateTotalPrice(yacht.pricePerWeek, dateRange.from, dateRange.to);
  };

  const totalPrice = calculatePrice();

  const handleFormSubmit = async (data: FormData) => {
    if (!dateRange?.from || !dateRange?.to) return;

    setIsSubmitting(true);
    setSubmitError(null);

    // Anti-spam checks
    const timeElapsed = Date.now() - formLoadTime.current;
    const MIN_SUBMIT_TIME = 5000; // 5 seconds minimum for booking form

    // Check 1: Honeypot field should be empty
    if (honeypot) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setStep(3);
      setIsSubmitting(false);
      return;
    }

    // Check 2: Form submitted too quickly
    if (timeElapsed < MIN_SUBMIT_TIME) {
      showToast("Please take your time filling out the form.", "warning");
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to API
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          yachtId: yacht.id,
          yachtName: yacht.name,
          startDate: format(dateRange.from, "yyyy-MM-dd"),
          endDate: format(dateRange.to, "yyyy-MM-dd"),
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          country: data.country,
          guests: data.guests,
          specialRequests: data.specialRequests,
          totalPrice: totalPrice || undefined,
          currency: yacht.currency,
          language,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit booking");
      }

      setSubmitSuccess(true);
      setStep(3);
      showToast(t("bookingForm.requestSubmitted"), "success");
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Failed to submit booking"
      );
      showToast(
        error instanceof Error ? error.message : "Failed to submit booking",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const minNights = 7;
  const canProceedToStep2 = dateRange?.from && dateRange?.to &&
    Math.round((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24)) >= minNights;

  return (
    <div className={cn("space-y-8", className)}>
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors",
                step >= s
                  ? "bg-amber-500 text-white"
                  : "bg-slate-200 text-slate-500"
              )}
            >
              {step > s ? <Check className="h-5 w-5" /> : s}
            </div>
            {s < 3 && (
              <div
                className={cn(
                  "w-16 h-1 mx-2 rounded",
                  step > s ? "bg-amber-500" : "bg-slate-200"
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Labels */}
      <div className="flex justify-center gap-8 text-sm">
        <span className={cn(step === 1 ? "text-amber-500 font-semibold" : "text-slate-500")}>
          {t("booking.selectDates")}
        </span>
        <span className={cn(step === 2 ? "text-amber-500 font-semibold" : "text-slate-500")}>
          {t("booking.guestDetails")}
        </span>
        <span className={cn(step === 3 ? "text-amber-500 font-semibold" : "text-slate-500")}>
          {t("bookingForm.confirmation")}
        </span>
      </div>

      {/* Step 1: Date Selection */}
      {step === 1 && (
        <div className="space-y-6">
          <AvailabilityCalendar
            blockedDates={blockedDates}
            selectedRange={dateRange}
            onRangeSelect={setDateRange}
          />

          {/* Price Summary */}
          {totalPrice && (
            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="font-semibold text-slate-800 mb-4">{t("bookingForm.priceSummary")}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">{yacht.name}</span>
                  <span className="text-slate-800">
                    {formatPrice(totalPrice, yacht.currency)}
                  </span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>
                    {Math.round(
                      (dateRange!.to!.getTime() - dateRange!.from!.getTime()) /
                        (1000 * 60 * 60 * 24)
                    )}{" "}
                    {t("booking.nights")}
                  </span>
                  <span>{t("bookingForm.fullBoardIncluded")}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>{t("bookingForm.total")}</span>
                    <span className="text-amber-500">
                      {formatPrice(totalPrice, yacht.currency)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <Button
            variant="primary"
            size="xl"
            className="w-full"
            disabled={!canProceedToStep2}
            onClick={() => setStep(2)}
          >
            {t("bookingForm.continueToDetails")}
          </Button>
        </div>
      )}

      {/* Step 2: Customer Details */}
      {step === 2 && (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          {/* Honeypot field - hidden from humans, visible to bots */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="company_url">Company URL</label>
            <input
              type="text"
              id="company_url"
              name="company_url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h4 className="font-semibold text-slate-800 mb-6">{t("bookingForm.guestInfo")}</h4>

            <div className="grid md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {t("booking.firstName")} *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    {...register("firstName", { required: t("bookingForm.firstNameRequired") })}
                    className={cn(
                      "w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none",
                      errors.firstName ? "border-red-500" : "border-slate-300"
                    )}
                    placeholder="John"
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {t("booking.lastName")} *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    {...register("lastName", { required: t("bookingForm.lastNameRequired") })}
                    className={cn(
                      "w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none",
                      errors.lastName ? "border-red-500" : "border-slate-300"
                    )}
                    placeholder="Doe"
                  />
                </div>
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {t("booking.email")} *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    {...register("email", {
                      required: t("bookingForm.emailRequired"),
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: t("bookingForm.emailInvalid"),
                      },
                    })}
                    type="email"
                    className={cn(
                      "w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none",
                      errors.email ? "border-red-500" : "border-slate-300"
                    )}
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {t("booking.phone")} *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    {...register("phone", { required: t("bookingForm.phoneRequired") })}
                    type="tel"
                    className={cn(
                      "w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none",
                      errors.phone ? "border-red-500" : "border-slate-300"
                    )}
                    placeholder="+1 234 567 8900"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {t("booking.country")} *
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    {...register("country", { required: t("bookingForm.countryRequired") })}
                    className={cn(
                      "w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none",
                      errors.country ? "border-red-500" : "border-slate-300"
                    )}
                    placeholder="United States"
                  />
                </div>
                {errors.country && (
                  <p className="mt-1 text-sm text-red-500">{errors.country.message}</p>
                )}
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {t("booking.guests")} *
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <select
                    {...register("guests", { required: true })}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none appearance-none bg-white"
                  >
                    {Array.from({ length: yacht.guests }, (_, i) => i + 1).map(
                      (num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? t("bookingForm.guest") : t("yacht.guests")}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("booking.specialRequests")}
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <textarea
                  {...register("specialRequests")}
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none"
                  placeholder={t("bookingForm.specialRequestsPlaceholder")}
                />
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="mt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  {...register("agreeToTerms", {
                    required: t("bookingForm.termsRequired"),
                  })}
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
                />
                <span className="text-sm text-slate-600">
                  {t("bookingForm.agreeToTerms")}{" "}
                  <a href="/terms" className="text-amber-500 hover:underline">
                    {t("bookingForm.termsConditions")}
                  </a>{" "}
                  {t("bookingForm.and")}{" "}
                  <a href="/privacy" className="text-amber-500 hover:underline">
                    {t("bookingForm.privacyPolicy")}
                  </a>
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.agreeToTerms.message}
                </p>
              )}
            </div>
          </div>

          {/* Error Message */}
          {submitError && (
            <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg">
              <AlertCircle className="h-5 w-5" />
              <span>{submitError}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="flex-1"
              onClick={() => setStep(1)}
            >
              {t("bookingForm.back")}
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="flex-1"
              isLoading={isSubmitting}
            >
              {t("booking.submit")}
            </Button>
          </div>
        </form>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && submitSuccess && (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            {t("bookingForm.requestSubmitted")}
          </h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            {t("bookingForm.thankYou")} {yacht.name}. {t("bookingForm.willContact")}
          </p>
          <div className="bg-slate-50 rounded-xl p-6 max-w-md mx-auto text-left">
            <h4 className="font-semibold text-slate-800 mb-3">{t("bookingForm.bookingSummary")}</h4>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-slate-500">{t("bookingForm.yacht")}</dt>
                <dd className="font-medium">{yacht.name}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">{t("bookingForm.dates")}</dt>
                <dd className="font-medium">
                  {dateRange?.from && format(dateRange.from, "MMM d")} -{" "}
                  {dateRange?.to && format(dateRange.to, "MMM d, yyyy")}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">{t("yacht.guests")}</dt>
                <dd className="font-medium">{guests}</dd>
              </div>
              {totalPrice && (
                <div className="flex justify-between pt-2 border-t">
                  <dt className="text-slate-800 font-semibold">{t("bookingForm.total")}</dt>
                  <dd className="font-bold text-amber-500">
                    {formatPrice(totalPrice, yacht.currency)}
                  </dd>
                </div>
              )}
            </dl>
          </div>
          <Button
            variant="primary"
            size="lg"
            className="mt-8"
            onClick={() => (window.location.href = "/")}
          >
            {t("bookingForm.returnHome")}
          </Button>
        </div>
      )}
    </div>
  );
}
