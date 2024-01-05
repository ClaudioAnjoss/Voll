import Dashboard from 'pages/Dashboard'
import Home from 'pages/Home'
import PaginaBase from 'pages/PaginaBase'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
