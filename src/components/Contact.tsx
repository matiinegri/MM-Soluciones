import React, { useState, useEffect } from "react";
import { ContactMessage } from "../types";
import { capabilitiesData } from "../data/services";
import { Mail, MessageSquare, Instagram, Send, Check, Terminal, Loader2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactProps {
  prefilledMessage: string;
  onClearPrefilledMessage: () => void;
}

export default function Contact({ prefilledMessage, onClearPrefilledMessage }: ContactProps) {
  const [form, setForm] = useState<ContactMessage>({
    name: "",
    email: "",
    company: "",
    serviceSelected: "general",
    message: ""
  });

  const [logs, setLogs] = useState<string[]>([]);
  const [submissionState, setSubmissionState] = useState<"idle" | "submitting" | "success">("idle");

  // Keep state in sync if prefilledMessage changes
  useEffect(() => {
    if (prefilledMessage) {
      setForm((prev) => ({
        ...prev,
        message: prefilledMessage,
        serviceSelected: "cotizacion"
      }));
    }
  }, [prefilledMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSubmissionState("submitting");
    setLogs([]);

    // Simulate high-tech terminal trace logging feedback for dramatic digital craftsmanship
    const steps = [
      "⚡ [DISPATCH] Inicializando canal seguro SSL/TLS con M|M Soluciones...",
      "🔬 [ANALYZE] Sanitizando entrada del cliente y parseando campos estructurales...",
      "📂 [ROUTING] Categorizando requerimientos funcionales...",
      "⚙️ [COMPILE] Construyendo reporte ejecutivo de factibilidad técnica...",
      "🚀 [TRANSMIT] Despachando mensaje del ecosistema..."
    ];

    steps.forEach((text, i) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, text]);
      }, (i + 1) * 600);
    });

    setTimeout(() => {
      setSubmissionState("success");
      onClearPrefilledMessage();
      setForm({
        name: "",
        email: "",
        company: "",
        serviceSelected: "general",
        message: ""
      });
    }, (steps.length + 1) * 600);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-bg-main relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-text-accent/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-text-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="px-6 md:px-20 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-text-accent mb-4.5 block">
              Conectemos Hoy
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-extrabold text-text-title mb-6 leading-tight">
              ¿Tenés un proyecto en mente? Hablemos de software.
            </h3>
            <p className="font-sans text-sm text-text-secondary leading-relaxed mb-10 max-w-md">
              Completá el formulario o contactanos por nuestros canales directos. Respondemos en menos de 24 horas hábiles.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/5492911234567"
                target="_blank"
                rel="noreferrer"
                className="group p-5 rounded-lg bg-bg-card border border-border-soft hover:border-[#25d366]/30 hover:bg-bg-card-hover transition-all flex items-center gap-4 shadow-sm"
              >
                <div className="h-10 w-10 rounded-md bg-[#25d366]/10 text-[#25d366] flex items-center justify-center border border-[#25d366]/20 group-hover:bg-[#25d366] group-hover:text-white transition-all">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-text-title group-hover:text-[#25d366] transition-colors">WhatsApp</h4>
                  <p className="text-xs text-text-secondary/80 group-hover:text-text-main transition-colors">+54 9 291 123-4567</p>
                </div>
              </a>

              <a
                href="mailto:contacto@mmsoluciones.dev"
                className="group p-5 rounded-lg bg-bg-card border border-border-soft hover:border-text-accent/30 hover:bg-bg-card-hover transition-all flex items-center gap-4 shadow-sm"
              >
                <div className="h-10 w-10 rounded-md bg-text-accent/10 text-text-accent flex items-center justify-center border border-text-accent/20 group-hover:bg-text-accent group-hover:text-[#002022] transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-text-title group-hover:text-text-accent transition-colors">Email Directo</h4>
                  <p className="text-xs text-text-secondary/80 group-hover:text-text-main transition-colors">contacto@mmsoluciones.dev</p>
                </div>
              </a>

              <a
                href="https://instagram.com/mmsoluciones"
                target="_blank"
                rel="noreferrer"
                className="group p-5 rounded-lg bg-bg-card border border-border-soft hover:border-[#e1306c]/30 hover:bg-bg-card-hover transition-all flex items-center gap-4 shadow-sm"
              >
                <div className="h-10 w-10 rounded-md bg-[#e1306c]/10 text-[#e1306c] flex items-center justify-center border border-[#e1306c]/20 group-hover:bg-[#e1306c] group-hover:text-white transition-all">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-text-title group-hover:text-[#e1306c] transition-colors">Instagram</h4>
                  <p className="text-xs text-text-secondary/80 group-hover:text-text-main transition-colors">@mmsoluciones</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-bg-card border border-border-soft rounded-xl p-6 md:p-10 shadow-xl">
              
              <AnimatePresence mode="wait">
                {submissionState === "idle" && (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    {form.serviceSelected === "cotizacion" && (
                      <div className="p-3 bg-text-accent/10 border border-text-accent/20 rounded text-xs text-text-accent flex items-center gap-2 font-semibold">
                        <Sparkles className="h-4 w-4 animate-pulse" />
                        <span>¡Presupuesto adjuntado del Cotizador con éxito! Revisa o añade comentarios en el campo inferior.</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] uppercase font-bold tracking-widest text-text-secondary block mb-2">Su Nombre *</label>
                        <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Ej. Juan Pérez" className="w-full bg-bg-card-hover border border-border-soft rounded px-4 py-3 placeholder-text-secondary/40 text-text-main text-sm focus:border-text-accent focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-bold tracking-widest text-text-secondary block mb-2">Correo Electrónico *</label>
                        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="Ej. juan@empresa.com" className="w-full bg-bg-card-hover border border-border-soft rounded px-4 py-3 placeholder-text-secondary/40 text-text-main text-sm focus:border-text-accent focus:outline-none transition-colors" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] uppercase font-bold tracking-widest text-text-secondary block mb-2">Empresa / Organización (Opcional)</label>
                        <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Ej. Acme Corp" className="w-full bg-bg-card-hover border border-border-soft rounded px-4 py-3 placeholder-text-secondary/40 text-text-main text-sm focus:border-text-accent focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-bold tracking-widest text-text-secondary block mb-2">Tipo de Desarrollo Requerido</label>
                        <select name="serviceSelected" value={form.serviceSelected} onChange={handleChange} className="w-full bg-bg-card-hover border border-border-soft rounded px-4 py-3 text-text-main text-sm focus:border-text-accent focus:outline-none transition-colors">
                          <option value="general" className="bg-bg-card text-text-main">Consultas Generales o Soporte</option>
                          {form.serviceSelected === "cotizacion" && <option value="cotizacion" className="bg-bg-card text-text-main">Presupuesto Simulado del Cotizador</option>}
                          {capabilitiesData.map((cap) => (<option key={cap.id} value={cap.id} className="bg-bg-card text-text-main">{cap.title}</option>))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold tracking-widest text-text-secondary block mb-2">Detalles del Proyecto *</label>
                      <textarea name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Contanos tu idea o las especificaciones que necesitas resolver..." className="w-full bg-bg-card-hover border border-border-soft rounded px-4 py-3 placeholder-text-secondary/40 text-text-main text-sm font-sans focus:border-text-accent focus:outline-none transition-colors scrollbar-thin resize-none" />
                    </div>

                    <button type="submit" className="w-full font-sans text-xs font-bold uppercase tracking-wider bg-text-accent text-bg-main py-4 rounded hover:opacity-90 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
                      <Send className="h-4 w-4" /> <span>Enviar Mensaje</span>
                    </button>
                  </motion.form>
                )}

                {submissionState === "submitting" && (
                  <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6 py-8">
                    <div className="flex items-center gap-3">
                      <Loader2 className="h-5 w-5 text-text-accent animate-spin" />
                      <span className="font-mono text-xs text-text-accent">PROCESANDO PETICIÓN EN CURSO...</span>
                    </div>
                    <div className="bg-bg-navbar rounded border border-border-soft p-4 flex flex-col gap-2 h-64 overflow-y-auto">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-text-secondary/40 border-b border-border-soft pb-2 mb-2">
                        <Terminal className="h-3.5 w-3.5" />
                        <span>LOGS DE ACCIÓN DE ENVÍO</span>
                      </div>
                      {logs.map((log, idx) => (
                        <div key={idx} className="font-mono text-xs text-text-main leading-relaxed animate-fade-in">
                          <span className="text-text-accent">&gt;</span> {log}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {submissionState === "success" && (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="h-16 w-16 bg-text-accent/10 border border-text-accent/20 text-text-accent rounded-full flex items-center justify-center shadow-lg">
                      <Check className="h-8 w-8" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-text-title mt-6">¡Consulta Recibida!</h4>
                    <p className="font-sans text-sm text-text-secondary">Tu requerimiento ha sido registrado en nuestra cola de entrada de alta prioridad. Nos comunicaremos a la brevedad.</p>
                    <button onClick={() => setSubmissionState("idle")} className="mt-4 font-sans text-xs font-semibold uppercase tracking-wider bg-bg-card border border-border-soft hover:bg-bg-card-hover text-text-main px-6 py-2.5 rounded transition-all cursor-pointer">
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
