'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, StickerHeader, GraphPaperBackground, Button } from '@/components/ui';

export default function VolunteerPage() {
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
                    <StickerHeader label="Volunteer" title="SheTech" angle={-2} variant="navy" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#010193] mb-6 leading-tight uppercase">
                    Help Make <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#010193] to-[#4545E5]">It Happen.</span>
                  </h1>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                    Behind every student experience is a team of incredible volunteers who make SheTech unforgettable. Whether you help check in students, assist in workshops, or support the TechChallenge, your time creates impact.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfRunWlBC5GYBzyN4J5bF6vzDjVLAURwf4vtrBMxzlZ7xJnfA/viewform" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-[#010193] text-white hover:bg-[#000070] font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide"
                      >
                        Volunteer Now
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
                        src="/shetech-gallery/KinserStudios-SheTech25-3315.jpg"
                        alt="Volunteers working together"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#010193]/60 to-transparent"></div>

                      {/* Floating Quote Card */}
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-[#010193]/10">
                        <p className="text-[#010193] font-bold text-center text-lg leading-tight">
                          "You’ll be part of the energy and teamwork that make SheTech one of the most inspiring days of the year."
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

        {/* Roles & Shifts Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-black text-[#010193] uppercase mb-4">Volunteer Roles & Shifts</h2>
                  <p className="text-xl text-slate-500 font-medium">
                    Times are flexible—even a few hours makes a difference.
                  </p>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-start">

                {/* Pre-Event Card */}
                <AnimatedSection direction="up" delay={100}>
                  <div className="bg-white p-8 lg:p-10 rounded-3xl h-full border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-slate-100 group-hover:bg-[#010193] transition-colors duration-300"></div>
                    <div className="relative z-10 pl-4">
                      <div className="flex items-start justify-between mb-8">
                        <div>
                          <div className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Pre-Event</div>
                          <h3 className="text-3xl font-black text-[#010193] uppercase tracking-tight">Set Up Day</h3>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 text-[#010193] flex items-center justify-center">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Date</span>
                            <span className="font-bold text-slate-900 text-lg">Monday, Feb 23</span>
                          </div>
                          <div className="h-8 w-px bg-slate-200 mx-2"></div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Time</span>
                            <span className="font-bold text-[#010193] text-lg">2:00 PM – 8:00 PM</span>
                          </div>
                        </div>
                        <p className="text-slate-500 text-sm mt-3 pt-3 border-t border-slate-200/50">
                          Assist in setting up the venue, organizing materials, and preparing for the arrival of 3,000+ students.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Event Day Card */}
                <AnimatedSection direction="up" delay={200}>
                  <div className="bg-[#010193] p-8 lg:p-10 rounded-3xl h-full text-white shadow-2xl relative overflow-hidden group">
                    <GraphPaperBackground />

                    {/* Glowing effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-10">
                        <div>
                          <div className="text-xs font-bold tracking-[0.2em] text-blue-200/60 uppercase mb-2">Main Event</div>
                          <h3 className="text-3xl font-black text-white uppercase tracking-tight">Explorer Day</h3>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm text-white flex items-center justify-center border border-white/10">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                      </div>

                      {/* Timeline Layout */}
                      <div className="relative space-y-0 pl-4 border-l-2 border-white/10">
                        {[
                          { role: "Student Check-In", time: "7:15 – 10:00 AM", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                          { role: "Workshop Assistants", time: "8:15 – 11:30 AM", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
                          { role: "TechChallenge Assistants", time: "11:00 – 1:30 PM", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                          { role: "Take Down", time: "1:00 – 3:00 PM", icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }
                        ].map((shift, i) => (
                          <div key={i} className="relative pl-8 pb-8 last:pb-0 group/item">
                            {/* Timeline Dot */}
                            <div className="absolute top-1 -left-[9px] w-[18px] h-[18px] rounded-full border-[3px] border-[#010193] bg-blue-400 group-hover/item:bg-white transition-colors duration-300 shadow-md z-10"></div>

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 group-hover/item:translate-x-1 transition-transform duration-300">
                              <div>
                                <h4 className="font-bold text-lg text-white group-hover/item:text-blue-200 transition-colors">{shift.role}</h4>
                              </div>
                              <div className="font-mono text-sm text-blue-200/80 bg-white/5 rounded px-2 py-0.5 whitespace-nowrap border border-white/5">
                                {shift.time}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* CTA */}
              <AnimatedSection direction="up" delay={300}>
                <div className="text-center">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfRunWlBC5GYBzyN4J5bF6vzDjVLAURwf4vtrBMxzlZ7xJnfA/viewform" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#010193] text-white hover:bg-[#000070] font-bold px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl border-0 uppercase tracking-wide text-lg">
                      Volunteer Now
                    </Button>
                  </a>
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
