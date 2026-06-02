import { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "liga-cubb",
    title: "Liga Universitaria",
    subtitle: "Plataforma Web de Gestión Deportiva",
    description: "Plataforma integral de gestión deportiva orientada a simplificar la logística, fixture y estadísticas de torneos amateur locales.",
    fullDescription: "Desarrollar una plataforma integral de gestión deportiva orientada a simplificar la logística, fixture y estadísticas de torneos amateur locales. El sistema centraliza la información para eliminar las planillas de papel, ofreciendo una experiencia digital fluida tanto para los organizadores de la liga como para los jugadores de Bahía Blanca.",
    tags: ["Gestión Deportiva", "Liga", "Plataforma Web"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUqj-kWsUHhNlsBu02U3eDj9uS_hnmOMr3CBFHkUhs5CAG4oXI8CghfwGCW2efQ-jyEoskZuAeBl3ZBhDoiDf_CoO-_x9GBsZ_K_6cf7cO97ASL6Iu0aoaJSxNSD31orI1iNMd_R9PnxluCOz5CtAQ0ITaAu1NtFJ1Q0GlkMjDKYAA113lHsPC1zTfaPX7zXsDj8sZP7gFM0f4NSDt9ryoNjaJMHpovoZHNUNjlB04NA1i3z8eCPP0rCuMbFqck9KBBc_Ko9Q7WjPE",
    techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "Node.js", "SQL"],
    category: "Deportes",
    clientName: "Liga Universitaria",
    duration: "12 semanas",
    dashboardService: "Plataforma Web de Gestión Deportiva",
    metrics: [
      { label: "Carga de Resultados", value: "-90%" },
      { label: "Interacción de Usuarios", value: "+240%" },
      { label: "Digitalización", value: "100%" }
    ],
    features: [
      "Gestión y generación automática de fixtures dinámicos.",
      "Tablas de posiciones, goleadores y sanciones automatizadas.",
      "Registro histórico anual de las competiciones.",
      "Panel de administración para el control de inscripciones y pagos."
    ],
    architecture: "Aplicación web con arquitectura SPA (Single Page Application) conectada a una API REST centralizada, optimizada para cargas rápidas de datos estadísticos concurrentes durante las jornadas de partidos."
  },
  {
    id: "freelancers-bb",
    title: "FreelancersBB",
    subtitle: "Marketplace de Servicios Locales",
    description: "Plataforma digital de vinculación hiperlocal diseñada para conectar de forma directa a profesionales y freelancers locales con clientes.",
    fullDescription: "Crear una plataforma digital de vinculación hiperlocal diseñada para conectar de forma directa a los profesionales de oficios y freelancers de Bahía Blanca con clientes que demandan sus servicios. La aplicación busca potenciar el empleo local reduciendo la brecha digital y ofreciendo un espacio seguro de contratación y visibilidad.",
    tags: ["Marketplace", "Freelancers", "Vinculación"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZjsX3L9a2QZ4zpMI6NENR2GssN1eo4waHQ3lSMuqwrVzh5D9GgsSqmKE1BtjCb5vRZBNkLyVW3ebvDOuV5IEq69EA3yUYnhvrBN_IzoJUXw7w-kujboXV0oKb6k7BxrJ9twS_bQERlQeE_uclekYEE_hmraFcpWoRkQsuf9tT9O5b9bsBmxa7qcyc89imTFy-oENkc8X4jzPEKg-QZ3DSmqIGoWsDKw3W1DU4lsCkiwvIaDOIgZ4FketUhanG0IkRve1x3itzDW0p",
    techStack: ["TypeScript", "Node.js", "React", "Tailwind CSS"],
    category: "Servicios",
    clientName: "Profesionales de Bahía Blanca",
    duration: "10 semanas",
    dashboardService: "Marketplace de Servicios Locales",
    metrics: [
      { label: "Visibilidad Digital", value: "+45%" },
      { label: "Tiempo de Búsqueda", value: "-50%" },
      { label: "Conexiones Mensuales", value: "+300" }
    ],
    features: [
      "Perfiles profesionales categorizados con sistema de reputación local.",
      "Buscador avanzado con filtros por zona, especialidad y disponibilidad.",
      "Canal de contacto directo e integrado mediante enlaces dinámicos.",
      "Portafolio digital de trabajos anteriores para validar la experiencia.",
      "Panel autogestionable para que los trabajadores actualicen su oferta."
    ],
    architecture: "Landing page dinámica y modular optimizada para SEO local, con carga diferida de componentes (lazy loading) para garantizar velocidad extrema en conexiones móviles de baja señal."
  },
  {
    id: "personal-brand",
    title: "Portfolio Web",
    subtitle: "Portafolio de Marca Personal",
    description: "Portafolio digital minimalista y de alta gama para destacar la marca personal, proyectos y trayectoria de Tizi Surop.",
    fullDescription: "Diseñar y desarrollar un portafolio digital minimalista y de alta gama para destacar la marca personal, proyectos y trayectoria del realizador audiovisual Tizi Surop. La web funciona como una carta de presentación interactiva pensada para captar clientes de alto valor, priorizando el rendimiento visual y la fluidez estética de las piezas artísticas.",
    tags: ["Portafolio", "Audiovisual", "Minimalista"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoB2v2LDJa_qqy8lnm3ChWHRjVrXSW6E59ygGRW9oCL2QaITQIjfEU6vjGXqdr-sp93YAjgW-3XoFpG3Gj3zELVTTh0VoK1GgvmSJEvEewg31mANLVC2j7B-6NfYud9stXlc7RIsqh9O7dI-UXz6ykkPJhgOeMdobmUiAZSyC2X8_BB67e-gv8u6FbykAnkP8cBKL6BKj-f7D6qtyIMqYVEupReTD_jqRb415Xs2wyBsRfcGtDka7pLOhflPx8wIrYxmuFvUWXKOmD",
    techStack: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    category: "Arte & Medios",
    clientName: "Tiziano Surop",
    duration: "6 semanas",
    dashboardService: "Portafolio de Marca Personal",
    metrics: [
      { label: "Rendimiento de Carga", value: "98%" },
      { label: "Tasa de Conversión", value: "+60%" },
      { label: "Reducción de Rebote", value: "-40%" }
    ],
    features: [
      "Galería multimedia de alta velocidad optimizada para carga de video y fotografía.",
      "Animaciones fluidas de transición entre secciones para mejorar la retención.",
      "Diseño hiper-responsivo enfocado al consumo de contenidos en smartphones.",
      "Formulario de contacto inteligente integrado para captación directa de leads.",
      "Estructura limpia orientada al posicionamiento orgánico (SEO) de marca personal."
    ],
    architecture: "Sitio web estático de alto rendimiento con optimización agresiva de assets visuales y código modular, minimizando las peticiones de red para un acceso instantáneo."
  },
  {
    id: "automotores",
    title: "Página Web Concesionaria",
    subtitle: "E-Commerce & Catálogo Automotriz",
    description: "Showroom digital y catálogo web interactivo para la exhibición de stock de vehículos y consultas financieras.",
    fullDescription: "Desarrollar un showroom digital y catálogo web interactivo para la concesionaria Damico Automotores, permitiendo centralizar la exhibición de su stock de vehículos usados y de selección. La plataforma automatiza la actualización del catálogo de autos y simplifica el embudo de consultas financieras por cada unidad disponible.",
    tags: ["E-Commerce", "Catálogo", "Automotriz"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIgK3wNY-LMeQqCcpYjeSKbdyWIAL-9tyGH48xRuJS5RXTsBjZVpTRdmBo-9yn5xxUTqtw6vkJFeiYW-5esTU5MpWOhvQwo4DDEczx4sCVYCPmQ-iQFPTR_Ce2D81N8LxC8kVqsXuj37G3DWiwR3XoZdBJUFjUAvhjDDh_WMuq1e04DqmcUJy6Ga7T0SsZdYb444Edx8wMnh3OdlyWBIN87pJ1nEPEDQQaYE66nnO23Z4ztI4DyyiI1BPOeFN9I9etQHl0uUnSkzIP",
    techStack: ["Python", "SQL", "React", "Node.js"],
    category: "E-Commerce",
    clientName: "Damico Automotores",
    duration: "16 semanas",
    dashboardService: "E-Commerce & Catálogo Automotriz",
    metrics: [
      { label: "Consultas Comerciales", value: "+35%" },
      { label: "Stock Sincronizado", value: "100%" },
      { label: "Tiempo de Ventas", value: "-25%" }
    ],
    features: [
      "Catálogo digital de vehículos dinámico con filtros por marca, modelo, año y precio.",
      "Fichas técnicas completas por unidad con galerías de fotos HD integradas.",
      "Cotizador express integrado para simulación rápida de planes de financiación.",
      "Botón de acción directa vinculado a asesores de venta asignados por vehículo.",
      "Panel de administración intuitivo para alta, baja y modificación de stock en minutos."
    ],
    architecture: "Sistema web montado sobre un backend de administración flexible, conectado a una base de datos optimizada para consultas de inventario veloces y filtros cruzados en tiempo real."
  }
];
