import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const HeroSection = () => {
    return (
        <section className="relative overflow-hidden text-slate-900 h-screen flex items-center bg-white">
            {/* Background Image - Lightened */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/landingpage/hero.png"
                    alt="SheTech community"
                    fill
                    priority
                    className="object-cover opacity-20"
                    quality={90}
                />
                {/* Light gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
            </div>

            {/* Animated background elements - Softer colors */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -left-20 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tertiary-200/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Announcement Banner - Sticker Style */}
                    <AnimatedSection direction="fade" delay={100} initialLoad={true}>
                        <div className="flex justify-center mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-primary-100 rounded-full text-sm font-medium text-primary-700 shadow-sticker hover:shadow-sticker-hover transition-all duration-200 cursor-pointer group transform -rotate-1 hover:rotate-0">
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                                    🎉 Explorer Day 2026 Registration Now Open
                                </span>
                                <svg
                                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Main Heading */}
                    <AnimatedSection direction="up" delay={300} initialLoad={true}>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 text-center leading-tight tracking-tight text-slate-900">
                            <span className="block mb-2">
                                Empowering Girls
                            </span>
                            <span className="relative inline-block">
                                <span className="relative z-10">in STEM</span>
                                <svg className="absolute -bottom-2 left-0 w-full h-4 text-secondary-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>
                    </AnimatedSection>

                    {/* Description */}
                    <AnimatedSection direction="up" delay={500} initialLoad={true}>
                        <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto text-center leading-relaxed font-medium">
                            SheTech helps girls recognize the opportunities they can pursue in <span className="text-highlight text-highlight-primary font-bold text-slate-800">STEM education</span> and careers.
                        </p>
                    </AnimatedSection>

                    {/* CTA Buttons */}
                    <AnimatedSection direction="up" delay={700} initialLoad={true}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="group relative overflow-hidden bg-secondary-500 text-white border-2 border-secondary-600 shadow-sticker hover:shadow-sticker-hover transform transition-all duration-200 px-8 py-4 text-lg font-bold rounded-xl"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Register for Explorer Day
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="group bg-white text-slate-700 border-2 border-slate-200 hover:border-primary-400 hover:text-primary-600 shadow-sticker hover:shadow-sticker-hover transform transition-all duration-200 px-8 py-4 text-lg font-bold rounded-xl"
                            >
                                <span className="flex items-center gap-2">
                                    Apply to Student Board
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </Button>
                        </div>
                    </AnimatedSection>

                    {/* Trust Indicators - Notebook Style */}
                    <AnimatedSection direction="fade" delay={900} initialLoad={true}>
                        <div className="mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-6">
                            {[
                                { text: 'Free Registration', icon: '✨' },
                                { text: 'Grades 9-12', icon: '📚' },
                                { text: 'Hands-On Learning', icon: '💡' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm text-sm font-semibold text-slate-600 transform rotate-1 hover:rotate-0 transition-transform duration-200">
                                    <span>{item.icon}</span>
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};
