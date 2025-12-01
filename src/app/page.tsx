"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { YachtCard } from "@/components/yacht/YachtCard";
import { getAllYachts } from "@/data/yachts";
import { getAllItineraries, getTranslatedItinerary } from "@/data/itineraries";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Anchor,
  Award,
  Calendar,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
  Utensils,
  Waves,
} from "lucide-react";
import { FAQSection, homepageFAQs } from "@/components/seo/FAQSchema";

export default function HomePage() {
  const { t, language } = useLanguage();
  const yachts = getAllYachts();
  const rawItineraries = getAllItineraries();
  const itineraries = rawItineraries.map(it => getTranslatedItinerary(it, language));

  const features = [
    {
      icon: Shield,
      titleKey: "home.features.experience.title",
      descKey: "home.features.experience.desc",
    },
    {
      icon: Users,
      titleKey: "home.features.crew.title",
      descKey: "home.features.crew.desc",
    },
    {
      icon: Utensils,
      titleKey: "home.features.cuisine.title",
      descKey: "home.features.cuisine.desc",
    },
    {
      icon: Award,
      titleKey: "home.features.certified.title",
      descKey: "home.features.certified.desc",
    },
  ];

  const stats = [
    { value: "4", labelKey: "home.stats.yachts" },
    { value: "1000+", labelKey: "home.stats.guests" },
    { value: "24/7", labelKey: "home.stats.support" },
    { value: "100%", labelKey: "home.stats.satisfaction" },
  ];

  const testimonials = [
    {
      name: "Michael Schmidt",
      country: "Germany",
      textKey: "home.testimonial1",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      country: "United Kingdom",
      textKey: "home.testimonial2",
      rating: 5,
    },
    {
      name: "Pierre Dubois",
      country: "France",
      textKey: "home.testimonial3",
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center hero-mobile">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero/holiday10-hero.jpg"
            alt="Luxury Gulet Sailing in Turkey"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-gradient absolute inset-0" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-amber-500/90 text-white text-sm font-semibold rounded-full mb-6">
              {t("home.hero.badge")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t("home.hero.title")}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              {t("home.hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/yachts">
                <Button variant="primary" size="xl">
                  {t("home.hero.cta.fleet")}
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-white text-white hover:bg-white hover:text-slate-900"
                >
                  {t("home.hero.cta.contact")}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce hidden md:block">
          <Waves className="h-8 w-8" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm md:text-base mb-1">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600">{t(feature.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
              {t("home.fleet.badge")}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mt-2 mb-4">
              {t("home.fleet.title")}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
              {t("home.fleet.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {yachts.map((yacht) => (
              <YachtCard key={yacht.id} yacht={yacht}  />
            ))}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <Link href="/yachts">
              <Button variant="outline" size="lg" rightIcon={<ChevronRight className="h-4 w-4" />}>
                {t("home.fleet.viewAll")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Itineraries Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
              {t("home.itineraries.badge")}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4">
              {t("home.itineraries.title")}
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
              {t("home.itineraries.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {itineraries.map((itinerary) => (
              <Link
                key={itinerary.id}
                href={`/itineraries/${itinerary.slug}`}
                className="group relative h-48 md:h-80 rounded-xl overflow-hidden"
              >
                <Image
                  src={itinerary.thumbnail}
                  alt={itinerary.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                  <div className="flex items-center gap-2 text-amber-400 text-xs md:text-sm mb-1 md:mb-2">
                    <Clock className="h-3 w-3 md:h-4 md:w-4" />
                    {itinerary.duration} {t("itineraries.days")}
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">
                    {itinerary.name}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm line-clamp-2 hidden md:block">
                    {itinerary.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/images/about/about-h4.jpg"
                  alt="Holiday Yacht Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-amber-500 text-white p-4 md:p-6 rounded-xl shadow-xl">
                <p className="text-2xl md:text-4xl font-bold">35+</p>
                <p className="text-xs md:text-sm">{t("home.stats.years")}</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
                {t("about.story.badge")}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mt-2 mb-4 md:mb-6">
                {t("home.about.title")}
              </h2>
              <p className="text-slate-600 mb-4 md:mb-6 text-sm md:text-base">
                {t("home.about.desc1")}
              </p>
              <p className="text-slate-600 mb-6 md:mb-8 text-sm md:text-base">
                {t("home.about.desc2")}
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <p className="text-2xl md:text-3xl font-bold text-amber-500">
                      {stat.value}
                    </p>
                    <p className="text-slate-600 text-sm md:text-base">{t(stat.labelKey)}</p>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button variant="primary" size="lg">
                  {t("common.learnMore")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
              {t("home.testimonials.badge")}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mt-2 mb-4">
              {t("home.testimonials.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 md:h-5 md:w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 md:mb-6 italic text-sm md:text-base">
                  &quot;{t(testimonial.textKey)}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-200 flex items-center justify-center">
                    <span className="text-slate-600 font-semibold text-sm md:text-base">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm md:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-xs md:text-sm text-slate-500">
                      {testimonial.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/about/about-h41.jpg"
            alt="Yacht Sailing"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            {t("home.cta.title")}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto">
            {t("home.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link href="/booking">
              <Button variant="primary" size="xl" className="w-full sm:w-auto">
                <Calendar className="h-5 w-5 mr-2" />
                {t("itineraries.checkAvailability")}
              </Button>
            </Link>
            <a href="tel:+902526144757">
              <Button
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white hover:text-slate-900 w-full sm:w-auto"
              >
                <Phone className="h-5 w-5 mr-2" />
                {t("common.callUs")}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={homepageFAQs} />

      {/* Partners Section */}
      <section className="py-8 md:py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 opacity-60">
            <Image
              src="/assets/images/brands/tursab.png"
              alt="TURSAB Certified"
              width={60}
              height={60}
              className="grayscale hover:grayscale-0 transition-all w-[50px] md:w-[80px]"
            />
            <div className="text-center">
              <p className="text-xs md:text-sm text-slate-500">{t("home.partners.partOf")}</p>
              <p className="font-semibold text-slate-700 text-sm md:text-base">Light Tours</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
