import React, { useState, useEffect } from 'react';
import { Mail, Phone, Calendar, ArrowUpRight, Copy, Check, Linkedin, MessageSquare, Send, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { personalInfo, servicesData } from '../data/portfolioData';

interface ContactSectionProps {
  selectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedService = '' }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandHandle: '',
    service: selectedService || servicesData[0].title,
    message: '',
  });

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Form fallback to mailto so the user's message is immediately queued
    const subject = encodeURIComponent(`Brand Inquiry from ${formData.name} [${formData.service}]`);
    const body = encodeURIComponent(
      `Hi Sheriff,\n\nMy name is ${formData.name}.\nBrand/Handle: ${formData.brandHandle}\nService Interested in: ${formData.service}\n\nProject Details:\n${formData.message}\n\nBest,\n${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Subtle organic ambient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c86d51]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Response Time & Working Hours Badge */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-stone-800/90 border border-stone-700 mb-6 text-xs text-stone-300 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-emerald-400">Accepting 2 Brand Partners</span>
            <span className="text-stone-500">·</span>
            <span className="flex items-center gap-1 text-stone-300">
              <Clock className="w-3 h-3 text-[#f49377]" />
              <span>Typical response: {personalInfo.responseTime}</span>
            </span>
            <span className="text-stone-500 hidden sm:inline">·</span>
            <span className="text-stone-400 text-[11px] font-mono hidden sm:inline">
              {personalInfo.timezone}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight leading-tight mb-5">
            Ready to build a presence that gets noticed and{' '}
            <span className="italic text-[#f49377]">remembered?</span>
          </h2>

          <p className="text-sm sm:text-base text-stone-400 leading-relaxed max-w-xl mx-auto font-sans-refined">
            {personalInfo.availabilityNote} Book a call directly or send a message below to review your channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Instant Booking & Fast Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Calendly Booking Card */}
            <div className="bg-stone-800/90 border border-stone-700/80 rounded-3xl p-7 flex flex-col justify-between hover:border-stone-600 transition-colors shadow-sm">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#c86d51]/20 border border-[#c86d51]/40 flex items-center justify-center mb-5">
                  <Calendar className="w-5 h-5 text-[#f49377]" />
                </div>
                <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block mb-1">
                  Immediate Scheduling
                </span>
                <h3 className="text-lg font-bold text-white font-sans-refined mb-2">
                  Book a 30-Min Discovery Call
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed font-sans-refined mb-6">
                  Pick a convenient slot directly on Calendly to talk through your current social challenges, content systems, and goals.
                </p>
              </div>

              <a
                href={personalInfo.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-[#c86d51] hover:bg-[#d87c61] text-white transition-colors shadow-sm cursor-pointer"
              >
                <span>Schedule Call on Calendly</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Channels Box */}
            <div className="bg-stone-800/90 border border-stone-700/80 rounded-3xl p-7 space-y-4">
              <div>
                <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block mb-1">
                  Direct Messaging
                </span>
                <h4 className="text-base font-bold text-white font-sans-refined">
                  Fast WhatsApp & Email
                </h4>
              </div>

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

          {/* Right Column: Quick On-Page Inquiry Form */}
          <div className="lg:col-span-7 bg-stone-800/90 border border-stone-700/80 rounded-3xl p-7 sm:p-9 shadow-lg">
            <div className="mb-6">
              <span className="text-[11px] font-mono text-[#f49377] uppercase tracking-wider block mb-1">
                Prefer sending a message?
              </span>
              <h3 className="text-xl font-bold text-white font-sans-refined">
                Start a Conversation
              </h3>
              <p className="text-xs text-stone-400 mt-1 font-sans-refined">
                Tell me a little about your brand and what you want to achieve.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-stone-900/90 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white font-sans-refined">
                  Inquiry Dispatched!
                </h4>
                <p className="text-xs text-stone-400 max-w-md mx-auto leading-relaxed">
                  Your message has been initiated. I will review your brand handle and respond within {personalInfo.responseTime}.
                </p>
                <div className="pt-2">
                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f49377] hover:underline"
                  >
                    <span>Need an immediate response? Message on WhatsApp →</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5 font-sans-refined">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="e.g., Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 placeholder-stone-500 text-xs focus:outline-hidden focus:border-[#c86d51] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5 font-sans-refined">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="sarah@yourbrand.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 placeholder-stone-500 text-xs focus:outline-hidden focus:border-[#c86d51] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5 font-sans-refined">
                      Brand Website or Social Handle
                    </label>
                    <input
                      type="text"
                      name="brandHandle"
                      value={formData.brandHandle}
                      onChange={handleFormChange}
                      placeholder="@yourbrand or brand.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 placeholder-stone-500 text-xs focus:outline-hidden focus:border-[#c86d51] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5 font-sans-refined">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleFormChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 text-xs focus:outline-hidden focus:border-[#c86d51] transition-colors"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Custom Consultation">Custom Strategy / Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5 font-sans-refined">
                    Project Goals / Current Bottlenecks *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Tell me about your current social presence, target platforms, and what success looks like for your brand..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 placeholder-stone-500 text-xs focus:outline-hidden focus:border-[#c86d51] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>No spam · Direct communication with Sheriff</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-white text-stone-900 hover:bg-[#f49377] hover:text-white transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
