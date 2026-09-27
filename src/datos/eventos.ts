export interface Evento {
  id: string;
  nombre: string;
  fechas: string;
  imagen: string;
  textoAlternativoImagen: string;
  diaInicio: string;
  mesInicio: string;
  descripcion: string;
  tipo: string;
}

export const eventos: Evento[] = [
  {
    id: "expociencia-2026",
    nombre: "XV EXPOCIENCIA",
    fechas: "30 de septiembre, 1 y 2 de octubre de 2026",
    imagen: "/eventos/xv-expociencia.webp",
    textoAlternativoImagen:
      "Afiche oficial de la XV EXPOCIENCIA de la Facultad Integral del Chaco, 2026.",
    diaInicio: "30",
    mesInicio: "SEP",
    descripcion:
      "Un espacio de ciencia, innovación, tecnología, desarrollo y emprendimiento.",
    tipo: "Participación institucional",
  },
  {
    id: "infosis-build-fest-2026",
    nombre: "INFOSIS BUILD FEST 2026",
    fechas: "30 de septiembre y 1 de octubre de 2026",
    imagen: "/eventos/infosis-build-fest-2026.webp",
    textoAlternativoImagen:
      "Afiche del INFOSIS BUILD FEST 2026 con fechas e información del evento.",
    diaInicio: "30",
    mesInicio: "SEP",
    descripcion:
      "Primera edición presencial dedicada al desarrollo web con agentes de inteligencia artificial.",
    tipo: "Evento presencial",
  },
];
