import { Routes, Route } from 'react-router-dom'
import { LayoutPrincipal } from './layout/LayoutPrincipal'
import { DashboardPage } from '../features/dashboard/DashboardPage'
import { ProyectosPage } from '../features/proyectos/ProyectosPage'

export default function App() {
  return (
    <LayoutPrincipal>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
      </Routes>
    </LayoutPrincipal>
  )
}
