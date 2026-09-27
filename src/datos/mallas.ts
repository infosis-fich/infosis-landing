export interface Semestre {
  nombre: string;
  materias: string[];
}

export const mallas = {
  sistemas: [
    {
      nombre: "1.er semestre",
      materias: [
        "Inglés Técnico I",
        "Física I",
        "Introducción a la Informática",
        "Estructuras Discretas",
        "Cálculo I",
      ],
    },
    {
      nombre: "2.º semestre",
      materias: [
        "Inglés Técnico II",
        "Física II",
        "Programación I",
        "Álgebra Lineal",
        "Cálculo II",
      ],
    },
    {
      nombre: "3.er semestre",
      materias: [
        "Administración",
        "Física III",
        "Arquitectura de Computadoras",
        "Programación II",
        "Ecuaciones Diferenciales",
      ],
    },
    {
      nombre: "4.º semestre",
      materias: [
        "Contabilidad",
        "Programación Ensamblador",
        "Estructura de Datos I",
        "Probabilidades y Estadísticas I",
        "Métodos Numéricos",
      ],
    },
    {
      nombre: "5.º semestre",
      materias: [
        "Organización y Métodos",
        "Economía para la Gestión",
        "Estructura de Datos II",
        "Base de Datos I",
        "Probabilidades y Estadísticas II",
        "Administración de Recursos Humanos (electiva)",
      ],
    },
    {
      nombre: "6.º semestre",
      materias: [
        "Finanzas para la Empresa",
        "Sistemas Operativos I",
        "Base de Datos II",
        "Sistema de Información I",
        "Investigación Operativa",
        "Producción y Marketing (electiva)",
      ],
    },
    {
      nombre: "7.º semestre",
      materias: [
        "Redes I",
        "Sistemas Operativos II",
        "Sistema para el Soporte a la Toma de Decisiones",
        "Sistema de Información II",
        "Investigación Operativa II",
        "Ingeniería de Calidad (electiva)",
      ],
    },
    {
      nombre: "8.º semestre",
      materias: [
        "Auditoría Informática",
        "Redes II",
        "Ingeniería de Software I",
        "Sistema de Información Geográfica",
        "Preparación y Evaluación de Proyectos",
        "Introducción a la Macroeconomía (electiva)",
      ],
    },
    {
      nombre: "9.º semestre",
      materias: [
        "Taller de Grado I",
        "Ingeniería de Software II",
        "Tecnología Web",
        "Arquitectura de Software II",
      ],
    },
    {
      nombre: "10.º semestre",
      materias: ["Graduación Directa", "Modalidad de Graduación"],
    },
  ],
  informatica: [
    {
      nombre: "1.er semestre",
      materias: [
        "Cálculo I",
        "Estructuras Discretas",
        "Física I",
        "Introducción a la Programación",
        "Arquitectura de Computadores",
        "Metodología de la Investigación",
      ],
    },
    {
      nombre: "2.º semestre",
      materias: [
        "Cálculo II",
        "Álgebra Lineal",
        "Física II",
        "Programación I",
        "Bases de Datos I",
        "Sistemas Operativos I",
      ],
    },
    {
      nombre: "3.er semestre",
      materias: [
        "Ecuaciones Diferenciales",
        "Ingeniería de Requisitos y Modelado",
        "Programación II",
        "Bases de Datos II",
        "Redes I",
        "Sistemas Operativos II",
      ],
    },
    {
      nombre: "4.º semestre",
      materias: [
        "Probabilidad y Estadística I",
        "Métodos Numéricos",
        "Arquitectura de Software",
        "Estructura de Datos I",
        "Programación Web I",
        "Redes II",
      ],
    },
    {
      nombre: "5.º semestre",
      materias: [
        "Probabilidad y Estadística II",
        "Taller de Sistemas",
        "Programación Lógica y Funcional",
        "Programación Web II",
        "Criptografía",
        "Estructura de Datos II",
        "Lenguajes Formales",
      ],
    },
    {
      nombre: "6.º semestre",
      materias: [
        "Investigación Operativa I",
        "Inteligencia Artificial",
        "Programación Móvil",
        "Seguridad en Redes",
        "Compiladores",
        "Sistemas de Información Geográfica",
      ],
    },
    {
      nombre: "7.º semestre",
      materias: [
        "Investigación Operativa II",
        "Ingeniería de Software I",
        "Gestión de Infraestructura TI",
        "Machine Learning",
        "Computación Gráfica",
        "Sistemas Distribuidos y Computación Paralela",
      ],
    },
    {
      nombre: "8.º semestre",
      materias: [
        "Taller de Grado I",
        "Ingeniería de Software II",
        "Interacción Hombre-Computador",
        "Gestión de la Seguridad de la Información",
        "Auditoría Informática",
        "Preparación y Evaluación de Proyectos",
        "Legislación Informática y Ética",
        "Liderazgo, Emprendimiento y Startup",
      ],
    },
    {
      nombre: "9.º semestre",
      materias: ["Modalidad de Graduación", "Prácticas Profesionales"],
    },
  ],
} satisfies Record<string, Semestre[]>;
