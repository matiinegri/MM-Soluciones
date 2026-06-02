import React, { useState } from "react";
import { capabilitiesData } from "../data/services";
import { ProposalSelection } from "../types";
import { Check, Coins, Calendar, Calculator, Info, FileText, ArrowRight, X } from "lucide-react";
import { motion } from "motion/react";

interface BudgetBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyQuote: (quoteText: string) => void;
}

export default function BudgetBuilder({ isOpen, onClose, onApplyQuote }: BudgetBuilderProps) {
  const [selection, setSelection] = useState<ProposalSelection>({
    capabilitiesSelected: ["paginas-web"],
    techScale: "startup",
    supportPlan: "none"
  });

  const [currency, setCurrency] = useState<"USD" | "ARS">("USD");
  const exchangeRate = 1400;

  if (!isOpen) return null;

  // Toggle capabilities
  const handleToggleCapability = (id: string) => {
    setSelection((prev) => {
      const isSelected = prev.capabilitiesSelected.includes(id);
      let updatedList = [];
      if (isSelected) {
        // keep at least one
        if (prev.capabilitiesSelected.length === 1) return prev;
        updatedList = prev.capabilitiesSelected.filter((item) => item !== id);
      } else {
        updatedList = [...prev.capabilitiesSelected, id];
      }
      return { ...prev, capabilitiesSelected: updatedList };
    });
  };

  // Calculations
  const selectedCapabilitiesData = capabilitiesData.filter((item) =>
    selection.capabilitiesSelected.includes(item.id)
  );

  const basePriceSum = selectedCapabilitiesData.reduce((acc, curr) => acc + curr.basePriceUSD, 0);
  const subscriptionSum = selectedCapabilitiesData.reduce((acc, curr) => acc + (curr.monthlySubscriptionUSD || 0), 0);
  const totalWeeks = selectedCapabilitiesData.reduce((acc, curr) => acc + curr.estimatedWeeks, 0);

  // Scaler multiplier
  const scaleMultipliers = {
    startup: 1.0,
    growth: 1.25,
    enterprise: 1.5
  };
  const multiplier = scaleMultipliers[selection.techScale];

  // Support item plane price
  const supportPrices = {
    none: 0,
    standard: 30, // SLA Plus
    premium: 80  // SLA Crítico
  };
  const supportPrice = supportPrices[selection.supportPlan];

  // Final compile Formula
  const finalPrice = Math.round(basePriceSum * multiplier + supportPrice);

  const formatPrice = (usdAmount: number) => {
    if (currency === "ARS") {
      const arsAmount = usdAmount * exchangeRate;
      return `${arsAmount.toLocaleString("es-AR", { style: "currency", currency: "ARS", minimumFractionDigits: 0, maximumFractionDigits: 0 })} ARS`;
    }
    return `$${usdAmount.toLocaleString()} USD`;
  };

  // Compile detailed text report for the contact form
  const handleCompileToContact = () => {
    let summary = `🚨 PETICIÓN DE COTIZACIÓN AUTOMÁTICA\n\n`;
    summary += `Servicios Seleccionados:\n`;
    selectedCapabilitiesData.forEach((s) => {
      const subText = s.monthlySubscriptionUSD ? ` + Abono: ${formatPrice(s.monthlySubscriptionUSD)}/mes` : "";
      summary += `- ${s.title} (Base: ${formatPrice(s.basePriceUSD)}${subText}, Est: ${s.estimatedWeeks === 0.7 ? "5 días" : `${s.estimatedWeeks} sem`})\n`;
    });
    summary += `\nEscala del Proyecto: ${selection.techScale.toUpperCase()} (Factor x${multiplier})\n`;
    summary += `Plan de Soporte: ${selection.supportPlan.toUpperCase()} (+${formatPrice(supportPrice)})\n`;
    summary += `------------------------------------\n`;
    summary += `TOTAL ESTIMADO: ${formatPrice(finalPrice)}\n`;
    if (subscriptionSum > 0) {
      summary += `ABONO MENSUAL TOTAL: ${formatPrice(subscriptionSum)}/mes\n`;
    }
    summary += `TIEMPO TOTAL ACUMULADO: ~${totalWeeks === 0.7 ? "5 días" : `${totalWeeks.toFixed(1)} semanas`}\n`;
    
    onApplyQuote(summary);
    onClose();
    
    // Scroll to contact form
    const elem = document.getElementById("contacto");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#060e20]/80 backdrop-blur-sm cursor-pointer" 
      />

      {/* Slide-over panel content */}
      <div className="relative w-full max-w-2xl h-full bg-[#131b2e] border-l border-white/10 shadow-2xl flex flex-col z-10 text-[#dae2fd]">
        
        {/* Header toolbar */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0b1326]">
          <div className="flex items-center gap-2.5">
            <Calculator className="h-5 w-5 text-[#00f0ff]" />
            <h3 className="font-display text-lg font-bold text-white">
              Cotizador de Proyectos
            </h3>
          </div>
          <div className="flex items-center gap-4">
            {/* Currency Toggle */}
            <div className="flex bg-[#171f33] p-1 rounded-md border border-white/5 select-none">
              <button
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1 text-[10px] font-bold rounded transition-all cursor-pointer ${
                  currency === "USD" ? "bg-[#00f0ff] text-[#002022]" : "text-[#b9cacb] hover:text-white"
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency("ARS")}
                className={`px-3 py-1 text-[10px] font-bold rounded transition-all cursor-pointer ${
                  currency === "ARS" ? "bg-[#00f0ff] text-[#002022]" : "text-[#b9cacb] hover:text-white"
                }`}
              >
                ARS
              </button>
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/5 text-[#b9cacb] hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Configurations content body (scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
          
          {/* Step 1: Select Capability Modules */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-xs uppercase font-extrabold tracking-widest text-[#00f0ff] block">
                1. Selección de Módulos & Sistemas
              </label>
              <span className="text-[10px] text-[#b9cacb] italic">Haz clic para agregar</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capabilitiesData.map((cap) => {
                const isSelected = selection.capabilitiesSelected.includes(cap.id);
                return (
                  <button
                    key={cap.id}
                    onClick={() => handleToggleCapability(cap.id)}
                    className={`flex items-start gap-3 p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#00f0ff]/10 border-[#00f0ff] text-white shadow-[0_0_12px_rgba(0,240,255,0.15)]"
                        : "bg-[#171f33]/40 border-white/5 text-[#b9cacb] hover:border-white/10 hover:bg-[#171f33]/60"
                    }`}
                  >
                    <div className={`p-1 rounded mt-0.5 border select-none ${
                      isSelected ? "bg-[#00f0ff] text-[#002022] border-[#00f0ff]" : "bg-white/5 text-transparent border-white/10"
                    }`}>
                      <Check className="h-3 w-3" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-white">{cap.title}</div>
                      <div className="text-[10px] text-[#b9cacb]/80 mt-1 line-clamp-1">{cap.description}</div>
                      <div className="text-[11px] font-semibold text-[#00f0ff]/90 mt-1.5 flex flex-wrap gap-1 items-center">
                        <span>{formatPrice(cap.basePriceUSD)}</span>
                        {cap.monthlySubscriptionUSD && (
                          <span className="text-[#b9cacb] font-normal text-[10px]">
                            + {formatPrice(cap.monthlySubscriptionUSD)}/mes
                          </span>
                        )}
                        <span className="text-white/20">•</span>
                        <span>{cap.estimatedWeeks === 0.7 ? "5 días" : `${cap.estimatedWeeks} sem`}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Choose Technical Scale */}
          <div>
            <label className="text-xs uppercase font-extrabold tracking-widest text-[#00f0ff] block mb-4">
              2. Escala & Complejidad del Software
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "startup", title: "Startup", factor: "x1.0", desc: "Mínimo Producto Viable (MVP), velocidad extrema." },
                { id: "growth", title: "Crecimiento", factor: "x1.25", desc: "Soporte de alta concurrencia, APIs robustas." },
                { id: "enterprise", title: "Corporación", factor: "x1.5", desc: "Monitoreo, arquitecturas tolerantes a fallos." }
              ].map((scale) => {
                const isSelected = selection.techScale === scale.id;
                return (
                  <button
                    key={scale.id}
                    onClick={() => setSelection({ ...selection, techScale: scale.id as any })}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#00f0ff]/10 border-[#00f0ff] text-white shadow-[0_0_10px_rgba(0,240,255,0.1)]"
                        : "bg-[#171f33]/40 border-white/5 text-[#b9cacb] hover:border-white/10"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-white">{scale.title}</span>
                      <span className="text-[10px] text-[#00f0ff] font-mono font-bold">{scale.factor}</span>
                    </div>
                    <p className="text-[10px] text-[#b9cacb] leading-tight line-clamp-2">{scale.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Choose Support Level */}
          <div>
            <label className="text-xs uppercase font-extrabold tracking-widest text-[#00f0ff] block mb-4">
              3. Acuerdo de Nivel de Servicio (SLA) & Soporte
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "none", title: "Estándar", price: "Garantía", desc: "30 días de garantía post-despliegue." },
                { id: "standard", title: "SLA Plus", price: `+${formatPrice(30)}`, desc: "Soporte preferencial y mantenimiento de 5hs/mes." },
                { id: "premium", title: "SLA Crítico", price: `+${formatPrice(80)}`, desc: "Monitoreo 24/7 y tiempo de respuesta urgente < 2hrs." }
              ].map((plan) => {
                const isSelected = selection.supportPlan === plan.id;
                return (
                  <button
                    key={plan.id}
                    onClick={() => setSelection({ ...selection, supportPlan: plan.id as any })}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#00f0ff]/10 border-[#00f0ff] text-white shadow-[0_0_10px_rgba(0,240,255,0.1)]"
                        : "bg-[#171f33]/40 border-white/5 text-[#b9cacb] hover:border-white/10"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-white">{plan.title}</span>
                      <span className="text-[10px] text-[#00f0ff] font-mono font-bold">{plan.price}</span>
                    </div>
                    <p className="text-[10px] text-[#b9cacb] leading-tight line-clamp-2">{plan.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Compilation Footer Panel showing pricing breakdown */}
        <div className="p-6 border-t border-white/10 bg-[#0b1326] flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#b9cacb] block font-sans">Tiempo acumulado estimado</span>
              <span className="text-sm font-semibold text-white flex items-center gap-1.5 mt-0.5">
                <Calendar className="h-4 w-4 text-[#00f0ff]" />
                {totalWeeks === 0.7 ? "5 días" : `~${totalWeeks.toFixed(1)} semanas`} de desarrollo activo
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#b9cacb] block font-sans">Presupuesto Estimado</span>
              <span className="text-2xl font-display font-extrabold text-[#00f0ff] tracking-tight filter drop-shadow-[0_2px_8px_rgba(0,240,255,0.3)] block">
                {formatPrice(finalPrice)}
              </span>
              {subscriptionSum > 0 && (
                <span className="text-xs text-white/70 block mt-0.5">
                  + {formatPrice(subscriptionSum)}/mes de abono
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleCompileToContact}
            className="w-full font-sans text-xs font-extrabold uppercase tracking-widest bg-[#00f0ff] text-[#002022] py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Iniciar Consultoría con este Plan</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="text-[10px] font-mono text-[#b9cacb]/50 text-center uppercase tracking-wide">
            * ESTA ES UNA SIMULACIÓN PRELIMINAR SUJETA A REVISIÓN TÉCNICA REFINADA.
          </p>
        </div>

      </div>
    </div>
  );
}
