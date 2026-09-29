import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { CopyButton } from "./ui/copy-button";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

export function ContactBanner() {
  const emailSubject = "Project Inquiry / Opportunity - [Your Name / Organization]";
  const emailBody = `Hi Sudin,

I came across your portfolio and would like to connect regarding:

• Opportunity / Project Scope: 
• Company / Organization: 
• Tech Stack / Focus Area: (e.g. GenAI / RAG / Machine Learning / Spring Boot)
• Timeline / Next Steps: 

Looking forward to speaking with you!

Best regards,
[Your Name]
[Your Contact Info]`;

  const encodedSubject = encodeURIComponent(emailSubject);
  const encodedBody = encodeURIComponent(emailBody);

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${encodedSubject}&body=${encodedBody}`;

  const handleOpenMail = (e) => {
    // Try opening Gmail in a new tab first; fallback to mailto if needed
    window.open(gmailUrl, "_blank");
  };

  return (
    <section id="contact" className="py-28 relative z-10 bg-[#050505] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-8 text-xs font-mono tracking-widest text-zinc-400">
          <span className="text-red-500 font-bold">10 /</span>
          <span className="uppercase text-zinc-300">CONTACT & ENGAGEMENT</span>
        </div>

        {/* Big Editorial Headline */}
        <div className="max-w-4xl mb-14">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.95] uppercase mb-8">
            Got a product <br />
            that needs to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-white">
              start moving?
            </span>
          </h2>

          <p className="text-base sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            I'm graduating in 2026 and available for full-time AI/ML engineering roles, full-stack positions, and high-impact systems collaborations.
          </p>
        </div>

        {/* Direct Email Display & Copy Action */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0d0d0d] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16 shadow-2xl shadow-red-950/20">
          <div>
            <span className="text-[11px] font-mono text-red-400 uppercase tracking-widest block mb-1">
              Direct Contact Channel
            </span>
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-white hover:text-red-400 transition-colors break-all"
              title="Click to compose pre-filled email in Gmail"
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <CopyButton code={personalInfo.email} className="h-11 px-5 text-sm" />
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 h-11 px-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 text-sm font-medium transition-all hover:border-red-500/40"
              title="Open with pre-filled email template"
            >
              <span>Write Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={mailtoUrl}
              className="hidden sm:flex items-center justify-center h-11 px-3.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/5 text-xs font-mono transition-all"
              title="Open in default mail client app (mailto:)"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Info Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LINKEDIN</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>{personalInfo.phone}</span>
            </a>
          </div>

          <div className="text-zinc-500">
            © {new Date().getFullYear()} {personalInfo.name} — BENGALURU, INDIA
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactBanner;
