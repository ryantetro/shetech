import React from 'react';
import { Button, Badge } from '@/components/ui';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const ExplorerDaySection = () => {
    return (
        <section id="explorer-day" className="relative py-16 sm:py-24 bg-white overflow-hidden">
            {/* Minimal decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,166,206,0.03),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(189,28,129,0.03),transparent_50%)]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <AnimatedSection direction="fade" delay={0}>
                        <div className="text-center mb-12 sm:mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full mb-4">
                                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">Featured Event</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                SheTech Explorer Day <span className="text-primary-600">2026</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                An immersive tech conference designed to inspire the next generation of women in STEM
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Left Column - Event Details (Spans 2 columns) */}
                        <div className="lg:col-span-2 space-y-6">
                            <AnimatedSection direction="right" delay={100}>
                                {/* Event Info Card */}
                                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <Badge variant="success">FREE EVENT</Badge>
                                                <Badge variant="tertiary">GRADES 9-12</Badge>
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                                Discover Your Future in Technology
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed max-w-2xl">
                                                SheTech Explorer Day is a hands-on tech conference for high school girls designed to spark interest in STEM
                                                through interactive workshops and real-world challenges. Girls explore fields like <span className="font-semibold text-primary-600">robotics</span>, <span className="font-semibold text-primary-600">coding</span>, <span className="font-semibold text-primary-600">digital media</span>, and <span className="font-semibold text-primary-600">health sciences</span> while
                                                engaging with industry mentors and inspiring female role models.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Event Meta Information */}
                                    <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                                                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Date</p>
                                                <p className="text-sm font-semibold text-gray-900">February 24, 2026</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center shrink-0">
                                                <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Time</p>
                                                <p className="text-sm font-semibold text-gray-900">9:00 AM - 1:00 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-tertiary-100 rounded-lg flex items-center justify-center shrink-0">
                                                <svg className="w-5 h-5 text-tertiary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Location</p>
                                                <p className="text-sm font-semibold text-gray-900">Sandy, Utah</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Features Grid */}
                            <AnimatedSection direction="right" delay={200}>
                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    {[
                                        {
                                            icon: (
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                </svg>
                                            ),
                                            title: 'Interactive Workshops',
                                            description: 'Hands-on learning experiences in cutting-edge technologies',
                                            color: 'primary'
                                        },
                                        {
                                            icon: (
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            ),
                                            title: 'Industry Mentors',
                                            description: 'Connect with professionals leading innovation in tech',
                                            color: 'secondary'
                                        },
                                        {
                                            icon: (
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            ),
                                            title: 'Female Role Models',
                                            description: 'Learn from inspiring women who are shaping the future',
                                            color: 'tertiary'
                                        },
                                        {
                                            icon: (
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            ),
                                            title: 'Real-World Challenges',
                                            description: 'Solve actual problems faced by tech companies today',
                                            color: 'primary'
                                        },
                                    ].map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:border-gray-300 hover:shadow-md transition-all duration-300 group"
                                        >
                                            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 text-${feature.color}-600`}>
                                                {feature.icon}
                                            </div>
                                            <h4 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{feature.title}</h4>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Right Column - CTA & Venue */}
                        <div className="lg:col-span-1 space-y-6">
                            <AnimatedSection direction="left" delay={100}>
                                {/* Registration CTA */}
                                <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 rounded-2xl p-8 text-white shadow-xl sticky top-24">
                                    <div className="mb-6">
                                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Register Now</h3>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            Free registration for all high school girls in grades 9-12. Spaces are limited!
                                        </p>
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-2 text-sm text-white/90">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Free admission & lunch included</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-white/90">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Multiple workshop sessions</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-white/90">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Networking opportunities</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-white/90">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Swag & giveaways</span>
                                        </div>
                                    </div>

                                    <Button
                                        variant="secondary"
                                        size="lg"
                                        className="w-full bg-white text-primary-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold py-4 border-0"
                                    >
                                        Secure Your Spot
                                        <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </Button>

                                    <p className="text-xs text-white/70 text-center mt-4">
                                        Registration closes February 17, 2026
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection direction="left" delay={200}>
                                {/* Venue Information */}
                                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Venue
                                    </h4>
                                    <p className="font-bold text-gray-900 mb-1">Mountain America Expo Center</p>
                                    <p className="text-sm text-gray-600 mb-4">
                                        9575 S State St<br />
                                        Sandy, UT 84070
                                    </p>
                                    <a
                                        href="#"
                                        className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1 group"
                                    >
                                        Get Directions
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
