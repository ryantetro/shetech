'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, StickerHeader, GraphPaperBackground, Button } from '@/components/ui';

export default function SponsorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-[#F5F5FA] overflow-hidden">
          <GraphPaperBackground />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <div>
                <AnimatedSection direction="right" delay={0}>
                  <div className="mb-6 inline-block">
                    <StickerHeader label="Invest in Talent" title="Sponsor SheTech" angle={-2} variant="navy" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#010193] mb-6 leading-tight uppercase">
                    Invest in the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#010193] to-[#4545E5]">Utah’s Tech Talent.</span>
                  </h1>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                    Sponsoring SheTech puts your company at the center of one of the state’s most impactful STEM movements—one that has inspired <span className="font-bold text-[#010193]">40,000+ girls</span> and connected <span className="font-bold text-[#010193]">500+ companies</span> across the tech ecosystem.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a href="mailto:kristin@womentechcouncil.com">
                      <Button
                        size="lg"
                        className="bg-[#010193] text-white hover:bg-[#000070] font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide"
                      >
                        Become a Sponsor
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </Button>
                    </a>
                  </div>
                </AnimatedSection>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <AnimatedSection direction="left" delay={200}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 group">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/shetech-gallery/KinserStudios-SheTech25-3332.jpg"
                        alt="Mentors guiding students"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#010193]/60 to-transparent"></div>

                      {/* Floating Stats Card */}
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-[#010193]/10">
                        <p className="text-[#010193] font-bold text-center text-lg leading-tight">
                          "Your partnership fuels hands-on experiences, mentorship, and workforce readiness."
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Decorative Blobs */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#010193] rounded-full opacity-10 blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-black text-[#010193] uppercase mb-4">Sponsorship Opportunities</h2>
                  <p className="text-xl text-slate-500 font-medium">Create named scholarships, mentor students, or sponsor Explorer Day.</p>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Explorer Day Sponsorships",
                    desc: "Brand presence in the TechZone, challenges, workshops, website and emails.",
                    icon: "🎪"
                  },
                  {
                    title: "Program Partnerships",
                    desc: "Year-round involvement in SheTech Clubs, Apprenticeships, and Internships.",
                    icon: "🤝"
                  },
                  {
                    title: "Scholarship Funding",
                    desc: "Create named scholarships to inspire future talent in your industry.",
                    icon: "🎓"
                  },
                  {
                    title: "Workforce Pipeline",
                    desc: "Collaborate with the Women Tech Council to build AI- and tech-ready students.",
                    icon: "🚀"
                  }
                ].map((item, idx) => (
                  <AnimatedSection key={idx} direction="up" delay={idx * 100}>
                    <div className="bg-[#F5F5FA] p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#010193]/10 group h-full">
                      <div className="text-4xl mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-black text-[#010193] mb-3 uppercase">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Final CTA */}
              <AnimatedSection direction="up" delay={400}>
                <div className="mt-20 text-center bg-[#010193] rounded-3xl p-12 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <GraphPaperBackground />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mb-6">Let’s build the future of tech together.</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="mailto:kristin@womentechcouncil.com">
                        <Button className="bg-white text-[#010193] hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-lg border-0 uppercase tracking-wide">
                          Become a Sponsor
                        </Button>
                      </a>
                    </div>
                  </div>
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
