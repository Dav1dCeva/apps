// Servicios de lógica de negocio
export { LibroService } from './libroService'
export { UsuarioService } from './usuarioService'

// Re-export de repositories para conveniencia
export { LibroRepository, UsuarioRepository } from '../repositorios'

// Tipos principales
export type { JsonDatabase } from '../types/database'
export { database } from '../types/database' 