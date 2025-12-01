"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
}

export function FAQSection({ title = "Frequently Asked Questions", faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="section-padding bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-800 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-amber-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pre-defined FAQs for the homepage
export const homepageFAQs: FAQItem[] = [
  {
    question: "What is included in a gulet charter?",
    answer:
      "Our all-inclusive gulet charters include the yacht, professional crew (captain, cook, and deckhands), all meals (breakfast, lunch, dinner, and snacks), fuel for standard cruising, bed linens and towels, use of water sports equipment (kayaks, paddleboards, snorkeling gear), and port fees. Alcoholic beverages and special excursions are typically extra.",
  },
  {
    question: "What is the best time for a blue cruise in Turkey?",
    answer:
      "The best time for a blue cruise is from May to October. June and September offer ideal conditions with warm weather (25-30°C), calm seas, and fewer crowds. July and August are peak season with the warmest water temperatures, perfect for swimming. May and October are excellent for those who prefer cooler weather and more affordable rates.",
  },
  {
    question: "How many people can charter a gulet?",
    answer:
      "Our gulets accommodate between 8 and 20 guests depending on the yacht. Holiday 5 is our largest vessel with 10 cabins for up to 20 guests, while Holiday 6 and Holiday M are perfect for smaller groups of 8 guests. We recommend booking the entire yacht for privacy, but cabin charters may be available on select dates.",
  },
  {
    question: "Do I need sailing experience?",
    answer:
      "No sailing experience is required! Our professional crew handles all aspects of sailing and navigation. You simply relax and enjoy the journey. The captain will discuss your preferences for the itinerary, and the crew will take care of everything from cooking to anchoring in beautiful bays.",
  },
  {
    question: "What should I pack for a gulet cruise?",
    answer:
      "Pack light, casual clothing, swimwear, a light jacket for evenings, comfortable deck shoes with non-marking soles, sunscreen, sunglasses, and a hat. We provide towels and bed linens. Space on boats is limited, so soft bags are preferred over hard suitcases.",
  },
  {
    question: "Can you accommodate dietary requirements?",
    answer:
      "Yes, our onboard chefs can accommodate most dietary requirements including vegetarian, vegan, gluten-free, and food allergies. Please inform us of any dietary needs when booking so we can prepare accordingly. Our cuisine features fresh local ingredients with Mediterranean and Turkish specialties.",
  },
];

// Pre-defined FAQs for yacht pages
export const yachtFAQs: FAQItem[] = [
  {
    question: "What amenities are on board?",
    answer:
      "All our gulets feature air-conditioned cabins with en-suite bathrooms, a spacious saloon with entertainment system, sun decks with cushioned lounging areas, a shaded dining area, and a fully equipped kitchen. Water sports equipment including kayaks, paddleboards, and snorkeling gear are included.",
  },
  {
    question: "What is the booking process?",
    answer:
      "Contact us with your preferred dates, yacht choice, and number of guests. We'll confirm availability and send you a detailed quote. A 50% deposit secures your booking, with the balance due 4 weeks before departure. We'll then discuss your itinerary preferences and any special requirements.",
  },
  {
    question: "What happens if weather is bad?",
    answer:
      "Your captain is experienced in reading weather conditions and will adjust the itinerary for your safety and comfort. Turkey's coastline offers many protected bays and harbors. In rare cases of severe weather, alternative anchorages or ports will be arranged. Your safety is always our priority.",
  },
];
