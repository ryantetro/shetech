'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, Button, StickerHeader, GraphPaperBackground } from '@/components/ui';

export default function RegisterYourStudentsPage() {
  // Countdown Timer Logic (Feb 24, 2026)
  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const explorerDay = new Date('2026-02-24T09:00:00');
      const now = new Date();
      const difference = explorerDay.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // Initial call
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);



  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Teachers Blue Theme */}
        <section className="relative pt-32 pb-16 sm:pb-24 overflow-hidden bg-[#EBEBF5]">
          <GraphPaperBackground />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Text Content */}
              <div className="text-center lg:text-left">
                <AnimatedSection direction="right" delay={0} initialLoad>
                  <div className="mb-6 inline-block">
                    <StickerHeader label="Feb 24, 2026" title="Register Your School" angle={-2} variant="blue" />
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00008B] mb-6 leading-tight uppercase">
                    Empower Your Students.<br />
                    <span className="text-[#0064BA]">Transform Their Futures.</span>
                  </h1>

                  <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                    Register your school for SheTech Explorer Day—Utah’s largest hands-on STEM experience for high school girls.
                    <span className="block mt-4 font-bold text-[#0064BA]">
                      Mountain America Expo Center | Free for all high schools
                    </span>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="#register">
                      <Button
                        size="lg"
                        className="bg-[#0064BA] text-white hover:bg-[#005094] font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0 uppercase tracking-wide"
                      >
                        Register Your School
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Button>
                    </a>
                  </div>

                  {/* Countdown Timer */}
                  <div className="mt-10 pt-8 border-t border-slate-200">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Countdown to Explorer Day</p>
                    <div className="flex gap-4 justify-center lg:justify-start">
                      {[
                        { label: 'Days', value: timeLeft.days },
                        { label: 'Hours', value: timeLeft.hours },
                        { label: 'Mins', value: timeLeft.minutes },
                        { label: 'Secs', value: timeLeft.seconds }
                      ].map((item, i) => (
                        <div key={i} className="text-center">
                          <div className="bg-white rounded-lg shadow-sm border border-slate-200 w-20 h-20 flex items-center justify-center text-2xl font-black text-[#0064BA]">
                            {item.value}
                          </div>
                          <div className="text-xs font-bold text-slate-400 mt-1 uppercase">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Visual - Gallery Image */}
              <div className="relative">
                <AnimatedSection direction="left" delay={200} initialLoad>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/shetech-gallery/KinserStudios-Womentechcouncil-shetech-explorerday-2032.jpg"
                        alt="Students engaging in STEM"
                        fill
                        className="object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0064BA]/80 to-transparent opacity-60"></div>

                      {/* Floating Banner */}
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg">
                        <p className="text-[#0064BA] font-black text-center text-lg uppercase leading-tight">
                          Join <span className="text-[#BD1C81]">3,500+ students</span> and <span className="text-[#BD1C81]">200+ schools</span> already registered!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#00A6CE] rounded-full opacity-20 blur-2xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#BD1C81] rounded-full opacity-20 blur-2xl"></div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* Why Register Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-black text-[#00008B] uppercase mb-6">
                  An Unforgettable Experience
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  When you bring your students to SheTech Explorer Day, you open the door to an unforgettable experience that connects what they learn in the classroom to real-world STEM careers.
                </p>
              </div>
            </AnimatedSection>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { value: "3,500+", label: "Students", icon: "👩‍🎓", desc: "High school girls impacted annually" },
                { value: "200+", label: "Schools", icon: "🏫", desc: "Participating from across the state" },
                { value: "1,000+", label: "Mentors", icon: "🤝", desc: "Industry professionals guiding students" }
              ].map((stat, idx) => (
                <AnimatedSection key={idx} direction="up" delay={idx * 100}>
                  <div className="text-center group p-4">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300 inline-block">{stat.icon}</div>
                    <div className="text-4xl font-black text-[#0064BA] mb-2">{stat.value}</div>
                    <div className="text-lg font-bold text-[#00008B] uppercase tracking-wide mb-2">{stat.label}</div>
                    <p className="text-slate-500 font-medium">{stat.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section id="register" className="py-24 bg-[#0064BA] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
              <AnimatedSection direction="up" delay={100}>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-black text-[#00008B] uppercase mb-4">Register Your School</h2>
                  <p className="text-slate-600 font-medium">
                    Join us for a day of mentorship, discovery, innovation, and inspiration.
                  </p>
                </div>

                <div className="flex justify-center">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd5nlsVX1Bs858OK__EeiEYZqWS4qVKtmgObz7f1KNRP7mvzQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-[#BD1C81] hover:bg-[#991769] text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all uppercase tracking-wide border-0 cursor-pointer text-lg"
                    >
                      Complete Registration
                      <svg className="w-5 h-5 ml-2 inline-block mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
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
