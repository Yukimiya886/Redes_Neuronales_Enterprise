export type Role = 'admin' | 'project_manager' | 'analyst' | 'reviewer' | 'reader'

export interface User {
  id: string
  name: string
  email: string
  role: Role
}

export interface Proyecto {
  id: string
  nombre: string
  estado: 'activo' | 'inactivo' | 'borrador'
  propietario: string
}
