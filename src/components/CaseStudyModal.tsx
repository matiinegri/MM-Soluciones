import React from "react";
import { X, Check, Database, Cpu, Milestone, ExternalLink } from "lucide-react";
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
          className="absolute inset-0 bg-[#060e20]/90 backdrop-blur-md cursor-pointer"
        />

        {/* Modal content container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-[#171f33] border border-white/10 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 text-[#dae2fd] scrollbar-thin scrollbar-thumb-white/10"
        >
          {/* Header Image */}
          <div className="relative h-64 md:h-80 w-full overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover object-center opacity-40 filter brightness-90 saturate-120"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171f33] via-[#171f33]/40 to-transparent" />
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#0b1326]/80 text-[#b9cacb] hover:text-[#00f0ff] border border-white/5 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Categorization and title overlay */}
            <div className="absolute bottom-6 left-6 md:left-10 z-10">
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00f0ff] bg-[#00f0ff]/10 px-2.5 py-1 rounded border border-[#00f0ff]/20">
                  {project.category}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#b9cacb] bg-white/5 px-2.5 py-1 rounded border border-white/5">
                  Duración: {project.duration}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white drop-shadow-md">
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
                <h3 className="text-xs uppercase tracking-widest font-bold text-[#b9cacb] mb-3">La Misión</h3>
                <p className="text-base text-[#dae2fd]/90 leading-relaxed font-sans">
                  {project.fullDescription}
                </p>
              </div>

              {/* Core Features */}
              {project.features && (
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-[#b9cacb] mb-4">
                    Características Destacadas
                  </h3>
                  <div className="flex flex-col gap-3 font-sans text-sm text-[#b9cacb]">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="p-0.5 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] mt-0.5">
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
                <div className="p-5 rounded bg-[#131b2e]/60 border border-white/5">
                  <div className="flex items-center gap-2 mb-3 text-[#00f0ff]">
                    <Cpu className="h-5 w-5" />
                    <h4 className="text-sm font-bold uppercase tracking-wide">Ficha de Arquitectura</h4>
                  </div>
                  <p className="text-xs font-mono text-[#b9cacb]/90 leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar Meta columns */}
            <div className="flex flex-col gap-8 bg-[#131b2e]/40 p-6 rounded border border-white/5 h-fit">
              {/* Stack */}
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold text-[#b9cacb] mb-4">
                  Tecnologías Utilizadas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-2.5 py-1 bg-[#171f33] border border-white/10 text-white rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              {project.metrics && (
                <div className="border-t border-white/5 pt-6">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-[#b9cacb] mb-4">
                    Impacto en Métricas
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-[#171f33] p-3 rounded border border-white/5">
                        <div className="text-2xl font-display font-extrabold text-[#00f0ff]">
                          {metric.value}
                        </div>
                        <div className="text-[10px] uppercase font-bold tracking-wider text-[#b9cacb] mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project client detail */}
              <div className="border-t border-white/5 pt-6 text-xs text-[#b9cacb] flex flex-col gap-2 font-sans">
                <div>
                  <span className="font-semibold text-white/50 block">Cliente</span>
                  <span className="text-[#dae2fd] text-sm">{project.clientName}</span>
                </div>
                <div className="mt-2">
                  <span className="font-semibold text-white/50 block">Servicio del Dashboard</span>
                  <span className="text-[#dae2fd] text-sm">{project.dashboardService || project.tags.join(" & ")}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Footer of modal */}
          <div className="border-t border-white/5 p-6 bg-[#131b2e]/40 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <span className="text-xs text-[#b9cacb] font-sans">
              ¿Interesado en un desarrollo de nivel similar?
            </span>
            <button
              onClick={() => {
                onClose();
                const elem = document.getElementById("contacto");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto text-center font-sans text-xs font-bold uppercase tracking-wider bg-[#00f0ff] text-[#002022] px-6 py-3 rounded-md hover:bg-[#00dbe9] shadow-lg transition-all"
            >
              Consultar por este esquema
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
