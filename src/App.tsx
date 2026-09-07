import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { OutcomesSection } from './components/OutcomesSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { WorkSamplesGallery } from './components/WorkSamplesGallery';
import { FrameworksSection } from './components/FrameworksSection';
import { ToolsSection } from './components/ToolsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'outcomes',
      'services',
      'process',
      'work',
      'frameworks',
      'tools',
      'certifications',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf8] text-stone-900 font-sans-refined antialiased selection:bg-[#fbd5c8] selection:text-[#943d23]">
      {/* Sticky Fixed Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Sections */}
      <main id="main-content">
        <Hero />
        <AboutSection />
        <OutcomesSection />
        <ServicesSection />
        <ProcessSection />
        <WorkSamplesGallery />
        <FrameworksSection />
        <ToolsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
