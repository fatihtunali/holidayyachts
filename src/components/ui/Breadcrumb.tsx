"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const baseUrl = "https://www.holidayyachts.com";

  const schemaItems = [
    { name: "Home", url: baseUrl },
    ...items.map((item) => ({
      name: item.label,
      url: item.href ? `${baseUrl}${item.href}` : baseUrl,
    })),
  ];

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600">
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-amber-500 transition-colors"
        >
          <Home className="h-4 w-4" />
          <span className="sr-only">Home</span>
        </Link>

        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-slate-400" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-amber-500 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-800 font-medium">{item.label}</span>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
