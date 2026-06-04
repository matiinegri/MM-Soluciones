import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-20 max-w-7xl mx-auto flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background glowing shapes */}
      <div className="absolute inset-0 bg-text-accent/5 blur-[130px] rounded-full w-2/3 h-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-text-accent/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-text-secondary/15 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-card/80 border border-border-soft text-text-accent text-xs font-semibold uppercase tracking-widest mb-8 shadow-md"
      >
        <Sparkles className="h-3.5 w-3.5 animate-pulse" />
        <span>Vanguardia Digital & Software de Alta Precisión</span>
      </motion.div>

      {/* Main Title heading with gorgeous gradients */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-text-title max-w-5xl mb-8 leading-[1.1] tracking-tight relative z-10"
      >
        Transformamos ideas en{" "}
        <span className="text-text-accent filter drop-shadow-[0_2px_10px_var(--text-accent)]">
          experiencias digitales.
        </span>
        
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-sans text-lg md:text-xl text-text-secondary max-w-3xl mb-12 leading-relaxed relative z-10"
      >
        Agencia de soluciones digitales especializada en desarrollo web y diseño
        de producto. Construimos plataformas escalables, rápidas y seguras con
        tecnología de vanguardia.
      </motion.p>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-5 relative z-10 items-center justify-center w-full"
      >
        <button
          onClick={() => onNavigate("proyectos")}
          className="w-full sm:w-auto font-sans text-sm font-bold bg-text-accent text-bg-main px-8 py-4 rounded hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
        >
          <span>Ver Proyectos</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <button
          onClick={() => onNavigate("servicios")}
          className="w-full sm:w-auto font-sans text-sm font-bold bg-bg-card border border-border-soft text-text-main px-8 py-4 rounded hover:bg-bg-card-hover transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Explorar Servicios</span>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 md:mt-20 w-full max-w-5xl p-4 md:p-6 rounded-xl bg-bg-card/60 border border-border-soft backdrop-blur-sm grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center"
      >
        <div className="py-2 md:py-0">
          <div className="font-display text-xl md:text-3xl font-extrabold text-text-accent">+50</div>
          <div className="text-[10px] md:text-xs text-text-secondary uppercase tracking-wider font-semibold mt-1">Lanzamientos</div>
        </div>
        <div className="py-2 md:py-0 border-l border-border-soft pl-4 md:pl-6">
          <div className="font-display text-xl md:text-3xl font-extrabold text-text-accent">99.9%</div>
          <div className="text-[10px] md:text-xs text-text-secondary uppercase tracking-wider font-semibold mt-1">Uptime de Sistemas</div>
        </div>
        <div className="py-2 md:py-0 md:border-l border-border-soft md:pl-6">
          <div className="font-display text-xl md:text-3xl font-extrabold text-text-accent">100%</div>
          <div className="text-[10px] md:text-xs text-text-secondary uppercase tracking-wider font-semibold mt-1">Código Limpio</div>
        </div>
        <div className="py-2 md:py-0 border-l border-border-soft pl-4 md:pl-6">
          <div className="font-display text-xl md:text-3xl font-extrabold text-text-accent">&lt;1s</div>
          <div className="text-[10px] md:text-xs text-text-secondary uppercase tracking-wider font-semibold mt-1">Carga de Interfaz</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={() => onNavigate("proyectos")}
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-text-secondary">Saber más</span>
        <ChevronDown className="h-4 w-4 text-text-accent" />
      </motion.div>
    </section>
  );
}
