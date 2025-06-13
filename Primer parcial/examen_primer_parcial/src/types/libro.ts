export interface libro {
    id: number
    description: string
    autor: string
    created_at?: string
  }
  
  export type libroInput = Omit<libro, 'id'>
  export type libroUpdate = Partial<libroInput> 