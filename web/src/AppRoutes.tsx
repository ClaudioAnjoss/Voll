import Dashboard from 'pages/Dashboard'
import PaginaBase from 'pages/PaginaBase'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
