import React, { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export function LogoSVG() {
  return (
    <svg
      viewBox="0 0 256 256"
      className="h-9 w-9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer rounded rect with grand gradient */}
      <rect
        x="12"
        y="12"
        width="232"
        height="232"
        rx="56"
        stroke="url(#gradient-border)"
        strokeWidth="20"
        fill="transparent"
      />
      {/* The Letter M */}
      <path
        d="M60 178V78L128 136L196 78V178"
        stroke="url(#gradient-letter)"
        strokeWidth="22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dashed overlay line on the left vertical stroke of M */}
      <line
        x1="60"
        y1="68"
        x2="60"
        y2="188"
        stroke="#00f0ff"
        strokeWidth="10"
        strokeDasharray="14 10"
        strokeLinecap="round"
      />
      {/* Glow definitions */}
      <defs>
        <linearGradient id="gradient-border" x1="12" y1="12" x2="244" y2="244" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="50%" stopColor="#00b8ff" />
          <stop offset="100%" stopColor="#006970" />
        </linearGradient>
        <linearGradient id="gradient-letter" x1="60" y1="78" x2="196" y2="178" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#dbfcff" />
          <stop offset="50%" stopColor="#7df4ff" />
          <stop offset="100%" stopColor="#00b8ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "proyectos", label: "Proyectos" },
    { id: "servicios", label: "Servicios" },
    { id: "contacto", label: "Contacto" },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0b1326]/80 backdrop-blur-xl border-b border-white/10 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-20 max-w-7xl mx-auto h-20">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleLinkClick("hero")}
        >
          <div className="transition-transform duration-300 group-hover:scale-105">
            <LogoSVG />
          </div>
          <span className="font-display text-2xl font-bold tracking-tighter text-[#dbfcff]">
            M<span className="text-[#00f0ff]">|</span>M Soluciones
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`font-sans text-sm font-semibold tracking-wider transition-colors duration-200 cursor-pointer ${
                activeSection === item.id
                  ? "text-[#00f0ff]"
                  : "text-[#b9cacb] hover:text-[#00f0ff]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleLinkClick("contacto")}
            className="font-sans text-sm font-semibold tracking-wide bg-transparent border border-[#00f0ff] text-[#00f0ff] px-6 py-2 rounded transition-all duration-300 hover:bg-[#00f0ff]/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
          >
            Consultoría
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#dae2fd] hover:text-[#00f0ff] transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0b1326] border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`text-left font-sans text-lg font-medium transition-colors duration-200 py-2 ${
                activeSection === item.id ? "text-[#00f0ff]" : "text-[#b9cacb]"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick("contacto")}
            className="w-full text-center font-sans text-base font-semibold border border-[#00f0ff] text-[#00f0ff] py-3 rounded hover:bg-[#00f0ff]/10 transition-colors"
          >
            Consultoría Gratuita
          </button>
        </div>
      )}
    </header>
  );
}
