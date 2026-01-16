'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, StickerHeader, GraphPaperBackground, Button } from '@/components/ui';

export default function HostInternshipPage() {
  const rotationTopics = [
    { title: "Coding & Data Analytics", icon: "💻", description: "Hands-on experience with real-world codebases and data sets." },
    { title: "Design & UX", icon: "🎨", description: "Learning how user experience shapes technology products." },
    { title: "Engineering", icon: "⚙️", description: "Understanding the systems and architecture behind the software." },
    { title: "Storytelling", icon: "📢", description: "Marketing, product positioning, and communicating tech value." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-[#010193] overflow-hidden">
          <GraphPaperBackground className="opacity-10" />

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection direction="up" delay={0}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
                  Summer Exploration Internship
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                  Turn Inspiration <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Into Experience.</span>
                </h1>
                <p className="text-xl text-blue-100/90 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
                  Companies can extend their impact beyond Explorer Day by hosting the SheTech Summer Exploration Internship for a session at your office.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:kristin@womentechcouncil.com">
                    <Button
                      size="lg"
                      className="bg-white text-[#010193] hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide"
                    >
                      Host an Intern
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Curved divider */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
        </section>

        {/* The Experience Journey Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Visual Journey Map */}
              <div className="relative order-2 lg:order-1">
                <AnimatedSection direction="right" delay={200}>
                  <div className="relative z-10">
                    {/* Central Line */}
                    <div className="absolute left-8 top-8 bottom-8 w-1 bg-slate-100 rounded-full"></div>
                    <div className="absolute left-8 top-8 bottom-1/2 w-1 bg-gradient-to-b from-[#010193] to-transparent rounded-full"></div>

                    <div className="space-y-8">
                      {rotationTopics.map((topic, index) => (
                        <div key={index} className="relative flex items-center gap-6 group">
                          {/* Node */}
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg border-4 border-white relative z-10 transition-transform duration-300 group-hover:scale-110 ${index === 0 ? 'bg-[#010193] text-white' : 'bg-white text-slate-700'}`}>
                            {topic.icon}
                          </div>

                          {/* Content Card */}
                          <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-[#010193] text-lg mb-1">{topic.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{topic.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Background Blob */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
                </AnimatedSection>
              </div>

              {/* Text Content */}
              <div className="order-1 lg:order-2">
                <AnimatedSection direction="left" delay={0}>
                  <div className="mb-6 inline-block">
                    <StickerHeader label="2-Week Rotation" title="The Experience" angle={2} variant="navy" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#010193] mb-6 leading-tight">
                    Your Workplace Becomes <br /> Their Classroom.
                  </h2>
                  <div className="prose prose-lg text-slate-600 mb-8">
                    <p>
                      Interns rotate through companies for <strong>2 weeks during the summer</strong> exploring companies, opportunities, and learning from mentors.
                    </p>
                    <p>
                      These internships give high school girls real-world exposure to tech environments. Your employees become the mentors that change futures.
                    </p>
                  </div>

                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 rotate-1 hover:rotate-0 transition-transform duration-500">
                    <Image
                      src="/shetech-gallery/KinserStudios-SheTech25-2986.jpg"
                      alt="Student interns in a tech office"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010193]/80 to-transparent flex items-end p-8">
                      <p className="text-white font-bold text-lg">"Seeing the day-to-day of a tech company changed my entire perspective on my future career."</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-[#F5F5FA]">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection direction="up" delay={0}>
              <h2 className="text-3xl font-black text-[#010193] mb-8">Ready to Host a Session?</h2>
              <a href="mailto:kristin@womentechcouncil.com">
                <Button
                  size="lg"
                  className="bg-[#010193] text-white hover:bg-[#000070] font-bold px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all text-lg"
                >
                  Contact Us to Host
                </Button>
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
