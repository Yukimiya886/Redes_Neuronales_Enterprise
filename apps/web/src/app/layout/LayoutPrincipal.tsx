import type { ReactNode } from 'react'

interface LayoutPrincipalProps {
  children: ReactNode
}

export function LayoutPrincipal({ children }: LayoutPrincipalProps) {
  return (
    <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1>NeuroLab Enterprise</h1>
        <nav>
          <a href="/">Dashboard</a> | <a href="/proyectos">Proyectos</a>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  )
}
