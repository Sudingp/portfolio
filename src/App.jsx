import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechTicker from "./components/TechTicker";
import EditorialAbout from "./components/EditorialAbout";
import MetricsGrid from "./components/MetricsGrid";
import Projects from "./components/Projects";
import StackByLayer from "./components/StackByLayer";
import ExperienceAccordion from "./components/ExperienceAccordion";
import WorkMethodology from "./components/WorkMethodology";
import FAQAccordion from "./components/FAQAccordion";
import ContactBanner from "./components/ContactBanner";
import GlobalCursor from "./components/ui/skiper-ui/GlobalCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-600 selection:text-white relative overflow-x-hidden font-sans">
      
      {/* Global Interactive Spring Physics Cursor (Red / White) */}
      <GlobalCursor />

      {/* Subtle Vertical Guidelines Background Rules (like reference) */}
      <div className="fixed inset-0 max-w-6xl mx-auto pointer-events-none z-0 px-4 sm:px-6 lg:px-8">
        <div className="w-full h-full grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 border-x border-white/[0.04]">
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className="border-r border-white/[0.04] h-full hidden lg:block" />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TechTicker />
          <EditorialAbout />
          <MetricsGrid />
          <Projects />
          <StackByLayer />
          <ExperienceAccordion />
          <WorkMethodology />
          <FAQAccordion />
          <ContactBanner />
        </main>
      </div>

    </div>
  );
}
