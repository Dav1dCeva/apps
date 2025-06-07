// Interfaces para las 3 entidades requeridas
export interface Producto {
  id: number
  nombre: string
  categoria: string
  precio: number
  descripcion: string
}

export interface Cliente {
  id: number
  nombre: string
  email: string
  telefono: string
  direccion: string
}

export interface Proveedor {
  id: number
  nombre: string
  contacto: string
  telefono: string
  productos: string[]
}
