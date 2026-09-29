import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { BackgroundCrowdCanvas } from "./ui/skiper-ui/skiper39";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#050505] border-b border-white/10">
      
      {/* Skiper39 Crowd Canvas Animation with Scroll Fade */}
      <BackgroundCrowdCanvas />

      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Editorial Headline */}
          <div className="lg:col-span-7 xl:col-span-8">
            
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-5 text-xs font-mono tracking-widest text-zinc-400">
              <span className="text-red-500 font-bold">01 /</span>
              <span className="uppercase text-zinc-300">AI/ML & FULL-STACK ENGINEER</span>
            </div>

            {/* Proportionate Typography with Red Highlight Marker Blocks */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] uppercase mb-6 max-w-2xl">
              I build{" "}
              <span className="bg-red-600 text-white px-2 py-0.5 inline-block mx-0.5 rounded-sm">
                intelligent
              </span>{" "}
              systems — from{" "}
              <span className="bg-white text-black px-2 py-0.5 inline-block mx-0.5 rounded-sm">
                raw schema
              </span>{" "}
              to deployed models.
            </h1>

            {/* Subtitle / Bio inside a sleek box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0c0c0c]/90 backdrop-blur-md border border-white/10 max-w-xl mb-8 shadow-xl shadow-black/40">
              <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed">
                Full-stack AI developer specializing in Python, Java, LangChain, FAISS, and Spring Boot. Building RAG prototypes, big data ETL pipelines, and high-performance backends.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs tracking-wider transition-all shadow-lg shadow-red-950/40 hover:scale-105 active:scale-95"
              >
                SEE THE WORK
              </a>
              <a
                href={personalInfo.resumeUrl}
                download="Sudin_G_Poojary_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 font-mono font-bold text-xs tracking-wider transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD CV</span>
              </a>
            </div>

          </div>

          {/* Right Column: Editorial ASCII / Point-Cloud Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-sm p-6 rounded-3xl bg-[#0c0c0c] border border-white/10 relative overflow-hidden font-mono text-xs shadow-2xl shadow-red-950/20">
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-zinc-400">
                <span className="text-red-400 font-bold">SYSTEM STATUS</span>
                <span className="flex items-center gap-1 text-[10px] text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  ONLINE
                </span>
              </div>

              <div className="space-y-3 text-zinc-300 text-[11px] leading-relaxed">
                <div>
                  <span className="text-zinc-500 block text-[10px]">ENGINEER</span>
                  <span className="text-white font-bold">{personalInfo.name}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">CURRENT FOCUS</span>
                  <span className="text-zinc-200">Generative AI, RAG & Spring Boot</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">INSTITUTION</span>
                  <span className="text-zinc-200">Dayananda Sagar University (AIML)</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">ROLE PREFERENCE</span>
                  <span className="text-red-400 font-semibold">AI/ML Engineer / Full-Stack Dev</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
                <span>INDEX // 01</span>
                <span>BENGALURU, IN</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
