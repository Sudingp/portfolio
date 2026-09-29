import React from "react";
import { methodologySteps } from "../data/portfolioData";
import { Search, Layers, Zap, ShieldCheck } from "lucide-react";

const stepIcons = [Search, Layers, Zap, ShieldCheck];

export function WorkMethodology() {
  return (
    <section className="py-24 relative z-10 border-b border-white/10 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-6 text-xs font-mono tracking-widest text-zinc-400">
          <span className="text-red-500 font-bold">08 /</span>
          <span className="uppercase text-zinc-300">HOW I WORK</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-14">
          Four steps, no three-month branches
        </h2>

        {/* Steps List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {methodologySteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Zap;

            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#0b0b0b] border border-white/10 hover:border-red-500/50 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-red-950/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-red-400 px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20">
                      STEP {step.number}
                    </span>
                    <Icon className="w-5 h-5 text-zinc-500 group-hover:text-red-400 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>Deterministic Workflow</span>
                  <span className="text-red-400">● Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WorkMethodology;
