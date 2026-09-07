import React from 'react';
import { toolsData } from '../data/portfolioData';
import { Wrench, CheckCircle2, Cpu } from 'lucide-react';

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c86d51] mb-2 block font-sans-refined">
            Technical Stack & Ecosystem
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-medium text-stone-900 tracking-tight leading-tight">
            Tools & Platforms
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans-refined mt-3">
            The integrated software stack powering high-volume content creation, automated workflows, and reliable community management.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {toolsData.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#fafaf8] border border-stone-200 rounded-3xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="mb-5 pb-3 border-b border-stone-200/80">
                  <h3 className="text-base font-bold text-stone-900 font-sans-refined">
                    {category.categoryName}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 font-sans-refined">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {category.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="bg-white border border-stone-200/80 rounded-xl p-3.5 flex items-center justify-between hover:border-stone-300 transition-colors shadow-2xs"
                    >
                      <div>
                        <span className="text-sm font-bold text-stone-900 block font-sans-refined">
                          {tool.name}
                        </span>
                        <span className="text-[11px] text-stone-600 font-sans-refined">
                          {tool.role}
                        </span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#c86d51]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 text-[11px] text-stone-600 font-mono">
                Proficient & Production-Ready
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
