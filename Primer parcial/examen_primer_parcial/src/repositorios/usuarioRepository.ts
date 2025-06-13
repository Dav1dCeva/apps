import { database, getNextUsuarioId } from '../types/database'
import type { Usuario, UsuarioInput, UsuarioUpdate } from '../types/usuario'

/**
 * Repository para manejar la persistencia de pacientes
 * Se encarga únicamente de las operaciones CRUD sobre el array de pacientes
 */
export class UsuarioRepository {
  
  /**
   * Obtiene todos los pacientes
   */
  static getAll(): Usuario[] {
    return database.usuarios
  }

  /**
   * Busca un paciente por ID
   */
  static findById(id: number): Usuario | undefined {
    return database.usuarios.find(usuario => usuario.id === id)
  }

  /**
   * Busca pacientes por nombre (búsqueda parcial)
   */
  static findByName(nombre: string): Usuario[] {
    return database.usuarios.filter(usuario => 
      usuario.nombre.toLowerCase().includes(nombre.toLowerCase()) ||
      usuario.apellido.toLowerCase().includes(nombre.toLowerCase())
    )
  }

  /**
   * Agrega un nuevo paciente
   */
  static create(pacienteData: UsuarioInput): Usuario {
    const newPaciente: Usuario = {
      ...pacienteData,
      id: getNextUsuarioId()
    }
    
    database.usuarios.push(newPaciente)
    return newPaciente
  }

  /**
   * Actualiza un paciente existente
   */
  static update(id: number, updates: UsuarioUpdate): Usuario | null {
    const index = database.usuarios.findIndex(usuario => usuario.id === id)
    
    if (index === -1) {
      return null
    }
    
    database.usuarios[index] = { 
      ...database.usuarios[index], 
      ...updates 
    }
    
    return database.usuarios[index]
  }

  /**
   * Elimina un paciente
   */
  static delete(id: number): boolean {
    const index = database.usuarios.findIndex(usuario => usuario.id === id)
    
    if (index === -1) {
      return false
    }
    
    database.usuarios.splice(index, 1)
    return true
  }

  /**
   * Cuenta total de pacientes
   */
  static count(): number {
    return database.usuarios.length
  }

  /**
   * Obtiene pacientes por género
   */
  static findByGender(genero: 'Masculino' | 'Femenino' | 'Otro'): Usuario[] {
    return database.usuarios.filter(usuario => usuario.genero === genero)
  }
} 