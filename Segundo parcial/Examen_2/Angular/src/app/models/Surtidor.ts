export interface Surtidor{
    id: number;
    nombre: string;
    tipoCombustible: string;
    precioPorLitro: number;
    capacidadTanque: number;
    estado: 'activo' | 'inactivo';
}