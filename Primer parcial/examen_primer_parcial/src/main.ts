import './style.css'
// import { PacientePresentation } from './presentations/PacientePresentation'
import { libroPresentation} from './presentaciones/libroPresentacion'
import { LibroRepository, UsuarioRepository } from './repositorios'

// Mostrar datos iniciales en consola
console.log('📊 Datos iniciales cargados:')
console.log(' libros:', LibroRepository.getAll())
console.log('👥 usuarios:', UsuarioRepository.getAll())
console.log('📈 Estadísticas:')
console.log(`   - Total usuarios: ${LibroRepository.count()}`)
console.log(`   - Total pacientes: ${UsuarioRepository.count()}`)

// Inicializar la presentación de categorías
new libroPresentation()
