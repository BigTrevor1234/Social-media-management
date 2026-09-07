import React from 'react';
import { frameworksData } from '../data/portfolioData';
import { Sparkles, Layers, ArrowRight } from 'lucide-react';

export const FrameworksSection: React.FC = () => {
  return (
    <section id="frameworks" className="py-24 bg-[#fafaf8] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c86d51] mb-2 block font-sans-refined">
            Proprietary Methodologies
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-medium text-stone-900 tracking-tight leading-tight">
            Strategic Frameworks
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans-refined mt-3">
            Repeatable, data-backed models that replace sporadic posting with deliberate, scalable brand growth.
          </p>
        </div>

        {/* Frameworks 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {frameworksData.map((framework) => (
            <div
              key={framework.id}
              id={framework.id}
              className="bg-white border border-stone-200 rounded-3xl p-7 sm:p-9 shadow-2xs hover:border-stone-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#c86d51] bg-[#fbf0ed] px-2.5 py-1 rounded-md">
                    FRAMEWORK {framework.number}
                  </span>
                  <span className="text-xs text-stone-600 font-sans-refined font-medium">
                    {framework.subtitle}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 font-sans-refined mb-3">
                  {framework.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans-refined mb-6">
                  {framework.description}
                </p>

                {/* Pillars Breakdown */}
                <div className="space-y-3 pt-5 border-t border-stone-100">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-600 block mb-2 font-sans-refined">
                    Core Structure:
                  </span>
                  {framework.pillars.map((pillar, pIdx) => (
                    <div
                      key={pIdx}
                      className="bg-stone-50 border border-stone-100 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <span className="text-xs font-bold text-stone-900 block font-sans-refined">
                          {pillar.name}
                        </span>
                        <span className="text-[11px] text-stone-600 font-sans-refined">
                          {pillar.focus}
                        </span>
                      </div>
                      {pillar.tag && (
                        <span className="self-start sm:self-auto text-[10px] font-mono text-[#c86d51] bg-[#fdf2ef] px-2 py-0.5 rounded shrink-0">
                          {pillar.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                <span>Applied across all client engagements</span>
                <span className="font-semibold text-stone-900 font-sans-refined">Systemized</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
