import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "WORK", href: "#projects" },
  { label: "STACK", href: "#stack" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/20 group-hover:border-red-500 transition-colors flex items-center justify-center font-mono font-bold text-xs text-white">
            SP
          </div>
          <span className="font-mono font-bold text-xs tracking-wider text-zinc-200 uppercase group-hover:text-white transition-colors">
            {personalInfo.name}
          </span>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-zinc-400">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Status Indicator & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="uppercase text-zinc-400">AVAILABLE FOR ROLES</span>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-semibold tracking-wider transition-all shadow-md shadow-red-950/40"
          >
            GET IN TOUCH
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 px-4 py-6 space-y-4 font-mono text-xs">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-300 hover:text-red-400"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] text-zinc-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              AVAILABLE FOR WORK
            </span>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 rounded-lg bg-red-600 text-white font-semibold text-xs"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
