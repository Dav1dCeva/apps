import { productos, clientes, proveedores } from "../data/datos"
import { crearTarjetaProducto, crearTarjetaCliente, crearTarjetaProveedor } from "./tarjetas"

export function crearSeccionesListas(): void {
  const app = document.getElementById("app")!

  const seccionProductos = document.createElement("section")
  seccionProductos.className = "mb-8"

  const tituloProductos = document.createElement("h2")
  tituloProductos.textContent = "Lista de Productos"
  tituloProductos.className = "text-2xl font-bold text-blue-800 mb-4"

  const gridProductos = document.createElement("div")
  gridProductos.id = "lista-productos"
  gridProductos.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"

  seccionProductos.appendChild(tituloProductos)
  seccionProductos.appendChild(gridProductos)

  const seccionClientes = document.createElement("section")
  seccionClientes.className = "mb-8"

  const tituloClientes = document.createElement("h2")
  tituloClientes.textContent = "Lista de Clientes"
  tituloClientes.className = "text-2xl font-bold text-green-800 mb-4"

  const gridClientes = document.createElement("div")
  gridClientes.id = "lista-clientes"
  gridClientes.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"

  seccionClientes.appendChild(tituloClientes)
  seccionClientes.appendChild(gridClientes)

  const seccionProveedores = document.createElement("section")
  seccionProveedores.className = "mb-8"

  const tituloProveedores = document.createElement("h2")
  tituloProveedores.textContent = "Lista de Proveedores"
  tituloProveedores.className = "text-2xl font-bold text-purple-800 mb-4"

  const gridProveedores = document.createElement("div")
  gridProveedores.id = "lista-proveedores"
  gridProveedores.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"

  seccionProveedores.appendChild(tituloProveedores)
  seccionProveedores.appendChild(gridProveedores)

  app.appendChild(seccionProductos)
  app.appendChild(seccionClientes)
  app.appendChild(seccionProveedores)
}

export function renderizarListas(): void {

  const listaProductos = document.getElementById("lista-productos")!
  productos.forEach((producto) => {
    const tarjeta = crearTarjetaProducto(producto)
    listaProductos.appendChild(tarjeta)
  })

  const listaClientes = document.getElementById("lista-clientes")!
  clientes.forEach((cliente) => {
    const tarjeta = crearTarjetaCliente(cliente)
    listaClientes.appendChild(tarjeta)
  })

  const listaProveedores = document.getElementById("lista-proveedores")!
  proveedores.forEach((proveedor) => {
    const tarjeta = crearTarjetaProveedor(proveedor)
    listaProveedores.appendChild(tarjeta)
  })
}
