import React, { useEffect } from 'react';
import { X, ExternalLink, Check, BarChart3, Layers, Wrench, ArrowUpRight } from 'lucide-react';
import { WorkSample } from '../types';
import { WorkSampleVisual } from './WorkSampleVisual';

interface WorkSampleModalProps {
  sample: WorkSample | null;
  onClose: () => void;
}

export const WorkSampleModal: React.FC<WorkSampleModalProps> = ({ sample, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (sample) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sample, onClose]);

  if (!sample) return null;

  return (
    <div
      id="work-sample-modal-backdrop"
      className="fixed inset-0 z-50 bg-stone-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="work-sample-modal-content"
        className="bg-[#fafaf8] border border-stone-200 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl my-auto relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200/80 bg-white sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#fbf0ed] text-[#c86d51] border border-[#f5dbd3]">
              {sample.platform}
            </span>
            <span className="text-xs text-stone-600 font-sans-refined hidden sm:inline">
              GlowSkincare Case Study
            </span>
          </div>

          <button
            onClick={onClose}
            id="close-modal-button"
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Visual Asset Showcase */}
          <div className="bg-stone-100 rounded-2xl p-2 sm:p-3 border border-stone-200/80">
            <WorkSampleVisual sample={sample} isModal={true} />
          </div>

          {/* Title & Caption */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h2 className="text-xl sm:text-2xl font-bold font-sans-refined text-stone-900">
                {sample.title}
              </h2>
              {sample.highlightMetric && (
                <div className="text-right">
                  <span className="text-xl font-bold font-display text-[#c86d51]">
                    {sample.highlightMetric}
                  </span>
                  <span className="text-[11px] text-stone-600 block">
                    {sample.metricLabel}
                  </span>
                </div>
              )}
            </div>
            <p className="text-sm text-stone-600 font-sans-refined">
              {sample.caption}
            </p>
          </div>

          {/* Strategic Overview */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-600 mb-2 font-sans-refined flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#c86d51]" />
              <span>Strategic Context & Execution</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans-refined">
              {sample.details.overview}
            </p>
          </div>

          {/* Verified Metrics / Performance Results */}
          {sample.details.metricsOrResults && sample.details.metricsOrResults.length > 0 && (
            <div className="bg-white border border-stone-200/90 rounded-2xl p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-600 mb-3 font-sans-refined flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-[#c86d51]" />
                <span>Verified Metric Results</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {sample.details.metricsOrResults.map((metric, idx) => (
                  <div key={idx} className="bg-stone-50 border border-stone-100 rounded-xl p-3">
                    <span className="text-[11px] text-stone-600 block mb-0.5">
                      {metric.label}
                    </span>
                    <span className="text-base font-bold text-stone-900 font-sans-refined">
                      {metric.value}
                    </span>
                    {metric.change && (
                      <span className="text-[10px] text-emerald-600 font-semibold block mt-0.5">
                        {metric.change}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Deliverables & Systems */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-600 mb-3 font-sans-refined">
              Key Methodology & Strategic Actions
            </h3>
            <div className="space-y-2.5">
              {sample.details.keyDeliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <div className="w-4 h-4 rounded-full bg-[#fbf0ed] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#c86d51]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Used Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-semibold text-stone-600 flex items-center gap-1 mr-1">
              <Wrench className="w-3.5 h-3.5 text-stone-600" />
              <span>Tools Applied:</span>
            </span>
            {sample.details.toolsUsed.map((tool, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-stone-200/80 text-stone-800"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="px-6 py-4 bg-white border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-stone-600">
            Want similar strategic results for your brand?
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 border border-stone-200 rounded-xl"
            >
              Back to Gallery
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-stone-900 text-white hover:bg-[#c86d51] transition-colors"
            >
              <span>Work With Sheriff</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
