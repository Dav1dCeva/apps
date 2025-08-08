export interface Operador{
    id: number;
    nombre: string;
    ubicacion: string;
    correo: string;
    turno: 'matutino' | 'vespertino' | 'nocturno';
}