import React, { useState } from "react";
import { capabilitiesData } from "../data/services";
import {
  Globe,
  Building2,
  FolderHeart,
  Database,
  Cpu,
  Bot,
  CalendarDays,
  BarChart3,
  Monitor,
  Smartphone,
  ShoppingCart,
  Lightbulb,
  ChevronRight,
  Sparkles,
  ArrowRight,
  X,
  Compass
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Helper component for dynamic icon rendering
const iconMap: Record<string, React.ComponentType<any>> = {
  Globe,
  Building2,
  FolderHeart,
  Database,
  Cpu,
  Bot,
  CalendarDays,
  BarChart3,
  Monitor,
  Smartphone,
  ShoppingCart,
  Lightbulb
};

function CapabilityIcon({ name, ...props }: { name: string; className?: string }) {
  const IconComponent = iconMap[name] || Globe;
  return <IconComponent {...props} />;
}

const WHATSAPP_NUMBER = "5492914971552";

function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

export default function Services() {
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);
  const [selectedCapabilityId, setSelectedCapabilityId] = useState<string | null>(null);

  const selectedCapDetail = selectedCapabilityId 
    ? capabilitiesData.find(c => c.id === selectedCapabilityId) 
    : null;

  // The 5 pipeline steps for Metodología modal
  const pipelineSteps = [
    { step: "01", title: "Descubrimiento & Alineación", text: "Estudio exhaustivo de tus objetivos de marca y requerimientos funcionales técnicos. Trazamos un rumbo sin ambigüedades." },
    { step: "02", title: "Arquitectura & Wireframing", text: "Estructuramos las bases de datos, especificamos la infraestructura cloud y bosquejamos flujos estéticos de usuario de alta fidelidad." },
    { step: "03", title: "Modelado & Frontend", text: "Escritura iterativa de código modular en TypeScript, optimizando renders, transiciones dinámicas y APIs asíncronas." },
    { step: "04", title: "Auditoría de Calidad (Higiene de Datos)", text: "Pruebas de estrés para confirmar la respuesta y estabilidad total ante picos eventuales de tráfico concurrente." },
    { step: "05", title: "Despliegue y Soporte", text: "Lanzamiento automatizado asistido por CI/CD e implementación de analíticas continuas de salud." }
  ];

  return (
    <section id="servicios" className="py-24 md:py-32 bg-bg-main relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#006970]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="px-6 md:px-20 max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-text-accent mb-4.5 block">
            Nuestra Experiencia
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-title mb-6 leading-tight">
            Solucionamos tus problemas técnicos y hacemos realidad tu visión digital.
          </h2>
          <div className="h-1.5 w-16 bg-text-accent mx-auto rounded-full" />
        </div>

        {/* Action Controls Toolbar under Header */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => openWhatsApp("¡Hola! Quiero consultar por un proyecto de desarrollo digital.")}
            className="px-6 py-3.5 bg-text-accent text-bg-main font-sans text-xs font-bold uppercase tracking-wider rounded-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4" />
            <span>Consultar Proyecto</span>
          </button>

          <button
            onClick={() => setIsMethodologyOpen(true)}
            className="px-6 py-3.5 bg-bg-card border border-border-soft text-text-main font-sans text-xs font-bold uppercase tracking-wider rounded-md hover:bg-bg-card-hover transition-all cursor-pointer flex items-center gap-2"
          >
            <Compass className="h-4 w-4 text-text-accent" />
            <span>Ver Metodología de Trabajo</span>
          </button>
        </div>

        {/* ARSENAL TECNOLÓGICO: 11 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {capabilitiesData.map((cap, idx) => {
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedCapabilityId(cap.id)}
                className="group p-6 md:p-8 rounded-xl bg-bg-card border border-border-soft cursor-pointer hover:border-text-accent/30 hover:bg-bg-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Icon of Capability */}
                  <div className="h-12 w-12 rounded-lg bg-bg-card-hover border border-border-soft flex items-center justify-center text-text-accent group-hover:bg-text-accent/10 group-hover:border-text-accent/20 transition-all shadow-md mb-6">
                    <CapabilityIcon name={cap.iconName} className="h-6 w-6" />
                  </div>

                  {/* Title and brief description */}
                  <h3 className="font-display text-lg font-bold text-text-title group-hover:text-text-accent transition-colors mb-2 flex items-center justify-between">
                    <span>{cap.title}</span>
                    <ChevronRight className="h-4 w-4 text-text-secondary/30 group-hover:text-text-accent group-hover:translate-x-1 transition-all" />
                  </h3>
                  
                  <p className="font-sans text-xs text-text-secondary leading-relaxed mb-6 font-medium">
                    {cap.description}
                  </p>
                </div>

                {/* Tech chips footer inside the card as shown in the mockup image */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-softer">
                  {cap.typicalStack.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[9px] font-semibold text-text-secondary/80 bg-bg-card-hover px-2 py-0.5 rounded border border-border-softer uppercase"
                    >
                      {item}
                    </span>
                  ))}
                  {cap.typicalStack.length > 3 && (
                    <span className="font-mono text-[9px] font-semibold text-text-accent bg-text-accent/5 px-1.5 py-0.5 rounded">
                      +{cap.typicalStack.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CALL TO ACTION CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-gradient-to-r from-bg-card via-bg-card-hover to-bg-card p-8 md:p-14 border border-border-soft text-center overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-text-accent/5 blur-3xl rounded-full w-96 h-96 -top-1/2 left-1/2 -translate-x-1/2 pointer-events-none" />

          <span className="text-[10px] font-bold uppercase tracking-widest text-text-accent mb-4.5 block font-mono">
            SOLUCIONES A MEDIDA
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-extrabold text-text-title mb-6 max-w-2xl mx-auto leading-snug">
            ¿Listo para actualizar tu software o lanzar una nueva idea?
          </h3>
          <p className="font-sans text-sm text-text-secondary max-w-xl mx-auto mb-10">
            Agendemos una reunión para analizar tu proyecto, detectar oportunidades y definir la mejor solución tecnológica.
          </p>

          <button
            onClick={() => {
              const elem = document.getElementById("contacto");
              if (elem) elem.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-sans text-xs font-bold uppercase tracking-widest bg-text-accent text-bg-main px-8 py-4 rounded-md hover:scale-[1.03] hover:shadow-lg transition-all cursor-pointer flex items-center gap-2.5 mx-auto"
          >
            <span>Hablemos de tu Proyecto</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

      </div>

      {/* DETAILED MODAL: METHODOLOGY WORKFLOW TIMELINE */}
      <AnimatePresence>
        {isMethodologyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMethodologyOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative bg-bg-card border border-border-soft rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl z-10 text-text-main"
            >
              <div className="p-6 border-b border-border-soft flex justify-between items-center bg-bg-card-hover">
                <div className="flex items-center gap-2">
                  <Compass className="h-5 w-5 text-text-accent" />
                  <h3 className="font-display text-lg font-bold text-text-title">
                    Nuestra Metodología de Desarrollo
                  </h3>
                </div>
                <button
                  onClick={() => setIsMethodologyOpen(false)}
                  className="p-1.5 rounded-full hover:bg-bg-hover-soft text-text-secondary transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 md:p-10 max-h-[70vh] overflow-y-auto flex flex-col gap-8">
                <p className="text-sm text-text-secondary leading-relaxed font-sans mb-4">
                  Garantizamos excelencia dividiendo su proyecto en fases sutilmente conectadas, sosteniendo retroalimentación recurrente para asegurar una alineación técnica impecable.
                </p>

                <div className="relative border-l border-border-soft pl-6 ml-4 flex flex-col gap-10">
                  {pipelineSteps.map((step) => (
                    <div key={step.step} className="relative">
                      {/* Floating glowing dot on the Timeline */}
                      <span className="absolute -left-[35px] top-0 h-6 w-6 rounded-full bg-text-accent border-4 border-bg-card flex items-center justify-center text-[10px] font-bold text-bg-main shadow font-display">
                        {step.step}
                      </span>
                      <h4 className="font-display text-sm font-bold text-text-title mb-2">
                        {step.title}
                      </h4>
                      <p className="font-sans text-xs text-text-secondary leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-bg-card-hover p-6 border-t border-border-soft flex items-center justify-end">
                <button
                  onClick={() => setIsMethodologyOpen(false)}
                  className="px-5 py-2.5 bg-bg-card border border-border-soft text-text-main font-sans text-xs font-semibold rounded hover:bg-bg-card-hover cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DETAILED DRILLDOWN DRAWER/MODAL: DETAILED OPTION DETAILS */}
      <AnimatePresence>
        {selectedCapDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCapabilityId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="relative bg-bg-card border border-border-soft rounded-xl w-full max-w-lg p-6 md:p-8 z-10 text-text-main shadow-2xl"
            >
              <button
                onClick={() => setSelectedCapabilityId(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-bg-hover-soft text-text-secondary cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-md bg-text-accent/10 text-text-accent flex items-center justify-center border border-text-accent/20">
                  <CapabilityIcon name={selectedCapDetail.iconName} className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-text-secondary/60 font-mono">
                    Módulo de Servicio: {selectedCapDetail.category}
                  </span>
                  <h4 className="font-display text-xl font-bold text-text-title leading-tight">
                    {selectedCapDetail.title}
                  </h4>
                </div>
              </div>

              <p className="font-sans text-sm text-text-secondary/90 leading-relaxed mb-6">
                {selectedCapDetail.detailedDescription}
              </p>

              <div className="space-y-4 border-t border-border-soft pt-5 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold text-text-secondary/60 block font-mono">
                    Stack Preferido
                  </span>
                  <div className="flex gap-2 flex-wrap mt-1.5">
                    {selectedCapDetail.typicalStack.map(stackItem => (
                      <span key={stackItem} className="text-xs font-semibold px-2.5 py-1 bg-bg-card-hover rounded border border-border-soft text-text-main">
                        {stackItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border-soft">
                <button
                  onClick={() => {
                    const msg = `¡Hola! Quiero consultar por el servicio de ${selectedCapDetail.title}.`;
                    openWhatsApp(msg);
                    setSelectedCapabilityId(null);
                  }}
                  className="flex-1 py-3 text-center rounded bg-text-accent text-bg-main font-semibold text-xs uppercase tracking-wider hover:opacity-90 cursor-pointer"
                >
                  Consultar por este servicio
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
