export interface ImagenGaleria {
  src: string;
  alt: string;
  nombre: string;
  grupo: "Comunidad" | "Capacitación" | "Cómputo" | "Hardware y redes";
}

export const galeriaInstitucional: ImagenGaleria[] = [
  {
    src: "/general/actividad-estudiantil.webp",
    alt: "Actividad estudiantil de la Dirección de Carrera.",
    nombre: "Actividad estudiantil",
    grupo: "Comunidad",
  },
  {
    src: "/general/comunidad-fich.webp",
    alt: "Comunidad de la Facultad Integral del Chaco.",
    nombre: "Comunidad FICH",
    grupo: "Comunidad",
  },
  {
    src: "/general/clase-universitaria.webp",
    alt: "Clase universitaria de informática y sistemas.",
    nombre: "Clase universitaria",
    grupo: "Comunidad",
  },
  {
    src: "/general/actividad-institucional.webp",
    alt: "Actividad institucional de la comunidad universitaria.",
    nombre: "Actividad institucional",
    grupo: "Comunidad",
  },
  ...[
    "Sesión de capacitación tecnológica",
    "Trabajo colaborativo en capacitación",
    "Formación práctica en informática",
    "Actividad académica en laboratorio",
    "Participación estudiantil en capacitación",
    "Aprendizaje aplicado con tecnología",
    "Comunidad en formación tecnológica",
    "Capacitación en herramientas digitales",
    "Práctica guiada de informática",
    "Encuentro de aprendizaje tecnológico",
    "Actividad de formación profesional",
  ].map((nombre, indice) => ({
    src: `/lab-capacitacion/capacitacion-${String(indice + 1).padStart(2, "0")}.webp`,
    alt: `${nombre} en la Dirección de Carrera de Informática y Sistemas.`,
    nombre,
    grupo: "Capacitación" as const,
  })),
  ...[
    "Práctica en el laboratorio de cómputo",
    "Estaciones de trabajo para aprendizaje técnico",
    "Actividad práctica de programación",
    "Trabajo aplicado en computación",
    "Laboratorio para proyectos estudiantiles",
    "Experiencia práctica con tecnologías digitales",
  ].map((nombre, indice) => ({
    src: `/lab-computo/laboratorio-${String(indice + 1).padStart(2, "0")}.webp`,
    alt: `${nombre} de la FICH · UAGRM.`,
    nombre,
    grupo: "Cómputo" as const,
  })),
  ...[
    "Práctica de hardware y redes",
    "Mantenimiento de equipos informáticos",
    "Trabajo práctico de redes",
    "Soporte técnico y configuración",
    "Aprendizaje aplicado en infraestructura tecnológica",
  ].map((nombre, indice) => ({
    src: `/lab-hardware/hardware-${String(indice + 1).padStart(2, "0")}.webp`,
    alt: `${nombre} del Laboratorio de Hardware y Redes.`,
    nombre,
    grupo: "Hardware y redes" as const,
  })),
];
