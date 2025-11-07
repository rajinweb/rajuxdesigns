'use client'

import HeroSection from "@/Components/portfolio/HeroSection";
import PortfolioSection from "@/Components/portfolio/PortfolioSection";
import AboutSection from "@/Components/portfolio/AboutSection";
import SkillsSection from "@/Components/portfolio/SkillsSection";
import ContactSection from "@/Components/portfolio/ContactSection";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-gray-100">
      {/* Main Content */}
       <main className="relative">
            <HeroSection />
            <PortfolioSection />
            <AboutSection />
            <SkillsSection />
            <ContactSection />
          </main>
    </div>
  );
}