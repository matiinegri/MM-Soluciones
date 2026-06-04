import React from "react";
import { Mail, MessageSquare, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-bg-main relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-text-accent/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-text-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="px-6 md:px-20 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-text-accent mb-4.5 block">
            Conectemos Hoy
          </span>
          <h3 className="font-display text-3xl md:text-4xl font-extrabold text-text-title mb-6 leading-tight">
            ¿Tenés un proyecto en mente? Hablemos de software.
          </h3>
          <p className="font-sans text-sm text-text-secondary leading-relaxed mb-12 max-w-md">
            Contactanos por cualquiera de nuestros canales directos. Respondemos en menos de 24 horas hábiles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
            <a
              href="https://wa.me/5492914971552?text=¡Hola! Quiero consultar por un proyecto digital."
              target="_blank"
              rel="noreferrer"
              className="group p-4 rounded-lg bg-bg-card border border-border-soft hover:border-[#25d366]/30 hover:bg-bg-card-hover transition-all flex items-center gap-3 shadow-sm"
            >
              <div className="h-10 w-10 rounded-md bg-[#25d366]/10 text-[#25d366] flex items-center justify-center border border-[#25d366]/20 group-hover:bg-[#25d366] group-hover:text-white transition-all shrink-0">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="text-left min-w-0">
                <h4 className="font-display text-sm font-bold text-text-title group-hover:text-[#25d366] transition-colors">WhatsApp</h4>
                <p className="text-xs text-text-secondary/80 group-hover:text-text-main transition-colors truncate">+54 291 497-1552</p>
              </div>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mmsoluciones.dev@gmail.com&su=Consulta%20sobre%20Servicios%20-%20M%7CM%20Soluciones"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-lg bg-bg-card border border-border-soft hover:border-text-accent/30 hover:bg-bg-card-hover transition-all flex items-center gap-3 shadow-sm"
            >
              <div className="h-10 w-10 rounded-md bg-text-accent/10 text-text-accent flex items-center justify-center border border-text-accent/20 group-hover:bg-text-accent group-hover:text-[#002022] transition-all shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="text-left min-w-0">
                <h4 className="font-display text-sm font-bold text-text-title group-hover:text-text-accent transition-colors">Email Directo</h4>
                <p className="text-xs text-text-secondary/80 group-hover:text-text-main transition-colors truncate">mmsoluciones.dev@gmail.com</p>
              </div>
            </a>

            <a
              href="https://instagram.com/mm.solucionesdigitales"
              target="_blank"
              rel="noreferrer"
              className="group p-4 rounded-lg bg-bg-card border border-border-soft hover:border-[#e1306c]/30 hover:bg-bg-card-hover transition-all flex items-center gap-3 shadow-sm"
            >
              <div className="h-10 w-10 rounded-md bg-[#e1306c]/10 text-[#e1306c] flex items-center justify-center border border-[#e1306c]/20 group-hover:bg-[#e1306c] group-hover:text-white transition-all shrink-0">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="text-left min-w-0">
                <h4 className="font-display text-sm font-bold text-text-title group-hover:text-[#e1306c] transition-colors">Instagram</h4>
                <p className="text-xs text-text-secondary/80 group-hover:text-text-main transition-colors truncate">@mm.solucionesdigitales</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
