import { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "liga-cubb",
    title: "Liga Universitaria",
    subtitle: "Plataforma Web de Gestión Deportiva",
    description: "Plataforma integral de gestión deportiva orientada a simplificar la logística, fixture y estadísticas de torneos amateur locales.",
    fullDescription: "Desarrollar una plataforma integral de gestión deportiva orientada a simplificar la logística, fixture y estadísticas de torneos amateur locales. El sistema centraliza la información para eliminar las planillas de papel, ofreciendo una experiencia digital fluida tanto para los organizadores de la liga como para los jugadores de Bahía Blanca.",
    tags: ["Gestión Deportiva", "Liga", "Plataforma Web"],
    imageUrl: "/liga-universitaria.jpg",
    previewUrl: "https://ligacubb.com",
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
    imageUrl: "/freelancersbb.png",
    previewUrl: "https://www.freelancersbb.com.ar",
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
    description: "Portafolio digital minimalista y de alta gama para destacar la marca personal, proyectos y trayectoria de Tiziano Surop.",
    fullDescription: "Diseñar y desarrollar un portafolio digital minimalista y de alta gama para destacar la marca personal, proyectos y trayectoria del realizador audiovisual Tiziano Surop. La web funciona como una carta de presentación interactiva pensada para captar clientes de alto valor, priorizando el rendimiento visual y la fluidez estética de las piezas artísticas.",
    tags: ["Portafolio", "Audiovisual", "Minimalista"],
    imageUrl: "/tizi-surop.png",
    previewUrl: "https://tezeeditor.com",
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
    imageUrl: "/damico-automotores.png",
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
