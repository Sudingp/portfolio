import React from 'react';
import { experienceData, educationData } from '../data/portfolioData';
import { GlowBorderCard } from './ui/glow-border-card';
import { Badge } from './ui/badge';
import { Briefcase, GraduationCap, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <Badge variant="default" className="mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>JOURNEY & MILESTONES</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-white">Education</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl">
            My professional career path, university milestones, and industry engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Work Experience Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-red-500 before:to-rose-600"
                >
                  <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-red-500 ring-4 ring-[#050505]" />

                  <GlowBorderCard className="p-5 flex flex-col justify-between">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <Badge variant="default">{exp.period}</Badge>
                      <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mt-2">{exp.role}</h4>
                    <p className="text-xs font-medium text-zinc-300 mb-3">{exp.company}</p>

                    <p className="text-xs text-zinc-300 mb-3 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      {exp.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {exp.tech.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-red-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </GlowBorderCard>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-rose-600 before:to-red-700"
                >
                  <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-red-500 ring-4 ring-[#050505]" />

                  <GlowBorderCard className="p-5 flex flex-col justify-between">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <Badge variant="default">{edu.period}</Badge>
                      <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mt-2">{edu.degree}</h4>
                    <p className="text-xs font-medium text-red-300 mb-1">{edu.specialization}</p>
                    <p className="text-xs text-zinc-400 mb-3">{edu.institution}</p>

                    <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 text-[11px] text-zinc-300 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <span>Focus: AI/ML, High-Performance Systems, Scalable Software</span>
                    </div>
                  </GlowBorderCard>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
