export type TipoProyecto = "ACA" | "GRA";

export interface AutorProyecto {
  id: string;
  nombres: string;
  apellidos: string;
  registroEstudiantil: string;
}

export interface TutorProyecto {
  id: string;
  nombres: string;
  apellidos: string;
}

export interface MateriaProyecto {
  id: string;
  nombre: string;
  codigo: string;
  estado: boolean;
}

export interface Proyecto {
  id: string;
  titulo: string;
  tipo: TipoProyecto;
  materiaId: string | null;
  tutorId: string;
  fechaPublicacion: string | null;
  miniaturaUrl: string;
  pdfUrl: string;
  estado: "BOR" | "PUB";
  autores: AutorProyecto[];
  tutor: TutorProyecto;
  materia: MateriaProyecto | null;
}

export interface ListaProyectos {
  elementos: Proyecto[];
  pagina: number;
  tamanoPagina: number;
  total: number;
  totalPaginas: number;
}

export interface FiltrosProyectos {
  pagina?: number;
  tamanoPagina?: number;
  titulo?: string;
  tipo?: TipoProyecto;
  materia?: string;
  autor?: string;
  anio?: number;
  mes?: number;
}

export interface RespuestaApi<T> {
  datos: T;
  mensaje: string;
  exito: boolean;
}
