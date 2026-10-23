import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { StickerHeader, GraphPaperBackground } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Page Not Found | SheTech',
  robots: { index: false },
};

const QUICK_LINKS = [
  { label: 'Explorer Day', href: '/students/explorer-day', icon: '🚀' },
  { label: 'Register Your Students', href: '/teachers/register-your-students', icon: '🏫' },
  { label: 'Sponsor SheTech', href: '/companies/sponsor', icon: '🤝' },
  { label: 'FAQ', href: '/faq', icon: '💬' },
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#EBEBF5] pt-32 pb-20 sm:pt-40 sm:pb-28">
          <GraphPaperBackground />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8">
                <StickerHeader label="Error" title="Page Not Found" variant="magenta" angle={-2} />
              </div>

              {/* 404 in brand colors */}
              <div className="font-black leading-none tracking-tight text-[7rem] sm:text-[11rem] mb-6 select-none" aria-hidden="true">
                <span className="text-[#00A6CE]">4</span>
                <span className="text-[#BD1C81]">0</span>
                <span className="text-[#00008B]">4</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-[#00008B] uppercase mb-4">
                This page didn&apos;t compile
              </h1>
              <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl mx-auto mb-10">
                The page you&apos;re looking for may have moved or no longer exists. Let&apos;s debug your way back to discovering your future in tech.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-[#BD1C81] text-white font-bold text-lg text-center hover:bg-[#a0156b] transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
                >
                  Back to Home
                </Link>
                <Link
                  href="/students/explorer-day"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-[#00A6CE] text-white font-bold text-lg text-center hover:bg-[#008db0] transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
                >
                  Explorer Day
                </Link>
              </div>

              {/* Quick Links */}
              <div className="text-xs font-bold text-[#BD1C81] uppercase tracking-wider mb-4">
                Popular Pages
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                {QUICK_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-xl hover:border-[#BD1C81]/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="w-12 h-12 rounded-xl bg-[#BD1C81]/10 flex items-center justify-center text-2xl flex-shrink-0">
                      {link.icon}
                    </span>
                    <span className="font-bold text-slate-900 group-hover:text-[#BD1C81] transition-colors">
                      {link.label}
                    </span>
                    <svg className="w-5 h-5 ml-auto text-slate-300 group-hover:text-[#BD1C81] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
