// ─────────────────────────────────────────────────────────────
// Contenido del sitio — Despacho jurídico El Salvador
// TODO: reemplazar datos de contacto y nombre por los reales
// ─────────────────────────────────────────────────────────────

export const firma = {
  nombre: "Alonso & Vega",
  nombreLargo: "Alonso & Vega — Abogados y Notarios",
  tagline: "Abogados y Notarios · San Salvador",
  // WhatsApp: código país (503) + número, sin '+' ni espacios
  whatsapp: "50370000000",
  email: "contacto@alonsovega.com",
  telefono: "+503 2222 0000",
  direccion: "Col. Escalón, San Salvador, El Salvador",
};

export const whatsappLink = (msg = "Hola, quisiera agendar una consulta legal.") =>
  `https://wa.me/${firma.whatsapp}?text=${encodeURIComponent(msg)}`;

export const stats = [
  { valor: 15, sufijo: "+", label: "Años de ejercicio" },
  { valor: 400, sufijo: "+", label: "Casos gestionados" },
  { valor: 24, sufijo: "h", label: "Tiempo de respuesta" },
  { valor: 100, sufijo: "%", label: "Atención personalizada" },
];

// Áreas de práctica — basadas en servicios reales de bufetes salvadoreños
export const areas = [
  {
    id: "corporativo",
    icon: "building",
    titulo: "Derecho Corporativo y Mercantil",
    resumen:
      "Constitución de sociedades (S.A. de C.V. y de R.L.), inscripción de sucursales extranjeras, fusiones, contratos mercantiles y asesoría societaria continua.",
    puntos: [
      "Constitución e inscripción en el Registro de Comercio (CNR)",
      "Sucursales de sociedades extranjeras",
      "Asociaciones y fundaciones sin fines de lucro",
      "Juntas directivas, actas y gobernanza",
    ],
  },
  {
    id: "notarial",
    icon: "seal",
    titulo: "Derecho Notarial",
    resumen:
      "Servicios notariales autorizados por la Corte Suprema de Justicia: compraventas, poderes, testamentos, matrimonios y más.",
    puntos: [
      "Compraventa de inmuebles y vehículos",
      "Poderes generales y especiales",
      "Testamentos y aceptación de herencia",
      "Matrimonios civiles e hipotecas",
    ],
  },
  {
    id: "laboral",
    icon: "scale",
    titulo: "Derecho Laboral",
    resumen:
      "Asesoría patronal y defensa de trabajadores ante el Ministerio de Trabajo y los tribunales laborales.",
    puntos: [
      "Cálculo de liquidaciones e indemnizaciones",
      "Despidos, renuncias y conciliaciones",
      "Reglamentos internos de trabajo",
      "Representación ante el MTPS y juzgados",
    ],
  },
  {
    id: "propiedad-intelectual",
    icon: "spark",
    titulo: "Propiedad Intelectual y Marcas",
    resumen:
      "Registro y protección de marcas, nombres comerciales y propiedad industrial ante el Registro de la Propiedad Intelectual (CNR).",
    puntos: [
      "Búsqueda de antecedentes registrales",
      "Registro y renovación de marcas",
      "Nombres comerciales y señales de publicidad",
      "Defensa ante oposiciones e infracciones",
    ],
  },
  {
    id: "familia",
    icon: "heart",
    titulo: "Derecho de Familia y Civil",
    resumen:
      "Procesos de familia y civiles con acompañamiento cercano: divorcios, pensiones, sucesiones y contratos.",
    puntos: [
      "Divorcios y cuidado personal de menores",
      "Pensiones alimenticias",
      "Diligencias de sucesión y herencias",
      "Contratos civiles y arrendamientos",
    ],
  },
  {
    id: "compliance",
    icon: "shield",
    titulo: "Cumplimiento y Prevención (LPLDA)",
    resumen:
      "Programas de cumplimiento y prevención de lavado de dinero y activos conforme a la normativa salvadoreña.",
    puntos: [
      "Manuales y políticas de cumplimiento",
      "Debida diligencia de clientes (DDC)",
      "Capacitación a oficialías de cumplimiento",
      "Asesoría ante la UIF y entes reguladores",
    ],
  },
];

// Cómo trabajamos — proceso
export const proceso = [
  {
    n: "01",
    titulo: "Consulta inicial",
    texto:
      "Escuchamos tu caso por WhatsApp o correo. La primera valoración no tiene costo y respondemos en menos de 24 horas.",
  },
  {
    n: "02",
    titulo: "Análisis y estrategia",
    texto:
      "Estudiamos la documentación, identificamos riesgos y te presentamos una ruta clara con tiempos y honorarios definidos.",
  },
  {
    n: "03",
    titulo: "Gestión del caso",
    texto:
      "El abogado que firma tu caso lo lleva directamente. Sin intermediarios, con reportes de avance en cada etapa.",
  },
  {
    n: "04",
    titulo: "Resolución y seguimiento",
    texto:
      "Cerramos el asunto y quedamos disponibles para el seguimiento posterior y cualquier trámite derivado.",
  },
];

