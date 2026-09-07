import React, { useState } from 'react';
import { Mail, Phone, Calendar, ArrowUpRight, Copy, Check, Linkedin, MessageSquare, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Subtle organic ambient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c86d51]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Availability Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-800/80 border border-stone-700 mb-6 text-xs text-stone-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{personalInfo.availabilityStatus}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight leading-tight mb-5">
            Ready to build a presence that gets noticed and{' '}
            <span className="italic text-[#f49377]">remembered?</span>
          </h2>

          <p className="text-sm sm:text-base text-stone-400 leading-relaxed max-w-xl mx-auto font-sans-refined">
            {personalInfo.availabilityNote} Let's discuss your brand goals, target channels, and how we can systemize your growth.
          </p>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Booking Card */}
          <div className="bg-stone-800/90 border border-stone-700/80 rounded-3xl p-8 flex flex-col justify-between hover:border-stone-600 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#c86d51]/20 border border-[#c86d51]/40 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-[#f49377]" />
              </div>
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block mb-1">
                Direct Consultation
              </span>
              <h3 className="text-xl font-bold text-white font-sans-refined mb-2">
                Book a 30-Min Discovery Call
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-sans-refined mb-6">
                Pick a slot that suits you on Calendly to discuss your current challenges, content systems, and scope.
              </p>
            </div>

            <a
              href={personalInfo.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold bg-[#c86d51] hover:bg-[#d87c61] text-white transition-colors shadow-sm"
            >
              <span>Schedule Call on Calendly</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Direct Channels Card */}
          <div className="bg-stone-800/90 border border-stone-700/80 rounded-3xl p-8 flex flex-col justify-between hover:border-stone-600 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-700/60 border border-stone-600 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-stone-200" />
              </div>
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block mb-1">
                Fast Inquiries
              </span>
              <h3 className="text-xl font-bold text-white font-sans-refined mb-2">
                Direct Inquiries & WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-sans-refined mb-6">
                Reach out directly via email or message me on WhatsApp for quick responses on retainers and availability.
              </p>
            </div>

            <div className="space-y-3">
              {/* Copy Email Button */}
              <div className="flex items-center justify-between bg-stone-900/90 border border-stone-700 rounded-xl px-4 py-2.5">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                  <span className="text-xs font-mono text-stone-200 truncate">
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-[11px] font-semibold text-[#f49377] hover:text-white px-2 py-1 rounded transition-colors shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons: WhatsApp & LinkedIn */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600/30 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
