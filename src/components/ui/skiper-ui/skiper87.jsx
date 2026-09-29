import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export const Skiper87 = ({
  items,
  className,
  title = "SCROLL WITH FADE EFFECT",
}) => {
  const defaultItems = [
    { id: "01", title: "LLM-Based Document Q&A (RAG Prototype)", tag: "FAISS / LangChain" },
    { id: "02", title: "Traffic Violations Big Data Pipeline", tag: "2.07M+ Records" },
    { id: "03", title: "Credit Card Fraud Detection ML", tag: "0.92 F1-Score" },
    { id: "04", title: "Smart Logistics Management Platform", tag: "351K+ Records" },
    { id: "05", title: "Face Recognition Attendance ERP", tag: "Soukhya Tech" },
    { id: "06", title: "Continuous Learning: Agentic AI", tag: "LangChain / FAISS" },
    { id: "07", title: "PostgreSQL & Chunked ETL Pipelines", tag: "Big Data" },
    { id: "08", title: "Spring Boot Microservices & REST APIs", tag: "Java Backend" },
    { id: "09", title: "Dayananda Sagar University (AIML)", tag: "2022 - 2026" },
  ];

  const list = items || defaultItems;

  return (
    <div className={cn("flex w-full flex-col items-center justify-center gap-4", className)}>
      <div className="grid content-start justify-items-center gap-2 text-center">
        <span className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-semibold">
          {title}
        </span>
      </div>
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0d1117]/80 backdrop-blur-xl shadow-xl overflow-hidden p-2">
        <ScrollArea className="w-full h-64 rounded-xl">
          <div className="space-y-1.5 p-2">
            {list.map((item, index) => (
              <div
                key={index}
                className="text-slate-300 hover:text-white hover:bg-white/10 bg-slate-900/60 border border-white/5 flex h-11 w-full items-center justify-between gap-2 rounded-xl px-4 text-xs font-mono transition-colors"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className="text-indigo-400 font-bold">{item.id || `0${index + 1}`}</span>
                  <span className="truncate">{item.title || item}</span>
                </div>
                {item.tag && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shrink-0">
                    {item.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Skiper87;
