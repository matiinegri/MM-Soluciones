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
    <section id="contacto" className="py-24 md:py-32 bg-[#060e20] relative overflow-hidden">
      {/* Decorative backing grids */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00f0ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="px-6 md:px-20 max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT 5 COLORS: Direct Contact Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff] mb-4.5 block">
                Let's Build Together
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6">
                Hablemos de tu próximo proyecto.
              </h2>
              <p className="font-sans text-sm text-[#b9cacb] leading-relaxed mb-10 max-w-md">
                ¿Tienes una idea, un problema técnico complejo o quieres automatizar tu flujo operativo actual? Estamos listos para sumarnos a tu equipo como socios tecnológicos estratégicos.
              </p>
            </div>

            {/* Micro Communications Interactive Cards */}
            <div className="flex flex-col gap-4">
              
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/5492911234567?text=Hola!%20Me%20interesa%20conversar%20sobre%20un%20proyecto%20digital."
                target="_blank"
                rel="noreferrer"
                className="group p-5 rounded-lg bg-[#131b2e]/60 border border-white/5 hover:border-[#25d366]/30 hover:bg-[#131b2e]/80 transition-all flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-md bg-[#25d366]/10 text-[#25d366] flex items-center justify-center border border-[#25d366]/20 group-hover:bg-[#25d366] group-hover:text-white transition-all">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-1">
                    WhatsApp Directo
                  </h4>
                  <p className="text-xs text-[#b9cacb]/80 group-hover:text-white transition-colors">
                    Iniciar conversación por WhatsApp de inmediato.
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:contacto@mmsoluciones.dev?subject=Consulta%20de%20Proyecto%20Digital"
                className="group p-5 rounded-lg bg-[#131b2e]/60 border border-white/5 hover:border-[#00f0ff]/30 hover:bg-[#131b2e]/80 transition-all flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-md bg-[#00f0ff]/10 text-[#00f0ff] flex items-center justify-center border border-[#00f0ff]/20 group-hover:bg-[#00f0ff] group-hover:text-[#002022] transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-1">
                    Correo Electrónico
                  </h4>
                  <p className="text-xs text-[#b9cacb]/80 group-hover:text-white transition-colors">
                    Envíanos tus especificaciones (respuestas en &lt; 24hs).
                  </p>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://instagram.com/mmsoluciones"
                target="_blank"
                rel="noreferrer"
                className="group p-5 rounded-lg bg-[#131b2e]/60 border border-white/5 hover:border-[#e1306c]/30 hover:bg-[#131b2e]/80 transition-all flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-md bg-[#e1306c]/10 text-[#e1306c] flex items-center justify-center border border-[#e1306c]/20 group-hover:bg-[#e1306c] group-hover:text-white transition-all">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-1">
                    Instagram Direct
                  </h4>
                  <p className="text-xs text-[#b9cacb]/80 group-hover:text-white transition-colors">
                    Escríbenos por mensaje directo de Instagram.
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* RIGHT 7 COLORS: Interactive Web Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#131b2e]/80 border border-white/10 rounded-xl p-6 md:p-10 backdrop-blur-sm shadow-xl">
              
              <AnimatePresence mode="wait">
                {submissionState === "idle" && (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    {form.serviceSelected === "cotizacion" && (
                      <div className="p-3 bg-[#00f0ff]/10 border border-[#00f0ff]/20 rounded text-xs text-[#00f0ff] flex items-center gap-2 font-semibold">
                        <Sparkles className="h-4 w-4 animate-pulse" />
                        <span>¡Presupuesto adjuntado del Cotizador con éxito! Revisa o añade comentarios en el campo inferior.</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name Line */}
                      <div>
                        <label className="text-[10px] uppercase font-bold tracking-widest text-[#b9cacb] block mb-2">
                          Su Nombre *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Ej. Juan Pérez"
                          className="w-full bg-[#171f33] border border-white/10 rounded px-4 py-3 placeholder-white/20 text-white text-sm focus:border-[#00f0ff] focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Email Line */}
                      <div>
                        <label className="text-[10px] uppercase font-bold tracking-widest text-[#b9cacb] block mb-2">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Ej. juan@empresa.com"
                          className="w-full bg-[#171f33] border border-white/10 rounded px-4 py-3 placeholder-white/20 text-white text-sm focus:border-[#00f0ff] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Company Line */}
                      <div>
                        <label className="text-[10px] uppercase font-bold tracking-widest text-[#b9cacb] block mb-2">
                          Empresa / Organización (Opcional)
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Ej. Acme Corp"
                          className="w-full bg-[#171f33] border border-white/10 rounded px-4 py-3 placeholder-white/20 text-white text-sm focus:border-[#00f0ff] focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Service Category Selector */}
                      <div>
                        <label className="text-[10px] uppercase font-bold tracking-widest text-[#b9cacb] block mb-2">
                          Tipo de Desarrollo Requerido
                        </label>
                        <select
                          name="serviceSelected"
                          value={form.serviceSelected}
                          onChange={handleChange}
                          className="w-full bg-[#171f33] border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-[#00f0ff] focus:outline-none transition-colors"
                        >
                          <option value="general">Consultas Generales o Soporte</option>
                          {form.serviceSelected === "cotizacion" && (
                            <option value="cotizacion">Presupuesto Simulado del Cotizador</option>
                          )}
                          {capabilitiesData.map((cap) => (
                            <option key={cap.id} value={cap.id}>
                              {cap.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message content lines */}
                    <div>
                      <label className="text-[10px] uppercase font-bold tracking-widest text-[#b9cacb] block mb-2">
                        Detalles del Proyecto *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Contanos tu idea o las especificaciones que necesitas resolver..."
                        className="w-full bg-[#171f33] border border-white/10 rounded px-4 py-3 placeholder-white/20 text-white text-sm font-sans focus:border-[#00f0ff] focus:outline-none transition-colors scrollbar-thin resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full font-sans text-xs font-bold uppercase tracking-wider bg-[#00f0ff] text-[#002022] py-4 rounded hover:bg-[#00dcf8] hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>Enviar Mensaje</span>
                    </button>
                  </motion.form>
                )}

                {submissionState === "submitting" && (
                  <motion.div
                    key="submitting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col gap-6 py-8"
                  >
                    <div className="flex items-center gap-3">
                      <Loader2 className="h-5 w-5 text-[#00f0ff] animate-spin" />
                      <span className="font-mono text-xs text-[#00f0ff]">PROCESANDO PETICIÓN EN CURSO...</span>
                    </div>

                    <div className="bg-[#0b1326] rounded border border-white/5 p-4 flex flex-col gap-2 h-64 overflow-y-auto">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 border-b border-white/5 pb-2 mb-2">
                        <Terminal className="h-4 w-4" />
                        <span>M_M_SOLUCIONES_TERMINAL_LOGS v1.0.4</span>
                      </div>
                      {logs.map((log, idx) => (
                        <div key={idx} className="font-mono text-xs text-[#b9cacb] leading-relaxed animate-fade-in">
                          {log}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {submissionState === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center p-8 gap-6"
                  >
                    <div className="h-16 w-16 bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] rounded-full flex items-center justify-center shadow-lg">
                      <Check className="h-8 w-8 text-[#00f0ff]" />
                    </div>

                    <div>
                      <h3 className="font-display text-2xl font-bold text-white mb-2">
                        ¡Mensaje Entregado con Éxito!
                      </h3>
                      <p className="font-sans text-sm text-[#b9cacb] max-w-md">
                        Gracias por ponerte en contacto. Sincronizamos las trayectorias de inmediato. Nuestro equipo técnico responderá tu solicitud en un lapso menor a 24 horas hábiles.
                      </p>
                    </div>

                    <button
                      onClick={() => setSubmissionState("idle")}
                      className="mt-4 font-sans text-xs font-semibold uppercase tracking-wider bg-[#171f33] border border-white/10 hover:bg-white/5 text-white px-6 py-2.5 rounded transition-all cursor-pointer"
                    >
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
