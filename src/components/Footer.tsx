import React from "react";
import { LogoSVG } from "./Navbar";
import { Mail, MessageSquare, Instagram, ShieldCheck, Heart } from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-bg-navbar border-t border-border-softer py-12 md:py-20 relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-text-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="px-6 md:px-20 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-border-softer pb-12 md:pb-16 mb-12">
          
          {/* Logo / Brand Info */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div 
              className="flex items-center gap-3 cursor-pointer group w-fit"
              onClick={() => onNavigate("hero")}
            >
              <LogoSVG />
              <span className="font-display text-xl font-bold tracking-tighter text-text-title">
                M<span className="text-text-accent">|</span>M Soluciones
              </span>
            </div>
            <p className="font-sans text-xs text-text-secondary/80 max-w-xs leading-relaxed">
              Diseñamos, optimizamos y desplegamos infraestructuras de software estables y dinámicas. Nuestra dedicación se asienta en la perfección de código y una experiencia inmersiva.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-text-accent">
              Navegación
            </h4>
            <div className="flex flex-col gap-2.5 font-sans text-xs font-semibold text-text-secondary">
              <button onClick={() => onNavigate("hero")} className="text-left hover:text-text-accent transition-colors cursor-pointer">
                Inicio
              </button>
              <button onClick={() => onNavigate("proyectos")} className="text-left hover:text-text-accent transition-colors cursor-pointer">
                Proyectos
              </button>
              <button onClick={() => onNavigate("servicios")} className="text-left hover:text-text-accent transition-colors cursor-pointer">
                Servicios
              </button>
              <button onClick={() => onNavigate("contacto")} className="text-left hover:text-text-accent transition-colors cursor-pointer">
                Contacto
              </button>
            </div>
          </div>

          {/* Contact Directs */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-text-accent">
              Contacto Directo
            </h4>
            <div className="flex flex-col gap-2.5 font-sans text-xs font-semibold text-text-secondary">
              <a href="mailto:contacto@mmsoluciones.dev" className="hover:text-text-accent transition-colors flex items-center gap-2">
                <Mail className="h-4 w-4 text-text-secondary/40" />
                <span>contacto@mmsoluciones.dev</span>
              </a>
              <a href="https://wa.me/5492911234567" target="_blank" rel="noreferrer" className="hover:text-text-accent transition-colors flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-text-secondary/40" />
                <span>+54 9 291 123-4567</span>
              </a>
              <a href="https://instagram.com/mmsoluciones" target="_blank" rel="noreferrer" className="hover:text-text-accent transition-colors flex items-center gap-2">
                <Instagram className="h-4 w-4 text-text-secondary/40" />
                <span>@mmsoluciones</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-mono text-[10px] text-text-secondary/50 uppercase tracking-widest">
            © 2026 M|M Soluciones. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-1.5 text-[10px] text-text-secondary/50 font-mono uppercase tracking-widest">
            <span>Hecho con</span>
            <Heart className="h-3.5 w-3.5 text-text-accent animate-pulse fill-text-accent/20" />
            <span>para el Ecosistema Digital</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
