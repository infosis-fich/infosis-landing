export interface Comunicado {
  id: string;
  imagenUrl: string;
  estado: "BOR" | "PUB";
  destacado: boolean;
  fechaPublicacion: string | null;
}

export interface RespuestaComunicados {
  datos: Comunicado[];
  mensaje: string;
  exito: boolean;
}
