import React, { useState } from "react";
import { experienceData, educationData } from "../data/portfolioData";
import { ChevronDown, MapPin, Briefcase, GraduationCap } from "lucide-react";

export function ExperienceAccordion() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const items = [
    ...experienceData.map((e) => ({
      ...e,
      category: "EXPERIENCE",
      icon: Briefcase,
    })),
    ...educationData.map((ed) => ({
      role: ed.degree,
      company: ed.institution,
      location: ed.location,
      period: ed.period,
      description: ed.description,
      bullets: [
        "Specialization in Artificial Intelligence & Machine Learning (AIML).",
        "Key coursework: Deep Learning, Data Structures & Algorithms, DBMS, Operating Systems.",
        "Hands-on lab experience with Python, Java, SQL, and distributed system architectures."
      ],
      tech: ["Machine Learning", "Deep Learning", "DSA", "DBMS", "Software Engineering"],
      category: "EDUCATION",
      icon: GraduationCap,
    }))
  ];

  return (
    <section id="experience" className="py-24 relative z-10 border-b border-white/10 bg-[#070707]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-6 text-xs font-mono tracking-widest text-zinc-400">
          <span className="text-red-500 font-bold">06 /</span>
          <span className="uppercase text-zinc-300">EXPERIENCE & EDUCATION</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-14">
          Milestones, industry work, one direction
        </h2>

        {/* Expandable Rows */}
        <div className="space-y-4">
          {items.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded
                    ? "bg-[#0f0f0f] border-red-500/50 shadow-xl shadow-red-950/20"
                    : "bg-[#0a0a0a] border-white/10 hover:border-white/20"
                }`}
              >
                {/* Accordion Row Header */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  className="w-full p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between text-left gap-4"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className={`p-2.5 rounded-xl border ${
                      isExpanded ? "bg-red-500/20 border-red-500/40 text-red-400" : "bg-zinc-900 border-white/10 text-zinc-400"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {item.role}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/10 bg-zinc-900 text-zinc-400">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-zinc-400 mt-0.5">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-900/80 px-3 py-1 rounded-full border border-white/5">
                      {item.period}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-red-400" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-white/5">
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-2 mb-5">
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <span className="text-red-500 font-bold">―</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {item.tech?.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/5 text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ExperienceAccordion;
