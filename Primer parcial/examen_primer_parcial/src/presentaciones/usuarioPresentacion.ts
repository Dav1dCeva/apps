import { UsuarioService } from '../service/usuarioService'
import { UsuarioForm } from '../components/UsuarioForm'
import { UsuarioList } from '../components/usuarioList'
import type { Usuario, UsuarioInput } from '../types/usuario'

export class PacientePresentation {
  private pacientes: Usuario[] = []
  private editingPaciente: Usuario | null = null
  private formContainer: HTMLElement
  private listContainer: HTMLElement
  private usuarioForm: UsuarioForm
  private usuarioList: UsuarioList

  constructor() {
    // Inicializar la estructura del DOM
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div class="container">
        <h1>Gestión de Usuarios</h1>
        <div id="formContainer"></div>
        <div id="pacientesList"></div>
      </div>
    `

    // Obtener referencias a los contenedores
    this.formContainer = document.getElementById('formContainer')!
    this.listContainer = document.getElementById('usuariosList')!

    // Inicializar componentes
    this.usuarioForm = new UsuarioForm(
      this.formContainer,
      this.handleSubmit.bind(this),
      this.handleCancel.bind(this)
    )

    this.usuarioList = new UsuarioList(
      this.listContainer,
      this.handleEdit.bind(this),
      this.handleDelete.bind(this)
    )

    // Cargar datos iniciales
    this.loadUsuarios()
  }

  private async loadUsuarios(): Promise<void> {
    try {
      this.pacientes = await UsuarioService.getAll()
      this.usuarioList.render(this.pacientes)
    } catch (error) {
      console.error('Error al cargar usuario:', error)
      alert('Error al cargar la lista de usuarios')
    }
  }

  private async handleSubmit(data: UsuarioInput): Promise<void> {
    try {
      if (this.editingPaciente) {
        await UsuarioService.update(this.editingPaciente.id, data)
        this.editingPaciente = null
        // Limpiar el formulario después de actualizar
        this.usuarioForm = new UsuarioForm(
          this.formContainer,
          this.handleSubmit.bind(this),
          this.handleCancel.bind(this)
        )
      } else {
        await UsuarioService.create(data)
      }
      await this.loadUsuarios()
    } catch (error) {
      console.error('Error al guardar usuario:', error)
      throw error
    }
  }

  private handleEdit(paciente: Usuario): void {
    this.editingPaciente = paciente
    this.usuarioForm = new UsuarioForm(
      this.formContainer,
      this.handleSubmit.bind(this),
      this.handleCancel.bind(this),
      paciente
    )
  }

  private handleCancel(): void {
    this.editingPaciente = null
    this.usuarioForm = new UsuarioForm(
      this.formContainer,
      this.handleSubmit.bind(this),
      this.handleCancel.bind(this)
    )
  }

  private async handleDelete(id: number): Promise<void> {
    try {
      await UsuarioService.delete(id)
      await this.loadUsuarios()
    } catch (error) {
      console.error('Error al eliminar usuario:', error)
      alert('Error al eliminar el usuario')
    }
  }
} 