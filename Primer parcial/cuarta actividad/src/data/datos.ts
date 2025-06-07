import type { Producto, Cliente, Proveedor } from "../interfaces/interfaces"

// Simulación de base de datos con JSON - LICORERÍA
export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Whisky Johnnie Walker Red Label",
    categoria: "Whisky",
    precio: 45.99,
    descripcion: "Whisky escocés de mezcla, 750ml",
  },
  {
    id: 2,
    nombre: "Ron Bacardí Carta Blanca",
    categoria: "Ron",
    precio: 18.5,
    descripcion: "Ron blanco premium, 750ml",
  },
  {
    id: 3,
    nombre: "Vodka Absolut Original",
    categoria: "Vodka",
    precio: 32.75,
    descripcion: "Vodka sueco premium, 750ml",
  },
  {
    id: 4,
    nombre: "Cerveza Pilsener Lata",
    categoria: "Cerveza",
    precio: 1.25,
    descripcion: "Cerveza nacional, lata 355ml",
  },
  {
    id: 5,
    nombre: "Vino Tinto Casillero del Diablo",
    categoria: "Vino",
    precio: 12.9,
    descripcion: "Vino tinto chileno, 750ml",
  },
]

export const clientes: Cliente[] = [
  { id: 1, nombre: "Juan Pérez", email: "juan@email.com", telefono: "0991234567", direccion: "Av. 9 de Octubre 123" },
  { id: 2, nombre: "María García", email: "maria@email.com", telefono: "0987654321", direccion: "Calle Bolívar 456" },
  { id: 3, nombre: "Carlos López", email: "carlos@email.com", telefono: "0998765432", direccion: "Malecón 2000" },
]

export const proveedores: Proveedor[] = [
  {
    id: 1,
    nombre: "Distribuidora Premium Spirits",
    contacto: "Ana Ruiz",
    telefono: "0992345678",
    productos: ["Whisky", "Vodka", "Gin"],
  },
  {
    id: 2,
    nombre: "Cervecería Nacional",
    contacto: "Luis Mora",
    telefono: "0993456789",
    productos: ["Cerveza", "Agua", "Gaseosas"],
  },
  {
    id: 3,
    nombre: "Vinos y Licores SA",
    contacto: "Sara Vega",
    telefono: "0994567890",
    productos: ["Vino", "Ron", "Brandy"],
  },
]
