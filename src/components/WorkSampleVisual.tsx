import React, { useState } from 'react';
import { WorkSample } from '../types';
import { 
  TrendingUp, Users, Eye, Sparkles, MessageCircle, Heart, Share2, 
  Bookmark, BarChart2, Calendar, FileText, CheckCircle2, Search, 
  GitBranch, ArrowRight, Table, Layers, Clock, Cpu, Filter
} from 'lucide-react';

// Reusable Browser / Desktop Window Chrome Frame for Live Workspaces
const WindowChrome: React.FC<{
  url: string;
  theme?: 'dark' | 'light';
  statusText?: string;
}> = ({ url, theme = 'dark', statusText = 'AUTHENTIC WORKSPACE' }) => (
  <div
    className={`flex items-center justify-between px-3 py-2 border-b text-[10px] select-none ${
      theme === 'dark'
        ? 'bg-[#15161c] border-stone-800/90 text-stone-400'
        : 'bg-stone-100 border-stone-200/90 text-stone-500'
    }`}
  >
    <div className="flex items-center gap-1.5 shrink-0">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] inline-block shadow-2xs" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e] inline-block shadow-2xs" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840] inline-block shadow-2xs" />
    </div>

    <div
      className={`flex items-center gap-1.5 px-3 py-0.5 rounded-md border font-mono text-[9px] max-w-[210px] sm:max-w-[340px] truncate shadow-2xs ${
        theme === 'dark'
          ? 'bg-black/50 border-stone-800 text-stone-300'
          : 'bg-white border-stone-200 text-stone-700'
      }`}
    >
      <span className="text-emerald-500 text-[10px]">🔒</span>
      <span className="truncate">{url}</span>
    </div>

    <div className="flex items-center gap-1.5 shrink-0">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      <span className="font-mono text-[9px] font-semibold hidden sm:inline tracking-wider">
        {statusText}
      </span>
    </div>
  </div>
);

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
    case 'asana-workspace':
      return (
        <div className="w-full rounded-xl border border-stone-800 font-sans shadow-md flex flex-col justify-between h-full overflow-hidden text-xs bg-[#1e1f25] text-stone-100">
          <WindowChrome
            url="app.asana.com/1/1214758663186972/project/GlowSkincare"
            theme="dark"
            statusText="LIVE CLIENT SPRINT"
          />
          <div className={`${isModal ? 'p-5' : 'p-4'} flex flex-col justify-between flex-1`}>
            <div>
            {/* Asana Header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-800/90">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-[#fc5275] flex items-center justify-center text-white font-bold text-[10px] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white text-xs sm:text-sm tracking-tight">GlowSkincare</span>
                    <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 px-2 py-0.5 rounded-full font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      On track
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-400">Sheriff Opatola's Workspace · Asana Projects</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center -space-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-pink-600 text-white font-bold text-[9px] flex items-center justify-center border border-[#1e1f25]" title="Sheriff Opatola">
                    SO
                  </div>
                  <div className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold text-[9px] flex items-center justify-center border border-[#1e1f25]" title="sheriff08068...">
                    sh
                  </div>
                </div>
                <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-1 rounded hidden sm:inline border border-stone-700">Customize</span>
              </div>
            </div>

            {/* Asana Tabs */}
            <div className="flex items-center gap-4 py-2 border-b border-stone-800/60 text-[11px] text-stone-400 overflow-x-auto no-scrollbar">
              <span className="hover:text-stone-200 cursor-pointer">Overview</span>
              <span className="text-white font-semibold border-b-2 border-[#fc5275] pb-1 cursor-pointer">List</span>
              <span className="hover:text-stone-200 cursor-pointer">Board</span>
              <span className="hover:text-stone-200 cursor-pointer">Timeline</span>
              <span className="hover:text-stone-200 cursor-pointer">Dashboard</span>
              <span className="hover:text-stone-200 cursor-pointer">Calendar</span>
            </div>

            {/* Task Table Section Header */}
            <div className="mt-3 flex items-center justify-between text-[11px] text-stone-400 font-semibold uppercase tracking-wider px-1">
              <span>To do (6 items)</span>
              <span className="text-[10px] text-stone-500 font-normal">Sprint May 13 – 19</span>
            </div>

            {/* Task Rows matching Asana screenshot */}
            <div className="mt-2 space-y-1.5">
              {/* Row 1 */}
              <div className="flex items-center justify-between p-2 rounded-lg bg-stone-900/60 border border-stone-800/80 hover:bg-stone-800/50 transition-colors">
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <div className="w-4 h-4 rounded border border-stone-600 flex items-center justify-center shrink-0" />
                  <span className="text-stone-200 font-medium truncate text-[11px]">Schedule weekly business meeting</span>
                </div>
                <div className="flex items-center gap-3 shrink-0 text-[10px]">
                  <span className="inline-flex items-center gap-1 text-pink-400 font-medium bg-pink-950/40 px-1.5 py-0.5 rounded border border-pink-900/40">
                    <span className="w-3.5 h-3.5 rounded-full bg-pink-600 text-[8px] text-white flex items-center justify-center">SO</span>
                    Sheriff Opatola
                  </span>
                  <span className="text-stone-500 hidden sm:inline">May 12</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-between p-2 rounded-lg bg-stone-900/60 border border-stone-800/80 hover:bg-stone-800/50 transition-colors">
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 shrink-0">
                    ✓
                  </div>
                  <span className="text-stone-200 font-medium truncate text-[11px]">Reply to customer Instagram DMs</span>
                </div>
                <div className="flex items-center gap-3 shrink-0 text-[10px]">
                  <span className="inline-flex items-center gap-1 text-pink-400 font-medium bg-pink-950/40 px-1.5 py-0.5 rounded border border-pink-900/40">
                    <span className="w-3.5 h-3.5 rounded-full bg-pink-600 text-[8px] text-white flex items-center justify-center">SO</span>
                    Sheriff Opatola
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 font-medium border border-emerald-800/40">
                    Completed
                  </span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-between p-2 rounded-lg bg-stone-900/60 border border-stone-800/80 hover:bg-stone-800/50 transition-colors">
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <div className="w-4 h-4 rounded border border-stone-600 flex items-center justify-center shrink-0" />
                  <span className="text-stone-200 font-medium truncate text-[11px]">Research skincare competitors</span>
                </div>
                <div className="flex items-center gap-3 shrink-0 text-[10px]">
                  <span className="inline-flex items-center gap-1 text-pink-400 font-medium bg-pink-950/40 px-1.5 py-0.5 rounded border border-pink-900/40">
                    <span className="w-3.5 h-3.5 rounded-full bg-pink-600 text-[8px] text-white flex items-center justify-center">SO</span>
                    Sheriff Opatola
                  </span>
                  <span className="text-stone-400 hidden sm:inline">In Progress</span>
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex items-center justify-between p-2 rounded-lg bg-stone-900/60 border border-stone-800/80 hover:bg-stone-800/50 transition-colors">
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 shrink-0">
                    ✓
                  </div>
                  <span className="text-stone-200 font-medium truncate text-[11px]">Schedule 5 Instagram posts</span>
                </div>
                <div className="flex items-center gap-2 shrink-0 text-[10px]">
                  <span className="text-stone-400 hidden sm:inline">May 13 – 15</span>
                  <span className="px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 font-medium">Low</span>
                  <span className="px-1.5 py-0.5 rounded bg-blue-950/80 text-blue-400 border border-blue-800/50 font-medium">On track</span>
                </div>
              </div>

              {/* Row 5 & 6 (Only in full view or modal) */}
              {isModal && (
                <>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-stone-900/60 border border-stone-800/80 hover:bg-stone-800/50 transition-colors">
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 shrink-0">
                        ✓
                      </div>
                      <span className="text-stone-200 font-medium truncate text-[11px]">Organize business emails</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 text-[10px]">
                      <span className="text-stone-400 hidden sm:inline">May 14 – 18</span>
                      <span className="px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-400 border border-amber-800/50 font-medium">Medium</span>
                      <span className="px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/50 font-medium">At risk</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-stone-900/60 border border-stone-800/80 hover:bg-stone-800/50 transition-colors">
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 shrink-0">
                        ✓
                      </div>
                      <span className="text-stone-200 font-medium truncate text-[11px]">Update product stock sheet</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 text-[10px]">
                      <span className="text-stone-400 hidden sm:inline">May 15 – 19</span>
                      <span className="px-1.5 py-0.5 rounded bg-rose-950/80 text-rose-400 border border-rose-800/50 font-medium">High</span>
                      <span className="px-1.5 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-800/50 font-medium">Off track</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-[10px] text-stone-400">
            <span className="font-mono text-stone-500">app.asana.com/GlowSkincare</span>
            <span className="text-emerald-400 font-medium">Verified Asana Client Workspace</span>
          </div>
        </div>
      </div>
    );

    case 'airtable-outreach':
      return (
        <div className="w-full rounded-xl border border-stone-200 font-sans shadow-md flex flex-col justify-between h-full overflow-hidden text-xs bg-white text-stone-900">
          <WindowChrome
            url="airtable.com/appNhlSpo3lfcEqVd/tblOutreachCRM/viwGrid"
            theme="light"
            statusText="195 LEADS VERIFIED"
          />
          <div className={`${isModal ? 'p-5' : 'p-4'} flex flex-col justify-between flex-1`}>
            <div>
            {/* Airtable Top Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#20c997] flex items-center justify-center text-white font-bold text-[10px] shadow-2xs">
                  <Table className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-900 text-xs sm:text-sm">cold email outreach</span>
                    <span className="text-[10px] text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded">Base</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[11px] text-stone-600 font-medium">
                <span className="text-[#20c997] border-b-2 border-[#20c997] pb-1 font-semibold">Data</span>
                <span className="hover:text-stone-900 cursor-pointer hidden sm:inline">Automations</span>
                <span className="hover:text-stone-900 cursor-pointer hidden sm:inline">Interfaces</span>
                <span className="hover:text-stone-900 cursor-pointer hidden sm:inline">Forms</span>
              </div>
            </div>

            {/* Table Navigation Tabs */}
            <div className="flex items-center gap-3 py-1.5 border-b border-stone-100 text-[11px] text-stone-600 overflow-x-auto no-scrollbar">
              <span className="text-stone-500 hover:text-stone-800 px-2 py-0.5 rounded cursor-pointer">Leads</span>
              <span className="text-stone-900 font-bold bg-stone-100 px-2 py-0.5 rounded cursor-pointer">Outreach Sequences</span>
              <span className="text-stone-400 hover:text-stone-600 px-1 py-0.5">+ Add or import</span>
            </div>

            {/* View & Filter Toolbar */}
            <div className="flex items-center justify-between py-1.5 border-b border-stone-100 text-[10px] text-stone-600">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-stone-800 flex items-center gap-1">
                  <Table className="w-3 h-3 text-[#20c997]" /> Grid view
                </span>
                <span className="text-stone-400">|</span>
                <span className="hover:text-stone-900 cursor-pointer">Hide fields</span>
                <span className="hover:text-stone-900 cursor-pointer">Filter</span>
                <span className="hover:text-stone-900 cursor-pointer hidden sm:inline">Group</span>
                <span className="hover:text-stone-900 cursor-pointer hidden sm:inline">Sort</span>
              </div>
              <span className="text-[#20c997] font-semibold">Share & Sync</span>
            </div>

            {/* Spreadsheet Table Grid matching screenshot */}
            <div className="mt-2 border border-stone-200 rounded-lg overflow-hidden bg-white">
              {/* Header Row */}
              <div className="grid grid-cols-12 bg-stone-100 text-[10px] font-semibold text-stone-700 border-b border-stone-200 py-1 px-2">
                <div className="col-span-1 text-stone-400 text-center">#</div>
                <div className="col-span-2">Id</div>
                <div className="col-span-3">Personalization Used</div>
                <div className="col-span-4">Automated Email...</div>
                <div className="col-span-2">Lead</div>
              </div>

              {/* Data Rows */}
              {[
                { row: 1, id: '1', personalization: 'Complimented eco-packaging', email: 'Sequence Step 1', lead: 'Founder @ CleanCo' },
                { row: 2, id: '61', personalization: 'Referenced ingredient transparency', email: 'Sequence Step 2', lead: 'CEO @ PureGlow' },
                { row: 3, id: '59', personalization: 'Highlighted TikTok routine clip', email: 'Sequence Step 1', lead: 'Brand Director @ Nova' },
                { row: 4, id: '120', personalization: 'Noted rapid retail expansion', email: 'Sequence Step 3', lead: 'CMO @ HerbBotanics' },
                { row: 5, id: '185', personalization: 'Discussed UGC conversion rate', email: 'Sequence Step 1', lead: 'Head of Growth @ Luster' },
                { row: 6, id: '158', personalization: 'Custom brand audit reference', email: 'Sequence Step 2', lead: 'E-commerce Lead' },
              ].map((item) => (
                <div key={item.row} className="grid grid-cols-12 text-[10px] text-stone-800 border-b border-stone-100 py-1 px-2 hover:bg-stone-50 transition-colors items-center">
                  <div className="col-span-1 text-stone-400 text-center font-mono text-[9px]">{item.row}</div>
                  <div className="col-span-2 font-mono text-stone-900 font-medium">{item.id}</div>
                  <div className="col-span-3 truncate text-stone-600">{item.personalization}</div>
                  <div className="col-span-4 truncate">
                    <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-medium">
                      {item.email}
                    </span>
                  </div>
                  <div className="col-span-2 truncate text-stone-500 font-mono text-[9px]">{item.lead}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2.5 border-t border-stone-200 flex items-center justify-between text-[10px] text-stone-500">
            <span className="font-semibold text-stone-700">195 records · Sum 19,110</span>
            <span className="text-[#20c997] font-medium">Verified Airtable Database Pipeline</span>
          </div>
        </div>
      </div>
    );

    case 'zapier-workflow':
      return (
        <div className="w-full rounded-xl border border-stone-800 font-sans shadow-md flex flex-col justify-between h-full overflow-hidden text-xs bg-[#0f1117] text-stone-100">
          <WindowChrome
            url="app.n8n.cloud/workflow/Autonomous-Lead-Discovery-Engine"
            theme="dark"
            statusText="PIPELINE RUNNING"
          />
          <div className={`${isModal ? 'p-5' : 'p-4'} flex flex-col justify-between flex-1`}>
            <div>
            {/* Zapier / n8n Header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold text-[10px] shadow-xs">
                  <GitBranch className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-xs sm:text-sm">Autonomous Lead Discovery Engine</span>
                    <span className="text-[9px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-1.5 py-0.2 rounded font-mono">Active</span>
                  </div>
                  <span className="text-[10px] text-stone-400">AI Workflow Automation Platform · Multi-Branch</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[11px] text-stone-400">
                <span className="text-orange-400 font-semibold border-b border-orange-400 pb-0.5">Editor</span>
                <span className="hover:text-white cursor-pointer hidden sm:inline">Executions</span>
                <span className="hover:text-white cursor-pointer hidden sm:inline">Evaluations</span>
              </div>
            </div>

            {/* Interactive Visual Graph Canvas */}
            <div className="my-3 p-3 bg-black/40 rounded-xl border border-stone-800/80 relative overflow-hidden">
              <div className="flex flex-col gap-3">
                {/* Stage 1: Trigger & Loops */}
                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <div className="p-2 rounded-lg bg-stone-900 border border-orange-500/50 shadow-xs flex items-center gap-2 min-w-[140px]">
                    <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
                      <Clock className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-white block">Schedule Trigger</span>
                      <span className="text-[8px] text-stone-400">Every 24h at 08:00</span>
                    </div>
                  </div>

                  <ArrowRight className="w-3.5 h-3.5 text-stone-600 shrink-0 hidden sm:block" />

                  <div className="p-2 rounded-lg bg-stone-900 border border-sky-500/50 shadow-xs flex items-center gap-2 min-w-[130px]">
                    <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center">
                      <Search className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-white block">Search records</span>
                      <span className="text-[8px] text-stone-400">Filtered Target Leads</span>
                    </div>
                  </div>

                  <ArrowRight className="w-3.5 h-3.5 text-stone-600 shrink-0 hidden sm:block" />

                  <div className="p-2 rounded-lg bg-stone-900 border border-emerald-500/50 shadow-xs flex items-center gap-2 min-w-[130px]">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Cpu className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-white block">Loop Over Items</span>
                      <span className="text-[8px] text-stone-400">Batch Iterator</span>
                    </div>
                  </div>
                </div>

                {/* Stage 2: 3 Parallel API Branches */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 border-t border-stone-800/60">
                  <div className="p-2 rounded-lg bg-stone-900/80 border border-stone-800 hover:border-emerald-500/50 transition-colors">
                    <span className="text-[9px] text-emerald-400 font-mono block">Branch A · Apollo API</span>
                    <span className="text-[10px] font-medium text-stone-200 truncate block">HTTP Request (Apollo)</span>
                    <div className="flex items-center gap-1.5 mt-1 text-[8px] text-stone-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Webhook Return (200 OK)</span>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-stone-900/80 border border-stone-800 hover:border-emerald-500/50 transition-colors">
                    <span className="text-[9px] text-sky-400 font-mono block">Branch B · Google Tools</span>
                    <span className="text-[10px] font-medium text-stone-200 truncate block">HTTP Request (Google)</span>
                    <div className="flex items-center gap-1.5 mt-1 text-[8px] text-stone-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      <span>Data Normalization</span>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-stone-900/80 border border-stone-800 hover:border-emerald-500/50 transition-colors">
                    <span className="text-[9px] text-purple-400 font-mono block">Branch C · LinkedIn API</span>
                    <span className="text-[10px] font-medium text-stone-200 truncate block">HTTP Request (LinkedIn)</span>
                    <div className="flex items-center gap-1.5 mt-1 text-[8px] text-stone-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Enriched Profile Token</span>
                    </div>
                  </div>
                </div>

                {/* Stage 3: Merge & Destination */}
                <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-[10px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-stone-200 font-medium">Destination: Create a record (Airtable & CRM Hub)</span>
                  </div>
                  <span className="text-emerald-400 font-mono font-semibold">Zero Manual Entry</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[10px] text-stone-500">
            <span className="font-mono text-stone-400">Multi-Node Automation Pipeline</span>
            <span className="text-orange-400 font-medium">Verified Zapier / n8n Workflow</span>
          </div>
        </div>
      </div>
    );

    case 'canva-brand-assets':
      return (
        <div className="w-full rounded-xl border border-stone-200 font-sans shadow-md flex flex-col justify-between h-full overflow-hidden text-xs bg-[#f6f7f9] text-stone-900">
          <WindowChrome
            url="canva.com/folder/olamiluxe-fabrics-luxury-branding"
            theme="light"
            statusText="BRAND ASSET REPO"
          />
          <div className={`${isModal ? 'p-5' : 'p-4'} flex flex-col justify-between flex-1`}>
            <div>
            {/* Canva Top Navigation Header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-[11px] shadow-2xs">
                  C
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-900 text-xs sm:text-sm">Canva Projects · Brand Hub</span>
                    <span className="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.2 rounded border border-indigo-100 font-medium">Pro</span>
                  </div>
                  <span className="text-[10px] text-stone-500">Olamiluxe Fabrics · Visual Brand Identity Assets</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px]">
                <span className="px-2.5 py-1 rounded-md bg-indigo-600 text-white font-semibold shadow-2xs cursor-pointer">
                  + Create Design
                </span>
              </div>
            </div>

            {/* Folder & Design Breadcrumbs */}
            <div className="flex items-center gap-2 py-2 text-[11px] text-stone-500 border-b border-stone-100">
              <span className="hover:text-stone-900 cursor-pointer">Projects</span>
              <span>/</span>
              <span className="hover:text-stone-900 cursor-pointer">Folders</span>
              <span>/</span>
              <span className="text-stone-900 font-semibold">Olamiluxe Fabrics (Premium Fabrics)</span>
            </div>

            {/* Visual Design Cards Carousel matching Canva screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3">
              {/* Card 1 */}
              <div className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-indigo-400 hover:shadow-sm transition-all group cursor-pointer">
                <div className="h-28 bg-black p-3 flex flex-col items-center justify-center text-center text-white relative">
                  <div className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center mb-1 text-[8px] font-mono">
                    ✦
                  </div>
                  <span className="text-[11px] font-serif tracking-widest uppercase font-bold text-stone-100">
                    Olamiluxe Fabrics
                  </span>
                  <span className="text-[7px] tracking-widest text-stone-400 uppercase mt-0.5">
                    Premium Fabrics
                  </span>
                </div>
                <div className="p-2 bg-white">
                  <span className="text-[10px] font-semibold text-stone-900 truncate block group-hover:text-indigo-600">
                    Black and White Elegant...
                  </span>
                  <span className="text-[9px] text-stone-500">Edited 8 months ago</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-indigo-400 hover:shadow-sm transition-all group cursor-pointer">
                <div className="h-28 bg-stone-900 p-3 flex flex-col items-center justify-center text-center text-white relative border-b border-stone-800">
                  <span className="text-[11px] font-sans tracking-wide uppercase font-semibold text-stone-100">
                    Olamiluxe fabrics
                  </span>
                  <span className="text-[7px] tracking-widest text-stone-400 uppercase mt-1">
                    PREMIUM FABRICS
                  </span>
                </div>
                <div className="p-2 bg-white">
                  <span className="text-[10px] font-semibold text-stone-900 truncate block group-hover:text-indigo-600">
                    Minimalist Fabric Labels...
                  </span>
                  <span className="text-[9px] text-stone-500">Edited 9 months ago</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-indigo-400 hover:shadow-sm transition-all group cursor-pointer">
                <div className="h-28 bg-[#161616] p-3 flex flex-col items-center justify-center text-center text-white relative">
                  <span className="text-sm font-serif italic text-stone-200">
                    Olamiluxe
                  </span>
                  <div className="w-8 h-px bg-stone-600 my-1" />
                  <span className="text-[7px] tracking-wider text-stone-400 uppercase">
                    Fabric Collection
                  </span>
                </div>
                <div className="p-2 bg-white">
                  <span className="text-[10px] font-semibold text-stone-900 truncate block group-hover:text-indigo-600">
                    Script Wordmark Kit
                  </span>
                  <span className="text-[9px] text-stone-500">Edited 9 months ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-[10px] text-stone-500">
            <span className="font-mono text-stone-600">canva.com/projects/olamiluxe-fabrics</span>
            <span className="text-indigo-600 font-medium">Verified Canva Brand Collateral</span>
          </div>
        </div>
      </div>
    );

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
