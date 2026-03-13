'use client';

import { Header, Footer } from '@/components/layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const sections = [
  {
    title: 'What We Collect',
    body:
      'We collect information you provide directly, including contact details, program interests, and application responses. We also gather required identifiers such as name, school, and communications preferences when you sign up for programs.',
  },
  {
    title: 'How We Use Data',
    body:
      'We use your information to tailor program updates, send reminders, respond to inquiries, and coordinate events. Data may also be shared with trusted partners who help deliver scholarships, workshops, and mentorship experiences.',
  },
  {
    title: 'Cookies & Tracking',
    body:
      'We use cookies and similar technologies to keep the site secure, remember session preferences, and analyze engagement. You can manage cookies through your browser settings at any time.',
  },
  {
    title: 'Your Rights',
    body:
      'You can request access to the data we store, ask for corrections, or request deletion by contacting us at shetech@womentechcouncil.com. We honor opt-out requests for marketing communications.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header forceSolid />

      <main className="flex-1">
        <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-[#F0F5FF] to-[#E9E1FF]">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection direction="up" delay={0}>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm uppercase tracking-[0.4em] text-[#6F64FF] mb-4">Trust & Safety</p>
                <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6">Privacy Policy</h1>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We respect your privacy and are committed to being transparent about how we use your information.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {sections.map((section, index) => (
                <AnimatedSection key={section.title} direction="up" delay={index * 100}>
                  <div className="bg-[#F8FAFF] p-8 rounded-3xl shadow-xl border border-white/70">
                    <h2 className="text-2xl font-bold text-[#1C1C1C] mb-3">{section.title}</h2>
                    <p className="text-slate-600 leading-relaxed">{section.body}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[#FDF2F8]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-pink-100 shadow-lg p-8 text-center">
                <p className="text-lg text-gray-600 mb-4">
                  Need more details? Email us at{' '}
                  <a href="mailto:shetech@womentechcouncil.com" className="text-[#BD1C81] font-bold hover:underline">
                    shetech@womentechcouncil.com
                  </a>{' '}
                  and we will respond as soon as possible.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
