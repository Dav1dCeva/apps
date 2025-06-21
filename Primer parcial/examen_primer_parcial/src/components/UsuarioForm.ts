import type { Usuario, UsuarioInput } from '../types/usuario'

export class UsuarioForm {
  private form: HTMLFormElement
  private onSubmit: (data: UsuarioInput) => Promise<void>
  private onCancel?: () => void
  private usuario?: Usuario

  constructor(
    container: HTMLElement,
    onSubmit: (data: UsuarioInput) => Promise<void>,
    onCancel?: () => void,
    usuario?:Usuario
  ) {
    this.onSubmit = onSubmit
    this.onCancel = onCancel
    this.usuario = usuario
    this.form = this.createForm()
    container.innerHTML = ''
    container.appendChild(this.form)
    this.setupEventListeners()
  }

  private createForm(): HTMLFormElement {
    const form = document.createElement('form')
    form.id = 'usuarioForm'
    form.innerHTML = `
      <h2>${this.usuario ? 'Editar' : 'Nuevo'} Usuario</h2>
      <div class="form-group">
        <input type="text" id="nombre" name="nombre" placeholder="Nombre" required 
          value="${this.usuario?.nombre || ''}">
      </div>
      <div class="form-group">
        <input type="text" id="apellido" name="apellido" placeholder="Apellido" required
          value="${this.usuario?.apellido || ''}">
      </div>
      <div class="form-group">
        <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" required
          value="${this.usuario?.fecha_nacimiento || ''}">
      </div>
      <div class="form-group">
        <select id="genero" name="genero" required>
          <option value="">Seleccione género</option>
          <option value="Masculino" ${this.usuario?.genero === 'Masculino' ? 'selected' : ''}>Masculino</option>
          <option value="Femenino" ${this.usuario?.genero === 'Femenino' ? 'selected' : ''}>Femenino</option>
          <option value="Otro" ${this.usuario?.genero === 'Otro' ? 'selected' : ''}>Otro</option>
        </select>
      </div>
      <div class="form-group">
        <input type="tel" id="telefono" name="telefono" placeholder="Teléfono"
          value="${this.usuario?.telefono || ''}">
      </div>
      <div class="form-group">
        <input type="email" id="email" name="email" placeholder="Email"
          value="${this.usuario?.email || ''}">
      </div>
      <div class="form-group">
        <input type="text" id="direccion" name="direccion" placeholder="Dirección"
          value="${this.usuario?.direccion || ''}">
      </div>
      <button type="submit">${this.usuario ? 'Actualizar' : 'Crear'}</button>
      ${this.usuario ? '<button type="button" id="cancelEdit">Cancelar</button>' : ''}
    `
    return form
  }

  private setupEventListeners(): void {
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault()
      const formData = new FormData(this.form)
      
      const pacienteData: UsuarioInput = {
        nombre: formData.get('nombre') as string,
        apellido: formData.get('apellido') as string,
        fecha_nacimiento: formData.get('fecha_nacimiento') as string,
        genero: formData.get('genero') as 'Masculino' | 'Femenino' | 'Otro',
        telefono: formData.get('telefono') as string || undefined,
        email: formData.get('email') as string || undefined,
        direccion: formData.get('direccion') as string || undefined,
      }

      try {
        await this.onSubmit(pacienteData)
        this.form.reset()
      } catch (error) {
        console.error('Error al guardar el usuario:', error)
        alert('Error al guardar el usuario. Por favor intente nuevamente.')
      }
    })

    const cancelButton = this.form.querySelector('#cancelEdit')
    if (cancelButton && this.onCancel) {
      cancelButton.addEventListener('click', this.onCancel)
    }
  }
} 