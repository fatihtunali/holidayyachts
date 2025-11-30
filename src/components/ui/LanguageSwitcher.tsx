"use client";

import { useLanguage, Language } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
  { code: "de", label: "DE" },
];

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
  className?: string;
}

export function LanguageSwitcher({ variant = "light", className }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {languages.map((lang, index) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => setLanguage(lang.code)}
            className={cn(
              "px-2 py-1 text-sm font-medium rounded transition-colors",
              language === lang.code
                ? variant === "light"
                  ? "text-amber-500 bg-amber-50"
                  : "text-amber-400 bg-amber-500/20"
                : variant === "light"
                ? "text-slate-600 hover:text-amber-500"
                : "text-slate-300 hover:text-amber-400"
            )}
            aria-label={`Switch to ${lang.label}`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className={cn(
              "mx-1",
              variant === "light" ? "text-slate-300" : "text-slate-600"
            )}>
              |
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
