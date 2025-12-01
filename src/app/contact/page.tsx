"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  MessageSquare,
  User,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/components/ui/Toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  yacht: string;
  message: string;
}

export default function ContactPage() {
  const { t, language } = useLanguage();
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    yacht: "",
    message: "",
  });

  // Anti-spam: honeypot field and timestamp
  const [honeypot, setHoneypot] = useState("");
  const formLoadTime = useRef(Date.now());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Anti-spam checks
    const timeElapsed = Date.now() - formLoadTime.current;
    const MIN_SUBMIT_TIME = 3000; // 3 seconds minimum

    // Check 1: Honeypot field should be empty (bots fill all fields)
    if (honeypot) {
      // Silently reject spam but show success to not alert bot
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setIsSubmitting(false);
      return;
    }

    // Check 2: Form submitted too quickly (likely bot)
    if (timeElapsed < MIN_SUBMIT_TIME) {
      showToast("Please take your time filling out the form.", "warning");
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          language,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitStatus("success");
      showToast(t("contact.messageSent"), "success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        yacht: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      showToast(
        error instanceof Error ? error.message : "Failed to send message",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      titleKey: "contact.phone",
      content: ["+90 252 614 47 57", "+90 549 614 47 57"],
      link: "tel:+902526144757",
    },
    {
      icon: Mail,
      titleKey: "contact.email",
      content: ["info@holidayyachts.com"],
      link: "mailto:info@holidayyachts.com",
    },
    {
      icon: MapPin,
      titleKey: "contact.address",
      content: [
        "Tuzla Mahallesi, 509. Sokak No:6",
        "Fethiye, Mugla 48300, Turkey",
      ],
    },
    {
      icon: Clock,
      titleKey: "contact.workingHours",
      content: [t("footer.workingHours"), "Sunday: Closed"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero/py.jpg"
            alt={t("contact.title")}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{t(item.titleKey)}</h3>
                {item.content.map((line, i) =>
                  item.link ? (
                    <a
                      key={i}
                      href={item.link}
                      className="block text-slate-600 hover:text-amber-500 transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={i} className="text-slate-600">
                      {line}
                    </p>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                {t("contact.sendMessage")}
              </h2>
              <p className="text-slate-600 mb-8">
                {t("contact.sendMessageDesc")}
              </p>

              {submitStatus === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {t("contact.messageSent")}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {t("contact.messageSentDesc")}
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => setSubmitStatus(null)}
                  >
                    {t("contact.sendAnother")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from humans, visible to bots */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        {t("contact.yourName")} *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        {t("contact.yourEmail")} *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        {t("contact.phoneNumber")}
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        {t("contact.subject")} *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none appearance-none bg-white"
                      >
                        <option value="">{t("contact.selectSubject")}</option>
                        <option value="booking">{t("contact.subjectBooking")}</option>
                        <option value="quote">{t("contact.subjectQuote")}</option>
                        <option value="info">{t("contact.subjectInfo")}</option>
                        <option value="custom">{t("contact.subjectCustom")}</option>
                        <option value="other">{t("contact.subjectOther")}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      {t("contact.interestedYacht")}
                    </label>
                    <select
                      name="yacht"
                      value={formData.yacht}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none appearance-none bg-white"
                    >
                      <option value="">{t("contact.selectYacht")}</option>
                      <option value="holiday10">M/S Holiday 10</option>
                      <option value="holiday5">M/S Holiday 5</option>
                      <option value="holiday6">M/S Holiday 6</option>
                      <option value="holidaym">M/S Holiday M</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      {t("contact.yourMessage")} *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none"
                        placeholder={t("contact.messagePlaceholder")}
                      />
                    </div>
                  </div>

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg">
                      <AlertCircle className="h-5 w-5" />
                      <span>
                        Failed to send message. Please try again or email us
                        directly.
                      </span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="xl"
                    className="w-full"
                    isLoading={isSubmitting}
                    leftIcon={<Send className="h-5 w-5" />}
                  >
                    {t("contact.send")}
                  </Button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-slate-200 rounded-xl h-[400px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.8461!2d29.1094!3d36.6237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDM3JzI1LjMiTiAyOcKwMDYnMzMuOCJF!5e0!3m2!1sen!2str!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Holiday Yacht Location"
                />
              </div>

              {/* Quick Contact */}
              <div className="bg-slate-900 text-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">{t("contact.immediateHelp")}</h3>
                <p className="text-slate-300 mb-6">
                  {t("contact.immediateHelpDesc")}
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+902526144757"
                    className="flex items-center gap-3 text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">+90 252 614 47 57</span>
                  </a>
                  <a
                    href="https://wa.me/905496144757"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span className="font-semibold">{t("common.whatsapp")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
