import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { processData } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#fafaf8] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c86d51] mb-2 block font-sans-refined">
            Working Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-medium text-stone-900 tracking-tight leading-tight">
            How we bring strategy to life.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans-refined mt-3">
            A structured, 4-phase methodology that ensures predictability, zero guesswork, and consistent quality from day one.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processData.map((step, idx) => (
            <div
              key={step.step}
              id={`process-step-${step.step}`}
              className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:border-stone-300 transition-colors relative"
            >
              <div>
                {/* Step Marker */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-display font-bold text-stone-900">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-mono text-[#c86d51] bg-[#fbf0ed] px-2 py-0.5 rounded font-medium">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-stone-900 font-sans-refined mb-2.5">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans-refined mb-6">
                  {step.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-stone-100 space-y-2">
                {step.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-[11px] text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c86d51] mt-1 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
