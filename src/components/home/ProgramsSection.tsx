import React, { useState } from 'react';
import { Button } from '@/components/ui';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

type Program = {
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    icon: React.ReactNode;
};

const PROGRAMS_DATA: Program[] = [
    {
        title: 'Explorer Day',
        description: 'A hands-on tech conference for high school girls designed to spark interest in STEM through interactive workshops and real-world challenges.',
        ctaText: 'Register Now',
        ctaHref: '#explorer-day',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        title: 'Student Board',
        description: 'Join the SheTech Student Board and help shape programs for girls in STEM. Open to students in grades 9-12.',
        ctaText: 'Apply Now',
        ctaHref: '#student-board',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        title: 'Media Internship',
        description: 'Get hands-on journalism experience promoting women in technology. Develop skills in writing, interviews, and multimedia content creation.',
        ctaText: 'Learn More',
        ctaHref: '#media-internship',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'Thanksgiving Point Internship',
        description: 'Hands-on experience in agriculture technology, entomology, exhibit design, STEM education, and more at Thanksgiving Point.',
        ctaText: 'Apply Now',
        ctaHref: '#thanksgiving-point',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        title: 'Summer Exploration Internship',
        description: 'Get an inside look at real tech companies. Tour multiple companies, meet women in the field, and explore careers in programming, data science, engineering, and more.',
        ctaText: 'Apply Now',
        ctaHref: '#summer-internship',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
        ),
    },
];

export const ProgramsSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedProgram = PROGRAMS_DATA[selectedIndex];

    return (
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
            {/* Graph Paper Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-100"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedSection direction="fade" delay={0}>
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-100 border-2 border-yellow-200 rounded-full mb-4 shadow-sticker transform -rotate-2">
                            <span className="text-sm font-bold text-yellow-800 uppercase tracking-wide">Year-Round Programs</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
                            Explore SheTech, <span className="text-highlight text-highlight-primary">All Year Long</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                            SheTech provides monthly events and opportunities for young women to learn and discover how their dreams can be realized in tech.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={100}>
                    <div className="grid lg:grid-cols-12 gap-0 max-w-6xl mx-auto">
                        {/* Left Column - File Folder Tabs */}
                        <div className="lg:col-span-4 flex flex-col pr-0 lg:-mr-px z-10">
                            <div className="bg-slate-100 rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl border-2 border-slate-300 border-b-0 lg:border-b-2 lg:border-r-0 p-4 pb-0 lg:pb-4 lg:pr-0 h-full">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">
                                    Select a Program
                                </p>
                                <div className="space-y-2">
                                    {PROGRAMS_DATA.map((program, index) => (
                                        <button
                                            key={program.title}
                                            onClick={() => setSelectedIndex(index)}
                                            className={`w-full text-left transition-all duration-200 relative group ${selectedIndex === index
                                                ? 'z-20'
                                                : 'z-0 hover:bg-slate-200/50'
                                                }`}
                                        >
                                            <div className={`
                                                flex items-center gap-3 p-4 rounded-l-lg lg:rounded-r-none border-2 
                                                ${selectedIndex === index
                                                    ? 'bg-white border-slate-300 border-r-0 shadow-[-4px_4px_0px_rgba(0,0,0,0.05)] lg:shadow-none translate-x-2 lg:translate-x-0 lg:w-[calc(100%+2px)]'
                                                    : 'border-transparent opacity-70 hover:opacity-100'
                                                }
                                            `}>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 ${selectedIndex === index
                                                    ? 'bg-primary-100 border-primary-200 text-primary-600'
                                                    : 'bg-white border-slate-200 text-slate-400'
                                                    }`}>
                                                    <span className="text-xs font-bold">{index + 1}</span>
                                                </div>
                                                <span className={`font-bold text-sm ${selectedIndex === index ? 'text-slate-900' : 'text-slate-600'}`}>
                                                    {program.title}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Notebook Content */}
                        <div className="lg:col-span-8">
                            <AnimatedSection direction="fade" delay={0} key={selectedIndex}>
                                <div className="bg-white border-2 border-slate-300 rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl shadow-sticker h-full relative overflow-hidden">
                                    {/* Notebook Lines Background */}
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)',
                                        backgroundSize: '100% 2rem',
                                        marginTop: '2rem'
                                    }}></div>

                                    {/* Red Margin Line */}
                                    <div className="absolute top-0 bottom-0 left-8 w-px bg-red-200"></div>

                                    <div className="relative p-8 pl-12">
                                        {/* Header */}
                                        <div className="flex items-start justify-between gap-6 mb-8">
                                            <div>
                                                <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-bold rounded-full mb-3 border border-primary-200">
                                                    PROGRAM FILE #{String(selectedIndex + 1).padStart(2, '0')}
                                                </div>
                                                <h3 className="text-3xl font-black text-slate-900 mb-2">
                                                    {selectedProgram.title}
                                                </h3>
                                            </div>
                                            <div className="w-16 h-16 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center text-primary-500 shadow-sm transform rotate-3">
                                                <div className="w-8 h-8">
                                                    {selectedProgram.icon}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="prose prose-slate max-w-none mb-8">
                                            <p className="text-lg text-slate-700 leading-8 font-medium">
                                                {selectedProgram.description}
                                            </p>
                                        </div>

                                        {/* Benefits - Sticky Notes */}
                                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                            {[
                                                { text: 'Real-world projects', color: 'bg-yellow-50 border-yellow-200 text-yellow-800' },
                                                { text: 'Industry mentorship', color: 'bg-green-50 border-green-200 text-green-800' },
                                                { text: 'Peer networking', color: 'bg-blue-50 border-blue-200 text-blue-800' },
                                                { text: 'Certificate earned', color: 'bg-purple-50 border-purple-200 text-purple-800' },
                                            ].map((benefit, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`p-3 rounded-lg border-2 ${benefit.color} text-sm font-bold shadow-sm transform hover:-rotate-1 transition-transform duration-200`}
                                                >
                                                    {benefit.text}
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <a href={selectedProgram.ctaHref} className="inline-block">
                                            <Button
                                                variant="primary"
                                                size="lg"
                                                className="bg-primary-600 text-white border-2 border-primary-700 shadow-sticker hover:shadow-sticker-hover font-bold rounded-xl px-8"
                                            >
                                                {selectedProgram.ctaText}
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};
