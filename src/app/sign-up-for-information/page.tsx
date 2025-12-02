'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button, Input } from '@/components/ui';

export default function SignUpForInformationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const impactStats = [
    {
      number: '4',
      suffix: '',
      label: 'States',
      description: 'Utah, Arizona, Colorado, and Idaho',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      number: '15',
      suffix: 'K+',
      label: 'Students',
      description: 'Have participated in the program',
      color: 'from-primary-500 to-primary-600',
    },
    {
      number: '94',
      suffix: '%',
      label: 'Better Understanding',
      description: 'Of STEM careers reported',
      color: 'from-secondary-500 to-pink-500',
    },
    {
      number: '150',
      suffix: '+',
      label: 'Companies',
      description: 'Sponsored and participated',
      color: 'from-violet-500 to-purple-500',
    },
    {
      number: '1000',
      suffix: '+',
      label: 'Mentors',
      description: 'Industry professionals involved',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const benefits = [
    'Inspire girls to learn about STEM in a fun and engaging environment',
    'Demonstrate what STEM careers look like',
    'Engage girls in teams to solve a STEM challenge and win prizes',
    'Introduce girls to industry mentors in hands-on workshops and TechZone booths',
    'Pathway young women to STEM education, certifications, and internships',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-[50vh] flex items-center">
          {/* Gradient Background - Education themed teal/cyan */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-primary-700 to-cyan-800"></div>
          </div>

          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="educatorPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="1.5" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#educatorPattern)" />
            </svg>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection direction="down" delay={0} initialLoad>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  For Educators
                </div>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-white tracking-tight">
                  Educators
                </h1>
                <p className="text-xl sm:text-2xl text-teal-100 font-medium mb-6">
                  Bring SheTech to Your Students
                </p>
                
                <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Registration is easy, the event is free, and students are inspired! 
                  Join thousands of educators who have transformed their students&apos; perspective on STEM careers.
                </p>
              </AnimatedSection>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" className="w-full">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Why Bring Your Students Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <AnimatedSection direction="left" delay={0}>
                  <div>
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-teal-600 bg-teal-50 rounded-full">
                      Why SheTech?
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                      Why Bring Your Students to SheTech?
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Students and Teachers tell us that bringing their students to SheTech is the thing 
                      that helped students map what they are studying in STEM classes to possible careers. 
                      All of the resources we are providing are available for your use in your curriculum 
                      to all of your classes and students.
                    </p>
                    <div className="bg-gradient-to-r from-secondary-500 to-orange-500 rounded-xl p-6 text-white">
                      <h3 className="text-xl font-bold mb-3">High School Girls Love SheTech</h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        SheTech helps girls discover the opportunities in STEM, and importantly, how they 
                        already have the skills to be successful! Girls who participate will get access to 
                        internship opportunities, receive a SheTech certificate for future job applications, 
                        and get access to pathway information and scholarships.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Benefits List */}
                <AnimatedSection direction="right" delay={200}>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">What Students Experience</h3>
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-12 sm:py-14 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="statsPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#statsPattern)" />
            </svg>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center mb-8">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full">
                  Our Impact
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  SheTech by the Numbers
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {impactStats.map((stat, index) => (
                <AnimatedSection key={index} direction="up" delay={index * 100}>
                  <div className="text-center group">
                    {/* Number Display */}
                    <div className="relative mb-2">
                      <div className={`text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.number}
                        <span className="text-xl sm:text-2xl lg:text-3xl">{stat.suffix}</span>
                      </div>
                    </div>
                    
                    {/* Label */}
                    <h3 className="text-white font-semibold text-xs sm:text-sm mb-0.5">
                      {stat.label}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-400 text-[10px] sm:text-xs">
                      {stat.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Sign Up Form Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="text-center mb-10">
                  <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-teal-600 bg-teal-50 rounded-full">
                    Stay Connected
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Sign Up for Our Educator Email List
                  </h2>
                  <p className="text-gray-600">
                    Stay informed about upcoming events, resources, and opportunities for your students.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={100}>
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@school.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your school or any questions you have..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer border-0"
                    >
                      Sign Up for Updates
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 sm:py-16 bg-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      Ready to Register Your Students?
                    </h3>
                    <p className="text-gray-600">
                      Explore SheTech Explorer Day and sign up your school today.
                    </p>
                  </div>
                  <a 
                    href="/teachers/register-your-students"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap"
                  >
                    Register Students
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
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