// Servicios notariales frecuentes (lista detallada)
export const notariado = [
  "Compraventa de inmuebles",
  "Transacciones de vehículos",
  "Constitución de sociedades",
  "Poderes generales y especiales",
  "Testamentos",
  "Aceptación de herencia",
  "Matrimonios civiles",
  "Hipotecas y cauciones",
  "Permisos de salida de menores",
  "Autenticación de firmas",
  "Declaraciones juradas",
  "Protocolización de documentos",
];

// Testimonios de clientes
// TODO: reemplazar por reseñas reales (con autorización del cliente)
export const testimonios = [
  {
    texto:
      "Constituyeron mi sociedad en tiempo récord y me explicaron cada paso sin tecnicismos. El mismo abogado me atendió de principio a fin.",
    autor: "Roberto M.",
    rol: "Emprendedor · San Salvador",
  },
  {
    texto:
      "Llevaron mi liquidación laboral con total transparencia. Sabía exactamente qué esperar y los honorarios fueron los acordados desde el inicio.",
    autor: "Karla A.",
    rol: "Ejecutiva · Santa Tecla",
  },
  {
    texto:
      "Necesitaba un poder para un trámite urgente y me lo resolvieron el mismo día por WhatsApp. Atención rápida y profesional.",
    autor: "José L.",
    rol: "Cliente notarial · Antiguo Cuscatlán",
  },
  {
    texto:
      "Registraron la marca de mi negocio y me guiaron ante una oposición. Ganamos el caso. Recomiendo su criterio técnico.",
    autor: "Daniela R.",
    rol: "Dueña de negocio · San Miguel",
  },
  {
    texto:
      "Un divorcio siempre es difícil, pero su acompañamiento fue cercano y humano. Nunca me sentí como un número más.",
    autor: "Marcela V.",
    rol: "Proceso de familia · San Salvador",
  },
  {
    texto:
      "Asesoraron a nuestra empresa extranjera para abrir sucursal en El Salvador. Dominan la parte registral y respondieron todo a tiempo.",
    autor: "Andrés P.",
    rol: "Gerente regional · Inversión extranjera",
  },
];

// Preguntas frecuentes
export const faqs = [
  {
    q: "¿La primera consulta tiene costo?",
    a: "No. La valoración inicial de tu caso es gratuita. Nos escribes por WhatsApp o el formulario y te respondemos en menos de 24 horas con los siguientes pasos.",
  },
  {
    q: "¿Atienden en todo El Salvador?",
    a: "Sí. Nuestra oficina está en San Salvador, pero gestionamos casos y trámites a nivel nacional. Muchas diligencias las resolvemos de forma remota.",
  },
  {
    q: "¿Cómo cobran sus honorarios?",
    a: "Depende del tipo de asunto. Tras la consulta inicial te entregamos una propuesta con honorarios definidos por adelantado — sin sorpresas ni letra pequeña.",
  },
  {
    q: "¿Puedo enviar mis documentos por WhatsApp?",
    a: "Sí. Puedes compartir la documentación por WhatsApp o correo para una revisión preliminar. Toda la información se maneja con confidencialidad profesional.",
  },
  {
    q: "¿Constituyen sociedades para extranjeros?",
    a: "Sí. Asesoramos a inversionistas extranjeros en la constitución de sociedades, inscripción de sucursales y todos los registros necesarios para operar en El Salvador.",
  },
];

// Temas para el selector de paleta (demo para que el cliente elija).
// id debe coincidir con [data-theme="id"] en global.css. "" = tema por defecto (bronce).
export const temas = [
  { id: "", nombre: "Bronce", bg: "#f9f7f3", accent: "#b68c5a", ink: "#181818", oscuro: false },
  { id: "navy", nombre: "Azul marino", bg: "#f4f6fa", accent: "#1e4e8c", ink: "#0f2a4a", oscuro: false },
  { id: "midnight", nombre: "Azul noche", bg: "#0c1a2e", accent: "#e2b770", ink: "#ffffff", oscuro: true },
  { id: "forest", nombre: "Verde bosque", bg: "#f4f7f4", accent: "#2e6b4f", ink: "#14261c", oscuro: false },
  { id: "burgundy", nombre: "Borgoña", bg: "#faf6f5", accent: "#7a2233", ink: "#24151a", oscuro: false },
  { id: "graphite", nombre: "Grafito", bg: "#f5f5f4", accent: "#52525b", ink: "#1c1c1c", oscuro: false },
  { id: "emerald", nombre: "Esmeralda", bg: "#f2f7f5", accent: "#0e8a6a", ink: "#0f241e", oscuro: false },
  { id: "terracotta", nombre: "Terracota", bg: "#fbf6f1", accent: "#c05f3c", ink: "#2a1c14", oscuro: false },
  { id: "onyx", nombre: "Oro noche", bg: "#0e0e0f", accent: "#c8a15a", ink: "#f5f1e8", oscuro: true },
  { id: "indigo", nombre: "Índigo", bg: "#f5f5fb", accent: "#4f46e5", ink: "#1a1b3a", oscuro: false },
];

export const navLinks = [
  { href: "#areas", label: "Áreas" },
  { href: "#proceso", label: "Proceso" },
  { href: "#despacho", label: "Despacho" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];
