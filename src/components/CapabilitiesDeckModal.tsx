import React, { useEffect } from 'react';
import { X, Printer, Download, Sparkles, CheckCircle2, ArrowUpRight, Award, Mail, Phone, Calendar } from 'lucide-react';
import { personalInfo, servicesData, frameworksData, toolsData, certificationsData } from '../data/portfolioData';

interface CapabilitiesDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CapabilitiesDeckModal: React.FC<CapabilitiesDeckModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="capabilities-deck-modal-backdrop"
      className="fixed inset-0 z-50 bg-stone-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:bg-white print:static"
      onClick={onClose}
    >
      <div
        id="capabilities-deck-container"
        className="bg-[#fafaf8] border border-stone-200 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl my-auto relative max-h-[94vh] flex flex-col print:max-h-none print:border-none print:shadow-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-stone-200 bg-white sticky top-0 z-20 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c86d51]" />
            <span className="text-xs font-semibold text-stone-900 font-sans-refined">
              Executive 1-Page Capabilities Deck
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Save / Print PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Executive Deck Printable Sheet */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-stone-900 font-sans-refined bg-white print:p-0">
          {/* Header Banner */}
          <div className="border-b border-stone-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#c86d51] font-bold">
                  Capabilities Overview & Executive Brief
                </span>
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 mt-1">
                  {personalInfo.name}
                </h1>
                <p className="text-xs sm:text-sm font-medium text-stone-600 mt-0.5">
                  {personalInfo.role} · {personalInfo.secondaryRole}
                </p>
                <p className="text-xs text-stone-500 italic mt-2 max-w-xl">
                  "{personalInfo.tagline}"
                </p>
              </div>

              <div className="bg-[#fafaf8] border border-stone-200/90 rounded-xl p-3 text-right text-xs shrink-0 sm:min-w-[200px]">
                <div className="text-[11px] text-stone-500">Availability</div>
                <div className="font-semibold text-emerald-700 mt-0.5">● Open for Brand Retainers</div>
                <div className="text-[10px] text-stone-500 mt-1 font-mono">{personalInfo.timezone}</div>
              </div>
            </div>
          </div>

          {/* Key Metrics Verified Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#fafaf8] p-4 rounded-2xl border border-stone-200/80">
            <div>
              <div className="text-xl font-bold font-display text-stone-900">406K+</div>
              <div className="text-[10px] text-stone-600">Organic Reach Reached</div>
            </div>
            <div>
              <div className="text-xl font-bold font-display text-[#c86d51]">8.3%</div>
              <div className="text-[10px] text-stone-600">Avg Instagram Engagement</div>
            </div>
            <div>
              <div className="text-xl font-bold font-display text-stone-900">286K+</div>
              <div className="text-[10px] text-stone-600">Short-Form Video Views</div>
            </div>
            <div>
              <div className="text-xl font-bold font-display text-stone-900">100%</div>
              <div className="text-[10px] text-stone-600">Automated Notion Pipelines</div>
            </div>
          </div>

          {/* Services Matrix */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 border-b border-stone-100 pb-1">
              Core Service Offerings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {servicesData.map((s) => (
                <div key={s.id} className="p-3 rounded-xl border border-stone-200 bg-[#fafaf8]/60">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-stone-900 font-sans-refined">{s.title}</span>
                    <span className="text-[10px] font-mono text-[#c86d51]">{s.number}</span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed mb-2">{s.description}</p>
                  <div className="text-[10px] text-stone-500 font-medium">Best for: {s.bestFor}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Frameworks & Methodology */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 border-b border-stone-100 pb-1">
              Proprietary Frameworks Applied
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {frameworksData.map((f) => (
                <div key={f.id} className="p-2.5 rounded-lg border border-stone-150">
                  <span className="font-semibold text-stone-900 block">{f.title}</span>
                  <span className="text-[10px] text-stone-500 block mb-1">{f.subtitle}</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {f.pillars.map((p, pIdx) => (
                      <span key={pIdx} className="text-[9px] bg-stone-100 text-stone-700 px-1.5 py-0.5 rounded">
                        {p.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stack & Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-200">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                Ecosystem & Software Stack
              </h2>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                <strong>Platforms & Publishing:</strong> Instagram, TikTok, LinkedIn, X, Facebook, Meta Business Suite, Buffer<br />
                <strong>Production:</strong> CapCut, Canva, InShot<br />
                <strong>Automation & Workflows:</strong> Notion, Airtable, Trello, Zapier, Google Workspace<br />
                <strong>Analytics & Insights:</strong> Google Analytics, Google Trends
              </p>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                Technical Credentials
              </h2>
              <div className="flex items-center gap-2 text-[11px] text-stone-700 bg-stone-50 p-2.5 rounded-lg border border-stone-200/80">
                <Award className="w-4 h-4 text-[#c86d51] shrink-0" />
                <span>Certified Software & Web Developer (Technical Infrastructure & Systems)</span>
              </div>
            </div>
          </div>

          {/* Direct Contact Footer */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-4 text-stone-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#c86d51]" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                {personalInfo.phone}
              </span>
            </div>
            <a
              href={personalInfo.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-stone-900 hover:text-[#c86d51]"
            >
              <span>Schedule 30-Min Discovery</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
