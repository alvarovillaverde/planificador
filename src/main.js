import dayjs from "dayjs";
import confetti from "canvas-confetti";

// --- Utilidades ---

/**
 * Formatea una fecha Date como DD/MM/YYYY HH:mm
 * @param {Date} fecha
 * @returns {string}
 */
export function formatearFecha(fecha) {
  return dayjs(fecha).format("DD/MM/YYYY HH:mm");
}

/**
 * Clasifica el tiempo de una tarea en bajo / medio / alto
 * @param {number} minutos
 * @returns {{label: string, level: string}}
 */
export function clasificarTiempo(minutos) {
  if (minutos <= 10) return { label: "Bajo", level: "bajo" };
  if (minutos <= 30) return { label: "Medio", level: "medio" };
  return { label: "Alto", level: "alto" };
}

// --- DOM Setup (only runs in browser) ---

if (typeof window !== "undefined") {
  const inputTexto = document.getElementById("texto");
  const inputTiempo = document.getElementById("tiempo");
  const lista = document.getElementById("lista");
  const btn = document.getElementById("añadir");

  // --- Lógica ---

  function guardarPlan() {
    const texto = inputTexto.value.trim();
    const minutos = parseInt(inputTiempo.value, 10);

    if (!texto) return;
    if (isNaN(minutos) || minutos < 0) {
      alert("Introduce un número válido de minutos");
      return;
    }

    const fechaHoy = formatearFecha(new Date());
    const { label, level } = clasificarTiempo(minutos);

    const li = document.createElement("li");
    li.innerHTML = `
      <span class="tarea-texto">${texto}</span>
      <span class="tarea-fecha">${fechaHoy}</span>
      <span class="badge badge-${level}">${label}</span>
    `;

    lista.appendChild(li);

    // Lanzar confetti con configuración por defecto (sin parámetros)
    confetti();

    // Limpiar
    inputTexto.value = "";
    inputTiempo.value = "";
    inputTexto.focus();
  }

  btn.addEventListener("click", guardarPlan);

  document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    guardarPlan();
  });

  // Permitir añadir con Enter
  inputTexto.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      guardarPlan();
    }
  });
}
