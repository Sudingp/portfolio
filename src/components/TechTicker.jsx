import React from "react";

const techItems = [
  "PYTHON",
  "LANGCHAIN",
  "FAISS",
  "JAVA",
  "SPRING BOOT",
  "POSTGRESQL",
  "MYSQL",
  "SCIKIT-LEARN",
  "PYTORCH",
  "DOCKER",
  "PANDAS",
  "PARQUET",
  "OPENCV",
  "STREAMLIT",
  "REACT",
  "REST APIS",
  "GIT / GITHUB",
  "SQLITE"
];

export function TechTicker() {
  return (
    <div className="w-full border-y border-white/10 bg-[#0a0a0a] py-3 overflow-hidden select-none relative z-10">
      <div className="flex w-max animate-marquee gap-8 items-center text-xs font-mono tracking-wider font-semibold text-zinc-400">
        {[...techItems, ...techItems, ...techItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-zinc-200 hover:text-red-400 transition-colors">{item}</span>
            <span className="text-red-500 font-bold">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechTicker;
