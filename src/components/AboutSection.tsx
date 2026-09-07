import React from 'react';
import { CheckCircle2, ShieldCheck, HeartHandshake, Zap, Sparkles } from 'lucide-react';
import { personalInfo, aboutData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-stone-200/60 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait Card & Identity Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#fafaf8] border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-2xs">
              {/* Avatar & Profile Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-stone-900 text-stone-100 flex items-center justify-center font-display text-2xl font-bold border-2 border-stone-100 shadow-sm overflow-hidden">
                    <span className="text-[#c86d51]">SO</span>
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full" title="Active & Available" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-sans-refined">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-medium text-[#c86d51]">
                    {personalInfo.role}
                  </p>
                  <p className="text-[11px] text-stone-600 mt-0.5">
                    {personalInfo.secondaryRole}
                  </p>
                </div>
              </div>

              {/* Tagline Box */}
              <div className="bg-white border border-stone-200/80 rounded-xl p-4 mb-6 text-xs text-stone-700 leading-relaxed font-sans-refined">
                <span className="font-semibold text-stone-900 block mb-1">Positioning:</span>
                "{personalInfo.tagline}"
              </div>

              {/* Verified Expertise Tags */}
              <div className="space-y-2.5 pt-2 border-t border-stone-200/70">
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#c86d51] shrink-0" />
                  <span>Skincare, Beauty & E-Commerce Specialty</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#c86d51] shrink-0" />
                  <span>Audience Psychology & Trust Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#c86d51] shrink-0" />
                  <span>Notion Content Hubs & Zapier Automation</span>
                </div>
              </div>

              {/* Quick Contact Link */}
              <div className="mt-6 pt-4 border-t border-stone-200/70 flex items-center justify-between">
                <span className="text-xs text-stone-600">Have a brand in mind?</span>
                <a
                  href="#contact"
                  className="text-xs font-semibold text-[#c86d51] hover:underline"
                >
                  Start a conversation →
                </a>
              </div>
            </div>

            {/* Client Feeling Goal Box */}
            <div className="bg-[#fbf5f3] border border-[#f2d8d0] rounded-2xl p-5">
              <div className="flex items-center gap-2 text-[#9e462c] text-xs font-semibold uppercase tracking-wider mb-1.5">
                <HeartHandshake className="w-4 h-4" />
                <span>The Working Experience</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans-refined italic">
                "{aboutData.clientFeelingGoal}"
              </p>
            </div>
          </div>

          {/* Right Column: Story In Own Words */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#c86d51] mb-3">
                <span>{aboutData.subheading}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-stone-900 leading-tight">
                {aboutData.intro}
              </h2>
            </div>

            {/* Narrative Paragraphs (Sheriff's exact words) */}
            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-sans-refined">
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx} className="text-stone-700">
                  {p}
                </p>
              ))}
            </div>

            {/* 4 Specialty Pillars Grid */}
            <div className="pt-6 border-t border-stone-200">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-600 mb-4 font-sans-refined">
                Core Focus Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.coreCompetencies.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#fafaf8] border border-stone-200/80 hover:border-stone-300 transition-colors"
                  >
                    <div className="text-xs font-semibold text-stone-900 mb-1 font-sans-refined flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c86d51]" />
                      {item.title}
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans-refined">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
