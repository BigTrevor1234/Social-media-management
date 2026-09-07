import React from 'react';
import { ArrowUp, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800 text-xs font-sans-refined">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#c86d51] text-white flex items-center justify-center font-bold text-xs">
              SO
            </span>
            <div>
              <span className="text-sm font-bold text-white block">
                {personalInfo.name}
              </span>
              <span className="text-stone-400 text-[11px]">
                {personalInfo.role} · {personalInfo.secondaryRole}
              </span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-stone-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#outcomes" className="hover:text-white transition-colors">Outcomes</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#work" className="hover:text-white transition-colors">Work Samples</a>
            <a href="#frameworks" className="hover:text-white transition-colors">Frameworks</a>
            <a href="#tools" className="hover:text-white transition-colors">Stack</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-stone-900 hover:bg-stone-800 flex items-center justify-center text-stone-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-stone-900 hover:bg-stone-800 flex items-center justify-center text-stone-300 hover:text-white transition-colors"
              aria-label="WhatsApp Contact"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-400 hover:text-white transition-colors ml-2 cursor-pointer"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <p>{personalInfo.footerTagline}</p>
          <p>© {personalInfo.copyrightYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
