import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import { servicesData, scopeQuestionsData } from '../data/portfolioData';

interface ServiceFinderProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServiceFinder: React.FC<ServiceFinderProps> = ({ onSelectService }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);

  const currentQuestion = scopeQuestionsData[0];
  const selectedOption = currentQuestion.options[selectedOptionIndex];
  const recommendedService = servicesData.find(
    (s) => s.id === selectedOption.recommendedServiceId
  ) || servicesData[0];

  const handleSelectPackage = () => {
    if (onSelectService) {
      onSelectService(recommendedService.title);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#fafaf8] border border-stone-200/90 rounded-3xl p-6 sm:p-8 mb-16 shadow-2xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#fbf0ed] text-[#c86d51] text-[11px] font-bold uppercase tracking-wider mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Scope Advisor</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold font-sans-refined text-stone-900">
            Not sure which engagement fits your brand best?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 font-sans-refined mt-0.5">
            Select your current scenario to get an immediate, personalized recommendation.
          </p>
        </div>
        <span className="text-[11px] font-mono text-stone-500 bg-white border border-stone-200 px-3 py-1 rounded-full self-start md:self-auto">
          Tailored Guidance
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Scenario Selectors */}
        <div className="lg:col-span-6 space-y-2.5">
          <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-2 font-sans-refined">
            {currentQuestion.question}
          </span>
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOptionIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedOptionIndex(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#c86d51] shadow-xs ring-1 ring-[#c86d51]/30'
                    : 'bg-white/60 border-stone-200 hover:border-stone-300 hover:bg-white'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected
                        ? 'border-[#c86d51] bg-[#c86d51]'
                        : 'border-stone-300 bg-white'
                    }`}
                  >
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-stone-900 block font-sans-refined">
                      {option.label}
                    </span>
                    <span className="text-xs text-stone-500 leading-relaxed font-sans-refined block mt-0.5">
                      {option.description}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Recommendation Card */}
        <div className="lg:col-span-6 bg-white border border-stone-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-stone-100">
              <span className="text-[11px] font-mono font-bold text-[#c86d51] bg-[#fbf0ed] px-2 py-0.5 rounded">
                RECOMMENDED: SERVICE {recommendedService.number}
              </span>
              <span className="text-xs text-stone-500 font-medium">
                Best Fit for You
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-stone-900 font-sans-refined mb-2">
              {recommendedService.title}
            </h4>

            <p className="text-xs text-stone-600 leading-relaxed font-sans-refined mb-4">
              {recommendedService.description}
            </p>

            <div className="space-y-2 mb-6 pt-3 border-t border-stone-100">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 block font-sans-refined">
                Included in this package:
              </span>
              {recommendedService.deliverables.slice(0, 3).map((item, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2 text-xs text-stone-700">
                  <Check className="w-3.5 h-3.5 text-[#c86d51] shrink-0 mt-0.5" />
                  <span className="leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[11px] text-stone-500">
              Targeted for: {recommendedService.bestFor}
            </span>
            <button
              onClick={handleSelectPackage}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-stone-900 hover:bg-[#c86d51] text-white transition-colors cursor-pointer"
            >
              <span>Select & Inquire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
