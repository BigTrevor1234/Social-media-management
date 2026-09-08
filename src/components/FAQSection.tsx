import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import { faqData, personalInfo } from '../data/portfolioData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#fafaf8] border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c86d51] mb-2 block font-sans-refined">
            Founder Transparency
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-medium text-stone-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans-refined mt-3">
            Clear answers to common questions about onboarding, workflow, deliverables, and expectations before you book.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-stone-400/80 shadow-xs'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-stone-900 font-sans-refined">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#fbf0ed] text-[#c86d51] rotate-180' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans-refined border-t border-stone-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions note */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-xs font-bold text-stone-900 block font-sans-refined">
              Have a specific question not covered here?
            </span>
            <span className="text-xs text-stone-500 font-sans-refined">
              Ask directly via WhatsApp or email — response time is typically under 2 hours.
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-stone-900 text-white hover:bg-[#c86d51] transition-colors shrink-0"
          >
            <span>Ask a Question</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
