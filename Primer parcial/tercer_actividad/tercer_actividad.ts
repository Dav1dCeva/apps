// 1. Tipos Básicos
let nombreProducto: string = "Mojito";
let precioProducto: number = 8.5;
let stockDisponible: number = 25;
let estaDisponible: boolean = true;
let ingredientes: string[] = ["Ron", "Menta", "Azúcar", "Limón", "Agua con gas"];

// 2. Interfaces
interface Cliente {
  id: number;
  nombre: string;
  email?: string;
  esVIP: boolean;
}

interface Producto {
  readonly id: number;
  nombre: string;
  precio: number;
  tipo: "Trago" | "Cóctel";
  stock: number;
}

interface Pedido {
  id: number;
  cliente: Cliente;
  productos: Producto[];
  local?: string;
}

// 3. Clases
class ClienteImpl implements Cliente {
  constructor(
    public id: number,
    public nombre: string,
    public esVIP: boolean,
    public email?: string
  ) {}
}

class ProductoImpl implements Producto {
  constructor(
    public readonly id: number,
    public nombre: string,
    public precio: number,
    public tipo: "Trago" | "Cóctel",
    public stock: number
  ) {}

  validarStock(): boolean {
    return this.stock > 0;
  }
}

class PedidoImpl implements Pedido {
  constructor(
    public id: number,
    public cliente: Cliente,
    public productos: Producto[],
    public local?: string
  ) {}

  calcularTotal(): number {
    return this.productos.reduce((acc, p) => acc + p.precio, 0);
  }
}

// 4. Arreglos
let clientes: Cliente[] = [
  new ClienteImpl(1, "Ana Torres", true, "ana@correo.com"),
  new ClienteImpl(2, "Luis Martínez", false),
  new ClienteImpl(3, "Camila Gómez", true, "camila@correo.com"),
  new ClienteImpl(4, "Pedro Sánchez", false),
  new ClienteImpl(5, "Valeria Ruiz", true),
  new ClienteImpl(6, "Carlos Núñez", false, "carlos@correo.com"),
  new ClienteImpl(7, "Mariana Paredes", true),
  new ClienteImpl(8, "Ricardo León", false),
  new ClienteImpl(9, "Sofía Morales", true, "sofia@correo.com"),
  new ClienteImpl(10, "Daniel Rojas", false)
];

let productos: Producto[] = [
  new ProductoImpl(1, "Mojito", 8.5, "Cóctel", 15),
  new ProductoImpl(2, "Whisky", 12, "Trago", 20),
  new ProductoImpl(3, "Piña Colada", 9, "Cóctel", 0),
  new ProductoImpl(4, "Tequila", 10, "Trago", 25),
  new ProductoImpl(5, "Caipirinha", 8, "Cóctel", 10),
  new ProductoImpl(6, "Vodka", 11, "Trago", 18),
  new ProductoImpl(7, "Martini", 9.5, "Cóctel", 7),
  new ProductoImpl(8, "Ron", 10, "Trago", 22),
  new ProductoImpl(9, "Negroni", 10.5, "Cóctel", 0),
  new ProductoImpl(10, "Ginebra", 11.5, "Trago", 30)
];

let pedidos: Pedido[] = [
  new PedidoImpl(1, clientes[0], [productos[0], productos[1]], "Sucursal Centro"),
  new PedidoImpl(2, clientes[1], [productos[3]], "Sucursal Norte"),
  new PedidoImpl(3, clientes[2], [productos[4], productos[5]], "Sucursal Sur"),
  new PedidoImpl(4, clientes[3], [productos[1]], "Sucursal Centro"),
  new PedidoImpl(5, clientes[4], [productos[6], productos[2]], "Sucursal Norte"),
  new PedidoImpl(6, clientes[5], [productos[7]], "Sucursal Sur"),
  new PedidoImpl(7, clientes[6], [productos[3], productos[9]], "Sucursal Centro"),
  new PedidoImpl(8, clientes[7], [productos[8]], "Sucursal Norte"),
  new PedidoImpl(9, clientes[8], [productos[0], productos[5]], "Sucursal Sur"),
  new PedidoImpl(10, clientes[9], [productos[2], productos[4]], "Sucursal Centro")
];

// 5. Funciones
function mostrarProductos(): void {
  productos.forEach(p => console.log(p));
}

function contarDisponibles(): number {
  return productos.filter(p => p.stock > 0).length;
}

function agregarProducto(producto: Producto): void {
  productos.push(producto);
}

function eliminarProductoPorId(id: number): void {
  const index = productos.findIndex(p => p.id === id);
  if (index !== -1) productos.splice(index, 1);
}

// 7. map()
let nombresMayus = productos.map(p => p.nombre.toUpperCase());
console.log("Nombres en mayúsculas:", nombresMayus);

// 8. filter()
let coctelesDisponibles = productos.filter(p => p.tipo === "Cóctel" && p.stock > 0);
console.log("Cócteles disponibles:", coctelesDisponibles);

// 9. reduce()
let totalStock = productos.reduce((acc, p) => acc + p.stock, 0);
console.log("Total de stock de productos:", totalStock);

// 10. Relaciones y Resumen
function resumenPedido(pedido: Pedido): void {
  console.log(`Pedido #${pedido.id}`);
  console.log(`Cliente: ${pedido.cliente.nombre}`);
  console.log(`Productos:`);
  pedido.productos.forEach(p => console.log(` - ${p.nombre} ($${p.precio})`));
  console.log(`Total: $${pedido.productos.reduce((acc, p) => acc + p.precio, 0)}`);
  console.log("-----------------------------");
}

// 11. Estructuras anidadas
console.log("Resumen de pedidos:");
pedidos.forEach(resumenPedido);
