'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button, Badge, Card } from '@/components/ui';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export default function MentorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section - Split Layout */}
        <section className="relative bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh] py-12 lg:py-0">

              {/* Left Column: Content */}
              <AnimatedSection direction="right" delay={0}>
                <div className="relative z-10">
                  <Badge variant="primary" className="mb-6 bg-primary-50 text-primary-700 border-primary-100">
                    Join the Community
                  </Badge>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                    Inspire the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                      Next Generation
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                    Whether you're a mentor guiding students or a volunteer ensuring the event runs smoothly, your contribution makes a difference.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-primary-500/30 px-8">
                      Become a Mentor
                    </Button>
                    <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8">
                      Volunteer
                    </Button>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right Column: Visual Composition */}
              <div className="relative lg:h-full flex items-center justify-center">
                <AnimatedSection direction="left" delay={200}>
                  <div className="relative w-full max-w-lg aspect-square">
                    {/* Abstract Shapes Composition */}
                    <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-primary-100 to-primary-50 rounded-[3rem] transform rotate-3"></div>
                    <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-gradient-to-tr from-secondary-100 to-secondary-50 rounded-[3rem] transform -rotate-3"></div>

                    {/* Floating Cards */}
                    <div className="absolute top-1/4 left-0 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 transform -rotate-6 animate-float">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900">1,000+</div>
                          <div className="text-xs text-gray-500">Active Mentors</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-1/4 right-0 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 transform rotate-6 animate-float delay-700">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900">Impact</div>
                          <div className="text-xs text-gray-500">Change Lives</div>
                        </div>
                      </div>
                    </div>

                    {/* Central Visual */}
                    <div className="absolute inset-8 bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white shadow-lg">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Mentorship Program</h3>
                          <p className="text-sm text-gray-500">Join a network of professionals dedicated to empowering the next generation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: '18,000+', label: 'Students Participated' },
                { value: '94%', label: 'Better Understanding of STEM' },
                { value: '1,000+', label: 'Industry Mentors' },
                { value: '150+', label: 'Sponsoring Companies' },
              ].map((stat, idx) => (
                <AnimatedSection key={idx} direction="up" delay={idx * 100}>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

              {/* Mentors Column */}
              <AnimatedSection direction="right" delay={0}>
                <div className="h-full flex flex-col">
                  <div className="mb-8">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 text-primary-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Become a Mentor</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Mentors should be women and men working in STEM fields who can help guide students through the Ideation TechChallenge. This will be a 45-minute structured challenge where you will work with a group of students, and then submit your judging score. We will provide training to help mentors prepare for this experience.
                    </p>
                    <Card className="bg-primary-50 border-primary-100 p-6 mb-8">
                      <h3 className="font-bold text-primary-900 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Important Dates
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-primary-800 mb-1">Virtual Trainings (Zoom)</p>
                          <p className="text-sm text-primary-700">Feb 19, 4:00 PM - 5:00 PM</p>
                          <p className="text-sm text-primary-700">Feb 20, 8:00 AM - 9:00 AM</p>
                        </div>
                        <div className="pt-4 border-t border-primary-200">
                          <p className="text-sm font-semibold text-primary-800 mb-1">Live Ideation TechChallenge</p>
                          <p className="text-sm text-primary-700">Tuesday, February 24, 2026</p>
                          <p className="text-sm text-primary-700">10:30 AM - 1:30 PM @ Mountain America Expo Center</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="mt-auto">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf5JcKITadKPzNXuuF2GbOy8K2yN2homMJ3agKqPVd9_AhjCA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                      <Button size="lg" className="w-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-primary-500/30">
                        Sign Up as Mentor
                      </Button>
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Volunteers Column */}
              <AnimatedSection direction="left" delay={200}>
                <div className="h-full flex flex-col">
                  <div className="mb-8">
                    <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-4 text-secondary-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Become a Volunteer</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      This event requires many helping hands to make it run smoothly and provide a fun and engaging experience for the students. Volunteer times are flexible to what you can contribute. You are not required to stay the full time block if you can only help for a few hours.
                    </p>
                    <Card className="bg-secondary-50 border-secondary-100 p-6 mb-8">
                      <h3 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Schedule Opportunities
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-secondary-800 mb-1">Set Up (Monday, Feb 24)</p>
                          <p className="text-sm text-secondary-700">2:00 PM - 8:00 PM</p>
                        </div>
                        <div className="pt-4 border-t border-secondary-200">
                          <p className="text-sm font-semibold text-secondary-800 mb-2">Event Day (Tuesday, Feb 24)</p>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-secondary-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary-400"></span>
                              7:15 AM - 10:00 AM: Check in students
                            </li>
                            <li className="flex items-center gap-2 text-sm text-secondary-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary-400"></span>
                              8:15 AM - 11:30 AM: Workshop Assistants
                            </li>
                            <li className="flex items-center gap-2 text-sm text-secondary-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary-400"></span>
                              11:00 AM - 1:30 PM: TechChallenge Assistants
                            </li>
                            <li className="flex items-center gap-2 text-sm text-secondary-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary-400"></span>
                              1:00 PM - 3:00 PM: Take Down
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="mt-auto">
                    <a href="https://forms.gle/FBUBMaCziH6eFX1Y6" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                      <Button size="lg" variant="secondary" className="w-full bg-secondary-600 hover:bg-secondary-700 text-white shadow-lg hover:shadow-secondary-500/30">
                        Sign Up as Volunteer
                      </Button>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Info Banner */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to get involved?</h2>
                <p className="text-gray-300 mb-8">
                  If you are interested in being a mentor, running a workshop, hosting a TechZone booth, or volunteering at Explorer Day, please complete the forms above and we will contact you to coordinate and confirm.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Flexible Commitment
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Make an Impact
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Inspire Future Leaders
                  </span>
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
