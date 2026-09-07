import React, { useState } from 'react';
import { Maximize2, Sparkles, Filter, ArrowUpRight } from 'lucide-react';
import { workSamplesData } from '../data/portfolioData';
import { WorkSample } from '../types';
import { WorkSampleVisual } from './WorkSampleVisual';
import { WorkSampleModal } from './WorkSampleModal';

export const WorkSamplesGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSample, setSelectedSample] = useState<WorkSample | null>(null);

  const categories = [
    { id: 'all', label: 'All Artifacts', count: workSamplesData.length },
    {
      id: 'analytics',
      label: 'Performance Dashboards',
      count: workSamplesData.filter((s) => s.category === 'analytics').length,
    },
    {
      id: 'calendar',
      label: 'Content Calendars',
      count: workSamplesData.filter((s) => s.category === 'calendar').length,
    },
    {
      id: 'strategy',
      label: 'Strategy & Frameworks',
      count: workSamplesData.filter((s) => s.category === 'strategy').length,
    },
  ];

  const filteredSamples =
    activeCategory === 'all'
      ? workSamplesData
      : workSamplesData.filter((s) => s.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbf0ed] text-[#c86d51] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GlowSkincare Case Study & Live Artifacts</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-stone-900 tracking-tight leading-tight">
              Real Work. Real Data. Real Proof.
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-sans-refined mt-3">
              Direct proof from managing GlowSkincare across LinkedIn, Instagram, TikTok, X, and Notion — click any card to inspect full analytics, deliverables, and strategic frameworks up close.
            </p>
          </div>

          <div className="text-xs text-stone-600 font-mono bg-stone-100 px-3 py-1.5 rounded-lg self-start md:self-auto">
            100% Authentic Verified Metrics
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stone-100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-xs font-semibold'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200/70 hover:text-stone-900'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeCategory === cat.id
                    ? 'bg-stone-700 text-white'
                    : 'bg-stone-200 text-stone-600'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Work Samples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSamples.map((sample) => (
            <div
              key={sample.id}
              id={`work-sample-${sample.id}`}
              onClick={() => setSelectedSample(sample)}
              className="group bg-[#fafaf8] border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-400/80 hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
            >
              {/* Card Visual Header */}
              <div className="p-3 bg-stone-100/70 border-b border-stone-200/70 relative">
                <div className="relative overflow-hidden rounded-xl">
                  <WorkSampleVisual sample={sample} />
                  {/* Hover inspection overlay button */}
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-2xs">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-stone-900 text-xs font-semibold shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-[#c86d51]" />
                      <span>Inspect Details</span>
                    </span>
                  </div>
                </div>

                {/* Platform Tag */}
                <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white/95 text-stone-900 shadow-xs border border-stone-200/80 backdrop-blur-xs">
                    {sample.platform}
                  </span>
                </div>
              </div>

              {/* Card Content Footer */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-stone-900 font-sans-refined group-hover:text-[#c86d51] transition-colors line-clamp-1">
                      {sample.title}
                    </h3>
                    {sample.highlightMetric && (
                      <span className="text-xs font-bold text-[#c86d51] font-mono bg-[#fbf0ed] px-2 py-0.5 rounded shrink-0">
                        {sample.highlightMetric}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans-refined line-clamp-2 mb-4">
                    {sample.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200/70 flex items-center justify-between text-xs text-stone-600 group-hover:text-stone-900">
                  <span className="text-[11px] font-medium">Click to view full case study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-600 group-hover:text-[#c86d51] group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Inspection Modal */}
      <WorkSampleModal
        sample={selectedSample}
        onClose={() => setSelectedSample(null)}
      />
    </section>
  );
};
