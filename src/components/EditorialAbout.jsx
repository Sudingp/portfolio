import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export function EditorialAbout() {
  return (
    <section id="about" className="py-24 relative z-10 border-b border-white/10 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-10 text-xs font-mono tracking-widest text-zinc-400">
          <span className="text-red-500 font-bold">02 /</span>
          <span className="uppercase text-zinc-300">ABOUT</span>
        </div>

        {/* Editorial Narrative Statement */}
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.3] mb-8">
            I'm <span className="text-white underline decoration-red-500 decoration-2 underline-offset-4">{personalInfo.name}</span> — building production{" "}
            <span className="text-red-500">
              GenAI & RAG systems
            </span>
            ,{" "}
            <span className="text-red-500">
              2.07M+ record ETL pipelines
            </span>
            , and high-performance backends in{" "}
            <span className="text-red-400 font-mono">Python</span>,{" "}
            <span className="text-red-400 font-mono">Java</span> &{" "}
            <span className="text-red-400 font-mono">Spring Boot</span>.
          </h2>

          {/* Quick Resume Highlights Pills */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            <span className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-red-500/30 text-red-300 text-xs font-mono">
              ⚡ 2.07M+ Records ETL (78% Compressed)
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-mono">
              🧠 FAISS Vector Search & LangChain
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-mono">
              🎯 0.92 F1-Score ML Classifier
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-mono">
              🏢 ERP Computer Vision Attendance
            </span>
          </div>

          {/* Metadata Grid */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
            <div>
              <span className="block text-zinc-500 uppercase text-[10px] mb-1">LOCATION</span>
              <span className="text-zinc-200 font-medium">Bengaluru, India (IST)</span>
            </div>
            <div>
              <span className="block text-zinc-500 uppercase text-[10px] mb-1">EDUCATION</span>
              <span className="text-zinc-200 font-medium">B.Tech CSE AIML (2022–2026)</span>
            </div>
            <div>
              <span className="block text-zinc-500 uppercase text-[10px] mb-1">LANGUAGES</span>
              <span className="text-zinc-200 font-medium">English, Hindi, Kannada</span>
            </div>
            <div>
              <span className="block text-zinc-500 uppercase text-[10px] mb-1">AVAILABILITY</span>
              <span className="text-red-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Open to Full-Time & Internships
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default EditorialAbout;
