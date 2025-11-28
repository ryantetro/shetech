'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { ExplorerDaySection } from '@/components/home/ExplorerDaySection';
import { ProgramsSection } from '@/components/home/ProgramsSection';
import { VideoSection } from '@/components/home/VideoSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <HeroSection />
        <ExplorerDaySection />
        <ProgramsSection />
        <VideoSection />
      </main>

      <Footer />
    </div>
  );
}
