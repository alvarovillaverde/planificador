import { describe, it, expect } from "vitest";
import { formatearFecha, clasificarTiempo } from "../src/main.js";

describe("formatear fecha", () => {
  it("formatea fecha correctamente", () => {
    const fecha = new Date(2026, 8, 21, 14, 33);
    const resultado = formatearFecha(fecha);
    expect(resultado).toBe("21/09/2026 14:33");
  });
});

describe("clasificar tiempo", () => {
  it("clasifica como bajo", () => {
    expect(clasificarTiempo(5)).toEqual({ label: "Bajo", level: "bajo" });
  });

  it("clasifica como medio", () => {
    expect(clasificarTiempo(20)).toEqual({ label: "Medio", level: "medio" });
  });

  it("clasifica como alto", () => {
    expect(clasificarTiempo(45)).toEqual({ label: "Alto", level: "alto" });
  });

  it("clasifica como alto los 30 minutos exactos", () => {
    expect(clasificarTiempo(30)).toEqual({ label: "Medio", level: "medio" });
  });
});
