import { UsuarioRepository } from '../repositorios/usuarioRepository'
import type { Usuario, UsuarioInput, UsuarioUpdate } from '../types/usuario'

/**
 * Servicio de usuarios
 * Maneja la lógica de negocio y utiliza el usuarioRepository para la persistencia
 */
export class UsuarioService {
  
  static async getAll(): Promise<Usuario[]> {
    console.log('👥 Obteniendo todos los usuarios...')
    const usuarios = UsuarioRepository.getAll()
    console.log(`✅ ${usuarios.length} usuarios obtenidos`)
    return usuarios
  }

  static async getById(id: number): Promise<Usuario | null> {
    console.log(`🔍 Buscando usuario con ID: ${id}`)
    const usuario = UsuarioRepository.findById(id)
    if (usuario) {
      console.log(`✅ usuario encontrado: ${usuario.nombre} ${usuario.apellido}`)
      return usuario
    } else {
      console.log(`❌ usuario con ID ${id} no encontrado`)
      return null
    }
  }

  static async searchByName(nombre: string): Promise<Usuario[]> {
    console.log(`🔍 Buscando usuarios por nombre: "${nombre}"`)
    const usuarios = UsuarioRepository.findByName(nombre)
    console.log(`✅ ${usuarios.length} usuarios encontrados`)
    return usuarios
  }

  static async getByGender(genero: 'Masculino' | 'Femenino' | 'Otro'): Promise<Usuario[]> {
    console.log(`👫 Obteniendo usuarios por género: ${genero}`)
    const usuarios = UsuarioRepository.findByGender(genero)
    console.log(`✅ ${usuarios.length} usuarios encontrados`)
    return usuarios
  }

  static async create(usuario: UsuarioInput): Promise<void> {
    console.log('➕ Creando nuevo usuario:', usuario)
    const newusuario = UsuarioRepository.create(usuario)
    console.log(`✅ usuario creado con ID: ${newusuario.id}`)
  }

  static async update(id: number, usuario: UsuarioUpdate): Promise<void> {
    console.log(`✏️ Actualizando usuario ID ${id}:`, usuario)
    const updated = UsuarioRepository.update(id, usuario)
    if (!updated) {
      throw new Error('usuario no encontrado')
    }
    console.log(`✅ usuario ${id} actualizado exitosamente`)
  }

  static async delete(id: number): Promise<void> {
    console.log(`🗑️ Eliminando usuario con ID: ${id}`)
    const deleted = UsuarioRepository.delete(id)
    if (!deleted) {
      throw new Error('usuario no encontrado')
    }
    console.log(`✅ usuario ${id} eliminado exitosamente`)
  }

  static async getCount(): Promise<number> {
    const count = UsuarioRepository.count()
    console.log(`📊 Total de usuarios: ${count}`)
    return count
  }
} 