"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

interface FavoriteItem {
  id: string;
  type: "yacht" | "itinerary" | "destination";
  addedAt: number;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addFavorite: (id: string, type: FavoriteItem["type"]) => void;
  removeFavorite: (id: string, type: FavoriteItem["type"]) => void;
  isFavorite: (id: string, type: FavoriteItem["type"]) => boolean;
  toggleFavorite: (id: string, type: FavoriteItem["type"]) => void;
  clearAllFavorites: () => void;
  getFavoritesByType: (type: FavoriteItem["type"]) => FavoriteItem[];
  favoritesCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const STORAGE_KEY = "holidayyachts_favorites";

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      }
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
    setIsInitialized(true);
  }, []);

  // Save favorites to localStorage when they change
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
      } catch (error) {
        console.error("Error saving favorites:", error);
      }
    }
  }, [favorites, isInitialized]);

  const addFavorite = useCallback((id: string, type: FavoriteItem["type"]) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === id && item.type === type);
      if (exists) return prev;
      return [...prev, { id, type, addedAt: Date.now() }];
    });
  }, []);

  const removeFavorite = useCallback((id: string, type: FavoriteItem["type"]) => {
    setFavorites((prev) =>
      prev.filter((item) => !(item.id === id && item.type === type))
    );
  }, []);

  const isFavorite = useCallback(
    (id: string, type: FavoriteItem["type"]) => {
      return favorites.some((item) => item.id === id && item.type === type);
    },
    [favorites]
  );

  const toggleFavorite = useCallback(
    (id: string, type: FavoriteItem["type"]) => {
      if (isFavorite(id, type)) {
        removeFavorite(id, type);
      } else {
        addFavorite(id, type);
      }
    },
    [isFavorite, removeFavorite, addFavorite]
  );

  const clearAllFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  const getFavoritesByType = useCallback(
    (type: FavoriteItem["type"]) => {
      return favorites.filter((item) => item.type === type);
    },
    [favorites]
  );

  const favoritesCount = favorites.length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
        clearAllFavorites,
        getFavoritesByType,
        favoritesCount,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
