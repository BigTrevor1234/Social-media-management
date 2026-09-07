import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Outcomes', href: '#outcomes' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Case Studies', href: '#work' },
    { label: 'Frameworks', href: '#frameworks' },
    { label: 'Stack', href: '#tools' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fafaf8]/92 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#"
            id="nav-logo"
            className="group flex items-center gap-2.5 text-stone-900 font-semibold tracking-tight"
          >
            <span className="w-8 h-8 rounded-full bg-stone-900 text-stone-100 flex items-center justify-center text-xs font-bold font-sans-refined tracking-wider group-hover:bg-[#c86d51] transition-colors duration-200">
              SO
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-stone-900 font-sans-refined">
                {personalInfo.name}
              </span>
              <span className="text-[11px] text-stone-600 font-normal">
                Social Media & Content Strategist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-stone-100/80 border border-stone-200/70 p-1.5 rounded-full px-3 shadow-2xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  id={`nav-link-${link.href.replace('#', '')}`}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-150 ${
                    isActive
                      ? 'bg-white text-stone-900 shadow-xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              id="nav-cta-button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-stone-900 text-white hover:bg-[#c86d51] transition-colors duration-200 shadow-xs cursor-pointer"
            >
              <span>{personalInfo.ctaText}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="sm:hidden px-3 py-1.5 rounded-full text-[11px] font-semibold bg-stone-900 text-white"
            >
              Work With Me
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#fafaf8] border-b border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-lg"
        >
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <a
              href={personalInfo.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-2.5 text-xs font-semibold rounded-lg bg-[#c86d51] text-white"
            >
              Book Discovery Call
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full text-center py-2 text-xs text-stone-600 hover:text-stone-900"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
