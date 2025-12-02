'use client';

import React from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

// STEM Champions - Top tier partners with logos
const stemChampions = [
  { name: 'Adobe', image: '/partners/image.png' },
  { name: 'Ancestry', image: '/partners/image copy.png' },
  { name: 'Comcast NBCUniversal', image: '/partners/image copy 2.png' },
  { name: 'Dealertrack', image: '/partners/image copy 3.png' },
  { name: 'Dell Technologies', image: '/partners/image copy 4.png' },
  { name: 'Vivint', image: '/partners/image copy 5.png' },
];

// Black Diamond Partners
const blackDiamondPartners = [
  { name: 'Domo', image: '/partners/image copy 6.png' },
  { name: 'Governors Office of Energy Development', image: '/partners/image copy 7.png' },
  { name: 'IM Flash', image: '/partners/image copy 8.png' },
  { name: 'Listen Technologies', image: '/partners/image copy 9.png' },
];

// Trekker Partners
const trekkerPartners = [
  { name: 'Hill Air Force Base', image: '/partners/image copy 10.png' },
  { name: 'STEM Action Center', image: '/partners/image copy 11.png' },
];

// Partner Data - Text only partners
const PARTNERS = {
  techZone: [
    '3D Printing', 'Adobe', 'Ancestry', 'AT&T', 'BD Medical', 'Brainstorm', 'BYU', 'Chatbooks',
    'Cisco', 'DealerSocket', 'Dealertrack', 'Dell EMC', 'DevMountain', 'Domo', 'Fuze Play',
    'GE Healthcare', 'Goldman Sachs', 'Hill Air Force Base', 'IBM', 'IM Flash', 'Instant Snow',
    'Instructure', 'Ivanti', 'Legends Solar', 'Living Planet Aquarium', 'MX', 'NAWIC', 'Ozobots',
    'Neumont', 'NICE CXone', 'Pluralsight', 'Purple', 'Rockwell Collins', 'Skywest', 'Sodalicious',
    'SpyHop', 'STEM Action Center', 'SUU', 'Teal Drones', 'Thumbtack', 'TweetBeam', 'UTC', 'UTOS',
    'UVU', 'Vivint SmartHome', 'WSU'
  ],
  workshop: [
    'Adobe', 'Ancestry', 'Ardusat', 'BioEyes', 'Brigham Young University', 'Canyons School District',
    'Certiport', 'Columbus', 'Dealertrak', 'Disney', 'Goldman Sachs', 'Hill Air Force Base',
    'Learning Through Robotics', 'Legends Solar', 'Living Planet Aquarium', 'Merit Medical',
    'Mountainland ATC', 'Nelson Labs', 'NICE CXone', 'Northrop Grumman', 'NuSkin', 'Rockwell Collins',
    'SeaQuest', 'Skywest', 'Southern Utah University', 'Spy Hop', 'Sweets Candy', 'The Leonardo',
    'US Synthetic', 'Utah State University', 'Utah Valley University', 'Verizon', 'VSchool',
    'Weber State University'
  ],
  techChallenge: [
    'Adobe', 'Alta High School', 'ARUP Laboratories', 'AT&T', 'Boeing', 'Bottega Tech Bootcamps',
    'Brand Aid', 'Control4', 'Cricut', 'DealerSocket', 'Dell Technologies', 'Domo', 'eBay',
    'Everyone Social', 'GE Healthcare', 'Goldman Sachs', 'Integracore', 'Ivanti', 'Marketstar',
    'Myriad Genetics', 'NCR', 'Oracle', 'Pluralsight', 'Red Pill Analytics', 'RizePoint',
    'Skyrocket Media', 'SL Chamber', 'STEM Garage', 'Stryker', 'Survey Sampling International',
    'University of Utah', 'USTAR', 'Utah State University', 'ViaWest', 'WCF Insurance',
    'Women Business Center'
  ],
  internship: [
    'Amazon / AWS', 'CHG', 'Clearlink', 'Comcast NBC Universal', 'Domo', 'FatFish Media',
    'Goldman Sachs', 'Hale Center Theatre', 'NuSkin', 'Pelion', 'Pluralsight', 'Progressive Leasing',
    'Pure Storage'
  ]
};

