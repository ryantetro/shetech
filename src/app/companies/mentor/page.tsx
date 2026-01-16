'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, StickerHeader, GraphPaperBackground, Button } from '@/components/ui';

export default function MentorPage() {
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
                    <StickerHeader label="Explorer Day" title="Mentor" angle={-2} variant="navy" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#010193] mb-6 leading-tight uppercase">
                    Inspire. Guide. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#010193] to-[#4545E5]">Transform.</span>
                  </h1>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                    Be one of the <span className="font-bold text-[#010193]">1,000+ mentors</span> who bring SheTech Explorer Day to life. Mentors play a pivotal role in acting as role models and guiding girls through our signature Ideation TechChallenge.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf5JcKITadKPzNXuuF2GbOy8K2yN2homMJ3agKqPVd9_AhjCA/viewform" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-[#010193] text-white hover:bg-[#000070] font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide"
                      >
                        Sign Up to Mentor
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
                        src="/shetech-gallery/KinserStudios-SheTech25-3525.jpg"
                        alt="Mentor working with students"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#010193]/60 to-transparent"></div>

                      {/* Floating Quote Card */}
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-[#010193]/10">
                        <p className="text-[#010193] font-bold text-center text-lg leading-tight">
                          "You bring your experience and passion to inspire the next generation."
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

        {/* Commitment Details Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-black text-[#010193] uppercase mb-6">Commitment Details</h2>
                  <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto">
                    The Ideation TechChallenge is a 45-minute hands-on innovation sprint where students solve real-world problems alongside industry leaders.
                  </p>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* WHO */}
                <AnimatedSection direction="up" delay={100}>
                  <div className="bg-[#F5F5FA] p-8 rounded-3xl h-full border border-transparent hover:border-[#010193]/10 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-3xl mb-6">👩‍💻</div>
                    <h3 className="text-2xl font-black text-[#010193] uppercase mb-4">Who</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      Men and women working in STEM fields. All disciplines are welcome!
                    </p>
                  </div>
                </AnimatedSection>

                {/* WHAT */}
                <AnimatedSection direction="up" delay={200}>
                  <div className="bg-[#F5F5FA] p-8 rounded-3xl h-full border border-transparent hover:border-[#010193]/10 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-3xl mb-6">🚀</div>
                    <h3 className="text-2xl font-black text-[#010193] uppercase mb-4">What</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      Mentor teams of high school girls through the <strong>Ideation TechChallenge</strong> to solve problems and brainstorm solutions.
                    </p>
                  </div>
                </AnimatedSection>

                {/* WHEN */}
                <AnimatedSection direction="up" delay={300}>
                  <div className="bg-[#010193] p-8 rounded-3xl h-full text-white shadow-2xl relative overflow-hidden group">
                    <GraphPaperBackground />
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-3xl mb-6 backdrop-blur-sm">📅</div>
                      <h3 className="text-2xl font-black text-white uppercase mb-6">When</h3>

                      <div className="space-y-6">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-1">Virtual Training (Zoom)</div>
                          <div className="font-bold text-lg">Feb 19, 4–5pm <span className="text-blue-300 mx-1">OR</span></div>
                          <div className="font-bold text-lg">Feb 20, 8–9am</div>
                        </div>

                        <div className="pt-4 border-t border-white/20">
                          <div className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-1">Live Challenge</div>
                          <div className="font-bold text-lg">Feb 24, 2026</div>
                          <div className="text-blue-100">10:30am – 1:30pm</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Timeline / Location */}
              <AnimatedSection direction="up" delay={400}>
                <div className="mt-8 bg-white border-2 border-[#F5F5FA] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <div className="font-bold text-[#010193]">Location</div>
                      <div className="text-slate-600">Mountain America Expo Center</div>
                    </div>
                  </div>

                  <div className="text-center sm:text-right">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wide">Resources Provided</span>
                    <div className="text-[#010193] font-medium">Training, materials, and support included</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mentor Year Round Section */}
        <section className="py-24 bg-[#F5F5FA] relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <AnimatedSection direction="up" delay={0}>
                <h2 className="text-3xl sm:text-4xl font-black text-[#010193] uppercase mb-4">Mentor Year Round</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#010193] to-blue-500 mx-auto rounded-full mb-6"></div>
                <p className="text-2xl font-bold text-slate-800 mb-4">Extend the Impact Beyond a Single Day.</p>
                <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                  In addition to Explorer Day, mentors can stay involved year-round through ongoing opportunities that build connection and confidence.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Clubs */}
                <AnimatedSection direction="up" delay={100}>
                  <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-50 text-[#010193] rounded-full flex items-center justify-center text-3xl mb-6">🏫</div>
                    <h3 className="text-xl font-bold text-[#010193] mb-3">SheTech Clubs</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Visit local high schools to talk about STEM careers and share your professional journey.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Entrepreneurship */}
                <AnimatedSection direction="up" delay={200}>
                  <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-50 text-[#010193] rounded-full flex items-center justify-center text-3xl mb-6">💡</div>
                    <h3 className="text-xl font-bold text-[#010193] mb-3">Entrepreneur Apprenticeship</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Guide students as they launch their first startup ideas and develop business skills.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Workshops */}
                <AnimatedSection direction="up" delay={300}>
                  <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-50 text-[#010193] rounded-full flex items-center justify-center text-3xl mb-6">🎤</div>
                    <h3 className="text-xl font-bold text-[#010193] mb-3">Workshops & Panels</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Share insights, teach skills, and inspire curiosity through interactive sessions.
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection direction="up" delay={400}>
                <p className="text-slate-600 font-medium italic mb-8">
                  "Ongoing mentorship builds connection and confidence—helping girls continue their journey in STEM long after the event ends."
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf5JcKITadKPzNXuuF2GbOy8K2yN2homMJ3agKqPVd9_AhjCA/viewform" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-[#010193] text-white hover:bg-[#000070] font-bold px-10 py-5 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide"
                  >
                    Join the Mentor Network
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Button>
                </a>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
