"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";
import { cn } from "@/lib/utils";

interface FavoriteButtonProps {
  id: string;
  type: "yacht" | "itinerary" | "destination";
  size?: "sm" | "md" | "lg";
  variant?: "default" | "overlay";
  className?: string;
}

export function FavoriteButton({
  id,
  type,
  size = "md",
  variant = "default",
  className,
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(id, type);

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(id, type);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center justify-center rounded-full transition-all",
        variant === "default" && [
          "bg-white/90 hover:bg-white shadow-md",
          isFav && "bg-red-50 hover:bg-red-100",
        ],
        variant === "overlay" && [
          "bg-black/30 hover:bg-black/50 backdrop-blur-sm",
          isFav && "bg-red-500/80 hover:bg-red-600/80",
        ],
        sizeClasses[size],
        className
      )}
      aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart
        className={cn(
          iconSizes[size],
          "transition-all",
          isFav
            ? "fill-red-500 text-red-500"
            : variant === "overlay"
            ? "text-white"
            : "text-slate-400 hover:text-red-400"
        )}
      />
    </button>
  );
}
