import type { libro } from './libro'
import type { Usuario } from './usuario'

export interface JsonDatabase {
  libros: libro[]
  usuarios: Usuario[]
}

export const database: JsonDatabase = {
  libros: [
    { id: 1, description: 'La divina Comedia', autor:'Papu', created_at: '2024-01-01' },
    { id: 2, description: 'It',autor:'Sthepen', created_at: '2024-01-01' },
    { id: 3, description: 'El diario de Greg', autor: 'Greg', created_at: '2024-01-01' }
  ],
  usuarios: [
    {
      id: 1,
      nombre: 'Juan Carlos',
      apellido: 'González',
      fecha_nacimiento: '1985-03-15',
      genero: 'Masculino',
      telefono: '+1-555-0123',
      email: 'juan.gonzalez@email.com',
      direccion: 'Calle Principal 123, Ciudad'
    },
    {
      id: 2,
      nombre: 'María Elena',
      apellido: 'Rodríguez',
      fecha_nacimiento: '1992-07-22',
      genero: 'Femenino',
      telefono: '+1-555-0456',
      email: 'maria.rodriguez@email.com',
      direccion: 'Avenida Central 456, Ciudad'
    }
  ]
}

// Contadores simples para IDs
export let nextCategoryId = 4
export let nextPacienteId = 3

export function getNextLibroId(): number {
  return nextCategoryId++
}

export function getNextUsuarioId(): number {
  return nextPacienteId++
} 