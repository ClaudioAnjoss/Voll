import styled from 'styled-components'
import ImagemDeFundo from './ImagemDeFundo.png'
import Logo from './Logo.png'
import { Outlet } from 'react-router-dom'

const ContainerPrincipal = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${ImagemDeFundo});
  background-size: cover;
`

const Container = styled.div`
  width: 50vw;
  height: 100%;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;

  .logo {
    margin-bottom: 5em;
  }

  @media only screen and (max-width: 1000px) {
    width: 70vw;
  }
  @media only screen and (max-width: 360px) {
    width: 100vw;
  }
`

export default function PaginaBaseFormulario() {
  return (
    <ContainerPrincipal>
      <Container>
        <img className="logo" src={Logo} alt="Voll" />
        <Outlet />
      </Container>
    </ContainerPrincipal>
  )
}
