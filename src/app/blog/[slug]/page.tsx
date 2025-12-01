"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts, getTranslatedBlogPost, BlogPost, TranslatedBlogPost } from "@/data/blog";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, Clock, ChevronLeft, Tag, User } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SocialShare } from "@/components/ui/SocialShare";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

export default function BlogPostPage() {
  const { t, language } = useLanguage();
  const params = useParams();
  const [post, setPost] = useState<TranslatedBlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = params.slug as string;
    const postData = getBlogPostBySlug(slug);
    if (postData) {
      setPost(getTranslatedBlogPost(postData, language));
    }
    setLoading(false);
  }, [params.slug, language]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const locale = language === "tr" ? "tr-TR" : language === "de" ? "de-DE" : "en-US";
    return new Date(dateString).toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get related posts (same category, excluding current)
  const relatedPosts = getAllBlogPosts()
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)
    .map((p) => getTranslatedBlogPost(p, language));

  // Article schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://www.holidayyachts.com${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Holiday Yacht",
      logo: {
        "@type": "ImageObject",
        url: "https://www.holidayyachts.com/assets/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.holidayyachts.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.holidayyachts.com" },
          { name: "Blog", url: "https://www.holidayyachts.com/blog" },
          { name: post.title, url: `https://www.holidayyachts.com/blog/${post.slug}` },
        ]}
      />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            {t("blog.backToBlog")}
          </Link>

          <span className="inline-block px-3 py-1 bg-amber-500 text-white text-sm font-semibold rounded-full mb-4 capitalize">
            {post.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-white/80">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime} {t("blog.minRead")}
            </span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />
      </div>

      {/* Article Content */}
      <article className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Excerpt */}
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Content */}
              <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-800 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-700 prose-ul:text-slate-600 prose-li:my-1">
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/##\s(.+)/g, '<h2>$1</h2>').replace(/###\s(.+)/g, '<h3>$1</h3>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/- (.+)/g, '<li>$1</li>') }} />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex flex-wrap items-center gap-3">
                  <Tag className="h-5 w-5 text-slate-400" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-amber-50 hover:text-amber-600 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8">
                <SocialShare
                  url={`https://www.holidayyachts.com/blog/${post.slug}`}
                  title={post.title}
                  description={post.excerpt}
                />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* CTA Card */}
                <div className="bg-amber-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {t("blog.readyForCruise")}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {t("blog.contactUsDesc")}
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
                  >
                    {t("blog.getQuote")}
                  </Link>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-4">
                      {t("blog.relatedArticles")}
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          href={`/blog/${relatedPost.slug}`}
                          className="flex gap-4 group"
                        >
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-800 group-hover:text-amber-600 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-slate-500 mt-1">
                              {relatedPost.readTime} {t("blog.minRead")}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular Tags */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">
                    {t("blog.popularTopics")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["blue cruise", "turkey", "destinations", "tips", "fethiye", "food"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-amber-50 hover:text-amber-600 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* More Articles */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            {t("blog.moreFromBlog")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {getAllBlogPosts()
              .filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((p) => getTranslatedBlogPost(p, language))
              .map((blogPost) => (
                <Link
                  key={blogPost.id}
                  href={`/blog/${blogPost.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={blogPost.image}
                      alt={blogPost.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-amber-600 font-semibold uppercase">
                      {t(`blog.${blogPost.category}`)}
                    </span>
                    <h3 className="font-bold text-slate-800 mt-1 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {blogPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
