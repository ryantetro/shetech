import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const HeroSection = () => {
    return (
        <section className="relative min-h-[95vh] flex items-center pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {/* Desktop Hero Image */}
                <Image
                    src="/shetech-assets/Home Hero Desktop.jpg"
                    alt="SheTech Hero Background"
                    fill
                    priority
                    className="object-cover hidden sm:block"
                    style={{ objectPosition: '50% 80%' }}
                    quality={100}
                    unoptimized
                    sizes="100vw"
                />
                {/* Mobile Hero Image */}
                <Image
                    src="/shetech-assets/Home Hero Mobile.jpg"
                    alt="SheTech Hero Background"
                    fill
                    priority
                    className="object-cover sm:hidden object-top"
                    quality={100}
                />
            </div>

            <div className="relative container mx-auto px-6 sm:px-6 lg:px-8 z-10 h-full">
                <div className="max-w-2xl text-left mx-auto sm:mx-0 sm:ml-10 lg:ml-20 mt-12 sm:mt-0">
                    {/* Main Heading */}
                    <AnimatedSection direction="up" delay={300} initialLoad={true}>
                        <h1 className="text-6xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[0.95] sm:leading-[1.1] tracking-tight text-[#00A6CE]">
                            Discover <br className="sm:hidden" />
                            Your <br className="sm:hidden" />
                            Future <br className="sm:hidden" />
                            in TECH
                        </h1>
                    </AnimatedSection>

                    {/* Description */}
                    <AnimatedSection direction="up" delay={500} initialLoad={true}>
                        <p className="text-xl sm:text-xl text-[#00A6CE] sm:text-slate-600 mb-8 max-w-[70%] sm:max-w-lg font-bold sm:font-medium leading-tight sm:leading-relaxed">
                            Join thousands of high school girls, mentors, and tech companies for Utah's largest hands-on STEM experience.
                        </p>
                    </AnimatedSection>

                    {/* CTA Buttons */}
                    <AnimatedSection direction="up" delay={700} initialLoad={true}>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Link
                                href="/students/explorer-day"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-[#BD1C81] text-white font-bold text-lg hover:bg-[#a0156b] transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide w-full sm:w-auto"
                            >
                                Register Now
                            </Link>
                            <Link
                                href="/get-involved/mentor"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-[#00A6CE] text-white font-bold text-lg hover:bg-[#008db0] transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide w-full sm:w-auto"
                            >
                                Become a Mentor
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};
