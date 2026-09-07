import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, CheckCircle2, Shield } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-[#fafaf8] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c86d51] mb-2 block font-sans-refined">
            Technical Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-stone-900 tracking-tight">
            Professional Certification
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans-refined mt-2">
            Certified background in software and web development — combining technical architecture and workflow automation with social media strategy.
          </p>
        </div>

        <div className="max-w-2xl">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-stone-300 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#fbf0ed] border border-[#f4dbd3] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-[#c86d51]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900 font-sans-refined">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-sans-refined mt-0.5">
                    Certified Software & Web Developer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full font-medium border border-emerald-200 self-start sm:self-auto shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{cert.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
