import type { RespuestaComunicados } from "../tipos/comunicados";
import { ApiError, solicitarApi } from "./api";

export async function listarComunicados(): Promise<
  RespuestaComunicados["datos"]
> {
  const respuesta =
    await solicitarApi<RespuestaComunicados["datos"]>("/comunicados");
  if (!Array.isArray(respuesta.datos)) {
    throw new ApiError("La respuesta de comunicados no es válida.");
  }

  return respuesta.datos.filter(
    (comunicado) =>
      comunicado.estado === "PUB" &&
      typeof comunicado.imagenUrl === "string" &&
      comunicado.imagenUrl.trim().length > 0,
  );
}
