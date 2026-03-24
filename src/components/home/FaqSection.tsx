"use client";

import { HOME_FAQ_ITEMS } from "@/lib/constants/home-faq";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative py-12 sm:py-16 lg:py-20 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <AnimatedSection direction="up" delay={0}>
          <h1
            id="faq-heading"
            className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4 text-center"
          >
            Frequently asked questions
          </h1>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Quick answers about SheTech Explorer programs and how to get involved.
          </p>
        </AnimatedSection>
        <dl className="space-y-6">
          {HOME_FAQ_ITEMS.map((item, index) => (
            <AnimatedSection key={item.question} direction="up" delay={80 * (index + 1)}>
              <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-6 sm:p-7">
                <dt className="text-lg font-bold text-gray-900 mb-2">{item.question}</dt>
                <dd className="text-gray-600 leading-relaxed">{item.answer}</dd>
              </div>
            </AnimatedSection>
          ))}
        </dl>
      </div>
    </section>
  );
}
