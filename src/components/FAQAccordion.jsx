import React, { useState } from "react";
import { faqData } from "../data/portfolioData";
import { Plus, Minus } from "lucide-react";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 relative z-10 border-b border-white/10 bg-[#070707]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-6 text-xs font-mono tracking-widest text-zinc-400">
          <span className="text-red-500 font-bold">09 /</span>
          <span className="uppercase text-zinc-300">FAQ</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-14">
          Questions I get before the first call
        </h2>

        {/* Accordions */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-6 group transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? "text-red-400" : "text-zinc-200 group-hover:text-white"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg border transition-all ${
                    isOpen ? "bg-red-500/20 border-red-500/40 text-red-400" : "bg-zinc-900 border-white/10 text-zinc-400"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-10">
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono">
                      {faq.answer}
                    </p>
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

export default FAQAccordion;
