import React from "react";
import { X, Check, Cpu, ExternalLink } from "lucide-react";
import { Project } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop glass overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
        />

        {/* Modal content container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-bg-card border border-border-soft rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 text-text-main scrollbar-thin"
        >
          {/* Header Image */}
          <div className="relative h-64 md:h-80 w-full overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover object-center opacity-40 filter brightness-90 saturate-120"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/45 to-transparent" />
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-bg-navbar/80 text-text-secondary hover:text-text-accent border border-border-soft transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Categorization and title overlay */}
            <div className="absolute bottom-6 left-6 md:left-10 z-10">
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-accent bg-text-accent/10 px-2.5 py-1 rounded border border-text-accent/20">
                  {project.category}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary bg-bg-hover-soft px-2.5 py-1 rounded border border-border-soft">
                  Duración: {project.duration}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-text-title">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Detailed left 2-columns */}
            <div className="md:col-span-2 flex flex-col gap-8">
              {/* Description */}
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-3">La Misión</h3>
                <p className="text-base text-text-main leading-relaxed font-sans">
                  {project.fullDescription}
                </p>
              </div>

              {/* Core Features */}
              {project.features && (
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-4">
                    Características Destacadas
                  </h3>
                  <div className="flex flex-col gap-3 font-sans text-sm text-text-secondary">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="p-0.5 rounded bg-text-accent/10 border border-text-accent/20 text-text-accent mt-0.5">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture Section */}
              {project.architecture && (
                <div className="p-5 rounded bg-bg-card-hover/60 border border-border-soft">
                  <div className="flex items-center gap-2 mb-3 text-text-accent">
                    <Cpu className="h-5 w-5" />
                    <h4 className="text-sm font-bold uppercase tracking-wide">Ficha de Arquitectura</h4>
                  </div>
                  <p className="text-xs font-mono text-text-secondary leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar Meta columns */}
            <div className="flex flex-col gap-8 bg-bg-card-hover/40 p-6 rounded border border-border-soft h-fit">
              {/* Stack */}
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-4">
                  Tecnologías Utilizadas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-2.5 py-1 bg-bg-card border border-border-soft text-text-main rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              {project.metrics && (
                <div className="border-t border-border-soft pt-6">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-4">
                    Impacto en Métricas
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-bg-card p-3 rounded border border-border-soft">
                        <div className="text-2xl font-display font-extrabold text-text-accent">
                          {metric.value}
                        </div>
                        <div className="text-[10px] uppercase font-bold tracking-wider text-text-secondary mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project client detail */}
              <div className="border-t border-border-soft pt-6 text-xs text-text-secondary flex flex-col gap-2 font-sans">
                <div>
                  <span className="font-semibold text-text-secondary/50 block">Cliente</span>
                  <span className="text-text-main text-sm">{project.clientName}</span>
                </div>
                <div className="mt-2">
                  <span className="font-semibold text-text-secondary/50 block">Servicio del Dashboard</span>
                  <span className="text-text-main text-sm">{project.dashboardService || project.tags.join(" & ")}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Footer of modal */}
          <div className="border-t border-border-soft p-6 bg-bg-card-hover/40 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <span className="text-xs text-text-secondary font-sans">
              ¿Interesado en un desarrollo de nivel similar?
            </span>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              {project.previewUrl && (
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center font-sans text-xs font-bold uppercase tracking-wider bg-text-accent/10 text-text-accent border border-text-accent/30 px-6 py-3 rounded-md hover:bg-text-accent/20 transition-all flex items-center justify-center gap-1.5"
                >
                  Ver Proyecto
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              <button
                onClick={() => {
                  const msg = `¡Hola! Quiero consultar por un proyecto similar a "${project.title}" (${project.category}).`;
                  const url = `https://wa.me/5492914971552?text=${encodeURIComponent(msg)}`;
                  window.open(url, "_blank");
                  onClose();
                }}
                className="w-full sm:w-auto text-center font-sans text-xs font-bold uppercase tracking-wider bg-text-accent text-bg-main px-6 py-3 rounded-md hover:opacity-90 shadow-lg transition-all"
              >
                Consultar por este esquema
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
