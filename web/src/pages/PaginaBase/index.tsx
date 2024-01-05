import Cabecalho from 'components/Cabecalho'
import Rodape from 'components/Rodape'
import Home from 'pages/Home'
import { Outlet } from 'react-router-dom'

export default function PaginaBase() {
  return (
    <>
      <Cabecalho />
      <main>
        <Outlet />
      </main>
      <Rodape />
    </>
  )
}
