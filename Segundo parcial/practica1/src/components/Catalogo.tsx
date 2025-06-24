import { useEffect, useState } from 'react';
import type { Producto } from '../interface/Producto';
import ProductoCard from './ProductoCard';
export default function ProductoList() {
    const [productos, setProductos] = useState<Producto[]>([]);
        useEffect(() => {
    const data: Producto[] = [
        { id: 1, nombre: 'Café', precio: 2.5, disponible: true },
        { id: 2, nombre: 'Té', precio: 1.8, disponible: false },
    ];
    setTimeout(() => setProductos(data), 1000); // Simula carga asincrónica

    }, []);
    return (
        <div>
            <h2>Productos</h2>
            {productos.map((p) => (
            <ProductoCard key={p.id} producto={p} />
            ))}
        </div>
    );
}
