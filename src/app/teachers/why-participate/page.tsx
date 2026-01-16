'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, StickerHeader, GraphPaperBackground, Button } from '@/components/ui';

export default function WhyParticipatePage() {
  const categories = [
    {
      id: 'educators',
      title: 'For Educators',
      role: 'Inspire',
      description: "Help your female students discover careers in STEM with SheTech Explorer Day.",
      image: '/shetech-gallery/KinserStudios-SheTech25-2986.jpg',
      link: '#educators-section',
      color: 'bg-[#0064BA]'
    },
    {
      id: 'mentors',
      title: 'For Mentors',
      role: 'Guide',
      description: "Share your experience and guide students through the Ideation TechChallenge.",
      image: '/shetech-gallery/KinserStudios-SheTech25-3148.jpg',
      link: '#mentors-section',
      color: 'bg-[#BD1C81]'
    },
    {
      id: 'partners',
      title: 'For Partners',
      role: 'Support',
      description: "Support the next generation of women in tech through sponsorship and resources.",
      image: '/shetech-gallery/KinserStudios-SheTech25-3315.jpg',
      link: '#partners-section',
      color: 'bg-[#00008B]'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Navigation Hero */}
        <section className="relative pt-32 pb-20 bg-[#EBEBF5] overflow-hidden">
          <GraphPaperBackground />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <AnimatedSection direction="up" delay={0} initialLoad>
                <div className="inline-block mb-6">
                  <StickerHeader label="Get Involved" title="Why Participate?" angle={-1} variant="blue" />
                </div>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                  Whether you are an educator, mentor, or industry partner, there is a place for you at SheTech. Join us in inspiring the next generation.
                </p>
              </AnimatedSection>
            </div>

            {/* 3-Column Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {categories.map((cat, idx) => (
                <AnimatedSection key={idx} direction="up" delay={idx * 150} initialLoad>
                  <Link href={cat.link} className="group block relative h-[400px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00008B] via-transparent to-transparent opacity-90"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 uppercase tracking-wider ${cat.color}`}>
                        {cat.role}
                      </span>
                      <h3 className="text-3xl font-black text-white uppercase mb-2">{cat.title}</h3>
                      <p className="text-white/80 font-medium line-clamp-2 mix-blend-lighten">{cat.description}</p>

                      <div className="mt-4 flex items-center text-white/90 font-bold uppercase text-sm tracking-wide">
                        Learn More
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Sections */}

        {/* EDUCATORS SECTION */}
        <section id="educators-section" className="py-24 bg-white overflow-hidden scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Image Left */}
              <div className="order-2 lg:order-1 relative">
                <AnimatedSection direction="right" delay={200}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                    <Image src="/shetech-gallery/KinserStudios-SheTech25-2986.jpg" alt="Educators at SheTech" fill className="object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0064BA]/10 rounded-full blur-2xl"></div>
                </AnimatedSection>
              </div>

              {/* Text Right */}
              <div className="order-1 lg:order-2">
                <AnimatedSection direction="left" delay={100}>
                  <span className="text-[#0064BA] font-black uppercase tracking-wider text-sm mb-2 block">For Schools & Teachers</span>
                  <h2 className="text-3xl lg:text-4xl font-black text-[#00008B] mb-6 uppercase leading-tight">
                    You Inspire the <br /><span className="text-[#0064BA]">Next Generation of Innovators.</span>
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                    When you bring your students, you open doors to discovery, mentorship, and opportunity. Each year, thousands of girls attend SheTech because an educator believed in their potential.
                  </p>

                  <ul className="space-y-4 mb-8">
                    {[
                      "Discover STEM in action — Interactive TechZone",
                      "Meet inspiring mentors — Connect with professionals",
                      "Unlock new opportunities — Internships & certificates",
                      "Make learning real — Connect lessons to careers",
                      "Connect with industry — Access local opportunities"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-slate-700 font-medium">
                        <div className="w-6 h-6 rounded-full bg-[#0064BA]/10 flex-shrink-0 flex items-center justify-center mr-3 text-[#0064BA] mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-8 p-6 bg-slate-50 rounded-xl border-l-4 border-[#0064BA]">
                    <p className="text-slate-700 italic font-medium mb-3">
                      "SheTech was the moment my students connected what they were learning in class to real careers. It gave them purpose."
                    </p>
                    <p className="text-sm font-bold text-[#00008B] uppercase">— High School STEM Teacher, Utah</p>
                  </div>

                  <Link href="/teachers/register-your-students">
                    <Button className="bg-[#0064BA] hover:bg-[#005094] text-white font-bold px-8 py-4 rounded-xl shadow-lg border-0 uppercase tracking-wide">
                      Register Your Students
                    </Button>
                  </Link>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* NEW SECTION: HIGH SCHOOL GIRLS LOVE SHETECH */}
        <section className="py-24 bg-[#EBEBF5] overflow-hidden">
          <GraphPaperBackground />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center max-w-4xl mx-auto mb-16">
                <span className="text-[#BD1C81] font-black uppercase tracking-wider text-sm mb-2 block">High School Girls Love SheTech</span>
                <h2 className="text-4xl lg:text-5xl font-black text-[#00008B] mb-6 uppercase leading-none">
                  Inspiring Confidence. <br /><span className="text-[#BD1C81]">Building Futures.</span>
                </h2>
                <p className="text-xl text-slate-600 font-medium leading-relaxed">
                  Every year, SheTech ignites excitement and confidence in students who discover that they already have what it takes to succeed in STEM.
                </p>
              </div>
            </AnimatedSection>

            {/* Quotes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              <AnimatedSection direction="right" delay={100}>
                <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-[#BD1C81]">
                  <p className="text-2xl font-black text-[#00008B] mb-4">"I didn’t think I could do tech — until SheTech."</p>
                  <div className="space-y-2">
                    <div className="h-2 w-16 bg-[#BD1C81]/20 rounded-full"></div>
                    <div className="h-2 w-10 bg-[#BD1C81]/20 rounded-full"></div>
                  </div>
                  <p className="text-sm font-bold text-[#BD1C81] uppercase mt-6">— Cydni Tetro</p>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={200}>
                <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-[#0064BA]">
                  <p className="text-2xl font-black text-[#00008B] mb-4">"Now I want to be an engineer."</p>
                  <div className="space-y-2">
                    <div className="h-2 w-16 bg-[#0064BA]/20 rounded-full"></div>
                    <div className="h-2 w-10 bg-[#0064BA]/20 rounded-full"></div>
                  </div>
                  <p className="text-sm font-bold text-[#0064BA] uppercase mt-6">— Kristen Wright</p>
                </div>
              </AnimatedSection>
            </div>

            {/* Impact Snapshot */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-black text-center text-[#00008B] uppercase mb-10">SheTech Impact Snapshot</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { value: "40,000+", label: "Girls Inspired", icon: "🌟", color: "text-[#BD1C81]" },
                  { value: "500+", label: "Companies", icon: "🏢", color: "text-[#0064BA]" },
                  { value: "1,000+", label: "Mentors", icon: "🤝", color: "text-[#00008B]" },
                  { value: "$32M+", label: "Economic Impact", icon: "💰", color: "text-green-600" },
                ].map((stat, idx) => (
                  <AnimatedSection key={idx} direction="up" delay={idx * 100}>
                    <div className="text-center group p-4">
                      <span className="text-4xl mb-3 block transform group-hover:scale-110 transition-transform">{stat.icon}</span>
                      <div className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <div className="text-center mt-16 max-w-3xl mx-auto">
              <p className="text-lg text-slate-600 font-medium">
                Through hands-on projects, team challenges, and direct mentorship, SheTech helps students build identity in STEM and develop the mindset to innovate and lead.
              </p>
            </div>
          </div>
        </section>

        {/* MENTORS SECTION */}
        <section id="mentors-section" className="py-24 bg-white overflow-hidden scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <AnimatedSection direction="right" delay={200}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                    <Image src="/shetech-gallery/KinserStudios-SheTech25-3148.jpg" alt="Mentors Guiding Students" fill className="object-cover" />
                  </div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#BD1C81]/10 rounded-full blur-2xl"></div>
                </AnimatedSection>
              </div>
              <div>
                <AnimatedSection direction="left" delay={100}>
                  <span className="text-[#BD1C81] font-black uppercase tracking-wider text-sm mb-2 block">For Industry Professionals</span>
                  <h2 className="text-4xl lg:text-5xl font-black text-[#00008B] mb-6 uppercase leading-none">Become a <br /><span className="text-[#BD1C81]">Mentor</span></h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                    Mentors work with students during the Ideation TechChallenge. In just a short session, you can make a lasting impact by sharing your knowledge and encouragement.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Guide students through TechChallenge",
                      "30-minute structured challenge",
                      "Work with small groups via Zoom",
                      "Submit judging scores"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-slate-700 font-medium">
                        <div className="w-6 h-6 rounded-full bg-[#BD1C81]/10 flex items-center justify-center mr-3 text-[#BD1C81]">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/companies/mentor">
                    <Button className="bg-[#BD1C81] hover:bg-[#991769] text-white font-bold px-8 py-4 rounded-xl shadow-lg border-0 uppercase tracking-wide">
                      Become a Mentor
                    </Button>
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS SECTION */}
        <section id="partners-section" className="py-24 bg-white overflow-hidden scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <AnimatedSection direction="right" delay={100}>
                  <span className="text-[#00008B] font-black uppercase tracking-wider text-sm mb-2 block">For Industry Support</span>
                  <h2 className="text-4xl lg:text-5xl font-black text-[#00008B] mb-6 uppercase leading-none">Partner With <br />SheTech</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                    SheTech relies on industry partners to help girls imagine the possibilities in STEM. From sponsorships to providing volunteers, your company can change the trajectory of the workforce.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Program sponsorship opportunities",
                      "Provide mentors and volunteers",
                      "Host company tours and workshops",
                      "Marketing and brand visibility"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-slate-700 font-medium">
                        <div className="w-6 h-6 rounded-full bg-[#00008B]/10 flex items-center justify-center mr-3 text-[#00008B]">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/companies/sponsor">
                    <Button className="bg-[#00008B] hover:bg-[#000060] text-white font-bold px-8 py-4 rounded-xl shadow-lg border-0 uppercase tracking-wide">
                      Partner With Us
                    </Button>
                  </Link>
                </AnimatedSection>
              </div>
              <div className="order-1 lg:order-2 relative">
                <AnimatedSection direction="left" delay={200}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                    <Image src="/shetech-gallery/KinserStudios-SheTech25-3315.jpg" alt="Partners Supporting Trends" fill className="object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#00008B]/10 rounded-full blur-2xl"></div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
