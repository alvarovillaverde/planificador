import { test, expect } from "@playwright/test";

test("Muestra  el titulo de la app", async (page) => {
  page.goto("localhost:5173");
  await page.goto("/");
  expect(page.getByRole("heading", { name: "Planificacion del curso 2" }));
});
