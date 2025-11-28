import { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Board Members | SheTech',
  description: 'Meet our leadership team. Learn about the dedicated individuals guiding SheTech and Women Tech Council.',
};

const boardMembers = [
  { name: 'Cydni Tetro', title: 'President WTC', photo: '/board-members/cydnitetro.png' },
  { name: 'Kristin Wright', title: 'WTC', photo: '/board-members/kristenwrigt.png' },
  { name: 'Jill Wiggins', title: 'WTC', photo: '/board-members/jillwiggins.png' },
  { name: 'Dr. Tamara Goetz', title: 'STEM Action Center' },
  { name: 'Jared King', title: 'Adobe', photo: '/board-members/jaredking.png' },
  { name: 'Suzy Jessen', title: 'Ancestry', photo: '/board-members/suzyjensen.png' },
  { name: 'Amanda Fang', title: 'Desiertrack' },
  { name: 'John Farnsworth', title: 'Dell EMC' },
  { name: 'Steve Daly', title: 'Ivanti' },
  { name: 'Kimberly Wittman', title: 'Vivint Smart Home' },
  { name: 'Kelly Underell', title: 'Colorado Tech Association' },
  { name: 'Alecia Hoobing', title: 'Idaho Women Innovators' },
  { name: 'Barbra Coffee', title: 'City of Tucson' },
  { name: 'Shauna Caun', title: 'Office of Energy' },
  { name: 'Ben Hart', title: 'GOED' },
];

export default function BoardMembersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />

      {/* Graph Paper Background - Outside main so it shows through */}
      <div className="fixed inset-0 bg-grid-pattern opacity-100 pointer-events-none z-0"></div>

      {/* Decorative "Tape" elements */}
      <div className="fixed top-24 right-10 w-32 h-8 bg-primary-100/50 rotate-[8deg] pointer-events-none z-0"></div>
      <div className="fixed bottom-32 left-10 w-40 h-8 bg-yellow-100/50 rotate-[-5deg] pointer-events-none z-0"></div>

      <main className="flex-1 relative z-10">
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">

            {/* Page Header */}
            <AnimatedSection direction="down" delay={0}>
              <div className="text-center mb-12 relative">
                <div className="inline-block relative">
                  <h1 className="text-5xl sm:text-6xl font-black text-slate-900 mb-4 relative z-10">
                    Meet Our <span className="text-highlight text-highlight-yellow">Board Members</span>
                  </h1>
                  {/* Hand-drawn underline */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary-300 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                  </svg>
                </div>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium mt-6">
                  The SheTech Board includes professionals in leading science, engineering and technology companies who are passionate about introducing young women to STEM careers and engaging them in the technology needs of the future.
                </p>
              </div>
            </AnimatedSection>

            {/* Board Members Grid */}
            <AnimatedSection direction="up" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">
                {boardMembers.map((member, index) => (
                  <div
                    key={member.name}
                    className="group"
                  >
                    <div
                      className={`bg-white p-6 rounded-xl shadow-sticker border-2 border-slate-200 hover:shadow-sticker-hover transition-all duration-300 relative overflow-hidden
                        ${index % 3 === 0 ? 'rotate-[-1deg] hover:rotate-0' : index % 3 === 1 ? 'rotate-[1deg] hover:rotate-0' : 'rotate-[-0.5deg] hover:rotate-0'}
                      `}
                    >
                      {/* Colored top stripe */}
                      <div className={`absolute top-0 left-0 right-0 h-2 ${index % 4 === 0 ? 'bg-gradient-to-r from-primary-400 to-primary-500' :
                        index % 4 === 1 ? 'bg-gradient-to-r from-secondary-400 to-secondary-500' :
                          index % 4 === 2 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                            'bg-gradient-to-r from-green-400 to-green-500'
                        }`}></div>

                      {/* Photo */}
                      <div className="w-full aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                        {member.photo ? (
                          <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="text-6xl font-black text-slate-300">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        )}
                      </div>

                      {/* Member info */}
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm text-slate-600 font-medium">
                          {member.title}
                        </p>
                      </div>

                      {/* Sticker number badge */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold text-slate-600">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Call to Action */}
            <AnimatedSection direction="up" delay={400}>
              <div className="mt-20 text-center">
                <div className="inline-block bg-primary-50 border-2 border-primary-200 rounded-2xl p-8 shadow-sticker transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Interested in Joining Our Mission?
                  </h2>
                  <p className="text-slate-600 mb-6 max-w-xl">
                    We're always looking for passionate leaders to help guide the next generation of women in STEM.
                  </p>
                  <a
                    href="/about/contact-us"
                    className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-sticker hover:shadow-sticker-hover transition-all duration-200"
                  >
                    Get in Touch
                  </a>
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
