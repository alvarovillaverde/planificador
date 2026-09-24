import { test, expect } from "@playwright/test";

// 1. Añadimos { page } con llaves desestructuradas
test("Muestra el titulo de la app", async ({ page }) => {
  await page.goto("/");

  // Usamos await dentro del expect directamente
  await expect(
    page.getByRole("heading", { name: "Planificación del curso 2" }),
  ).toBeVisible();
});

test("Permite añadir una actividad", async ({ page }) => {
  await page.goto("/");

  // Rellenamos los campos (asegúrate de que los placeholders coincidan al 100%)
  await page.getByPlaceholder("Qué has hecho hoy?").fill("cantar");
  await page.locator("#tiempo").fill("5");

  // Hacemos clic en el botón
  await page.getByRole("button", { name: "Añadir" }).click();

  // 2. Añadimos los paréntesis () al final de toBeVisible()
  // Usamos expresión regular /cantar/i para ignorar mayúsculas/minúsculas
  await expect(page.getByText(/cantar/i)).toBeVisible();
});
