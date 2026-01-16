'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { AnimatedSection, StickerHeader, GraphPaperBackground, Button, Input } from '@/components/ui';

export default function SignUpForInformationPage() {
  const [formData, setFormData] = useState({
    name: '',
    schoolName: '',
    email: '',
    studentCount: '',
    bringStudents: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for signing up!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex flex-col">
        <section className="relative flex-1 bg-[#EBEBF5] overflow-hidden flex flex-col lg:flex-row">
          <GraphPaperBackground />

          {/* Left Content Column */}
          <div className="relative z-10 w-full lg:w-1/2 px-8 pb-8 pt-32 sm:px-12 sm:pb-12 sm:pt-40 lg:px-20 lg:pb-20 lg:pt-48 flex flex-col justify-center">
            <AnimatedSection direction="right" delay={0}>
              <div className="mb-6 inline-block">
                <StickerHeader label="Stay Connected" title="Sign Up" angle={-2} variant="blue" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-[#00008B] mb-6 uppercase leading-none">
                Stay Connected. <br />
                <span className="text-[#0064BA]">Be the First to Know.</span>
              </h1>

              <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed max-w-xl">
                Get early access to registration updates, classroom resources, and SheTech activities happening all year long.
                We’ll share everything you need to bring SheTech to your school — from mentor visits to student opportunities.
              </p>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg mb-8">
                <h3 className="text-xl font-black text-[#0064BA] uppercase mb-4">Sign up to receive:</h3>
                <ul className="space-y-3">
                  {[
                    "Registration launch alerts",
                    "Classroom STEM resources",
                    "Free lesson tie-ins and challenge guides",
                    "Updates on SheTech Explorer Day 2026"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-bold">
                      <div className="w-6 h-6 rounded-full bg-[#0064BA] flex items-center justify-center mr-3 text-white shadow-md">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Form Column */}
          <div className="relative z-10 w-full lg:w-1/2 bg-white lg:min-h-screen flex flex-col justify-center px-8 py-12 sm:px-12 sm:py-16 lg:px-20 lg:pb-20 lg:pt-48 shadow-2xl lg:border-l border-slate-200">
            <AnimatedSection direction="left" delay={200}>
              <div className="max-w-lg mx-auto w-full">
                <h2 className="text-2xl font-black text-[#00008B] uppercase mb-8 pb-4 border-b-2 border-slate-100">
                  Educator Information
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 uppercase mb-2">Name</label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border-slate-200 focus:border-[#0064BA] focus:ring-[#0064BA] py-3 rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="schoolName" className="block text-sm font-bold text-slate-700 uppercase mb-2">School Name</label>
                    <Input
                      id="schoolName"
                      type="text"
                      placeholder="Hill Valley High School"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      className="w-full bg-slate-50 border-slate-200 focus:border-[#0064BA] focus:ring-[#0064BA] py-3 rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 uppercase mb-2">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@school.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border-slate-200 focus:border-[#0064BA] focus:ring-[#0064BA] py-3 rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="studentCount" className="block text-sm font-bold text-slate-700 uppercase mb-2">Number of Students <span className="text-slate-400 font-normal lowercase">(optional)</span></label>
                    <Input
                      id="studentCount"
                      type="text"
                      placeholder="e.g. 150"
                      value={formData.studentCount}
                      onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                      className="w-full bg-slate-50 border-slate-200 focus:border-[#0064BA] focus:ring-[#0064BA] py-3 rounded-lg"
                    />
                  </div>

                  <div className="flex items-start pt-2">
                    <div className="flex items-center h-5">
                      <input
                        id="bringStudents"
                        type="checkbox"
                        checked={formData.bringStudents}
                        onChange={(e) => setFormData({ ...formData, bringStudents: e.target.checked })}
                        className="w-5 h-5 text-[#0064BA] border-gray-300 rounded focus:ring-[#0064BA] cursor-pointer"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="bringStudents" className="font-medium text-slate-700 cursor-pointer">
                        I want to bring students to SheTech Explorer Day.
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#0064BA] hover:bg-[#005094] text-white font-bold py-4 rounded-xl shadow-lg border-0 uppercase tracking-wide mt-4"
                  >
                    Sign Up for Educator Updates
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>

          {/* Decorative Image Overlay for Large Screens */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none hidden lg:block">
            <Image
              src="/shetech-gallery/KinserStudios-SheTech25-2986.jpg"
              alt="Background"
              fill
              className="object-cover grayscale"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
