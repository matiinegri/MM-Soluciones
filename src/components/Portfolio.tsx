import React, { useState } from "react";
import { projectsData } from "../data/projects";
import { Project } from "../types";
import CaseStudyModal from "./CaseStudyModal";
import { LayoutGrid, FileText, ArrowUpRight, HelpCircle, Eye, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function Portfolio() {
  const [activeView, setActiveView] = useState<"gallery" | "technical">("gallery");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="py-24 md:py-32 bg-bg-main relative overflow-hidden">
      {/* Decorative vertical mesh background borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-soft to-transparent" />
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-border-softer/40 hidden md:block" />
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-border-softer/40 hidden md:block" />

      <div className="px-6 md:px-20 max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with switchable toggle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-text-accent mb-3 block">
              SOFTWARE & DISEÑO DIGITAL
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-text-title">
              Proyectos Destacados
            </h2>
          </div>

          {/* Toggle Button layout */}
          <div className="flex bg-bg-card p-1.5 rounded-lg border border-border-soft shadow-md">
            <button
              onClick={() => setActiveView("gallery")}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-md transition-all duration-200 cursor-pointer ${
                activeView === "gallery"
                  ? "bg-text-accent text-bg-main shadow"
                  : "text-text-secondary hover:text-text-main"
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
              <span>Galería Visual</span>
            </button>
            <button
              onClick={() => setActiveView("technical")}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-md transition-all duration-200 cursor-pointer ${
                activeView === "technical"
                  ? "bg-text-accent text-bg-main shadow"
                  : "text-text-secondary hover:text-text-main"
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Fichas Técnicas</span>
            </button>
          </div>
        </div>

        {/* Dynamic portfolio layouts */}
        {activeView === "gallery" ? (
          /* STANDARD GRID VIEW conforming to Image 1 */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-end h-[400px] md:h-[480px] rounded-xl overflow-hidden border border-border-soft bg-bg-card shadow-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Wrapper referrerPolicy="no-referrer" according to instructions */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 filter brightness-95 saturate-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/65 to-transparent" />
                </div>

                <div className="absolute top-5 right-5 flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold uppercase tracking-wider bg-bg-card/85 backdrop-blur-sm border border-border-soft text-text-accent px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Info Overlay Panel */}
                <div className="relative p-6 md:p-8 flex flex-col justify-end z-10">
                  <div className="font-mono text-xs uppercase tracking-wide text-text-secondary mb-1.5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-text-accent animate-ping" />
                    <span>{project.category}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-text-title mb-3 group-hover:text-text-accent transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-text-secondary/90 line-clamp-2 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Action launchers */}
                  <div className="flex items-center justify-between gap-4 mt-auto">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-text-accent group/link">
                      <span>Conocer Desarrollo</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </div>
                    {project.previewUrl && (
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-text-accent text-bg-main hover:opacity-95 shadow-sm transition-all"
                      >
                        Ver Proyecto
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* MASTERTECHNICAL LIST VIEW conforming to Image 2 */
          <div className="flex flex-col gap-12 md:gap-16">
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-bg-card border border-border-soft rounded-xl p-6 md:p-10 shadow-xl"
              >
                {/* Visual Image left cols */}
                <div className="lg:col-span-2 relative h-64 lg:h-full rounded-lg overflow-hidden border border-border-soft shadow-inner group">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover filter saturate-115"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-navbar/80 to-transparent lg:hidden" />
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 px-4 py-2 rounded bg-text-accent text-bg-main font-semibold text-xs">
                      <Eye className="h-4 w-4" />
                      <span>Ver Detalles</span>
                    </div>
                  </button>
                </div>

                {/* Technical Specs detail cols */}
                <div className="lg:col-span-3 flex flex-col justify-between">
                  <div>
                    {/* Header Stack */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-soft pb-4 mb-6">
                      <div className="flex gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] font-bold tracking-wider text-text-main bg-bg-card-hover px-2 py-1 rounded border border-border-soft uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="text-xs text-text-accent font-semibold uppercase tracking-wider">
                        ★ {project.category}
                      </div>
                    </div>

                    {/* Headline and Full Description */}
                    <h3 className="font-display text-2xl md:text-3xl font-extrabold text-text-title mb-4">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed mb-8">
                      {project.fullDescription}
                    </p>

                    {/* Key metrics grid */}
                    <div className="grid grid-cols-3 gap-4 border-t border-border-soft pt-6 mb-8">
                      {project.metrics?.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <div className="font-display text-xl md:text-2xl font-extrabold text-text-accent">
                            {metric.value}
                          </div>
                          <div className="text-[10px] uppercase font-bold tracking-widest text-text-secondary/80 mt-1 leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-soft gap-4">
                    <div className="flex items-center gap-6">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="font-sans text-xs font-bold uppercase tracking-wider text-text-accent flex items-center gap-2 hover:underline cursor-pointer"
                      >
                        <span>Conocer Desarrollo</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                      {project.previewUrl && (
                        <a
                          href={project.previewUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-text-accent text-bg-main hover:opacity-95 shadow-sm transition-all"
                        >
                          Ver Proyecto
                        </a>
                      )}
                    </div>

                    <span className="text-[10px] font-mono text-text-secondary/50 hidden sm:inline">
                      DESPLIEGUE CONTINUO ACTIVO
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* CASE STUDY MODAL DIALOG */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
