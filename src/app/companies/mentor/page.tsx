'use client';

import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { Button } from '@/components/ui';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export default function MentorPage() {
  const impactStats = [
    { number: '18', suffix: 'K+', label: 'Students', description: 'Have participated', color: 'from-emerald-500 to-teal-500' },
    { number: '94', suffix: '%', label: 'Better Understanding', description: 'Of STEM careers', color: 'from-primary-500 to-cyan-500' },
    { number: '1000', suffix: '+', label: 'Mentors', description: 'Industry professionals', color: 'from-secondary-500 to-pink-500' },
    { number: '150', suffix: '+', label: 'Companies', description: 'Sponsoring & teaching', color: 'from-violet-500 to-purple-500' },
  ];

  const mentorTrainingDates = [
    { date: 'Feb 19, 2026', time: '4:00 PM - 5:00 PM', type: 'Virtual (Zoom)' },
    { date: 'Feb 20, 2026', time: '8:00 AM - 9:00 AM', type: 'Virtual (Zoom)' },
  ];

  const volunteerShifts = [
    { title: 'Set Up', date: 'Monday, Feb 24', time: '2:00 PM - 8:00 PM' },
    { title: 'Check in Students', date: 'Tuesday, Feb 24', time: '7:15 AM - 10:00 AM' },
    { title: 'Workshop Assistants', date: 'Tuesday, Feb 24', time: '8:15 AM - 11:30 AM' },
    { title: 'TechChallenge Assistants', date: 'Tuesday, Feb 24', time: '11:00 AM - 1:30 PM' },
    { title: 'Take Down', date: 'Tuesday, Feb 24', time: '1:00 PM - 3:00 PM' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 sm:pt-24 pb-24 sm:pb-32 min-h-[60vh] flex items-center">
          {/* Gradient Background - Warm emerald/teal for community feel */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-teal-800 to-cyan-900"></div>
          </div>

          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="mentorPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="1.5" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mentorPattern)" />
            </svg>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection direction="down" delay={0} initialLoad>
                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-white tracking-tight">
                  Mentors & Volunteers
                </h1>
                <p className="text-xl sm:text-2xl text-emerald-100 font-medium mb-6">
                  Inspire the Next Generation of Tech Leaders
                </p>
                
                <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Whether you&apos;re guiding students through challenges or helping the event run smoothly, 
                  your contribution makes a lasting impact on young women pursuing STEM careers.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#mentors">
                    <Button 
                      size="lg"
                      className="bg-white text-emerald-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-0"
                    >
                      Become a Mentor
                    </Button>
                  </a>
                  <a href="#volunteers">
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all cursor-pointer"
                    >
                      Volunteer
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>

        </section>

        {/* Impact Stats Section - Integrated with hero */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  {impactStats.map((stat, index) => (
                    <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className={`text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.number}
                        <span className="text-xl sm:text-2xl lg:text-3xl">{stat.suffix}</span>
                      </div>
                      <h3 className="text-gray-900 font-semibold text-sm mb-0.5">{stat.label}</h3>
                      <p className="text-gray-500 text-xs">{stat.description}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Featured Image Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/mentors/image.png"
                    alt="SheTech Mentors and Volunteers"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="text-white text-lg sm:text-xl font-semibold">
                      Join 1,000+ mentors making a difference at SheTech Explorer Day
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section id="mentors" className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Content */}
                <AnimatedSection direction="left" delay={0}>
                  <div>
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-emerald-600 bg-emerald-50 rounded-full">
                      Mentorship
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                      Become a Mentor
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Mentors should be women and men working in STEM fields who can help guide students 
                      through the Ideation TechChallenge. This will be a 45-minute structured challenge 
                      where you will work with a group of students, and then submit your judging score.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      We will provide training to help mentors prepare for this experience. Virtual training 
                      sessions are 30-45 minutes via Zoom.
                    </p>

                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf5JcKITadKPzNXuuF2GbOy8K2yN2homMJ3agKqPVd9_AhjCA/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-700 hover:shadow-xl transform hover:scale-105 transition-all"
                    >
                      Sign Up as Mentor
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </AnimatedSection>

                {/* Training Dates Card */}
                <AnimatedSection direction="right" delay={200}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Training Dates</h3>
                    </div>

                    <div className="space-y-4 mb-6">
                      {mentorTrainingDates.map((training, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl">
                          <div className="text-center">
                            <div className="text-sm font-bold text-emerald-700">{training.date}</div>
                            <div className="text-xs text-emerald-600">{training.time}</div>
                          </div>
                          <div className="text-xs text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                            {training.type}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white">
                      <div className="font-bold mb-1">Live TechChallenge</div>
                      <div className="text-sm text-white/90">Tuesday, February 24, 2026</div>
                      <div className="text-sm text-white/90">10:30 AM - 1:30 PM</div>
                      <div className="text-xs text-white/70 mt-1">Mountain America Expo Center</div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteers Section */}
        <section id="volunteers" className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Content */}
                <AnimatedSection direction="left" delay={0}>
                  <div>
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-amber-700 bg-amber-100 rounded-full">
                      Volunteering
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                      Become a Volunteer
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      This event requires many helping hands to make it run smoothly and provide a fun 
                      and engaging experience for the students. Volunteer times are flexible to what you can contribute.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Prior to the date, we will confirm your availability across these times and work within 
                      your schedule. We appreciate any portion of time you can commit.
                    </p>

                    <a 
                      href="https://forms.gle/FBUBMaCziH6eFX1Y6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white font-semibold rounded-xl shadow-lg hover:bg-amber-600 hover:shadow-xl transform hover:scale-105 transition-all"
                    >
                      Sign Up as Volunteer
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </AnimatedSection>

                {/* Schedule Card */}
                <AnimatedSection direction="right" delay={200}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Volunteer Shifts</h3>
                    </div>

                    <div className="space-y-3 mb-6">
                      {volunteerShifts.map((shift, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-amber-50 rounded-xl">
                          <div>
                            <div className="text-sm font-bold text-amber-700">{shift.title}</div>
                            <div className="text-xs text-amber-600">{shift.date}</div>
                          </div>
                          <div className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                            {shift.time}
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-gray-500">
                      * You are not required to stay the full time block. We appreciate any time you can contribute!
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 sm:py-16 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      Ready to Get Involved?
                    </h3>
                    <p className="text-gray-600">
                      Complete the forms above and we&apos;ll contact you to coordinate and confirm.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href="#mentors"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors whitespace-nowrap"
                    >
                      Mentor
                    </a>
                    <a 
                      href="#volunteers"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white text-sm font-medium rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap"
                    >
                      Volunteer
                    </a>
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
