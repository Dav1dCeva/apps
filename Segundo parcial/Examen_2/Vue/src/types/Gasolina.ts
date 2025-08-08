export interface Gasolina{
    id: number;
    tipo: string;
    precioPorLitro: number;
    stockLitros: number;
    estado: 'activo' | 'inactivo';
}