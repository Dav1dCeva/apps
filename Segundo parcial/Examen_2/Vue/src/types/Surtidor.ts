export interface Surtidor{
    id: number;
    nombre: string;
    tipoCombustible: string;
    ubicacion: string;
    estado: 'activo' | 'inactivo';
}