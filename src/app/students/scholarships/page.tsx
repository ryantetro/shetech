'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, Button, StickerHeader, GraphPaperBackground } from '@/components/ui';

export default function ScholarshipsPage() {
  const scholarships = [
    {
      title: "Utah Energy Workforce Scholarship Program",
      amount: "Four $5,000 Awards",
      description: "One scholarship available in each of Utah’s congressional districts for students pursuing STEM studies. Applicants submit short films exploring Utah’s energy sector.",
      deadline: "Check Website",
      requirements: ["STEM Studies Context", "Short Film Submission", "Utah Resident"]
    },
    {
      title: "High School Utah Entrepreneur Challenge",
      amount: "$20,000+ in Prizes",
      description: "Encourages innovation and entrepreneurship among high school students. Win cash and scholarship prizes for your creative business ideas.",
      deadline: "Check Website",
      requirements: ["Innovation Focus", "Entrepreneurship", "Business/Product Idea"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Navy Navy/Gold Theme */}
        <section className="relative overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-[60vh] flex items-center bg-[#EBEBF5]">
          <GraphPaperBackground />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection direction="down" delay={0} initialLoad>
                {/* Sticker Header */}
                <div className="mb-8">
                  <StickerHeader label="Fund Your Future" title="Scholarships" variant="teal" />
                </div>

                <p className="text-lg sm:text-xl text-[#00008B] mb-8 leading-relaxed max-w-2xl mx-auto font-medium">
                  SheTech highlights scholarship opportunities to help you fund your future in STEM.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#scholarships-list">
                    <Button
                      size="lg"
                      className="bg-[#00A6CE] text-white hover:bg-[#0086a6] font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide"
                    >
                      View Opportunities
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Video Section - Context */}
        {/* Media Spotlight Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Video Column */}
              <AnimatedSection direction="right" delay={0}>
                <div className="h-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-slate-50 relative aspect-video lg:aspect-auto">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/NLZBL7UFW5s"
                    title="SheTech Scholarship Advice"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </AnimatedSection>

              {/* Sleek Photo Card */}
              <AnimatedSection direction="left" delay={200}>
                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/shetech-gallery/KinserStudios-SheTech25-2830.jpg"
                    alt="SheTech Students Celebrating"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00008B] via-[#00008B]/40 to-transparent opacity-90"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#00A6CE] text-white text-xs font-bold uppercase tracking-widest">
                      Impact
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">Changing Lives</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      "This scholarship didn't just fund my education; it gave me the confidence to pursue a career I never thought possible."
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Scholarships List */}
        <section id="scholarships-list" className="py-16 sm:py-24 bg-[#EBEBF5] relative">
          <GraphPaperBackground />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-[#00008B] uppercase mb-4">Current Opportunities</h2>
                <div className="w-24 h-1 bg-[#00A6CE] mx-auto rounded-full"></div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {scholarships.map((item, index) => (
                <AnimatedSection key={index} direction="up" delay={index * 100}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                    <div className="h-2 bg-[#00008B] group-hover:bg-[#00A6CE] transition-colors"></div>
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="text-[#00A6CE] font-black text-xl mb-2">{item.amount}</div>
                      <h3 className="text-xl font-bold text-[#00008B] mb-4 group-hover:text-[#BD1C81] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 mb-6 flex-1 font-medium">{item.description}</p>

                      <div className="border-t border-slate-100 pt-6 mt-auto">
                        <div className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-3">Key Details</div>
                        <ul className="space-y-2 mb-6">
                          {item.requirements.map((req, i) => (
                            <li key={i} className="flex items-center text-sm text-slate-600">
                              <svg className="w-4 h-4 text-[#00A6CE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {req}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 font-medium">Deadline: <span className="text-[#00008B] font-bold">{item.deadline}</span></span>
                        </div>
                        <Button className="w-full mt-6 bg-slate-50 hover:bg-[#00008B] text-[#00008B] hover:text-white font-bold border-0 transition-all cursor-pointer">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-16 text-center max-w-2xl mx-auto">
              <p className="text-lg text-[#00008B] font-medium leading-relaxed italic">
                &quot;Stay tuned for more scholarship listings and ways to support your education.&quot;
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
