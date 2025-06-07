import type { Producto, Cliente, Proveedor } from "../interfaces/interfaces"
import { productos } from "../data/datos"

export function crearTarjetaProducto(producto: Producto): HTMLElement {
  const div = document.createElement("div")
  div.className = "bg-white p-6 border border-gray-200 rounded-lg shadow-md tarjeta-hover"
  div.dataset.id = producto.id.toString()

  const titulo = document.createElement("h3")
  titulo.textContent = producto.nombre
  titulo.className = "text-xl font-bold text-amber-600 mb-2"

  const categoria = document.createElement("span")
  categoria.textContent = producto.categoria
  categoria.className = "bg-amber-100 text-amber-800 px-2 py-1 text-sm rounded-md"

  const precio = document.createElement("p")
  precio.textContent = `$${producto.precio.toFixed(2)}`
  precio.className = "text-lg font-semibold text-gray-800 my-2"

  const descripcion = document.createElement("p")
  descripcion.textContent = producto.descripcion
  descripcion.className = "text-gray-600 mb-4"

  const botones = document.createElement("div")
  botones.className = "flex space-x-2"

  const btnEditar = document.createElement("button")
  btnEditar.textContent = "Editar"
  btnEditar.className = "bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
  btnEditar.onclick = () => editarProducto(producto.id)

  const btnEliminar = document.createElement("button")
  btnEliminar.textContent = "Eliminar"
  btnEliminar.className = "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
  btnEliminar.onclick = () => eliminarProducto(producto.id)

  botones.appendChild(btnEditar)
  botones.appendChild(btnEliminar)

  div.appendChild(titulo)
  div.appendChild(categoria)
  div.appendChild(precio)
  div.appendChild(descripcion)
  div.appendChild(botones)

  return div
}

export function crearTarjetaCliente(cliente: Cliente): HTMLElement {
  const div = document.createElement("div")
  div.className = "bg-white p-6 border border-gray-200 rounded-lg shadow-md tarjeta-hover"

  const titulo = document.createElement("h3")
  titulo.textContent = cliente.nombre
  titulo.className = "text-xl font-bold text-green-600 mb-2"

  const email = document.createElement("p")
  email.textContent = ` ${cliente.email}`
  email.className = "text-gray-600"

  const telefono = document.createElement("p")
  telefono.textContent = ` ${cliente.telefono}`
  telefono.className = "text-gray-600"

  const direccion = document.createElement("p")
  direccion.textContent = ` ${cliente.direccion}`
  direccion.className = "text-gray-600 mb-4"

  div.appendChild(titulo)
  div.appendChild(email)
  div.appendChild(telefono)
  div.appendChild(direccion)

  return div
}

export function crearTarjetaProveedor(proveedor: Proveedor): HTMLElement {
  const div = document.createElement("div")
  div.className = "bg-white p-6 border border-gray-200 rounded-lg shadow-md tarjeta-hover"

  const titulo = document.createElement("h3")
  titulo.textContent = proveedor.nombre
  titulo.className = "text-xl font-bold text-purple-600 mb-2"

  const contacto = document.createElement("p")
  contacto.textContent = ` ${proveedor.contacto}`
  contacto.className = "text-gray-600"

  const telefono = document.createElement("p")
  telefono.textContent = ` ${proveedor.telefono}`
  telefono.className = "text-gray-600 mb-2"

  const productosLabel = document.createElement("p")
  productosLabel.textContent = "Productos:"
  productosLabel.className = "font-semibold text-gray-700"

  const productosList = document.createElement("div")
  productosList.className = "flex flex-wrap gap-1 mt-1"

  proveedor.productos.forEach((producto) => {
    const tag = document.createElement("span")
    tag.textContent = producto
    tag.className = "bg-purple-100 text-purple-800 px-2 py-1 text-xs rounded-md"
    productosList.appendChild(tag)
  })

  div.appendChild(titulo)
  div.appendChild(contacto)
  div.appendChild(telefono)
  div.appendChild(productosLabel)
  div.appendChild(productosList)

  return div
}

function editarProducto(id: number): void {
  const producto = productos.find((p) => p.id === id)
  if (producto) {
    ;(document.getElementById("nombre") as HTMLInputElement).value = producto.nombre
    ;(document.getElementById("categoria") as HTMLSelectElement).value = producto.categoria
    ;(document.getElementById("precio") as HTMLInputElement).value = producto.precio.toString()
    ;(document.getElementById("descripcion") as HTMLTextAreaElement).value = producto.descripcion

    document.querySelector("form")?.scrollIntoView({ behavior: "smooth" })

    alert(`Editando: ${producto.nombre}`)
  }
}

function eliminarProducto(id: number): void {
  if (confirm("¿Eliminar este producto?")) {
    const index = productos.findIndex((p) => p.id === id)
    if (index > -1) {
      productos.splice(index, 1)

      const elemento = document.querySelector(`[data-id="${id}"]`)
      elemento?.remove()

      mostrarNotificacion("Producto eliminado")
    }
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
