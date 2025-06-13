import type { Usuario } from '../types/usuario'

export class UsuarioList {
  private container: HTMLElement
  private onEdit: (usuario: Usuario) => void
  private onDelete: (id: number) => Promise<void>

  constructor(
    container: HTMLElement,
    onEdit: (usuario: Usuario) => void,
    onDelete: (id: number) => Promise<void>
  ) {
    this.container = container
    this.onEdit = onEdit
    this.onDelete = onDelete
  }

  render(usuarios: Usuario[]): void {
    this.container.innerHTML = `
      <h2>Lista de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha Nacimiento</th>
            <th>Género</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${usuarios.map(usuario => `
            <tr data-id="${usuario.id}">
              <td>${usuario.id}</td>
              <td>${usuario.nombre}</td>
              <td>${usuario.apellido}</td>
              <td data-date="${usuario.fecha_nacimiento}">${new Date(usuario.fecha_nacimiento).toLocaleDateString()}</td>
              <td>${usuario.genero}</td>
              <td>${usuario.telefono || '-'}</td>
              <td>${usuario.email || '-'}</td>
              <td>${usuario.direccion || '-'}</td>
              <td>
                <button class="edit-btn" data-id="${usuario.id}">Editar</button>
                <button class="delete-btn" data-id="${usuario.id}">Eliminar</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `

    this.setupEventListeners()
  }

  private setupEventListeners(): void {
    // Agregar event listeners a los botones de editar
    this.container.querySelectorAll('.edit-btn').forEach(button => {
      button.addEventListener('click', () => {
        const id = Number(button.getAttribute('data-id'))
        const row = button.closest('tr')
        if (row) {
          const usuario: Usuario = {
            id: id,
            nombre: row.cells[1].textContent || '',
            apellido: row.cells[2].textContent || '',
            fecha_nacimiento: row.cells[3].getAttribute('data-date') || '',
            genero: row.cells[4].textContent as 'Masculino' | 'Femenino' | 'Otro',
            telefono: row.cells[5].textContent === '-' ? undefined : row.cells[5].textContent || undefined,
            email: row.cells[6].textContent === '-' ? undefined : row.cells[6].textContent || undefined,
            direccion: row.cells[7].textContent === '-' ? undefined : row.cells[7].textContent || undefined,
          }
          this.onEdit(usuario)
        }
      })
    })

    // Agregar event listeners a los botones de eliminar
    this.container.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', async () => {
        const id = Number(button.getAttribute('data-id'))
        if (id && confirm('¿Está seguro de eliminar este usuario?')) {
          await this.onDelete(id)
        }
      })
    })
  }
} 