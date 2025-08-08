export interface Gasolina{
    id: number;
    tipo: string;
    precioPorLitro: number;
    cantidadDisponible: number;
    estado: 'activo' | 'inactivo';
}