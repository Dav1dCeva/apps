import "./style.css"
import { crearFormulario } from "./componentes/form"
import { crearSeccionesListas, renderizarListas } from "./componentes/lista"

// Función para inicializar la aplicación
function inicializarApp(): void {
  console.log("🚀 Iniciando aplicación...")

  // Crear el formulario de productos
  crearFormulario()

  // Crear las secciones para mostrar las listas de entidades
  crearSeccionesListas()

  // Renderizar las listas de entidades
  renderizarListas()

  console.log("✅ Aplicación inicializada")
}

// Inicializar la aplicación cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", inicializarApp)
