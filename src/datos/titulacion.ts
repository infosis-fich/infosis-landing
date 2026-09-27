export interface ModalidadTitulacion {
  nivel: string;
  opciones: string[];
}

export const modalidadesTitulacion: ModalidadTitulacion[] = [
  {
    nivel: "Técnico Superior",
    opciones: ["Proyecto de grado técnico", "Monografía", "Pasantía"],
  },
  {
    nivel: "Licenciatura",
    opciones: [
      "Tesis de grado",
      "Proyecto de grado",
      "Trabajo dirigido",
      "Examen de grado (seminario o diplomado)",
    ],
  },
  {
    nivel: "Graduación directa",
    opciones: ["Excelencia académica", "Buen rendimiento o desempeño"],
  },
];
