import React from "react";
import { Cpu, Server, Database, Wrench } from "lucide-react";

const stackLayers = [
  {
    id: "aiml",
    title: "AI/ML & GenAI",
    number: "01",
    isHighlighted: true,
    skills: ["Python", "LangChain", "FAISS", "Scikit-Learn", "PyTorch", "SMOTE", "OpenCV", "Vector Embeddings", "HuggingFace", "Prompt Engineering"],
    description: "RAG architectures, embeddings similarity search, classification pipelines, and LLM orchestration."
  },
  {
    id: "backend",
    title: "Backend & APIs",
    number: "02",
    isHighlighted: false,
    skills: ["Java", "Spring Boot", "RESTful APIs", "FastAPI", "Microservices", "OOP Design", "Transaction Management"],
    description: "Production-ready enterprise backends, secure API endpoints, and clean decoupled services."
  },
  {
    id: "data",
    title: "Data & Storage",
    number: "03",
    isHighlighted: false,
    skills: ["PostgreSQL", "MySQL", "SQLite", "Pandas", "NumPy", "Apache Parquet", "Chunked ETL", "3NF Normalization"],
    description: "High-throughput data extraction, columnar compression, optimized indexes, and analytical pipelines."
  },
  {
    id: "infra",
    title: "Tools & Frontend",
    number: "04",
    isHighlighted: false,
    skills: ["React.js", "Streamlit", "Tailwind CSS", "Git & GitHub", "Docker", "Linux", "Postman", "Vite"],
    description: "Interactive analytical dashboards, version control workflows, containerization, and developer tooling."
  }
];

export function StackByLayer() {
  return (
    <section id="stack" className="py-24 relative z-10 border-b border-white/10 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-6 text-xs font-mono tracking-widest text-zinc-400">
          <span className="text-red-500 font-bold">05 /</span>
          <span className="uppercase text-zinc-300">STACK BY LAYER</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-14">
          The stack I actually run in production
        </h2>

        {/* 4 Quadrants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stackLayers.map((layer) => (
            <div
              key={layer.id}
              className={`p-6 sm:p-8 rounded-2xl transition-all relative overflow-hidden flex flex-col justify-between ${
                layer.isHighlighted
                  ? "bg-gradient-to-br from-red-600 to-rose-600 text-white shadow-2xl shadow-red-900/30 border border-red-400/40"
                  : "bg-[#0c0c0c] border border-white/10 text-zinc-200 hover:border-red-500/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-bold ${layer.isHighlighted ? "text-white" : "text-white"}`}>
                    {layer.title}
                  </h3>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
                    layer.isHighlighted ? "border-white/30 bg-black/20 text-white" : "border-white/10 bg-zinc-900 text-zinc-400"
                  }`}>
                    {layer.number}
                  </span>
                </div>

                <p className={`text-xs sm:text-sm mb-6 leading-relaxed ${
                  layer.isHighlighted ? "text-red-100" : "text-zinc-400"
                }`}>
                  {layer.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {layer.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-xs font-mono font-medium px-2.5 py-1 rounded-lg ${
                        layer.isHighlighted
                          ? "bg-black/25 text-white border border-white/20"
                          : "bg-zinc-900 border border-white/5 text-zinc-300 hover:border-white/20"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`mt-6 pt-4 border-t text-[11px] font-mono flex items-center justify-between ${
                layer.isHighlighted ? "border-white/20 text-red-100" : "border-white/5 text-zinc-500"
              }`}>
                <span>{layer.skills.length} core competencies</span>
                <span>● Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default StackByLayer;
