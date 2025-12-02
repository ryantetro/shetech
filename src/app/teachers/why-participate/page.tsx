'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui';

// Pre-calculate floating elements for hero
const floatingElements = [...Array(12)].map((_, i) => ({
  left: (i * 8.3) % 100,
  top: 5 + ((i * 13) % 80),
  size: 16 + (i % 4) * 6,
  duration: 5 + (i % 5),
  delay: i * 0.4,
  type: i % 3,
}));

// Participation categories data
const participationCategories = [
  {
    id: 'educators',
    title: 'For Educators',
    description: "Help your female students discover careers in STEM with SheTech Explorer Day. They'll get experience with dozens of STEM jobs, work with mentors from hundreds of tech companies, gain access to summer internships and receive certificates and certifications.",
    image: '/why-participate/image.png',
    color: 'teal',
    gradient: 'from-teal-500 to-cyan-500',
    bgGradient: 'from-teal-500/10 to-cyan-500/10',
    benefits: [
      'Experience with dozens of STEM jobs',
      'Work with mentors from tech companies',
      'Access to summer internships',
      'Certificates and certifications',
    ],
    ctaText: 'Register Students',
    ctaLink: '/teachers/register-your-students',
  },
  {
    id: 'mentors',
    title: 'For Mentors',
    description: 'Mentors should be women and men working in STEM fields who can help guide students through the Ideation TechChallenge. This will be a 30-minute structured challenge where you will work with a small group of students via zoom, and then submit your judging score.',
    image: '/why-participate/image1.png',
    color: 'purple',
    gradient: 'from-purple-500 to-violet-500',
    bgGradient: 'from-purple-500/10 to-violet-500/10',
    benefits: [
      'Guide students through TechChallenge',
      '30-minute structured challenge',
      'Work with small groups via Zoom',
      'Submit judging scores',
    ],
    ctaText: 'Become a Mentor',
    ctaLink: '/companies/mentor',
  },
  {
    id: 'partners',
    title: 'For Industry Partners',
    description: "As a non-profit organization, the Women Tech Council's SheTech program relies on our industry partners to help girls imagine the possibilities in STEM. Industry partners play a role in many ways, including, but not limited to: program sponsorship and financial contributions, donations in kind, providing mentors, volunteers, meeting and event spaces, company tours, educational workshops and resources, marketing support, and many other ways to help SheTech be a success.",
    image: '/why-participate/image2.png',
    color: 'rose',
    gradient: 'from-rose-500 to-pink-500',
    bgGradient: 'from-rose-500/10 to-pink-500/10',
    benefits: [
      'Program sponsorship opportunities',
      'Provide mentors and volunteers',
      'Host company tours and workshops',
      'Marketing and brand visibility',
    ],
    ctaText: 'Partner With Us',
    ctaLink: '/companies/sponsor',
  },
];

// Icon components
const EducatorIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const MentorIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const IndustryIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const getIcon = (color: string, className: string = "w-6 h-6") => {
  switch (color) {
    case 'teal': return <EducatorIcon className={className} />;
    case 'purple': return <MentorIcon className={className} />;
    case 'rose': return <IndustryIcon className={className} />;
    default: return <EducatorIcon className={className} />;
  }
};

