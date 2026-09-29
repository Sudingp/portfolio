import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { GlowBorderCard } from './ui/glow-border-card';
import { CopyButton } from './ui/copy-button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Phone, MapPin, Send, Linkedin, Github, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setFormStatus({ state: 'submitting', message: 'Opening email client...' });

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setFormStatus({
        state: 'success',
        message: 'Thank you! Your email client has been opened to send this message.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <Badge variant="default" className="mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-white">Exceptional Together</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl">
            Whether you have an opportunity, a project to collaborate on, or just want to discuss AI engineering, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Left Column: Direct Info & Copy Email (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* 1-Click Copy Email Card with VengeanceUI GlowBorderCard */}
            <GlowBorderCard className="p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-red-400">Direct Email</span>
                <Badge variant="default">Quick Copy</Badge>
              </div>

              <div className="text-sm sm:text-base font-mono font-bold text-white mb-4 break-all">
                {personalInfo.email}
              </div>

              <CopyButton code={personalInfo.email} className="w-full" />
            </GlowBorderCard>

            {/* Direct Contact Channels */}
            <GlowBorderCard className="p-6 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Contact Details</h3>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-white/20 transition-all text-xs text-zinc-300 group"
              >
                <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-400">Phone / WhatsApp</span>
                  <span className="font-mono text-white group-hover:text-red-300 transition-colors">{personalInfo.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-white/5 text-xs text-zinc-300">
                <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-zinc-400">Location</span>
                  <span className="text-white">{personalInfo.location}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-200 text-xs font-medium hover:border-red-500/50 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-red-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-200 text-xs font-medium hover:border-red-500/50 transition-all"
                >
                  <Github className="w-4 h-4 text-red-400" />
                  <span>GitHub</span>
                </a>
              </div>

            </GlowBorderCard>

          </div>

          {/* Right Column: Contact Form (3 cols) */}
          <div className="lg:col-span-3">
            <GlowBorderCard className="p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-zinc-400 mb-6">
                Have a project or job opportunity? Send me a note and I will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <Input
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Subject
                  </label>
                  <Input
                    placeholder="Opportunity / Project Collaboration / Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <Textarea
                    required
                    placeholder="Hi Sudin, I saw your portfolio and would love to connect regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {formStatus.message && (
                  <div
                    className={`p-3 rounded-xl text-xs ${
                      formStatus.state === 'error'
                        ? 'bg-red-500/10 border border-red-500/20 text-red-300'
                        : 'bg-red-500/20 border border-red-500/40 text-red-200'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-semibold shadow-lg shadow-red-600/30 active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </GlowBorderCard>
          </div>

        </div>

      </div>
    </section>
  );
}
