import type { RespuestaApi } from "../tipos/proyectos";

const obtenerBaseApi = () =>
  import.meta.env.PUBLIC_INFOSIS_API_URL?.replace(/\/$/, "");

export class ApiError extends Error {
  public constructor(
    message: string,
    public readonly status?: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function solicitarApi<T>(
  ruta: string,
  opciones?: RequestInit,
): Promise<RespuestaApi<T>> {
  const baseApi = obtenerBaseApi();

  if (!baseApi) {
    throw new ApiError("El servicio de proyectos no está configurado.");
  }

  let response: Response;
  try {
    response = await fetch(`${baseApi}${ruta}`, opciones);
  } catch {
    throw new ApiError("No pudimos conectarnos con el servicio de proyectos.");
  }

  const result = (await response
    .json()
    .catch(() => null)) as RespuestaApi<T> | null;

  if (!response.ok || !result?.exito) {
    throw new ApiError(
      result?.mensaje ?? "No pudimos completar la consulta.",
      response.status,
    );
  }

  return result;
}