export default function WhyParticipatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
          {/* Dynamic gradient background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-purple-500/5 to-rose-500/5"></div>
          </div>

          {/* Geometric pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="triangleNet" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                  <polygon points="50,0 100,87 0,87" fill="none" stroke="url(#triGrad)" strokeWidth="0.5"/>
                  <circle cx="50" cy="0" r="2" fill="#14b8a6"/>
                  <circle cx="100" cy="87" r="2" fill="#a855f7"/>
                  <circle cx="0" cy="87" r="2" fill="#f43f5e"/>
                </pattern>
                <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6"/>
                  <stop offset="50%" stopColor="#a855f7"/>
                  <stop offset="100%" stopColor="#f43f5e"/>
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#triangleNet)" />
            </svg>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {floatingElements.map((el, i) => (
              <div
                key={i}
                className="absolute opacity-20"
                style={{
                  left: `${el.left}%`,
                  top: `${el.top}%`,
                  width: `${el.size}px`,
                  height: `${el.size}px`,
                  animation: `float ${el.duration}s ease-in-out infinite`,
                  animationDelay: `${el.delay}s`,
                }}
              >
                {el.type === 0 && <EducatorIcon className="w-full h-full text-teal-400" />}
                {el.type === 1 && <MentorIcon className="w-full h-full text-purple-400" />}
                {el.type === 2 && <IndustryIcon className="w-full h-full text-rose-400" />}
              </div>
            ))}
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left: Main Content */}
                <div className="text-center lg:text-left">
                  <AnimatedSection direction="left" delay={0} initialLoad>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
                      <span className="block text-white mb-2">Why</span>
                      <span className="block bg-gradient-to-r from-teal-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
                        Participate?
                      </span>
                    </h1>

                    <p className="text-base sm:text-lg text-white/70 mb-6 leading-relaxed max-w-xl">
                      Whether you are an educator, mentor, or industry partner, there is a place for you at SheTech. Join us in inspiring the next generation of women in technology.
                    </p>

                    {/* Key Points */}
                    <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20">
                        <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                        <span className="text-teal-300 text-sm font-medium">Educators</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                        <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                        <span className="text-purple-300 text-sm font-medium">Mentors</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20">
                        <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                        <span className="text-rose-300 text-sm font-medium">Partners</span>
                      </div>
                    </div>

                    <a
                      href="#educators"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 via-purple-500 to-rose-500 text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
                    >
                      Explore Opportunities
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </a>
                  </AnimatedSection>
                </div>

                {/* Right: Preview Card */}
                <div className="relative">
                  <AnimatedSection direction="right" delay={0.2} initialLoad>
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 overflow-hidden">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                        <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                        <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                        <span className="ml-2 text-white/60 text-sm font-medium">Three Ways to Participate</span>
                      </div>

                      <div className="space-y-4">
                        {participationCategories.map((cat) => (
                          <a
                            key={cat.id}
                            href={`#${cat.id}`}
                            className="group flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300"
                          >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white shrink-0`}>
                              {getIcon(cat.color, "w-6 h-6")}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-white font-semibold text-sm group-hover:text-white/90 transition-colors">
                                {cat.title}
                              </h3>
                              <p className="text-white/50 text-xs truncate">
                                {cat.benefits[0]}
                              </p>
                            </div>
                            <svg className="w-5 h-5 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        ))}
                      </div>

                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-rose-500/20 to-transparent rounded-full blur-2xl"></div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes float {
              0%, 100% {
                transform: translateY(0) rotate(0deg);
              }
              50% {
                transform: translateY(-12px) rotate(2deg);
              }
            }
          `}</style>
        </section>

        {/* Participation Category Sections */}
        {participationCategories.map((category, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <section
              key={category.id}
              id={category.id}
              className="relative py-16 sm:py-24 overflow-hidden"
              style={{
                background: isEven 
                  ? 'linear-gradient(to bottom, #ffffff, #f8fafc)' 
                  : 'linear-gradient(to bottom, #f8fafc, #ffffff)'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-30`}></div>
              
              <div className="absolute inset-0 opacity-[0.03]">
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <pattern id={`dots-${category.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="currentColor"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#dots-${category.id})`} className="text-gray-900" />
                </svg>
              </div>

              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                  <AnimatedSection direction="up" delay={0}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                      {/* Image Column */}
                      <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
                        <div className="relative">
                          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                              src={category.image}
                              alt={category.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-10`}></div>
                          </div>
                          
                          <div className={`absolute -bottom-4 ${isEven ? '-right-4' : '-left-4'} w-20 h-20 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-xl`}>
                            {getIcon(category.color, "w-10 h-10")}
                          </div>
                          
                          <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-24 h-24 rounded-full border-4 border-gray-200/50`}></div>
                        </div>
                      </div>

                      {/* Content Column */}
                      <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${category.gradient} text-white text-sm font-medium mb-6 shadow-lg`}>
                          {getIcon(category.color, "w-4 h-4")}
                          {category.title}
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                          {category.title === 'For Educators' && (
                            <>Empower Your <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>Students</span></>
                          )}
                          {category.title === 'For Mentors' && (
                            <>Guide the Next <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>Generation</span></>
                          )}
                          {category.title === 'For Industry Partners' && (
                            <>Shape the <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>Future</span></>
                          )}
                        </h2>

                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                          {category.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                          {category.benefits.map((benefit, i) => (
                            <div 
                              key={i} 
                              className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                            >
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center shrink-0`}>
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <Link
                          href={category.ctaLink}
                          className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r ${category.gradient} text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300`}
                        >
                          {category.ctaText}
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </section>
          );
        })}

        {/* Compact CTA Banner */}
        <section className="relative py-8 sm:py-10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-rose-500"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Ready to Make an Impact?
                  </h3>
                  <p className="text-sm text-white/60">
                    Join thousands of educators, mentors, and partners inspiring women in tech.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link
                    href="/sign-up-for-information"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 via-purple-500 to-rose-500 hover:opacity-90 text-white font-medium whitespace-nowrap px-5 py-2.5 rounded-lg text-sm transition-all cursor-pointer"
                  >
                    Get Started
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
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
