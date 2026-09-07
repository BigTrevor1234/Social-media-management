import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';
import { personalInfo, heroData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Subtle organic background accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#f8ded6]/40 via-[#faebe6]/30 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Signature restrained hero load-in animation */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200/80 mb-6 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[12px] font-medium text-stone-700 font-sans-refined">
              {personalInfo.availabilityStatus}
            </span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-headline"
            className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-stone-900 tracking-tight leading-[1.12] mb-6 text-balance"
          >
            Building social presence that gets brands{' '}
            <span className="italic font-normal text-[#c86d51]">noticed</span> and{' '}
            <span className="italic font-normal text-stone-800">remembered.</span>
          </h1>

          {/* Supporting Line */}
          <p
            id="hero-supporting-line"
            className="text-base sm:text-lg md:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto mb-10 font-sans-refined text-balance"
          >
            {heroData.supportingText}
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16">
            <a
              href="#contact"
              id="hero-primary-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-stone-900 text-white hover:bg-[#c86d51] transition-all duration-200 shadow-sm group"
            >
              <span>{personalInfo.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#work"
              id="hero-secondary-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-white text-stone-700 border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors duration-200 shadow-2xs"
            >
              <span>Explore Case Studies & Data</span>
              <ChevronDown className="w-4 h-4 text-stone-400" />
            </a>
          </div>

          {/* Quick Capability Highlights (Exact items from prompt) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            {heroData.highlights.map((item) => (
              <div
                key={item.number}
                id={`hero-capability-${item.number}`}
                className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-2xs hover:border-stone-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-medium text-[#c86d51] bg-[#fbf0ed] px-2 py-0.5 rounded">
                    {item.number}
                  </span>
                  <span className="text-[11px] font-medium text-stone-600">Core Capability</span>
                </div>
                <h3 className="text-base font-semibold text-stone-900 font-sans-refined mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans-refined">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Verified Case Metrics Strip from GlowSkincare */}
          <div className="mt-14 pt-8 border-t border-stone-200/70 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-2xl font-bold font-display text-stone-900">406K+</div>
              <div className="text-xs text-stone-600 font-sans-refined mt-0.5">Impressions Reached</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-[#c86d51]">8.3%</div>
              <div className="text-xs text-stone-600 font-sans-refined mt-0.5">Avg Engagement Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-stone-900">286K+</div>
              <div className="text-xs text-stone-600 font-sans-refined mt-0.5">Short-Form Views</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-stone-900">100%</div>
              <div className="text-xs text-stone-600 font-sans-refined mt-0.5">Systemized Workflows</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
