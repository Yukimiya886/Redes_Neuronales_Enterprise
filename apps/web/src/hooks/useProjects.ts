import { useEffect, useState } from 'react'
import { apiGet } from '../lib/api/client'

export function useProjects() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiGet<any[]>('/projects')
      .then((data) => setProjects(data))
      .catch(() => setProjects([]))
      .finally(() => setLoading(false))
  }, [])

  return { projects, loading }
}
