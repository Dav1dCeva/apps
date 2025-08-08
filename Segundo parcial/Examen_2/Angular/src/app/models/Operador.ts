export interface Operador{
    id: number;
    nombre: string;
    ubicacion: string;
    telefono: string;
    correo: string;
    licencia: string;
    estado: 'activo' | 'inactivo';
}