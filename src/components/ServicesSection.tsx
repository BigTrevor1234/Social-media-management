import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { servicesData, personalInfo } from '../data/portfolioData';
import { ServiceFinder } from './ServiceFinder';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const handleInquireClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c86d51] mb-2 block font-sans-refined">
              Tailored Offerings
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-stone-900 tracking-tight leading-tight">
              Core Services & Engagements
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-sans-refined mt-3">
              Strategic, dependable partnerships designed to take social media operations entirely off your plate while driving intentional growth.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#c86d51] hover:text-[#9e462c] transition-colors self-start md:self-auto"
          >
            <span>Need a custom package? Let's discuss</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Interactive Scope Advisor */}
        <ServiceFinder onSelectService={onSelectService} />

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-[#fafaf8] border border-stone-200 rounded-3xl p-7 sm:p-9 flex flex-col justify-between hover:border-stone-300 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-[#c86d51] bg-[#fbf0ed] px-2.5 py-1 rounded-md">
                    SERVICE {service.number}
                  </span>
                  <span className="text-xs text-stone-600 font-sans-refined font-medium">
                    {service.number === '01' ? 'Retainer' : service.number === '02' ? 'Strategy Sprint' : service.number === '03' ? 'Systems Setup' : 'Advisory Audit'}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-sans-refined mb-3">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans-refined mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-5 border-t border-stone-200/80 mb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-600 block mb-2 font-sans-refined">
                    Key Deliverables:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                      <div className="w-4 h-4 rounded-full bg-[#f6ded7] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#9e462c]" />
                      </div>
                      <span className="leading-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For footer */}
              <div className="pt-5 border-t border-stone-200/80 mt-auto">
                <div className="text-[11px] text-stone-600 mb-4">
                  <strong className="text-stone-700">Best for:</strong> {service.bestFor}
                </div>
                <a
                  href="#contact"
                  onClick={() => handleInquireClick(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-stone-900 text-white hover:bg-[#c86d51] transition-colors shadow-2xs cursor-pointer"
                >
                  <span>Inquire About This Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
