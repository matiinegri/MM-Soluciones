/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" ? "light" : "dark";
  });

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Intersection observer to track which section is currently active in viewport
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["proyectos", "servicios", "contacto"];
      const scrollPosition = window.scrollY + 250; // Offset for navbar height

      if (window.scrollY < 200) {
        setActiveSection("hero");
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg-main text-text-main transition-colors duration-300">
      {/* High Fidelity Fixed Navigation Bar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />

      {/* Floating dynamic particles backplane glow */}
      <main className="relative">
        <div id="hero">
          <Hero onNavigate={handleNavigate} />
        </div>

        <Portfolio />

        <Services />

        <Contact />
      </main>

      {/* Corporate Footprint Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
