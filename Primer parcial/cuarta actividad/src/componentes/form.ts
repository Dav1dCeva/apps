import "../style.css"
import { productos } from "../data/datos"
import type { Producto } from "../interfaces/interfaces"

export function crearFormulario(): void {
  const app = document.getElementById("app") as HTMLDivElement

  const form = document.createElement("form")
  form.className = `
    bg-white shadow-xl border border-gray-200 
    p-8 space-y-6 max-w-xl mx-auto mb-8
  `

  form.innerHTML = `
    <h2 class="text-3xl font-semibold text-amber-800 text-center mb-6">
      Registrar Producto
    </h2>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Nombre del Producto</label>
      <input 
        id="nombre" 
        type="text" 
        class="w-full border-2 border-gray-300 p-2.5 rounded-md 
               focus:outline-none focus:ring-2 focus:ring-amber-500 
               text-gray-800"
      />
      <span id="error-nombre" class="text-red-500 text-sm mt-1 block"></span>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
      <select 
        id="categoria" 
        class="w-full border-2 border-gray-300 p-2.5 rounded-md 
               focus:outline-none focus:ring-2 focus:ring-amber-500 
               text-gray-800"
      >
        <option value=""></option>
        <option value="Whisky">Whisky</option>
        <option value="Ron">Ron</option>
        <option value="Vodka">Vodka</option>
        <option value="Gin">Gin</option>
        <option value="Cerveza">Cerveza</option>
        <option value="Vino">Vino</option>
        <option value="Brandy">Brandy</option>
        <option value="Licores">Licores</option>
        <option value="Aperitivos">Aperitivos</option>
      </select>
      <span id="error-categoria" class="text-red-500 text-sm mt-1 block"></span>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Precio (USD)</label>
      <input 
        id="precio" 
        type="number" 
        step="0.01"
        class="w-full border-2 border-gray-300 p-2.5 rounded-md 
               focus:outline-none focus:ring-2 focus:ring-amber-500 
               text-gray-800"
      />
      <span id="error-precio" class="text-red-500 text-sm mt-1 block"></span>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Descripción (opcional)</label>
      <textarea 
        id="descripcion" 
        rows="3" 
        class="w-full border-2 border-gray-300 p-2.5 rounded-md 
               focus:outline-none focus:ring-2 focus:ring-amber-500 
               text-gray-800"
      ></textarea>
      <span id="error-descripcion" class="text-red-500 text-sm mt-1 block"></span>
    </div>

    <button 
      type="submit"
      class="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 px-4 
             rounded-md w-full transition-colors"
    >
       Guardar Producto
    </button>
  `

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    manejarEnvioFormulario()
  })

  app.appendChild(form)
}

function manejarEnvioFormulario(): void {
  const nombre = (document.getElementById("nombre") as HTMLInputElement).value.trim()
  const categoria = (document.getElementById("categoria") as HTMLSelectElement).value
  const precio = Number((document.getElementById("precio") as HTMLInputElement).value)
  const descripcion = (document.getElementById("descripcion") as HTMLTextAreaElement).value.trim()

  if (!validarFormulario(nombre, categoria, precio, descripcion)) {
    return
  }

  const nuevoId = Math.max(...productos.map((p) => p.id)) + 1
  const nuevoProducto: Producto = {
    id: nuevoId,
    nombre,
    categoria,
    precio,
    descripcion,
  }

  productos.push(nuevoProducto)

  const form = document.querySelector("form") as HTMLFormElement
  form.reset()

  actualizarListaProductos()

  mostrarNotificacion(" Producto agregado correctamente!")
}

function validarFormulario(nombre: string, categoria: string, precio: number, descripcion: string): boolean {
  let valido = true

  const errores = {
    nombre: document.getElementById("error-nombre")!,
    categoria: document.getElementById("error-categoria")!,
    precio: document.getElementById("error-precio")!,
    descripcion: document.getElementById("error-descripcion")!,
  }

  Object.values(errores).forEach((span) => (span.textContent = ""))

  if (nombre.length < 3) {
    errores.nombre.textContent = "El nombre debe tener al menos 3 caracteres."
    valido = false
  }

  if (categoria === "") {
    errores.categoria.textContent = "Debe seleccionar una categoría."
    valido = false
  }

  if (isNaN(precio) || precio <= 0) {
    errores.precio.textContent = "El precio debe ser mayor a 0."
    valido = false
  }

  if (descripcion.length > 200) {
    errores.descripcion.textContent = "La descripción no debe exceder 200 caracteres."
    valido = false
  }

  return valido
}

function actualizarListaProductos(): void {
  const listaProductos = document.getElementById("lista-productos")
  if (listaProductos) {
    import("./tarjetas").then(({ crearTarjetaProducto }) => {
      listaProductos.innerHTML = ""
      productos.forEach((producto) => {
        const tarjeta = crearTarjetaProducto(producto)
        listaProductos.appendChild(tarjeta)
      })
    })
  }
}

function mostrarNotificacion(mensaje: string): void {
  const notificacion = document.createElement("div")
  notificacion.className = "fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50"
  notificacion.textContent = mensaje

  document.body.appendChild(notificacion)

  setTimeout(() => {
    if (notificacion.parentNode) {
      notificacion.parentNode.removeChild(notificacion)
    }
  }, 3000)
}
