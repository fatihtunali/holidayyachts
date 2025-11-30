"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  Anchor,
  Award,
  Heart,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const stats = [
    { value: "35+", labelKey: "about.stats.years" },
    { value: "4", labelKey: "about.stats.gulets" },
    { value: "1000+", labelKey: "about.stats.guests" },
    { value: "50+", labelKey: "about.stats.destinations" },
  ];

  const values = [
    {
      icon: Shield,
      titleKey: "about.values.safety",
      descKey: "about.values.safetyDesc",
    },
    {
      icon: Heart,
      titleKey: "about.values.hospitality",
      descKey: "about.values.hospitalityDesc",
    },
    {
      icon: Star,
      titleKey: "about.values.excellence",
      descKey: "about.values.excellenceDesc",
    },
    {
      icon: Users,
      titleKey: "about.values.personal",
      descKey: "about.values.personalDesc",
    },
  ];

  const team = [
    {
      roleKey: "about.team.captain",
      descKey: "about.team.captainDesc",
    },
    {
      roleKey: "about.team.chef",
      descKey: "about.team.chefDesc",
    },
    {
      roleKey: "about.team.crew",
      descKey: "about.team.crewDesc",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/about/about-h4.jpg"
            alt={t("about.title")}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/90 text-white text-sm font-semibold rounded-full mb-4">
            <Anchor className="h-4 w-4" />
            {t("about.badge")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("about.title")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
                {t("about.story.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-6">
                {t("about.story.title")}
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
                <p>{t("about.story.p3")}</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/images/about/about-h41.jpg"
                  alt="Our Heritage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                    <Award className="h-8 w-8 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{t("footer.tursab")}</p>
                    <p className="text-sm text-slate-500">{t("footer.workingHours")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-slate-300">{t(stat.labelKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
              {t("about.values.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
              {t("about.values.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {t(value.titleKey)}
                </h3>
                <p className="text-slate-600">{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">
              {t("about.team.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-4">
              {t("about.team.title")}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t("about.team.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {t(member.roleKey)}
                </h3>
                <p className="text-slate-600">{t(member.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Light Tours Connection */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">
                  {t("about.lightTours.title")}
                </h2>
                <p className="text-slate-300 mb-6">
                  {t("about.lightTours.desc")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.lighttours.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="lg">
                      Visit Light Tours
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/assets/images/logo/lighttours-logo.png"
                  alt="Light Tours"
                  width={200}
                  height={100}
                  className="opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t("about.cta.title")}
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            {t("about.cta.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/yachts">
              <Button variant="secondary" size="xl">
                {t("about.cta.fleet")}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white hover:text-amber-600"
              >
                {t("about.cta.contact")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
