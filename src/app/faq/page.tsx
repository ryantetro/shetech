import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FaqStructuredData } from "@/components/seo/FaqStructuredData";
import { FaqSection } from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "FAQ | SheTech Explorer",
  description:
    "Answers about SheTech Explorer, Explorer Day, and how students, teachers, and companies can participate.",
};

export default function FaqPage() {
  return (
    <>
      <FaqStructuredData />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 pt-24 sm:pt-28">
          <FaqSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
