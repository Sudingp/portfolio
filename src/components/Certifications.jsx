import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { GlowBorderCard } from './ui/glow-border-card';
import { Badge } from './ui/badge';
import { Award, CheckCircle, ShieldCheck, Terminal, Brain } from 'lucide-react';

const certIcons = {
  cisco: Brain,
  coursera: ShieldCheck,
  infosys: Terminal
};

export default function Certifications() {
  return (
    <section className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-10">
          <Badge variant="default" className="mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Certifications & Verified Learning
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {certificationsData.map((cert, idx) => {
            const IconComp = certIcons[cert.icon] || Award;
            return (
              <GlowBorderCard
                key={idx}
                className="p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <Badge variant="default">{cert.badge}</Badge>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-xs text-zinc-400">{cert.issuer}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="text-red-400 flex items-center gap-1 font-mono">
                    <CheckCircle className="w-3 h-3" /> Verified
                  </span>
                </div>
              </GlowBorderCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
