import { ServiceCapability } from "../types";

export const capabilitiesData: ServiceCapability[] = [
  {
    id: "paginas-web",
    title: "Páginas Web",
    description: "Presencia digital de alto impacto, optimizada para conversión y velocidad extrema.",
    detailedDescription: "Sitios corporativos e institucionales autogestionables que reflejan la identidad de tu marca. Optimizados con SEO avanzado e interfaces ultra-responsivas, listos en tiempo récord gracias al desarrollo impulsado por IA.",
    iconName: "Globe",
    category: "Frontend",
    typicalStack: ["React", "Vite", "Tailwind CSS", "Motion"],
    estimatedWeeks: 2,
    basePriceUSD: 200
  },
  {
    id: "portfolios-web",
    title: "Portfolios Web",
    description: "Exhibiciones inmersivas y dinámicas para profesionales independientes y creativos.",
    detailedDescription: "Un portafolio dinámico, minimalista y elegante dotado de micro-interacciones. Diseñado para captar clientes de alto valor y destacar tu marca personal.",
    iconName: "FolderHeart",
    category: "Diseño & UX",
    typicalStack: ["React", "Motion", "Tailwind CSS", "Vite"],
    estimatedWeeks: 0.7,
    basePriceUSD: 100
  },
  {
    id: "gestion-negocios",
    title: "Gestión de Negocios",
    description: "ERP y sistemas a medida para centralizar el control financiero, recursos y ventas.",
    detailedDescription: "Planificadores modulares integrados que permiten administrar ingresos, egresos, cobros y clientes de forma centralizada con reportes automatizados.",
    iconName: "Briefcase",
    category: "Gestión",
    typicalStack: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    estimatedWeeks: 3,
    basePriceUSD: 350
  },
  {
    id: "gestion-stock",
    title: "Gestión de Stock",
    description: "Sistemas de inventario en tiempo real con sincronización multicanal de productos.",
    detailedDescription: "Mantén el control exacto de tus productos en depósito. Incluye panel intuitivo para alta, baja y alertas automáticas de reposición + mantenimiento mensual.",
    iconName: "Database",
    category: "Logística",
    typicalStack: ["React", "Node.js", "Express", "SQL"],
    estimatedWeeks: 2,
    basePriceUSD: 300,
    monthlySubscriptionUSD: 20
  },
  {
    id: "chatbots",
    title: "Chatbots Automatizados",
    description: "Asistentes de IA integrados a WhatsApp o Web para atención al cliente y pre-venta 24/7.",
    detailedDescription: "Agentes conversacionales que responden consultas frecuentes, recopilan datos de leads calificados y agendan citas automáticamente sin intervención humana directa.",
    iconName: "Bot",
    category: "Inteligencia Artificial",
    typicalStack: ["Gemini API", "Node.js", "WhatsApp API", "Python"],
    estimatedWeeks: 2,
    basePriceUSD: 300,
    monthlySubscriptionUSD: 25
  },
  {
    id: "plataformas-turnos",
    title: "Plataformas de Turnos",
    description: "Sistemas de agendamiento inteligente de citas con recordatorios por WhatsApp.",
    detailedDescription: "Calendario intuitivo integrado donde tus clientes pueden reservar turnos según tu disponibilidad, reduciendo inasistencias de forma automatizada.",
    iconName: "CalendarDays",
    category: "Gestión",
    typicalStack: ["React", "Node.js", "PostgreSQL", "Twilio API"],
    estimatedWeeks: 2,
    basePriceUSD: 300,
    monthlySubscriptionUSD: 20
  },
  {
    id: "software-empresarial",
    title: "Software Empresarial",
    description: "Desarrollo de software y herramientas robustas a medida para automatizar flujos internos.",
    detailedDescription: "Sistemas diseñados específicamente para resolver cuellos de botella operativos en tu pyme o negocio, reduciendo costos mediante automatización moderna.",
    iconName: "Building2",
    category: "Backend",
    typicalStack: ["React", "Node.js", "PostgreSQL", "Docker"],
    estimatedWeeks: 4,
    basePriceUSD: 600
  },
  {
    id: "integraciones",
    title: "Integraciones y Automatizaciones",
    description: "Conexión de sistemas dispares para eliminar tareas manuales y errores humanos.",
    detailedDescription: "Conectamos tu CRM, hojas de cálculo, sistemas de facturación y pasarelas de pago a través de APIs robustas o flujos automáticos inteligentes.",
    iconName: "Cpu",
    category: "Sistemas",
    typicalStack: ["Python", "Node.js", "APIs", "Zapier / Make"],
    estimatedWeeks: 4,
    basePriceUSD: 600
  },
  {
    id: "dashboards",
    title: "Dashboards de Ventas",
    description: "Visualización interactiva de métricas y datos clave en tiempo real.",
    detailedDescription: "Transformamos hojas de cálculo complejas en tableros gráficos de control dinámicos para simplificar la toma de decisiones comerciales en tu negocio.",
    iconName: "BarChart3",
    category: "Inteligencia de Datos",
    typicalStack: ["React", "Recharts", "Node.js", "SQL"],
    estimatedWeeks: 2,
    basePriceUSD: 300
  },
  {
    id: "aplicaciones-escritorio",
    title: "Aplicaciones de Escritorio",
    description: "Software nativo optimizado para entornos de trabajo internos seguros.",
    detailedDescription: "Aplicaciones ejecutables de alto rendimiento para Windows y Mac, ideales para herramientas corporativas que requieren integración de hardware local.",
    iconName: "Monitor",
    category: "Desktop",
    typicalStack: ["Tauri", "Rust", "React", "TypeScript"],
    estimatedWeeks: 4,
    basePriceUSD: 600
  },
  {
    id: "aplicaciones-moviles",
    title: "Aplicaciones Móviles",
    description: "Aplicaciones híbridas para Android e iOS listas para publicación en tiendas.",
    detailedDescription: "Lleva tu negocio al celular de tus usuarios con una aplicación móvil fluida de alto rendimiento y diseño de vanguardia.",
    iconName: "Smartphone",
    category: "Mobile",
    typicalStack: ["React Native", "Expo", "Firebase", "App Store"],
    estimatedWeeks: 4,
    basePriceUSD: 600
  }
];
