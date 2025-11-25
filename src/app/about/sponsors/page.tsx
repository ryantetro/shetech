'use client';

import React from 'react';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

// Partner Data
const PARTNERS = {
  champions: [] as string[],
  blackDiamond: [] as string[],
  trekker: [] as string[],
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

const SponsorCard = ({ name, type }: { name: string; type: 'premium' | 'standard' }) => (
  <div className={`
    group relative flex items-center justify-center p-6 text-center rounded-xl transition-all duration-300
    ${type === 'premium'
      ? 'bg-white border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 min-h-[120px]'
      : 'bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md hover:-translate-y-0.5 min-h-[80px]'}
  `}>
    <span className={`
      font-semibold transition-colors duration-300
      ${type === 'premium' ? 'text-slate-800 text-lg group-hover:text-primary-600' : 'text-slate-600 text-sm group-hover:text-primary-600'}
    `}>
      {name}
    </span>
  </div>
);

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 relative inline-block">
      {title}
      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-50"></div>
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
        {subtitle}
      </p>
    )}
  </div>
);

export default function SponsorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
          {/* Tech Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Main Gradient Mesh */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/40 via-slate-950 to-slate-950"></div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary-900/30 via-transparent to-transparent"></div>

            {/* Animated Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Tech Lines/Accents */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/50 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <AnimatedSection>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Partners</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                We are proud to partner with industry leaders who are committed to empowering the next generation of women in tech. Their support makes SheTech possible.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-full bg-white text-slate-900 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Become a Partner
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* TechZone Partners */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeader
                title="TechZone Partners"
                subtitle="Leading companies showcasing the future of technology to our students."
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {PARTNERS.techZone.map((partner, index) => (
                  <SponsorCard key={index} name={partner} type="premium" />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Workshop Partners */}
        <section className="py-20 sm:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeader
                title="Workshop Partners"
                subtitle="Organizations providing hands-on learning experiences and mentorship."
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {PARTNERS.workshop.map((partner, index) => (
                  <SponsorCard key={index} name={partner} type="standard" />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Tech Challenge Partners */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeader
                title="Tech Challenge Partners"
                subtitle="Industry experts guiding students through real-world problem solving."
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {PARTNERS.techChallenge.map((partner, index) => (
                  <SponsorCard key={index} name={partner} type="standard" />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Internship Partners */}
        <section className="py-20 sm:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeader
                title="Internship Partners"
                subtitle="Companies opening their doors to provide career-launching experiences."
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
                {PARTNERS.internship.map((partner, index) => (
                  <SponsorCard key={index} name={partner} type="premium" />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/40 to-secondary-900/40"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Imagine the Possibilities
                </h2>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                  Join us in shaping the future of technology. Partner with SheTech to inspire, mentor, and hire the next generation of women in tech.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="mailto:kristin@womentechcouncil.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-400 hover:to-secondary-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Partner With Us
                  </a>
                  <a
                    href="/sign-up-for-information"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    Sign Up for Updates
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
