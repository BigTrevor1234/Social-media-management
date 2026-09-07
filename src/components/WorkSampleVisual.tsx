import React, { useState } from 'react';
import { WorkSample } from '../types';
import { TrendingUp, Users, Eye, Sparkles, MessageCircle, Heart, Share2, Bookmark, BarChart2, Calendar, FileText, CheckCircle2 } from 'lucide-react';

interface WorkSampleVisualProps {
  sample: WorkSample;
  isModal?: boolean;
}

export const WorkSampleVisual: React.FC<WorkSampleVisualProps> = ({ sample, isModal = false }) => {
  const [imageError, setImageError] = useState(false);

  // Attempt to load direct file paths first if provided in public folder
  const possiblePaths = [
    `/${sample.imageFileName}`,
    `/assets/${sample.imageFileName}`,
    `/public/${sample.imageFileName}`,
  ];

  // If user dropped the image in public, render native img tag
  if (!imageError) {
    return (
      <div className={`relative w-full ${isModal ? 'h-[440px] sm:h-[540px]' : 'h-64 sm:h-72'} bg-stone-900 rounded-xl overflow-hidden flex items-center justify-center`}>
        <img
          src={possiblePaths[0]}
          alt={sample.title}
          className="w-full h-full object-contain"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // High-fidelity graphic representation corresponding to the exact screenshot data
  switch (sample.id) {
    case 'linkedin-analytics':
      return (
        <div className={`w-full ${isModal ? 'p-6' : 'p-4'} bg-white text-stone-900 rounded-xl border border-stone-200 font-sans shadow-2xs flex flex-col justify-between h-full`}>
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#0a66c2] text-white text-[10px] font-bold">in</span>
                <span className="text-xs font-bold text-stone-900">GlowSkincare · Company Page</span>
              </div>
              <span className="text-[10px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded">Last 30 days</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-3">
              <div className="bg-stone-50 p-2 rounded">
                <span className="text-[10px] text-stone-600 block">Page views</span>
                <span className="text-sm font-bold text-stone-900">12,847</span>
                <span className="text-[9px] text-emerald-600 font-medium block">↑ 18.6%</span>
              </div>
              <div className="bg-stone-50 p-2 rounded">
                <span className="text-[10px] text-stone-600 block">Unique visitors</span>
                <span className="text-sm font-bold text-stone-900">3,214</span>
                <span className="text-[9px] text-emerald-600 font-medium block">↑ 15.3%</span>
              </div>
              <div className="bg-stone-50 p-2 rounded">
                <span className="text-[10px] text-stone-600 block">Post impressions</span>
                <span className="text-sm font-bold text-stone-900">1,892</span>
                <span className="text-[9px] text-emerald-600 font-medium block">↑ 12.7%</span>
              </div>
              <div className="bg-stone-50 p-2 rounded">
                <span className="text-[10px] text-stone-600 block">Engagement rate</span>
                <span className="text-sm font-bold text-stone-900">4.8%</span>
                <span className="text-[9px] text-emerald-600 font-medium block">↑ 0.9 pp</span>
              </div>
              <div className="bg-stone-50 p-2 rounded col-span-2 sm:col-span-1">
                <span className="text-[10px] text-stone-600 block">New followers</span>
                <span className="text-sm font-bold text-[#0a66c2]">+287</span>
                <span className="text-[9px] text-emerald-600 font-medium block">↑ 21.4%</span>
              </div>
            </div>

            {/* Simulated Trendline */}
            <div className="bg-stone-50/70 p-3 rounded border border-stone-100">
              <div className="flex items-center justify-between text-[10px] text-stone-600 mb-1">
                <span>Follower and Impression Growth</span>
                <span className="text-[#0a66c2] font-semibold">Steady Organic Growth</span>
              </div>
              <div className="h-16 w-full flex items-end gap-1 pt-2">
                {[20, 24, 28, 35, 42, 48, 52, 60, 68, 75, 82, 92, 100].map((val, i) => (
                  <div key={i} className="flex-1 bg-[#0a66c2]/20 hover:bg-[#0a66c2] rounded-t transition-colors relative group" style={{ height: `${val}%` }}>
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] bg-stone-900 text-white px-1 rounded">
                      +{val * 3}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-2 text-[10px] text-stone-600 text-right">
            Verified GlowSkincare LinkedIn Dashboard
          </div>
        </div>
      );

    case 'instagram-insights':
      return (
        <div className={`w-full ${isModal ? 'p-6' : 'p-4'} bg-white text-stone-900 rounded-xl border border-stone-200 font-sans shadow-2xs flex flex-col justify-between h-full`}>
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600" />
                <span className="text-xs font-bold text-stone-900">GlowSkincare · Professional Dashboard</span>
              </div>
              <span className="text-[10px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded">Last 30 days</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3">
              <div className="bg-stone-50 p-2.5 rounded-lg">
                <span className="text-[10px] text-stone-600 block">Accounts reached</span>
                <span className="text-base font-bold text-stone-900">94.8K</span>
                <span className="text-[10px] text-emerald-600 font-medium">↑ 18.7%</span>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-lg">
                <span className="text-[10px] text-stone-600 block">Profile visits</span>
                <span className="text-base font-bold text-stone-900">12.6K</span>
                <span className="text-[10px] text-emerald-600 font-medium">↑ 14.3%</span>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-lg">
                <span className="text-[10px] text-stone-600 block">Engagement rate</span>
                <span className="text-base font-bold text-rose-600">8.3%</span>
                <span className="text-[10px] text-emerald-600 font-medium">↑ 1.6%</span>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-lg">
                <span className="text-[10px] text-stone-600 block">Followers</span>
                <span className="text-base font-bold text-stone-900">+1,874</span>
                <span className="text-[10px] text-emerald-600 font-medium">↑ 12.9%</span>
              </div>
            </div>

            <div className="bg-stone-50 p-3 rounded-lg border border-stone-100">
              <span className="text-[10px] font-semibold text-stone-600 block mb-2">Content Interactions</span>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <span className="text-xs font-bold text-stone-800 block">6,241</span>
                  <span className="text-[9px] text-stone-600">Likes</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-800 block">892</span>
                  <span className="text-[9px] text-stone-600">Comments</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-800 block">1,156</span>
                  <span className="text-[9px] text-stone-600">Shares</span>
                </div>
                <div className="bg-rose-50 rounded py-0.5">
                  <span className="text-xs font-bold text-rose-700 block">2,340</span>
                  <span className="text-[9px] text-rose-600 font-medium">Saves</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-2 text-[10px] text-stone-600 text-right">
            Verified GlowSkincare Instagram Insights
          </div>
        </div>
      );

    case 'tiktok-analytics':
      return (
        <div className={`w-full ${isModal ? 'p-6' : 'p-4'} bg-stone-950 text-stone-100 rounded-xl border border-stone-800 font-sans shadow-2xs flex flex-col justify-between h-full`}>
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white tracking-wide">TikTok Analytics · GlowSkincare</span>
              </div>
              <span className="text-[10px] text-stone-400 bg-stone-800 px-2 py-0.5 rounded">Last 30 days</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-3">
              <div className="bg-stone-900 p-2.5 rounded-lg border border-stone-800">
                <span className="text-[10px] text-stone-400 block">Video views</span>
                <span className="text-lg font-bold text-white">286.4K</span>
              </div>
              <div className="bg-stone-900 p-2.5 rounded-lg border border-stone-800">
                <span className="text-[10px] text-stone-400 block">Likes</span>
                <span className="text-lg font-bold text-rose-400">18.7K</span>
              </div>
              <div className="bg-stone-900 p-2.5 rounded-lg border border-stone-800">
                <span className="text-[10px] text-stone-400 block">Shares</span>
                <span className="text-lg font-bold text-teal-400">4,892</span>
              </div>
              <div className="bg-stone-900 p-2.5 rounded-lg border border-stone-800">
                <span className="text-[10px] text-stone-400 block">Net followers</span>
                <span className="text-lg font-bold text-white">+3,128</span>
              </div>
              <div className="bg-stone-900 p-2.5 rounded-lg border border-stone-800 col-span-2">
                <span className="text-[10px] text-stone-400 block">Avg watch time</span>
                <span className="text-lg font-bold text-amber-400">18.4 seconds</span>
              </div>
            </div>

            <div className="bg-stone-900/70 p-2.5 rounded border border-stone-800">
              <span className="text-[10px] font-semibold text-stone-400 block mb-1">Top Performing Routine Content</span>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between items-center bg-stone-800/60 px-2 py-1 rounded">
                  <span>Glow Skincare Routine</span>
                  <span className="font-mono text-teal-400 font-bold">125.6K views</span>
                </div>
                <div className="flex justify-between items-center bg-stone-800/60 px-2 py-1 rounded">
                  <span>Glass Skin Secrets</span>
                  <span className="font-mono text-teal-400 font-bold">98.3K views</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-2 text-[10px] text-stone-500 text-right">
            Verified GlowSkincare TikTok Analytics
          </div>
        </div>
      );

    case 'notion-content-calendar':
      return (
        <div className={`w-full ${isModal ? 'p-6' : 'p-4'} bg-[#fbfbfa] text-stone-900 rounded-xl border border-stone-200 font-sans shadow-2xs flex flex-col justify-between h-full`}>
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-stone-700" />
                <span className="text-xs font-bold text-stone-900">GlowSkincare Content Calendar – May 2024</span>
              </div>
              <span className="text-[10px] font-mono text-stone-600 bg-stone-200/70 px-2 py-0.5 rounded">Notion Hub</span>
            </div>

            {/* 4 Pillars Legend */}
            <div className="flex flex-wrap gap-1.5 my-3 text-[10px]">
              <span className="px-2 py-0.5 rounded-md bg-teal-50 text-teal-700 border border-teal-200 font-medium">Educational</span>
              <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 font-medium">Product Spotlight</span>
              <span className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 font-medium">UGC & Community</span>
              <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200 font-medium">Behind the Brand</span>
            </div>

            {/* Calendar Mini-Grid */}
            <div className="grid grid-cols-4 gap-1.5 text-[10px]">
              <div className="bg-white p-2 rounded border border-stone-200">
                <span className="text-stone-600 block text-[9px]">May 1</span>
                <span className="bg-teal-100 text-teal-800 px-1 rounded text-[8px] font-medium block my-0.5">Educational</span>
                <span className="font-medium text-stone-800 line-clamp-1">Vitamin C Benefits</span>
              </div>
              <div className="bg-white p-2 rounded border border-stone-200">
                <span className="text-stone-600 block text-[9px]">May 2</span>
                <span className="bg-amber-100 text-amber-800 px-1 rounded text-[8px] font-medium block my-0.5">Product</span>
                <span className="font-medium text-stone-800 line-clamp-1">Radiance Serum</span>
              </div>
              <div className="bg-white p-2 rounded border border-stone-200">
                <span className="text-stone-600 block text-[9px]">May 3</span>
                <span className="bg-rose-100 text-rose-800 px-1 rounded text-[8px] font-medium block my-0.5">UGC</span>
                <span className="font-medium text-stone-800 line-clamp-1">Customer Glow</span>
              </div>
              <div className="bg-white p-2 rounded border border-stone-200">
                <span className="text-stone-600 block text-[9px]">May 4</span>
                <span className="bg-purple-100 text-purple-800 px-1 rounded text-[8px] font-medium block my-0.5">Brand</span>
                <span className="font-medium text-stone-800 line-clamp-1">Founder Tips</span>
              </div>
            </div>
          </div>
          <div className="pt-2 text-[10px] text-stone-600 text-right">
            Verified Notion Calendar Architecture
          </div>
        </div>
      );

    case 'content-pillars-framework':
      return (
        <div className={`w-full ${isModal ? 'p-6' : 'p-4'} bg-[#fdfcf9] text-stone-900 rounded-xl border border-stone-200 font-sans shadow-2xs flex flex-col justify-between h-full`}>
          <div>
            <div className="text-center pb-3 border-b border-stone-100">
              <span className="text-xs font-serif font-bold text-stone-900 block">GlowSkincare Content Pillars</span>
              <span className="text-[9px] uppercase tracking-wider text-stone-600">A Strategic Framework to Educate, Inspire & Build Lasting Trust</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3 text-[10px]">
              <div className="bg-[#f0fdfa] border border-[#ccfbf1] p-2 rounded-lg">
                <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-[9px] mb-1">1</div>
                <strong className="block text-teal-900">Educational</strong>
                <span className="text-teal-700 text-[9px]">Science & Tips</span>
              </div>
              <div className="bg-[#fffbeb] border border-[#fef3c7] p-2 rounded-lg">
                <div className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-[9px] mb-1">2</div>
                <strong className="block text-amber-900">Product Spotlight</strong>
                <span className="text-amber-700 text-[9px]">Formulas & Routines</span>
              </div>
              <div className="bg-[#fff1f2] border border-[#ffe4e6] p-2 rounded-lg">
                <div className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-[9px] mb-1">3</div>
                <strong className="block text-rose-900">Community & UGC</strong>
                <span className="text-rose-700 text-[9px]">Real Results & Stories</span>
              </div>
              <div className="bg-[#faf5ff] border border-[#f3e8ff] p-2 rounded-lg">
                <div className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-[9px] mb-1">4</div>
                <strong className="block text-purple-900">Brand Story</strong>
                <span className="text-purple-700 text-[9px]">Behind the Scenes</span>
              </div>
            </div>
          </div>
          <div className="text-center pt-2 text-[10px] text-stone-600 font-serif italic border-t border-stone-100">
            "Science-led. Results-driven. Human-first."
          </div>
        </div>
      );

    case 'social-media-strategy':
      return (
        <div className={`w-full ${isModal ? 'p-6' : 'p-4'} bg-[#fbfaf8] text-stone-900 rounded-xl border border-stone-200 font-sans shadow-2xs flex flex-col justify-between h-full`}>
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <span className="text-xs font-serif font-bold text-stone-900">GlowSkincare Social Media Strategy 2024</span>
              <span className="text-[9px] bg-stone-200 px-2 py-0.5 rounded text-stone-700 font-mono">Strategy Doc</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3 text-[11px]">
              <div className="bg-white p-2.5 rounded border border-stone-200">
                <strong className="block text-stone-900 font-semibold mb-1">Brand Positioning</strong>
                <p className="text-stone-600 text-[10px] leading-relaxed">
                  Clean, effective, and sustainable skincare empowering mindful beauty lovers.
                </p>
              </div>
              <div className="bg-white p-2.5 rounded border border-stone-200">
                <strong className="block text-stone-900 font-semibold mb-1">Target Audience</strong>
                <p className="text-stone-600 text-[10px] leading-relaxed">
                  Women ages 20–35 valuing transparency, ingredient science, and self-care.
                </p>
              </div>
            </div>

            <div className="bg-stone-100 p-2.5 rounded flex items-center justify-between text-[10px]">
              <div>
                <span className="text-stone-600 block">Platform Goals:</span>
                <span className="font-semibold text-stone-800">Instagram (+1.8K) · TikTok (280K+ views)</span>
              </div>
              <div className="text-right">
                <span className="text-stone-600 block">Engagement Target:</span>
                <span className="font-bold text-[#c86d51]">7–9%</span>
              </div>
            </div>
          </div>
          <div className="pt-2 text-[10px] text-stone-600 text-right">
            Verified GlowSkincare 2024 Blueprint
          </div>
        </div>
      );

    case 'facebook-insights':
      return (
        <div className={`w-full ${isModal ? 'p-6' : 'p-4'} bg-white text-stone-900 rounded-xl border border-stone-200 font-sans shadow-2xs flex flex-col justify-between h-full`}>
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <span className="text-xs font-bold text-stone-900">Facebook Page Insights · GlowSkincare</span>
              <span className="text-[10px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded">Last 30 days</span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-3 text-center">
              <div className="bg-blue-50/50 p-2 rounded border border-blue-100">
                <span className="text-[9px] text-stone-600 block">Page reach</span>
                <span className="text-base font-bold text-blue-700">214,600</span>
                <span className="text-[9px] text-emerald-600 font-medium block">↑ 28%</span>
              </div>
              <div className="bg-stone-50 p-2 rounded">
                <span className="text-[9px] text-stone-600 block">Page likes</span>
                <span className="text-base font-bold text-stone-800">31,940</span>
                <span className="text-[9px] text-emerald-600 font-medium block">+620 new</span>
              </div>
              <div className="bg-stone-50 p-2 rounded">
                <span className="text-[9px] text-stone-600 block">Post engagement</span>
                <span className="text-base font-bold text-stone-800">17,280</span>
                <span className="text-[9px] text-emerald-600 font-medium block">↑ 15%</span>
              </div>
            </div>

            <div className="bg-stone-50 p-2.5 rounded border border-stone-100 text-[10px]">
              <span className="font-semibold text-stone-900 block mb-1">Top Post · 48,200 Reach · 340 Comments</span>
              <p className="text-stone-600 italic">"We reformulated our Rosewater Toner based on your feedback..."</p>
            </div>
          </div>
          <div className="pt-2 text-[10px] text-stone-600 text-right">
            Verified GlowSkincare Facebook Insights
          </div>
        </div>
      );

    case 'x-thread-performance':
    case 'x-analytics-overview':
      return (
        <div className={`w-full ${isModal ? 'p-6' : 'p-4'} bg-black text-stone-100 rounded-xl border border-stone-800 font-sans shadow-2xs flex flex-col justify-between h-full`}>
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-xs">𝕏 Analytics · GlowSkincare</span>
              </div>
              <span className="text-[10px] text-stone-400 bg-stone-900 px-2 py-0.5 rounded">28-day period</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3">
              <div className="bg-stone-900 p-2 rounded border border-stone-800">
                <span className="text-[9px] text-stone-400 block">Impressions</span>
                <span className="text-base font-bold text-white">406.2K</span>
                <span className="text-[9px] text-emerald-400 block">↑ 19%</span>
              </div>
              <div className="bg-stone-900 p-2 rounded border border-stone-800">
                <span className="text-[9px] text-stone-400 block">Engagements</span>
                <span className="text-base font-bold text-white">28,940</span>
                <span className="text-[9px] text-emerald-400 block">↑ 27%</span>
              </div>
              <div className="bg-stone-900 p-2 rounded border border-stone-800">
                <span className="text-[9px] text-stone-400 block">Profile visits</span>
                <span className="text-base font-bold text-white">6,715</span>
                <span className="text-[9px] text-emerald-400 block">↑ 12%</span>
              </div>
              <div className="bg-stone-900 p-2 rounded border border-stone-800">
                <span className="text-[9px] text-stone-400 block">Followers</span>
                <span className="text-base font-bold text-white">+891</span>
                <span className="text-[9px] text-emerald-400 block">↑ 31%</span>
              </div>
            </div>

            <div className="bg-stone-900/80 p-2.5 rounded border border-stone-800 text-[10px]">
              <span className="text-stone-300 font-medium block">Viral 3-Step Routine Thread</span>
              <div className="flex items-center gap-3 text-stone-400 mt-1">
                <span>2,340 Likes</span>
                <span>612 Reposts</span>
                <span>184 Replies</span>
                <span className="text-teal-400 font-medium">341 Link Clicks</span>
              </div>
            </div>
          </div>
          <div className="pt-2 text-[10px] text-stone-500 text-right">
            Verified GlowSkincare X Analytics
          </div>
        </div>
      );

    default:
      return (
        <div className={`w-full ${isModal ? 'p-6' : 'p-4'} bg-stone-50 text-stone-900 rounded-xl border border-stone-200 font-sans flex items-center justify-center h-full`}>
          <div className="text-center">
            <span className="text-xs font-semibold text-stone-800 block mb-1">{sample.title}</span>
            <span className="text-[11px] text-stone-600">{sample.caption}</span>
          </div>
        </div>
      );
  }
};
