import type { libro } from '../types/libro'

export class libroList {
  private container: HTMLElement
  private onEdit: (libro: libro) => void
  private onDelete: (id: number) => Promise<void>

  constructor(
    container: HTMLElement,
    onEdit: (libro: libro) => void,
    onDelete: (id: number) => Promise<void>
  ) {
    this.container = container
    this.onEdit = onEdit
    this.onDelete = onDelete
  }

  render(categories: libro[]): void {
    this.container.innerHTML = `
      <h2>Lista de Categorias</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${categories.map(libro => `
            <tr data-id="${libro.id}">
              <td>${libro.id}</td>
              <td>${libro.description}</td>
              <td>
                <button class="edit-btn" data-id="${libro.id}">Editar</button>
                <button class="delete-btn" data-id="${libro.id}">Eliminar</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `

    this.setupEventListeners()
  }

  private setupEventListeners(): void {
    this.container.querySelectorAll('.edit-btn').forEach(button => {
      button.addEventListener('click', () => {
        const id = Number(button.getAttribute('data-id'))
        const row = button.closest('tr')
        if (row) {
          const libro: libro = {
            id: id,
            description: row.cells[1].textContent || '',
            autor: row.cells[1].textContent || ''
          }
          this.onEdit(libro)
        }
      })
    })

    // Agregar event listeners a los botones de eliminar
    this.container.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', async () => {
        const id = Number(button.getAttribute('data-id'))
        if (id && confirm('¿Está seguro de eliminar esta categoria?')) {
          await this.onDelete(id)
        }
      })
    })
  }
} 