import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Badge } from './ui/badge';
import { HighlightGrid } from './ui/highlight-grid';
import { GlowBorderCard } from './ui/glow-border-card';
import { Cpu, Terminal, Database, Server, Wrench, Sparkles, Check } from 'lucide-react';

const categoryIcons = {
  'ai-ml': Cpu,
  'languages': Terminal,
  'backend-web': Server,
  'data-storage': Database,
  'tools': Wrench,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const highlightGridRows = [
    [{ label: "Python" }, { label: "Java" }, { label: "C++" }, { label: "SQL" }],
    [{ label: "LangChain" }, { label: "FAISS" }, { label: "Scikit-Learn" }, { label: "Spring Boot" }, { label: "React" }],
  ];

  const filteredCategories = activeCategory === 'all'
    ? skillsData.categories
    : skillsData.categories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      {/* Background subtle light */}
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <Badge variant="default" className="mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECH STACK & CAPABILITIES</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools, Technologies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Core Proficiencies</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-xl">
            A comprehensive overview of my technical toolkit spanning Artificial Intelligence, backend engineering, and big data systems.
          </p>
        </div>

        {/* VengeanceUI Interactive Direction-Aware Highlight Grid */}
        <div className="mb-14">
          <HighlightGrid
            rows={highlightGridRows}
            colors={["#dc2626", "#ef4444", "#b91c1c", "#f87171", "#e11d48", "#991b1b"]}
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 font-semibold'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
            }`}
          >
            All Categories
          </button>
          {skillsData.categories.map((cat) => {
            const IconComponent = categoryIcons[cat.id] || Sparkles;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 font-semibold'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = categoryIcons[category.id] || Sparkles;
            return (
              <GlowBorderCard
                key={category.id}
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 shadow-inner">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{category.title}</h3>
                      <span className="text-[11px] text-zinc-400 font-mono">{category.skills.length} skills</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                          skill.highlight
                            ? 'bg-red-500/15 border border-red-500/40 text-red-200 shadow-sm shadow-red-500/10 hover:bg-red-500/25'
                            : 'bg-zinc-900/80 border border-white/5 text-zinc-300 hover:border-white/20'
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                        )}
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-zinc-400 font-mono ml-1 opacity-70">
                            • {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                  <span>Hands-on experience</span>
                  <Check className="w-3.5 h-3.5 text-red-400" />
                </div>
              </GlowBorderCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
