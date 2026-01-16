'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, StickerHeader, Button } from '@/components/ui';

// Logos from public/Sponsors
const partners = [
  { name: 'Adobe', src: '/Sponsors/adobe-44195.svg', height: 40 },
  { name: 'American Express', src: '/Sponsors/1200px-American_Express_logo_(2018).svg.png', height: 60 },
  { name: 'CHG Healthcare', src: '/Sponsors/CHG_logo_horiz_RGB_F.png', height: 50 },
  { name: 'Entrata', src: '/Sponsors/entrata_red_lettermark.png', height: 40 },
  { name: 'Workday', src: '/Sponsors/workday.png', height: 40 },
];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#FDF2F8]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#BD1C81]/5 to-transparent"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection direction="up" delay={0}>
                <div className="mb-6 inline-block">
                  <StickerHeader
                    label="Our Sponsors & Industry Partners"
                    title="Partnerships"
                    variant="magenta"
                    angle={2}
                  />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#BD1C81] mb-8 leading-tight">
                  Building the <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BD1C81] to-pink-500">Future — Together</span>
                </h1>

                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
                  SheTech thrives through the support of industry partners who believe in the power of investing in future talent.
                </p>

                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-pink-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#BD1C81]/5 rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-400/5 rounded-tr-full"></div>

                  <div className="relative z-10">
                    <p className="text-lg text-slate-700 mb-8 font-medium">
                      Each year, more than <span className="font-bold text-[#BD1C81]">500 companies and organizations</span> come together to mentor, volunteer, and sponsor SheTech Explorer Day and its programs.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mb-6">Your partnership helps us:</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
                      {[
                        "Inspire thousands of students through hands-on tech experiences",
                        "Connect industry mentors to classrooms and clubs",
                        "Create internships and workforce pathways for girls in STEM",
                        "Scale impact across communities and states through SheTech Chapters"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#BD1C81]/10 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5 text-[#BD1C81]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-slate-600">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="mailto:kristin@womentechcouncil.com">
                        <Button
                          size="lg"
                          className="bg-[#BD1C81] text-white hover:bg-[#a02f99] font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all w-full sm:w-auto"
                        >
                          Become a Sponsor
                        </Button>
                      </a>
                      <a href="https://www.shetechexplorer.com/industry-partners/" target="_blank" rel="noopener noreferrer">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-[#BD1C81] text-[#BD1C81] hover:bg-[#BD1C81]/5 font-bold px-8 py-4 rounded-xl w-full sm:w-auto"
                        >
                          Meet our Sponsors
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Sponsor Grid Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection direction="up" delay={200}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-black text-slate-900 mb-4">
                    Join Leading Companies
                  </h2>
                  <p className="text-slate-500 text-lg">
                    Investing in the next generation of innovators
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className="w-full flex items-center justify-center p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 h-32"
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* 
                          Using inline height styles for logo optical balancing since we don't have perfect aspect ratios upfront.
                          In a real app, object-contain with 'fill' is good, but sometimes specific heights look better for logos.
                        */}
                        <img
                          src={partner.src}
                          alt={partner.name}
                          className="max-h-16 w-auto object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 text-center">
                  <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-6">And 500+ More</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
