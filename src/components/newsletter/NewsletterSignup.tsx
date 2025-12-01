"use client";

import { useState } from "react";
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";

interface NewsletterSignupProps {
  variant?: "default" | "compact" | "inline";
  className?: string;
}

export function NewsletterSignup({ variant = "default", className = "" }: NewsletterSignupProps) {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage(t("newsletter.required"));
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage(t("newsletter.invalidEmail"));
      return;
    }

    setStatus("loading");

    // Simulate API call - in production, this would connect to your email service
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you would integrate with your email service (Mailchimp, ConvertKit, etc.)
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   body: JSON.stringify({ email }),
      // });

      setStatus("success");
      setMessage(t("newsletter.success"));
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(t("newsletter.error"));
    }
  };

  if (variant === "compact") {
    return (
      <div className={`bg-slate-800 rounded-xl p-6 ${className}`}>
        <h3 className="text-lg font-bold text-white mb-2">{t("newsletter.compact.title")}</h3>
        <p className="text-slate-400 text-sm mb-4">
          {t("newsletter.compact.subtitle")}
        </p>

        {status === "success" ? (
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm">{t("newsletter.compact.subscribed")}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("newsletter.placeholder")}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 text-sm"
            />
            <Button
              type="submit"
              variant="primary"
              size="sm"
              className="w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                t("newsletter.subscribe")
              )}
            </Button>
            {status === "error" && (
              <p className="text-red-400 text-xs">{message}</p>
            )}
          </form>
        )}
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`${className}`}>
        {status === "success" ? (
          <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-lg">
            <CheckCircle className="h-5 w-5" />
            <span>{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("newsletter.placeholder")}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500"
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                t("newsletter.subscribe")
              )}
            </Button>
          </form>
        )}
        {status === "error" && (
          <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {message}
          </p>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 ${className}`}>
      <div className="max-w-xl mx-auto text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="h-8 w-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">
          {t("newsletter.title")}
        </h3>
        <p className="text-white/90 mb-6">
          {t("newsletter.subtitle")}
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-2 text-white bg-white/20 px-6 py-4 rounded-lg">
            <CheckCircle className="h-6 w-6" />
            <span>{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("newsletter.placeholder")}
                  className="w-full pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-slate-800"
                />
              </div>
              <Button
                type="submit"
                variant="secondary"
                size="xl"
                className="bg-slate-900 text-white hover:bg-slate-800 whitespace-nowrap"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  t("newsletter.subscribe")
                )}
              </Button>
            </div>

            {status === "error" && (
              <p className="text-white bg-red-500/20 px-4 py-2 rounded-lg flex items-center justify-center gap-2">
                <AlertCircle className="h-4 w-4" />
                {message}
              </p>
            )}

            <p className="text-white/70 text-sm">
              {t("newsletter.privacy")}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
