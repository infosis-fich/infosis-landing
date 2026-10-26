export const CLAVE_TEMA = "theme";

export type Tema = "dark" | "light";

export function normalizarTema(valor: string | null): Tema {
  return valor === "light" ? "light" : "dark";
}
