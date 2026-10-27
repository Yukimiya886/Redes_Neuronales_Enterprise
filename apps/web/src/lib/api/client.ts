const BASE_URL = 'http://localhost:8000/api/v1'

export async function apiGet<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`)

  if (!response.ok) {
    throw new Error(`Error en ${endpoint}`)
  }

  return response.json() as Promise<T>
}
