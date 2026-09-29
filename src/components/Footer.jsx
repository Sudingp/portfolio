import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const footerNavLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 py-12 relative bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand Mark */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-red-600/30">
              S
            </div>
            <div>
              <span className="font-bold text-white text-sm">{personalInfo.name}</span>
              <p className="text-xs text-zinc-400 font-mono">AI/ML Engineer & Full-Stack Developer</p>
            </div>
          </div>

          {/* Quick Nav Links (from VengeanceUI footer-4) */}
          <div className="flex flex-wrap justify-center gap-5 text-xs font-medium">
            {footerNavLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-zinc-400 hover:text-red-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20 transition-all hover:scale-105"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20 transition-all hover:scale-105"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.email}
              className="p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20 transition-all hover:scale-105"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white border border-red-500/30 transition-all ml-1"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React, Tailwind CSS, Vite & VengeanceUI</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
