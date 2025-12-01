"use client";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-slate-200 rounded ${className}`}
    />
  );
}

export function YachtCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Image skeleton */}
      <div className="relative h-48">
        <Skeleton className="h-full w-full rounded-none" />
      </div>

      <div className="p-6">
        {/* Title skeleton */}
        <Skeleton className="h-6 w-3/4 mb-2" />

        {/* Description skeleton */}
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-5/6 mb-4" />

        {/* Features skeleton */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <Skeleton className="h-10 rounded-lg" />
          <Skeleton className="h-10 rounded-lg" />
          <Skeleton className="h-10 rounded-lg" />
          <Skeleton className="h-10 rounded-lg" />
        </div>

        {/* Price skeleton */}
        <div className="flex items-center justify-between pt-4 border-t">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-10 w-28 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export function YachtGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <YachtCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Image skeleton */}
      <div className="relative h-48">
        <Skeleton className="h-full w-full rounded-none" />
      </div>

      <div className="p-6">
        {/* Category badge skeleton */}
        <Skeleton className="h-5 w-16 rounded-full mb-3" />

        {/* Date and read time skeleton */}
        <div className="flex gap-4 mb-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>

        {/* Title skeleton */}
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-3/4 mb-3" />

        {/* Excerpt skeleton */}
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-2/3 mb-4" />

        {/* Tags and link skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Skeleton className="h-6 w-14 rounded" />
            <Skeleton className="h-6 w-14 rounded" />
          </div>
          <Skeleton className="h-5 w-20" />
        </div>
      </div>
    </div>
  );
}

export function BlogGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function ItineraryCardSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      {/* Image skeleton */}
      <div className="relative h-[400px] rounded-2xl overflow-hidden">
        <Skeleton className="h-full w-full rounded-none" />
      </div>

      {/* Content skeleton */}
      <div>
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-2/3 mb-6" />

        {/* Highlights skeleton */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
        </div>

        <Skeleton className="h-12 w-40 rounded-lg" />
      </div>
    </div>
  );
}

export function DestinationCardSkeleton() {
  return (
    <div className="relative h-[350px] rounded-2xl overflow-hidden">
      <Skeleton className="h-full w-full rounded-none" />
    </div>
  );
}

export function DestinationGridSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <DestinationCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function PageHeroSkeleton() {
  return (
    <div className="relative h-[40vh] min-h-[300px]">
      <Skeleton className="h-full w-full rounded-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <Skeleton className="h-8 w-40 mx-auto mb-4 rounded-full" />
          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-6 w-3/4 mx-auto" />
        </div>
      </div>
    </div>
  );
}
