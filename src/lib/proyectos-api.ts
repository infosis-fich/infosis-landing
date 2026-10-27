import { solicitarApi } from "./api";
import type {
  FiltrosProyectos,
  ListaProyectos,
  Proyecto,
} from "../tipos/proyectos";

export async function listarProyectos(
  filtros: FiltrosProyectos = {},
): Promise<ListaProyectos> {
  const parametros = new URLSearchParams();

  Object.entries(filtros).forEach(([clave, valor]) => {
    if (valor !== undefined && valor !== "")
      parametros.set(clave, String(valor));
  });

  const query = parametros.toString();
  const respuesta = await solicitarApi<ListaProyectos>(
    `/proyectos${query ? `?${query}` : ""}`,
  );
  return respuesta.datos;
}

export async function consultarProyecto(id: string): Promise<Proyecto> {
  const respuesta = await solicitarApi<Proyecto>(
    `/proyectos/${encodeURIComponent(id)}`,
  );
  return respuesta.datos;
}
