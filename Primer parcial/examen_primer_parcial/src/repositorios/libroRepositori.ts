import { database, getNextLibroId } from '../types/database'
import type {  libro, libroUpdate,  libroInput } from '../types/libro'

/**
 * Repository para manejar la persistencia de categorías
 * Se encarga únicamente de las operaciones CRUD sobre el array de categorías
 */
export class LibroRepository {
  
  /**
   * Obtiene todas las categorías
   */
  static getAll(): libro[] {
    return database.libros
  }

  /**
   * Busca una categoría por ID
   */
  static findById(id: number): libro | undefined {
    return database.libros.find(libros => libros.id === id)
  }

  /**
   * Agrega una nueva categoría
   */
  static create(libroData: libroInput): libro {
    const nuevoLibro: libro = {
      ...libroData,
      id: getNextLibroId(),
      created_at: new Date().toISOString()
    }
    
    database.libros.push(nuevoLibro)
    return nuevoLibro
  }

  /**
   * Actualiza una categoría existente
   */
  static update(id: number, updates: libroUpdate): libro | null {
    const index = database.libros.findIndex(libro => libro.id === id)
    
    if (index === -1) {
      return null
    }
    
    database.libros[index] = { 
      ...database.libros[index], 
      ...updates 
    }
    
    return database.libros[index]
  }

  /**
   * Elimina una categoría
   */
  static delete(id: number): boolean {
    const index = database.libros.findIndex(libro => libro.id === id)
    
    if (index === -1) {
      return false
    }
    
    database.libros.splice(index, 1)
    return true
  }

  /**
   * Cuenta total de categorías
   */
  static count(): number {
    return database.libros.length
  }
} 