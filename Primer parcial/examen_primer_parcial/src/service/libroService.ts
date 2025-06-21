import { LibroRepository } from '../repositorios/libroRepositori'
import type { libro, libroInput, libroUpdate } from '../types/libro'

/**
 * Servicio de categorías
 * Maneja la lógica de negocio y utiliza el CategoryRepository para la persistencia
 */
export class LibroService {
  
  static async getAll(): Promise<libro[]> {
    console.log('📋 Obteniendo todas los libros...')
    const categories = LibroRepository.getAll()
    console.log(`✅ ${categories.length} Libros obtenidas`)
    return categories
  }

  static async getById(id: number): Promise<libro | null> {
    console.log(`🔍 Buscando LIBRO con ID: ${id}`)
    const category = LibroRepository.findById(id)
    if (category) {
      console.log(`✅ libro encontrado: ${category.description}`)
      return category
    } else {
      console.log(`❌ Libro con ID ${id} no encontrada`)
      return null
    }
  }

  static async create(libro: libroInput): Promise<void> {
    console.log('➕ Creando nuevo libro:', libro)
    const newCategory = LibroRepository.create(libro)
    console.log(`✅ libro creado con ID: ${newCategory.id}`)
  }

  static async update(id: number, libro: libroUpdate): Promise<void> {
    console.log(`✏️ Actualizando libro ID ${id}:`, libro)
    const updated = LibroRepository.update(id, libro)
    if (!updated) {
      throw new Error('libro no encontrado')
    }
    console.log(`✅ Libro ${id} actualizado exitosamente`)
  }

  static async delete(id: number): Promise<void> {
    console.log(`🗑️ Eliminando libro con ID: ${id}`)
    const deleted = LibroRepository.delete(id)
    if (!deleted) {
      throw new Error('Libro no encontrado')
    }
    console.log(`✅ Libro ${id} eliminado exitosamente`)
  }

  static async getCount(): Promise<number> {
    const count = LibroRepository.count()
    console.log(`📊 Total de libros: ${count}`)
    return count
  }
} 