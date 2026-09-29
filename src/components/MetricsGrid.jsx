import React from "react";
import { metricsData } from "../data/portfolioData";

export function MetricsGrid() {
  return (
    <section className="py-20 relative z-10 border-b border-white/10 bg-[#070707]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-6 text-xs font-mono tracking-widest text-zinc-400">
          <span className="text-red-500 font-bold">03 /</span>
          <span className="uppercase text-zinc-300">BY THE NUMBERS</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-14">
          Numbers I can defend in a call
        </h2>

        {/* Metrics Column Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metricsData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0d0d0d] border border-white/10 hover:border-red-500/50 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-red-950/20"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-mono font-black text-white group-hover:text-red-400 transition-colors mb-2">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-zinc-200 uppercase tracking-wide mb-2">
                  {item.label}
                </div>
              </div>
              <p className="text-xs text-zinc-400 font-mono leading-relaxed pt-4 border-t border-white/5">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MetricsGrid;
