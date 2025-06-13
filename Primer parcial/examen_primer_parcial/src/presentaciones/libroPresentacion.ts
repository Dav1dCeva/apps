import { LibroService } from '../service/libroService'
import { libroForm } from '../components/libroForm'
import { libroList } from '../components/libroList'
import type { libro, libroInput } from '../types/libro'

export class libroPresentation {
  private categories: libro[] = []
  private editingLibro: libro | null = null
  private formContainer: HTMLElement
  private listContainer: HTMLElement
  private libroForm: libroForm
  private categoryList: libroList

  constructor() {
    // Inicializar la estructura del DOM
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div class="container">
        <h1>Gestión de Categorias</h1>
        <div id="formContainer"></div>
        <div id="libroList"></div>
      </div>
    `

    // Obtener referencias a los contenedores
    this.formContainer = document.getElementById('formContainer')!
    this.listContainer = document.getElementById('libroList')!

    // Inicializar componentes
    this.libroForm = new libroForm(
      this.formContainer,
      this.handleSubmit.bind(this),
      this.handleCancel.bind(this)
    )

    this.categoryList = new libroList(
      this.listContainer,
      this.handleEdit.bind(this),
      this.handleDelete.bind(this)
    )

    // Cargar datos iniciales
    this.loadCategories()
  }

  private async loadCategories(): Promise<void> {
    try {
      this.categories = await LibroService.getAll()
      this.categoryList.render(this.categories)
    } catch (error) {
      console.error('Error al cargar libros:', error)
      alert('Error al cargar la lista de libros')
    }
  }

  private async handleSubmit(data: libroInput): Promise<void> {
    try {
      if (this.editingLibro) {
        await LibroService.update(this.editingLibro.id, data)
        this.editingLibro = null
        // Limpiar el formulario después de actualizar
        this.libroForm = new libroForm(
          this.formContainer,
          this.handleSubmit.bind(this),
          this.handleCancel.bind(this)
        )
      } else {
        await LibroService.create(data)
      }
      await this.loadCategories()
    } catch (error) {
      console.error('Error al guardar libro:', error)
      throw error
    }
  }

  private handleEdit(libro: libro): void {
    this.editingLibro = libro
    this.libroForm = new libroForm(
      this.formContainer,
      this.handleSubmit.bind(this),
      this.handleCancel.bind(this),
      libro
    )
  }

  private handleCancel(): void {
    this.editingLibro = null
    this.libroForm = new libroForm(
      this.formContainer,
      this.handleSubmit.bind(this),
      this.handleCancel.bind(this)
    )
  }

  private async handleDelete(id: number): Promise<void> {
    try {
      await LibroService.delete(id)
      await this.loadCategories()
    } catch (error) {
      console.error('Error al eliminar libro:', error)
      alert('Error al eliminar el libro')
    }
  }
} 