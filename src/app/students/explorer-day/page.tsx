'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button, StickerHeader, GraphPaperBackground } from '@/components/ui';

// Pre-calculate particle positions for stable rendering
const particlePositions = [...Array(15)].map(() => ({
  left: Math.random() * 100,
  duration: 5 + Math.random() * 5,
  delay: Math.random() * 3,
  colorIndex: Math.floor(Math.random() * 3),
}));

export default function ExplorerDayPage() {
  const [activeTab, setActiveTab] = useState<'workshops' | 'schedule'>('workshops');
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);

  // Auto-advance gallery carousel
  useEffect(() => {
    if (isGalleryPaused) return;

    const interval = setInterval(() => {
      setActiveGalleryImage((prev) => (prev + 1) % 9);
    }, 4000);

    return () => clearInterval(interval);
  }, [isGalleryPaused]);

  // Mock Data for Workshop Features
  const features = [
    {
      title: "Interactive Workshops",
      description: "Hands-on learning experiences in cutting-edge technologies like Robotics, Coding, and BioTech.",
      icon: "💻"
    },
    {
      title: "Industry Mentors",
      description: "Connect directly with professionals leading innovation at Utah's top tech companies.",
      icon: "👩‍💼"
    },
    {
      title: "Female Role Models",
      description: "Learn from inspiring women who are shaping the future of STEM.",
      icon: "⭐"
    },
    {
      title: "Real-World Challenges",
      description: "Work in teams to solve actual problems faced by tech companies today.",
      icon: "🧩"
    }
  ];

  // Mock Data for Schedule
  const schedule = [
    { time: "9:00 AM", title: "Registration & Expo", description: "Check-in, grab your swag, and explore the TechZone expo." },
    { time: "10:00 AM", title: "Opening Kickoff", description: "High-energy welcome with special guest speakers." },
    { time: "10:45 AM", title: "Workshop Session 1", description: "First round of hands-on STEM workshops." },
    { time: "11:45 AM", title: "Lunch & Networking", description: "Enjoy lunch while meeting mentors and new friends." },
    { time: "12:30 PM", title: "TechChallenge", description: "Team-based problem solving competition." },
    { time: "1:30 PM", title: "Awards & Closing", description: "Celebrate the day's achievements and win prizes!" }
  ];

  const stats = [
    { value: "3,000+", label: "High School Girls" },
    { value: "150+", label: "Schools Represented" },
    { value: "900+", label: "Mentors" },
    { value: "40+", label: "Tech Companies" }
  ];

  const whyMatters = [
    {
      title: "Discover Your Passion",
      description: "Explore diverse fields in STEM to find what excites you most.",
      icon: "✨"
    },
    {
      title: "Build Confidence",
      description: "Gain hands-on experience that proves you belong in tech.",
      icon: "💪"
    },
    {
      title: "Create Connections",
      description: "Meet friends and mentors who will support your journey.",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section - KEEPS THE MAGENTA THEME (Event Style) */}
        <section className="relative overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-28">
          {/* Base gradient background - Explorer Day Magenta Theme */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#BD1C81] via-[#a3156d] to-[#801055]"></div>
          </div>

          {/* New Teal Ambient Glows */}
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#00A6CE] rounded-full blur-[120px] opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#00A6CE] rounded-full blur-[100px] opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

          {/* Custom Tech Grid Pattern */}
          <div className="absolute inset-0 opacity-30">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="techGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" />
                </pattern>
                <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#BD1C81" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#00A6CE" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#be185d" stopOpacity="0.4" />
                </linearGradient>
                <filter id="nodeGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <rect width="100%" height="100%" fill="url(#techGrid)" />

              {/* Connection Nodes */}
              {[...Array(20)].map((_, i) => {
                const x = ((i * 13) % 100);
                const y = ((i * 17) % 100);
                const delay = i * 0.15;
                return (
                  <circle
                    key={i}
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r="3"
                    fill={i % 3 === 0 ? "#00A6CE" : "white"}
                    fillOpacity="0.6"
                    className="animate-pulse"
                    style={{ animationDelay: `${delay}s` }}
                  />
                )
              })}
            </svg>
          </div>

          {/* Animated Data Streams */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 w-px"
                style={{
                  left: `${(i + 1) * 12}%`,
                  height: '100%',
                  background: `linear-gradient(to bottom, transparent, ${i % 2 === 0 ? '#00A6CE' : 'white'}, transparent)`,
                  animation: `dataStream ${5 + (i % 3)}s linear infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">

              {/* Explorer Day Logo */}
              <div className="mb-6 relative animate-fade-in-up">
                {/* Glow effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-lg h-32 bg-white/20 blur-3xl rounded-full"></div>
                </div>

                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/shetech-assets/Explorer Day 2026.svg"
                    alt="Explorer Day"
                    width={600}
                    height={150}
                    className="w-full max-w-2xl h-auto drop-shadow-2xl mx-auto"
                    priority
                  />
                </div>
              </div>

              {/* Date Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-[#00A6CE]/30 text-sm font-bold mb-6 shadow-lg animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <svg className="w-4 h-4 text-[#00A6CE]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                February 24, 2026
                <span className="mx-2 opacity-50">|</span>
                Utah Valley University
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-10 font-medium animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Join more than 3,000 girls from hundreds of schools around the state for this free, hands-on day of STEM, partners, mentors, and more. <span className="text-[#00A6CE] font-bold bg-white/90 px-1 rounded shadow-sm">Lunch is included!</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center isolate animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <Button
                  size="lg"
                  className="bg-white text-[#00A6CE] hover:bg-gray-50 font-black px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl shadow-black/20 transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide text-lg"
                >
                  Register Free
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-[#00A6CE]/20 text-white border-2 border-white/50 hover:bg-white hover:text-[#00A6CE] backdrop-blur-sm font-bold px-10 py-4 rounded-xl transition-all cursor-pointer uppercase tracking-wide text-lg hover:border-white"
                >
                  View Schedule
                </Button>
              </div>

            </div>
          </div>
        </section>

        {/* BODY SECTION - Program Style (Gray Background + Graph Paper + Sticker Headers) */}
        <div className="bg-[#EBEBF5] relative pb-20">
          <GraphPaperBackground />

          {/* Quick Info Cards - Overlapping the Hero */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { label: "Date", value: "Feb 24, 2026", sub: "Mark your calendar", icon: "📅" },
                { label: "Location", value: "Utah Valley University", sub: "Orem, Utah", icon: "📍" },
                { label: "Participants", value: "3,000+", sub: "High School Girls", icon: "👯‍♀️" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-xl bg-[#BD1C81]/10 flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#BD1C81] uppercase tracking-wider">{item.label}</div>
                    <div className="text-lg font-black text-slate-900">{item.value}</div>
                    <div className="text-sm text-slate-500">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What to Expect Section */}
          <section className="py-12 sm:py-16 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block mb-4 transform hover:scale-105 transition-transform duration-300">
                  <StickerHeader label="Experience" title="What to Expect" variant="teal" angle={-2} />
                </div>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
                  Explorer Day is designed to spark your interest in STEM through hands-on learning and mentorship.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {features.map((feature, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#BD1C81]/30 transition-all duration-300 group">
                    <div className="w-16 h-16 rounded-2xl bg-[#BD1C81]/5 group-hover:bg-[#BD1C81] transition-colors duration-300 flex items-center justify-center text-4xl mb-6 shadow-sm">
                      <span className="group-hover:text-white transition-colors">{feature.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#BD1C81] transition-colors">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Schedule Section */}
          <section className="py-12 sm:py-16 relative z-10 bg-white border-y border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                {/* Image / Visual */}
                <div className="relative order-2 lg:order-1">
                  <div className="absolute -inset-4 bg-[#BD1C81] rounded-[2rem] opacity-20 transform -rotate-3 blur-lg"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                    <Image
                      src="/explorerday/cydni.png"
                      alt="SheTech Event"
                      width={800}
                      height={800}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Schedule List */}
                <div className="order-1 lg:order-2">
                  <div className="mb-10 text-center lg:text-left">
                    <StickerHeader label="Plan Your Day" title="Event Schedule" variant="teal" angle={1} />
                  </div>

                  <div className="space-y-6">
                    {schedule.map((item, idx) => (
                      <div key={idx} className="flex gap-4 group">
                        <div className="flex-shrink-0 w-24 pt-1 text-right">
                          <span className="inline-block px-3 py-1 bg-[#BD1C81]/10 text-[#BD1C81] font-bold text-xs rounded-full">
                            {item.time}
                          </span>
                        </div>
                        <div className="relative pb-6 border-l-2 border-slate-100 pl-6 last:border-0 last:pb-0">
                          {/* Dot */}
                          <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#BD1C81] transition-colors"></div>

                          <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 text-center lg:text-left pl-0 lg:pl-[7.5rem]">
                    <Button className="bg-[#00A6CE] text-white hover:bg-[#0086a6] font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-0 uppercase tracking-wide">
                      Download Full Guide
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Gallery Section */}
          <section className="py-16 sm:py-20 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <StickerHeader label="Memories" title="Past Events" variant="teal" angle={-1} />
              </div>

              {/* Gallery Carousel Window */}
              <div className="relative max-w-5xl mx-auto px-4 sm:px-12">
                {/* Controls */}
                <button
                  onClick={() => setActiveGalleryImage((prev) => (prev - 1 + 9) % 9)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[#BD1C81] hover:scale-110 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  onClick={() => setActiveGalleryImage((prev) => (prev + 1) % 9)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-[#BD1C81] hover:scale-110 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>

                <div
                  className="relative h-[400px] w-full overflow-hidden"
                  onMouseEnter={() => setIsGalleryPaused(true)}
                  onMouseLeave={() => setIsGalleryPaused(false)}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[
                      '/shetech-gallery/KinserStudios-SheTech25-0926.jpg',
                      '/shetech-gallery/KinserStudios-SheTech25-1414.jpg',
                      '/shetech-gallery/KinserStudios-SheTech25-1494.jpg',
                      '/shetech-gallery/KinserStudios-SheTech25-1949.jpg',
                      '/shetech-gallery/KinserStudios-SheTech25-2510.jpg',
                      '/shetech-gallery/KinserStudios-SheTech25-2532.jpg',
                      '/shetech-gallery/KinserStudios-SheTech25-2541.jpg',
                      '/shetech-gallery/KinserStudios-SheTech25-2830.jpg',
                      '/shetech-gallery/KinserStudios-Womentechcouncil-shetech-explorerday-1109.jpg'
                    ].map((src, index) => {
                      let offset = index - activeGalleryImage;
                      if (offset > 4) offset -= 9;
                      if (offset < -4) offset += 9;

                      return (
                        <div
                          key={index}
                          className="absolute transition-all duration-500 ease-out shadow-2xl rounded-xl overflow-hidden cursor-pointer bg-white border-4 border-white"
                          style={{
                            width: '300px',
                            height: '400px',
                            left: '50%',
                            zIndex: 10 - Math.abs(offset),
                            opacity: Math.abs(offset) > 2 ? 0 : 1,
                            transform: `translateX(calc(-50% + ${offset * 220}px)) scale(${1 - Math.abs(offset) * 0.15})`
                          }}
                          onClick={() => setActiveGalleryImage(index)}
                        >
                          <Image
                            src={src}
                            alt="Gallery"
                            fill
                            className="object-cover"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Stats Strip */}
              <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-black text-[#BD1C81] mb-1">{stat.value}</div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why It Matters */}
          <section className="py-12 sm:py-16 bg-white border-t border-slate-200 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase">Why Explorer Day Matters</h2>
                <p className="text-slate-500">More than just an event—it's a launching pad for future innovators</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {whyMatters.map((item, i) => (
                  <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center hover:bg-[#BD1C81] hover:text-white group transition-colors duration-300">
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-sm opacity-80 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Sponsors / Footer CTA */}
          <section className="py-16 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-4xl mx-auto bg-[#BD1C81] rounded-3xl p-10 sm:p-16 text-white text-center relative overflow-hidden shadow-2xl">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-black uppercase mb-6">Ready to Join Us?</h2>
                  <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                    Don't miss out on the biggest tech event for high school girls in Utah. Registration is free and open now!
                  </p>
                  <Button className="bg-white text-[#00A6CE] font-black text-lg px-10 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform border-0 uppercase cursor-pointer">
                    Secure Your Spot
                  </Button>
                </div>
              </div>
            </div>
          </section>

        </div>

      </main>

      <Footer />

      <style jsx>{`
        @keyframes dataStream {
          0% { transform: translateY(-100%); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
