"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Twitter, Linkedin, Link2, Mail, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
  variant?: "horizontal" | "vertical";
}

export function SocialShare({
  url,
  title,
  description = "",
  className,
  variant = "horizontal",
}: SocialShareProps) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-[#1877F2] hover:text-white",
      ariaLabel: "Share on Facebook",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-[#1DA1F2] hover:text-white",
      ariaLabel: "Share on Twitter",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
      color: "hover:bg-[#0A66C2] hover:text-white",
      ariaLabel: "Share on LinkedIn",
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: "hover:bg-slate-700 hover:text-white",
      ariaLabel: "Share via Email",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        variant === "vertical" ? "flex-col" : "flex-row flex-wrap",
        className
      )}
    >
      <span className="text-sm text-slate-500 mr-1">{t("common.share")}:</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "p-2 rounded-full bg-slate-100 text-slate-600 transition-all duration-200",
            link.color
          )}
          aria-label={link.ariaLabel}
          title={link.name}
        >
          <link.icon className="h-4 w-4" />
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className={cn(
          "p-2 rounded-full transition-all duration-200",
          copied
            ? "bg-green-100 text-green-600"
            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
        )}
        aria-label={copied ? "Link copied" : "Copy link"}
        title={copied ? "Copied!" : "Copy link"}
      >
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      </button>
    </div>
  );
}
