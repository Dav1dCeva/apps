import type { libro, libroInput } from '../types/libro'

export class libroForm {
  private form: HTMLFormElement
  private onSubmit: (data: libroInput) => Promise<void>
  private onCancel?: () => void
  private libro?: libro

  constructor(
    container: HTMLElement,
    onSubmit: (data: libroInput) => Promise<void>,
    onCancel?: () => void,
    libro?: libro
  ) {
    this.onSubmit = onSubmit
    this.onCancel = onCancel
    this.libro = libro
    this.form = this.createForm()
    container.innerHTML = ''
    container.appendChild(this.form)
    this.setupEventListeners()
  }

  private createForm(): HTMLFormElement {
    const form = document.createElement('form')
    form.id = 'categoryForm'
    form.innerHTML = `
      <h2>${this.libro ? 'Editar' : 'Nuevo'} Libro</h2>
      <div class="form-group">
        <input type="text" id="nombre" name="nombre" placeholder="Nombre" required 
          value="${this.libro?.description || ''}">
      </div>
      <div class="form-group">
        <input type="text" id="autor" name="autor" placeholder="Autor" required 
          value="${this.libro?.autor || ''}">
      </div>
      <button type="submit">${this.libro ? 'Actualizar' : 'Crear'}</button>
      ${this.libro ? '<button type="button" id="cancelEdit">Cancelar</button>' : ''}
    `
    return form
  }

  private setupEventListeners(): void {
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault()
      const formData = new FormData(this.form)
      
      const libroData: libroInput = {
        description: formData.get('nombre') as string,
        autor: formData.get('autor') as string,
      }

      try {
        await this.onSubmit(libroData)
        this.form.reset()
      } catch (error) {
        console.error('Error al guardar el libro:', error)
        alert('Error al guardar el libro. Por favor intente nuevamente.')
      }
    })

    const cancelButton = this.form.querySelector('#cancelEdit')
    if (cancelButton && this.onCancel) {
      cancelButton.addEventListener('click', this.onCancel)
    }
  }
} 