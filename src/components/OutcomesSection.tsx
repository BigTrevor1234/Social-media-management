import React from 'react';
import { Eye, MessageCircleHeart, TrendingUp, CalendarCheck, ShieldCheck, Clock } from 'lucide-react';
import { outcomesData } from '../data/portfolioData';

const getIcon = (name: string) => {
  switch (name) {
    case 'Eye':
      return <Eye className="w-5 h-5 text-[#c86d51]" />;
    case 'MessageCircleHeart':
      return <MessageCircleHeart className="w-5 h-5 text-[#c86d51]" />;
    case 'TrendingUp':
      return <TrendingUp className="w-5 h-5 text-[#c86d51]" />;
    case 'CalendarCheck':
      return <CalendarCheck className="w-5 h-5 text-[#c86d51]" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-5 h-5 text-[#c86d51]" />;
    case 'Clock':
      return <Clock className="w-5 h-5 text-[#c86d51]" />;
    default:
      return <TrendingUp className="w-5 h-5 text-[#c86d51]" />;
  }
};

export const OutcomesSection: React.FC = () => {
  return (
    <section id="outcomes" className="py-24 bg-[#fafaf8] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c86d51] mb-2 block font-sans-refined">
            Measurable Impact
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-medium text-stone-900 tracking-tight leading-tight">
            What I help brands achieve.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans-refined mt-3">
            Tangible, sustainable business outcomes built on audience psychology, structured consistency, and strategic positioning.
          </p>
        </div>

        {/* 6 Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomesData.map((outcome) => (
            <div
              key={outcome.id}
              id={outcome.id}
              className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-7 shadow-2xs hover:border-stone-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#fbf3f0] flex items-center justify-center border border-[#f3ddd6] group-hover:scale-105 transition-transform duration-200">
                    {getIcon(outcome.iconName)}
                  </div>
                  <span className="text-xs font-mono font-medium text-stone-600">
                    {outcome.number}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-stone-900 font-sans-refined mb-2.5">
                  {outcome.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans-refined">
                  {outcome.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-medium text-[#c86d51]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c86d51]" />
                <span>Client Guarantee</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
