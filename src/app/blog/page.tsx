"use client";

import Image from "next/image";
import Link from "next/link";
import { getAllBlogPosts, getBlogPostsByCategory, getTranslatedBlogPost, BlogPost, TranslatedBlogPost } from "@/data/blog";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, Clock, ChevronRight, Tag } from "lucide-react";
import { useState } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function BlogPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", labelKey: "blog.allPosts" },
    { key: "destinations", labelKey: "blog.destinations" },
    { key: "tips", labelKey: "blog.tips" },
    { key: "guides", labelKey: "blog.guides" },
    { key: "news", labelKey: "blog.news" },
  ];

  const rawPosts = getAllBlogPosts();
  const filteredRaw = activeCategory === "all"
    ? rawPosts
    : getBlogPostsByCategory(activeCategory as BlogPost["category"]);

  // Apply translations
  const filteredPosts = filteredRaw.map(post => getTranslatedBlogPost(post, language));

  const formatDate = (dateString: string) => {
    const locale = language === "tr" ? "tr-TR" : language === "de" ? "de-DE" : "en-US";
    return new Date(dateString).toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero/holiday10-hero.jpg"
            alt="Holiday Yacht Blog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-amber-500/90 text-white text-sm font-semibold rounded-full mb-4">
              {t("blog.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("blog.title")}
            </h1>
            <p className="text-xl text-white/80">
              {t("blog.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: "Blog" }]} />
      </div>

      {/* Category Filter */}
      <section className="bg-slate-50 py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.key
                    ? "bg-amber-500 text-white"
                    : "bg-white text-slate-600 hover:bg-amber-50 hover:text-amber-600"
                }`}
              >
                {t(category.labelKey)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500">{t("blog.noPosts")}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full capitalize">
                          {t(`blog.${post.category}`)}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime} {t("blog.minRead")}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-amber-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        {t("blog.readMore")}
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-amber-500 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t("blog.stayUpdated")}
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            {t("blog.subscribeDesc")}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
          >
            {t("blog.subscribeNow")}
          </Link>
        </div>
      </section>
    </>
  );
}
