import React, { useState, useEffect } from 'react';
import { personalInfo, languagesSpoken } from '../data/portfolioData';
import { GlowBorderCard } from './ui/glow-border-card';
import { Badge } from './ui/badge';
import { MapPin, Clock, Sparkles, BookOpen, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function BentoAbout() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const now = new Date().toLocaleTimeString('en-US', options);
      setTimeString(now);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <Badge variant="default" className="mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Crafting Intelligent Solutions from <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Data to Deployment</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl">
            A glimpse into my background, current engineering focus, and passion for AI-driven software.
          </p>
        </div>

        {/* Bento Grid with VengeanceUI GlowBorderCards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* Card 1: Main Story (2 cols) */}
          <GlowBorderCard className="md:col-span-2 lg:col-span-2 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Background & Philosophy</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Building robust bridges between <span className="text-red-400">Machine Learning</span> & enterprise backends.
              </h3>
              
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                {personalInfo.aboutDetailed}
              </p>
              
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 text-xs text-zinc-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  Pursuing <strong>B.Tech in Computer Science & Engineering (AIML)</strong> at <strong>Dayananda Sagar University</strong> (2022–2026).
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Specialized in AI & ML
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Object-Oriented Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                Full-Stack Systems
              </span>
            </div>
          </GlowBorderCard>

          {/* Card 2: Live Time & Location */}
          <GlowBorderCard className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <Clock className="w-5 h-5" />
                </div>
                <Badge variant="default">IST (UTC+5:30)</Badge>
              </div>
              
              <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Current Local Time</span>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1 mb-4 tracking-tight">
                {timeString || '11:42 AM'}
              </div>

              <div className="flex items-center gap-2 text-zinc-300 text-xs">
                <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 text-[11px] text-zinc-400">
              Active & ready for remote collaboration worldwide.
            </div>
          </GlowBorderCard>

          {/* Card 3: Experience Highlight */}
          <GlowBorderCard className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Current Role</span>
              </div>

              <h4 className="font-bold text-white text-base">Full Stack Developer Intern</h4>
              <p className="text-xs text-red-400 font-medium mt-0.5 mb-2">Soukhya Tech Pvt Ltd</p>
              
              <p className="text-xs text-zinc-300 leading-relaxed">
                Building ERP-based face recognition attendance tracking using Java, Spring Boot, React, and OpenCV.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
              <span>Feb 2026 – Present</span>
              <span className="text-red-400">● Active</span>
            </div>
          </GlowBorderCard>

          {/* Card 4: What I'm Currently Learning (2 cols) */}
          <GlowBorderCard className="md:col-span-2 lg:col-span-2 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Continuous Growth</span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white mb-3">Currently Exploring & Expanding</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {personalInfo.currentlyLearning.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </GlowBorderCard>

          {/* Card 5: Languages Spoken (2 cols) */}
          <GlowBorderCard className="md:col-span-1 lg:col-span-2 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Languages & Communication</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {languagesSpoken.map((lang, idx) => (
                  <div key={idx} className="text-center p-3 rounded-xl bg-zinc-900/60 border border-white/5">
                    <span className="block text-sm font-bold text-white">{lang.language}</span>
                    <span className="text-[11px] text-red-400 font-medium">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 text-xs text-zinc-400">
              Clear communicator with experience collaborating in agile, multidisciplinary developer teams.
            </p>
          </GlowBorderCard>

        </div>
      </div>
    </section>
  );
}
