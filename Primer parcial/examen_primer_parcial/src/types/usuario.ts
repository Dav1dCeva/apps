export interface Usuario {
  id: number
  nombre: string
  apellido: string
  fecha_nacimiento: string
  genero: 'Masculino' | 'Femenino' | 'Otro'
  telefono?: string
  email?: string
  direccion?: string
}

export type UsuarioInput = Omit<Usuario, 'id'>
export type UsuarioUpdate = Partial<UsuarioInput> 