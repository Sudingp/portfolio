import React, { useState } from "react";
import { projectsData } from "../data/portfolioData";
import { Github, ExternalLink, ArrowUpRight, CheckCircle2, X } from "lucide-react";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ["All", "AI & GenAI", "Data Engineering", "Machine Learning", "Full Stack & Analytics"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative z-10 border-b border-white/10 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-6 text-xs font-mono tracking-widest text-zinc-400">
          <span className="text-red-500 font-bold">04 /</span>
          <span className="uppercase text-zinc-300">SELECTED WORK</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-10">
          Projects I owned end to end
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? "bg-red-600 text-white font-bold shadow-md shadow-red-950/30"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-7 sm:p-8 rounded-3xl bg-[#0c0c0c] border border-white/10 hover:border-red-500/50 transition-all flex flex-col justify-between group hover:shadow-2xl hover:shadow-red-950/20"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 text-xs font-mono">
                  <span className="text-red-400 font-bold px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20">
                    {project.badge}
                  </span>
                  <span className="text-zinc-500">{project.date}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 group-hover:text-red-400 hover:underline transition-colors"
                    title="View GitHub repository"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 shrink-0" />
                  </a>
                </h3>

                {/* Short Description */}
                <p className="text-zinc-300 text-xs sm:text-sm font-mono leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Bullets */}
                <div className="space-y-2.5 mb-8">
                  {project.highlights.slice(0, 2).map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-zinc-400 font-mono">
                      <span className="text-red-500 font-bold">―</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/5 mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/5 text-[11px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono font-bold text-red-400 hover:text-red-300 flex items-center gap-1.5"
                  >
                    <span>VIEW SPECS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 transition-all"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white border border-red-500/30 transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="bg-[#0e0e0e] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl shadow-red-950/40 relative font-mono text-xs">
              
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-400 font-bold px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20">
                  {activeModalProject.badge}
                </span>
                <span className="text-zinc-500">{activeModalProject.date}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-4 pr-10">
                {activeModalProject.title}
              </h3>

              <div className="space-y-4 text-zinc-300 leading-relaxed mb-6">
                <p>{activeModalProject.fullDescription}</p>

                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-2">
                    Key Engineering Achievements
                  </span>
                  {activeModalProject.highlights.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-zinc-300">
                      <span className="text-red-500 font-bold">―</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <span className="text-zinc-500 uppercase block text-[10px] mb-2">TECHNOLOGY STACK</span>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-red-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white border border-white/10 text-xs"
                >
                  Close
                </button>
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW REPOSITORY</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;
