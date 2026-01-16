import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Contact Us | SheTech',
  description: 'We’d love to hear from you! Connect with the SheTech team.',
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-20 bg-[#FDF2F8]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FDF2F8] to-white"></div>
          </div>

          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="heroDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#BD1C81" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#heroDots)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection direction="up" delay={0}>
                <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight mb-6">
                  Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BD1C81] to-pink-500">Us</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  We’d love to hear from you! Whether you’re a student, educator, company, or potential partner, our team can help you connect, collaborate, and create impact through SheTech.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-12 items-start">

                {/* Left Column: Contact Details */}
                <div className="lg:col-span-5 space-y-8">
                  <AnimatedSection direction="right" delay={100}>
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-pink-100 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#BD1C81] to-pink-500"></div>

                      <div className="space-y-8">
                        {/* General */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">General Inquiries</h3>
                          <a href="mailto:shetech@womentechcouncil.com" className="text-lg text-[#BD1C81] font-medium hover:underline">
                            shetech@womentechcouncil.com
                          </a>
                        </div>

                        {/* Media */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">Media & Press</h3>
                          <a href="mailto:media@womentechcouncil.com" className="text-lg text-[#BD1C81] font-medium hover:underline">
                            media@womentechcouncil.com
                          </a>
                        </div>

                        {/* Partnerships */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">Sponsorships & Partnerships</h3>
                          <a href="mailto:partners@womentechcouncil.com" className="text-lg text-[#BD1C81] font-medium hover:underline">
                            partners@womentechcouncil.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection direction="right" delay={200}>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">📍</span> Visit Us
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Women Tech Council<br />
                        2801 N Thanksgiving Way<br />
                        Lehi, UT 84043
                      </p>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection direction="right" delay={300}>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">📱</span> Connect With Us
                      </h3>
                      <div className="flex gap-4">
                        {[
                          { icon: <FaInstagram className="w-6 h-6" />, href: '#', label: 'Instagram', color: 'text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100' },
                          { icon: <FaLinkedin className="w-6 h-6" />, href: '#', label: 'LinkedIn', color: 'text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100' },
                          { icon: <FaFacebook className="w-6 h-6" />, href: '#', label: 'Facebook', color: 'text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100' },
                          { icon: <FaTwitter className="w-6 h-6" />, href: '#', label: 'Twitter', color: 'text-sky-500 hover:text-sky-600 bg-sky-50 hover:bg-sky-100' },
                        ].map((social) => (
                          <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            className={`p-4 rounded-xl transition-all duration-200 ${social.color}`}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Right Column: Form */}
                <div className="lg:col-span-7">
                  <AnimatedSection direction="left" delay={200}>
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                      <div className="p-8 sm:p-12">
                        <div className="mb-8">
                          <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                          <p className="text-gray-500">Fill out the form below and we&apos;ll get back to you shortly.</p>
                        </div>

                        <form className="space-y-6">
                          <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">First Name</label>
                              <input
                                type="text"
                                id="firstName"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#BD1C81] focus:ring-2 focus:ring-pink-100 focus:outline-none transition-all placeholder-gray-400 bg-gray-50/50"
                                placeholder="Jane"
                              />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Last Name</label>
                              <input
                                type="text"
                                id="lastName"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#BD1C81] focus:ring-2 focus:ring-pink-100 focus:outline-none transition-all placeholder-gray-400 bg-gray-50/50"
                                placeholder="Doe"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
                            <input
                              type="email"
                              id="email"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#BD1C81] focus:ring-2 focus:ring-pink-100 focus:outline-none transition-all placeholder-gray-400 bg-gray-50/50"
                              placeholder="jane@school.edu"
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">Subject</label>
                            <select
                              id="subject"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#BD1C81] focus:ring-2 focus:ring-pink-100 focus:outline-none transition-all text-gray-700 bg-gray-50/50"
                            >
                              <option>General Inquiry</option>
                              <option>Explorer Day Registration</option>
                              <option>Student Board Application</option>
                              <option>Mentorship Program</option>
                              <option>Sponsorship</option>
                            </select>
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
                            <textarea
                              id="message"
                              rows={6}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#BD1C81] focus:ring-2 focus:ring-pink-100 focus:outline-none transition-all placeholder-gray-400 bg-gray-50/50 resize-none"
                              placeholder="How can we help you?"
                            ></textarea>
                          </div>

                          <div className="pt-4">
                            <Button
                              variant="primary"
                              size="lg"
                              className="w-full bg-[#BD1C81] hover:bg-[#a02f99] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all duration-200"
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

