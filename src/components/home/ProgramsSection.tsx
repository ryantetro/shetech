import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

type Benefit = {
    text: string;
    color: string;
};

type Program = {
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    icon: React.ReactNode;
    benefits: Benefit[];
};

const PROGRAMS_DATA: Program[] = [
    {
        title: 'Explorer Day',
        description: 'A hands-on tech conference for high school girls designed to spark interest in STEM through interactive workshops, tech challenges, and connections with industry professionals.',
        ctaText: 'Register Now',
        ctaHref: '/students/explorer-day',
        icon: (
            <div className="relative w-full h-full">
                <Image
                    src="/shetech-assets/Explorer Day Icon.svg"
                    alt="Explorer Day"
                    fill
                    className="object-contain"
                />
            </div>
        ),
        benefits: [
            { text: 'Interactive workshops', color: 'bg-yellow-50 border-yellow-200 text-yellow-800' },
            { text: 'Tech Challenge competition', color: 'bg-green-50 border-green-200 text-green-800' },
            { text: 'Meet industry professionals', color: 'bg-blue-50 border-blue-200 text-blue-800' },
            { text: 'Free for all students', color: 'bg-purple-50 border-purple-200 text-purple-800' },
        ],
    },
    {
        title: 'Student Board',
        description: 'Join the SheTech Student Board and help shape programs for girls in STEM. Develop leadership skills, plan events, and make a real impact in your school community.',
        ctaText: 'Apply Now',
        ctaHref: '/students/leadership-board',
        icon: (
            <div className="relative w-full h-full">
                <Image
                    src="/shetech-assets/student board icon.svg"
                    alt="Student Board"
                    fill
                    className="object-contain"
                />
            </div>
        ),
        benefits: [
            { text: 'Leadership development', color: 'bg-cyan-50 border-cyan-200 text-cyan-800' },
            { text: 'Event planning experience', color: 'bg-pink-50 border-pink-200 text-pink-800' },
            { text: 'Network with peers', color: 'bg-indigo-50 border-indigo-200 text-indigo-800' },
            { text: 'College application boost', color: 'bg-amber-50 border-amber-200 text-amber-800' },
        ],
    },
    {
        title: 'Media Internship',
        description: 'Get hands-on journalism experience promoting women in technology. Develop skills in writing, interviews, video production, and multimedia content creation with TechBuzz.',
        ctaText: 'Learn More',
        ctaHref: '/students/media-internship',
        icon: (
            <div className="relative w-full h-full">
                <Image
                    src="/shetech-assets/Media Intern Icon.svg"
                    alt="Media Internship"
                    fill
                    className="object-contain"
                />
            </div>
        ),
        benefits: [
            { text: 'Video production skills', color: 'bg-rose-50 border-rose-200 text-rose-800' },
            { text: 'Interview experience', color: 'bg-teal-50 border-teal-200 text-teal-800' },
            { text: 'Build your portfolio', color: 'bg-orange-50 border-orange-200 text-orange-800' },
            { text: 'Social media marketing', color: 'bg-violet-50 border-violet-200 text-violet-800' },
        ],
    },
    {
        title: 'Thanksgiving Point Internship',
        description: 'Hands-on experience in agriculture technology, entomology, exhibit design, STEM education, and more at Thanksgiving Point museums and gardens.',
        ctaText: 'Apply Now',
        ctaHref: '/students/thanksgiving-point-internship',
        icon: (
            <div className="relative w-full h-full">
                <Image
                    src="/shetech-assets/int workshop icon.svg"
                    alt="Internship"
                    fill
                    className="object-contain"
                />
            </div>
        ),
        benefits: [
            { text: 'Ag-tech exploration', color: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
            { text: 'Museum exhibit design', color: 'bg-sky-50 border-sky-200 text-sky-800' },
            { text: 'STEM education training', color: 'bg-lime-50 border-lime-200 text-lime-800' },
            { text: 'Hands-on research', color: 'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-800' },
        ],
    },
    {
        title: 'Summer Exploration Internship',
        description: 'Get an inside look at real tech companies. Tour multiple companies, meet women in the field, and explore careers in programming, data science, engineering, and more.',
        ctaText: 'Apply Now',
        ctaHref: '/students/summer-internship',
        icon: (
            <div className="relative w-full h-full">
                <Image
                    src="/shetech-assets/summer intern icon.svg"
                    alt="Summer Internship"
                    fill
                    className="object-contain"
                />
            </div>
        ),
        benefits: [
            { text: 'Company tours', color: 'bg-blue-50 border-blue-200 text-blue-800' },
            { text: 'Career exploration', color: 'bg-green-50 border-green-200 text-green-800' },
            { text: 'Women mentor connections', color: 'bg-purple-50 border-purple-200 text-purple-800' },
            { text: 'Industry networking', color: 'bg-yellow-50 border-yellow-200 text-yellow-800' },
        ],
    },
];

export const ProgramsSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedProgram = PROGRAMS_DATA[selectedIndex];

    return (
        <section className="py-20 sm:py-24 bg-[#EBEBF5] relative overflow-hidden">
            {/* Graph Paper Background */}
            <div className="absolute inset-0 opacity-100" style={{ backgroundImage: 'radial-gradient(#d1d1d1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedSection direction="fade" delay={0}>
                    <div className="text-center mb-12 sm:mb-16 relative">
                        {/* Sticker Header */}
                        <div className="relative inline-block transform -rotate-2 mb-6">
                            <div className="absolute inset-0 bg-[#000080] transform translate-y-1 translate-x-1" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)' }}></div>
                            <div className="relative bg-[#00008B] text-white px-8 py-4 pb-8" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)' }}>
                                <span className="text-xl sm:text-2xl font-black uppercase tracking-wider">Explore SheTech</span>
                                <div className="text-3xl sm:text-4xl font-black uppercase leading-none mt-1">ALL YEAR LONG</div>
                            </div>
                        </div>

                        <p className="text-lg text-[#00008B] max-w-2xl mx-auto leading-relaxed font-bold mt-4">
                            SheTech provides monthly events and opportunities for young women to learn and discover how their dreams can be realized in tech.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={100}>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-6 items-start">
                            {/* Left Column - Program List */}
                            <div className="lg:col-span-4 flex flex-col gap-3">
                                <div className="bg-[#00008B] text-white p-3 rounded-t-lg font-bold text-sm uppercase tracking-wider pl-4">
                                    Select a Program
                                </div>
                                <div className="bg-white rounded-b-lg p-2 shadow-sm space-y-1">
                                    {PROGRAMS_DATA.map((program, index) => (
                                        <button
                                            key={program.title}
                                            onClick={() => setSelectedIndex(index)}
                                            className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3 font-bold ${selectedIndex === index
                                                ? 'bg-[#00008B] text-white shadow-md'
                                                : 'text-[#00008B] hover:bg-[#E6E6FA]'
                                                }`}
                                        >
                                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border-2 ${selectedIndex === index
                                                ? 'border-white bg-white/20'
                                                : 'border-[#00008B] bg-transparent'
                                                }`}>
                                                {index + 1}
                                            </span>
                                            {program.title}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column - Content */}
                            <div className="lg:col-span-8">
                                <AnimatedSection direction="fade" delay={0} key={selectedIndex}>
                                    <div className="bg-white rounded-xl shadow-lg border-2 border-white overflow-hidden relative min-h-[500px] flex flex-col">
                                        {/* Program Content */}
                                        <div className="p-8 sm:p-10 flex-1">
                                            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between mb-6">
                                                <div>
                                                    <div className="inline-block px-3 py-1 bg-[#E6E6FA] text-[#00008B] text-xs font-bold rounded-md mb-3 uppercase tracking-wider">
                                                        Program Info
                                                    </div>
                                                    <h3 className="text-3xl sm:text-4xl font-black text-[#00008B] mb-2 uppercase">
                                                        {selectedProgram.title}
                                                    </h3>
                                                </div>
                                                <div className="w-20 h-20 shrink-0 text-[#00008B]/20">
                                                    {selectedProgram.icon}
                                                </div>
                                            </div>

                                            <p className="text-lg text-slate-700 leading-relaxed font-medium mb-8">
                                                {selectedProgram.description}
                                            </p>

                                            <div className="grid sm:grid-cols-2 gap-3 mb-8">
                                                {selectedProgram.benefits.map((benefit, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-[#00008B] font-bold text-sm">
                                                        <span className="w-2 h-2 rounded-full bg-[#BD1C81]"></span>
                                                        {benefit.text}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-auto pt-6 border-t border-slate-100">
                                                <Link
                                                    href={selectedProgram.ctaHref}
                                                    className="inline-block bg-[#BD1C81] text-white font-bold text-lg px-8 py-3 rounded-md shadow-md hover:bg-[#A0156B] transition-colors uppercase tracking-wide"
                                                >
                                                    {selectedProgram.ctaText}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};
