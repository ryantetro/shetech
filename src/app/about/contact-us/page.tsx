import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Contact Us | SheTech',
  description: 'Get in touch with us. Have questions or want to learn more about SheTech? We would love to hear from you.',
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />

      {/* Graph Paper Background - Outside main so it shows through */}
      <div className="fixed inset-0 bg-grid-pattern opacity-100 pointer-events-none z-0"></div>

      {/* Decorative "Tape" elements */}
      <div className="fixed top-24 left-10 w-32 h-8 bg-yellow-100/50 rotate-[-5deg] pointer-events-none z-0"></div>
      <div className="fixed bottom-20 right-10 w-40 h-8 bg-primary-100/50 rotate-[10deg] pointer-events-none z-0"></div>

      <main className="flex-1 relative z-10">

        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">

            {/* Page Header */}
            <AnimatedSection direction="down" delay={0}>
              <div className="text-center mb-16 relative">
                <div className="inline-block relative">
                  <h1 className="text-5xl sm:text-6xl font-black text-slate-900 mb-4 relative z-10">
                    Get in <span className="text-highlight text-highlight-primary">Touch</span>
                  </h1>
                  {/* Hand-drawn underline */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary-300 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                  </svg>
                </div>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium mt-6">
                  Have questions about Explorer Day, internships, or how to get involved? Drop us a note!
                </p>
              </div>
            </AnimatedSection>

            <div className="grid lg:grid-cols-12 gap-12 items-start">

              {/* Left Column: Contact Info (Index Cards) */}
              <div className="lg:col-span-5 space-y-8 relative">


                <AnimatedSection direction="right" delay={200}>
                  <div className="bg-white p-6 rounded-xl shadow-sticker transform rotate-[-1deg] border border-slate-200 relative overflow-hidden group hover:rotate-0 transition-transform duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-500"></div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="text-2xl">📧</span> Email Us
                    </h3>
                    <p className="text-slate-600 mb-4">For general inquiries and support:</p>
                    <a href="mailto:contact@shetechexplorer.com" className="text-lg font-bold text-primary-600 hover:text-primary-700 hover:underline decoration-2 underline-offset-2">
                      contact@shetechexplorer.com
                    </a>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={300}>
                  <div className="bg-white p-6 rounded-xl shadow-sticker transform rotate-[2deg] border border-slate-200 relative overflow-hidden group hover:rotate-0 transition-transform duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-400 to-secondary-500"></div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="text-2xl">📍</span> Visit Us
                    </h3>
                    <p className="text-slate-600">
                      Women Tech Council<br />
                      2801 N Thanksgiving Way<br />
                      Lehi, UT 84043
                    </p>
                  </div>
                </AnimatedSection>



                <AnimatedSection direction="right" delay={400}>
                  <div className="bg-white p-6 rounded-xl shadow-sticker transform rotate-[-1deg] border border-slate-200 relative overflow-hidden group hover:rotate-0 transition-transform duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">📱</span> Socials
                    </h3>
                    <div className="flex gap-4">
                      {[
                        { icon: <FaInstagram className="w-6 h-6" />, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
                        { icon: <FaLinkedin className="w-6 h-6" />, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
                        { icon: <FaFacebook className="w-6 h-6" />, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
                        { icon: <FaTwitter className="w-6 h-6" />, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
                      ].map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className={`p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-white hover:shadow-md transition-all duration-200 ${social.color}`}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Column: Contact Form (Worksheet) */}
              <div className="lg:col-span-7">
                <AnimatedSection direction="left" delay={200}>
                  <div className="bg-white rounded-lg shadow-xl border-2 border-slate-300 relative mt-8">
                    {/* Modern Metallic Clipboard Clip */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-40 h-12 bg-gradient-to-b from-slate-200 to-slate-300 rounded-t-lg shadow-md flex items-center justify-center z-20 border-x border-t border-white/50">
                      <div className="w-32 h-8 bg-gradient-to-b from-slate-300 to-slate-400 rounded-md shadow-inner border border-slate-400/50 flex items-center justify-center">
                        <div className="w-24 h-2 bg-slate-500/20 rounded-full"></div>
                      </div>
                    </div>

                    <div className="p-8 pt-12 sm:p-12 sm:pt-16">
                      <div className="mb-8 border-b-2 border-slate-100 pb-4">
                        <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wider">Student / Teacher Inquiry Form</h2>
                        <p className="text-slate-500 text-sm mt-1">Please fill out all fields clearly.</p>
                      </div>

                      <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="firstName" className="block text-sm font-bold text-slate-700 uppercase tracking-wide">First Name</label>
                            <input
                              type="text"
                              id="firstName"
                              className="w-full px-0 py-2 border-b-2 border-slate-300 focus:border-primary-500 focus:outline-none bg-transparent transition-colors placeholder-slate-400 font-medium text-lg"
                              placeholder="Jane"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="lastName" className="block text-sm font-bold text-slate-700 uppercase tracking-wide">Last Name</label>
                            <input
                              type="text"
                              id="lastName"
                              className="w-full px-0 py-2 border-b-2 border-slate-300 focus:border-primary-500 focus:outline-none bg-transparent transition-colors placeholder-slate-400 font-medium text-lg"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-0 py-2 border-b-2 border-slate-300 focus:border-primary-500 focus:outline-none bg-transparent transition-colors placeholder-slate-400 font-medium text-lg"
                            placeholder="jane@school.edu"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="subject" className="block text-sm font-bold text-slate-700 uppercase tracking-wide">Subject</label>
                          <select
                            id="subject"
                            className="w-full px-0 py-2 border-b-2 border-slate-300 focus:border-primary-500 focus:outline-none bg-transparent transition-colors font-medium text-lg text-slate-700"
                          >
                            <option>General Inquiry</option>
                            <option>Explorer Day Registration</option>
                            <option>Student Board Application</option>
                            <option>Mentorship Program</option>
                            <option>Sponsorship</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="block text-sm font-bold text-slate-700 uppercase tracking-wide">Message</label>
                          <div className="relative">
                            {/* Lined paper background for textarea */}
                            <div className="absolute inset-0 pointer-events-none" style={{
                              backgroundImage: 'linear-gradient(transparent 31px, #e2e8f0 32px)',
                              backgroundSize: '100% 32px',
                              marginTop: '8px'
                            }}></div>
                            <textarea
                              id="message"
                              rows={6}
                              className="w-full px-0 py-2 border-b-2 border-slate-300 focus:border-primary-500 focus:outline-none bg-transparent transition-colors placeholder-slate-400 font-medium text-lg leading-8 resize-none"
                              placeholder="Write your message here..."
                            ></textarea>
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button
                            variant="primary"
                            size="lg"
                            className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl shadow-sticker hover:shadow-sticker-hover transform transition-all duration-200"
                          >
                            Send Message
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