// Partner tier colors
const tierColors = {
  champion: { bg: 'from-amber-500 to-yellow-500', text: 'text-amber-600', border: 'border-amber-200', light: 'bg-amber-50' },
  blackDiamond: { bg: 'from-slate-700 to-slate-900', text: 'text-slate-700', border: 'border-slate-300', light: 'bg-slate-100' },
  trekker: { bg: 'from-emerald-500 to-teal-500', text: 'text-emerald-600', border: 'border-emerald-200', light: 'bg-emerald-50' },
  techZone: { bg: 'from-blue-500 to-cyan-500', text: 'text-blue-600', border: 'border-blue-200', light: 'bg-blue-50' },
  workshop: { bg: 'from-purple-500 to-violet-500', text: 'text-purple-600', border: 'border-purple-200', light: 'bg-purple-50' },
  techChallenge: { bg: 'from-rose-500 to-pink-500', text: 'text-rose-600', border: 'border-rose-200', light: 'bg-rose-50' },
  internship: { bg: 'from-orange-500 to-amber-500', text: 'text-orange-600', border: 'border-orange-200', light: 'bg-orange-50' },
};

export default function SponsorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Gradient with geometric pattern */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-20 sm:py-28">
          {/* Geometric pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="partnerGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#fff" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#partnerGrid)" />
            </svg>
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <AnimatedSection direction="up" delay={0}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Our <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Partners</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                We are proud to partner with industry leaders committed to empowering the next generation of women in tech. Their support makes SheTech possible.
              </p>
              <a
                href="#become-partner"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-purple-500 text-white font-semibold shadow-lg hover:opacity-90 transition-all"
              >
                Become a Partner
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* STEM Champions - Premium tier */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-12">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${tierColors.champion.light} ${tierColors.champion.text} text-sm font-semibold mb-4`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  STEM CHAMPIONS
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Premier Partners
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {stemChampions.map((partner, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border-2 border-amber-100 hover:border-amber-300 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  >
                    <div className="relative w-full h-16">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Black Diamond Partners */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-12">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${tierColors.blackDiamond.light} ${tierColors.blackDiamond.text} text-sm font-semibold mb-4`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  BLACK DIAMOND PARTNERS
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Elite Supporters
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {blackDiamondPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="group bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <div className="relative w-full h-14">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Trekker Partners */}
        <section className="py-16 sm:py-20 bg-emerald-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-12">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${tierColors.trekker.light} ${tierColors.trekker.text} text-sm font-semibold mb-4`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  TREKKER PARTNERS
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Growth Partners
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
                {trekkerPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <div className="relative w-full h-14">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* TechZone Partners - Text list */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-10">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${tierColors.techZone.light} ${tierColors.techZone.text} text-sm font-semibold mb-4`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  TECHZONE PARTNERS
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Technology Showcase Partners
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
                {PARTNERS.techZone.map((partner, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Workshop Partners - Text list */}
        <section className="py-16 sm:py-20 bg-purple-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-10">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${tierColors.workshop.light} ${tierColors.workshop.text} text-sm font-semibold mb-4`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  WORKSHOP PARTNERS
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Hands-On Learning Partners
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
                {PARTNERS.workshop.map((partner, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors border border-purple-100"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Tech Challenge Partners - Text list */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-10">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${tierColors.techChallenge.light} ${tierColors.techChallenge.text} text-sm font-semibold mb-4`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  TECH CHALLENGE PARTNERS
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Innovation Challenge Partners
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
                {PARTNERS.techChallenge.map((partner, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-rose-50 text-rose-700 rounded-full text-sm font-medium hover:bg-rose-100 transition-colors"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Internship Partners - Text list */}
        <section className="py-16 sm:py-20 bg-orange-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-10">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${tierColors.internship.light} ${tierColors.internship.text} text-sm font-semibold mb-4`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  INTERNSHIP PARTNERS
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Career Launching Partners
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {PARTNERS.internship.map((partner, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white text-orange-700 rounded-xl text-sm font-semibold hover:bg-orange-100 transition-colors border border-orange-200 shadow-sm"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section id="become-partner" className="py-12 sm:py-16 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-purple-500 to-pink-500"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Imagine the Possibilities
                  </h3>
                  <p className="text-white/70">
                    Join us in shaping the future of women in tech
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href="mailto:kristin@womentechcouncil.com"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-all"
                  >
                    Partner With Us
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a
                    href="/sign-up-for-information"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
                  >
                    Get Updates
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
