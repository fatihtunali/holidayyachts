"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { ToastProvider } from "@/components/ui/Toast";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <FavoritesProvider>
        <ToastProvider>{children}</ToastProvider>
      </FavoritesProvider>
    </LanguageProvider>
  );
}
