import React from 'react';
import { toolsData } from '../data/portfolioData';
import { ToolIcon } from './ToolIcon';
import { Sparkles, Layers, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';
import toolsEcosystemImg from '../assets/images/tools_ecosystem_deck_1788881442561.jpg';

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c86d51] mb-2 block font-sans-refined">
              Technical Stack & Ecosystem
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-stone-900 tracking-tight leading-tight">
              Tools & Platforms
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-sans-refined mt-3 leading-relaxed">
              The verified software suite powering multi-platform scheduling, high-retention video production, automated Notion client hubs, and data-backed performance tracking.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fafaf8] border border-stone-200 text-xs font-mono text-stone-600 shrink-0 self-start lg:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>17 Platforms & Systems Integrated</span>
          </div>
        </div>

        {/* Visual Ecosystem Banner Card */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-stone-200 bg-[#fafaf8] shadow-xs grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#fbf0ed] text-[#c86d51] text-[11px] font-bold uppercase tracking-wider font-sans-refined">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Integrated Operating Architecture</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-sans-refined text-stone-900 leading-snug">
              From creative concept to multi-channel distribution & analytics.
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-sans-refined leading-relaxed max-w-xl">
              Every tool in this ecosystem serves a dedicated function: preventing founder overwhelm, ensuring zero missed deadlines, and transforming raw audience data into repeatable brand growth.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-stone-600 font-sans-refined">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c86d51]" />
                Automated Scheduling & Queuing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c86d51]" />
                Zero-Chaos Notion Hubs
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c86d51]" />
                Conversion Tracking
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 h-56 sm:h-64 lg:h-full relative overflow-hidden bg-stone-100">
            <img
              src={toolsEcosystemImg}
              alt="Digital tools and content marketing ecosystem preview"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/90 font-mono drop-shadow-sm">
              <span>Production Pipeline</span>
              <span>Live Architecture</span>
            </div>
          </div>
        </div>

        {/* 4 Balanced Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolsData.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#fafaf8] border border-stone-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-stone-300 transition-colors shadow-2xs"
            >
              <div>
                {/* Category Header */}
                <div className="mb-6 pb-4 border-b border-stone-200/80 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#c86d51] block mb-1">
                      Module 0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 font-sans-refined">
                      {category.categoryName}
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 font-sans-refined leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center shrink-0 text-stone-700 shadow-2xs">
                    <Layers className="w-4 h-4 text-[#c86d51]" />
                  </div>
                </div>

                {/* Tool Cards */}
                <div className="space-y-2.5">
                  {category.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="bg-white border border-stone-200/85 rounded-2xl p-3 sm:p-3.5 flex items-center justify-between gap-3 hover:border-stone-300 hover:shadow-2xs transition-all duration-150 group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Compact, Perfectly Sized Tool Icon/Pic */}
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-stone-50 border border-stone-200/90 flex items-center justify-center shrink-0 p-1.5 shadow-2xs group-hover:scale-105 transition-transform duration-150">
                          <ToolIcon name={tool.name} className="w-5 h-5" size={20} />
                        </div>

                        {/* Name and Role */}
                        <div className="min-w-0">
                          <span className="text-xs sm:text-sm font-bold text-stone-900 block font-sans-refined truncate">
                            {tool.name}
                          </span>
                          <span className="text-[11px] text-stone-500 font-sans-refined block truncate">
                            {tool.role}
                          </span>
                        </div>
                      </div>

                      {/* Purpose Tag / Status Pill */}
                      {tool.tag && (
                        <span className="text-[10px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md shrink-0 border border-stone-200/60 hidden sm:inline-block">
                          {tool.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between text-[11px] text-stone-500 font-sans-refined">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Proficient & Production-Ready</span>
                </span>
                <span className="font-mono text-stone-400">
                  {category.tools.length} Tools
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
