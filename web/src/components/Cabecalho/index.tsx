import styled from 'styled-components'
import logo from './assets/logo.png'
import perfil from './assets/perfil.png'
import autenticaStore from 'stores/autentica.store'
import { Link } from 'react-router-dom'
import Botao from 'components/Botao'
import { IoMdSearch } from 'react-icons/io'

const CabecalhoEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 4em;

  @media only screen and (max-width: 700px) {
    .logo {
      width: 100px;
    }
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 0.1;

  .navigationHeader {
    color: var(--azul-escuro);
    text-align: center;

    /* Paragraph - regular */
    font-family: 'Public Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.4px; /* 121.25% */
    text-decoration: none;
  }

  .loginButton {
    background-color: var(--azul-escuro);
    border-radius: 8px;
    padding: 12px 16px;
    color: var(--branco);
    border: none;
    line-height: 19px;
    text-decoration: none;
  }
`

const LinkEstilizado = styled.a`
  color: var(--azul-escuro);
  font-weight: 700;
`

const Formulario = styled.form`
  width: 207px;
  height: 48px;
  position: relative;
  z-index: 10;
  input {
    display: flex;
    padding: 14px 16px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--PB-Grey-2, #90989f);
    background: var(--PB-White, #fff);
  }

  input::placeholder {
    font-size: 16px;
  }

  .iconSearch {
    position: absolute;
    top: 12px;
    right: 12px;

    color: var(--azul-escuro);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

function Cabecalho() {
  const { estaAutenticado } = autenticaStore
  return (
    <CabecalhoEstilizado>
      <img src={logo} className="logo" alt="logo da empresa Voll" />
      <Container>
        {estaAutenticado ? (
          <>
            <img src={perfil} alt="imagem de perfil do usuário" />
            <LinkEstilizado href="#">Sair</LinkEstilizado>
          </>
        ) : (
          <>
            <Link to="/sobre" className="navigationHeader">
              Sobre
            </Link>
            <Link to="/cadastro" className="navigationHeader">
              Cadastre-se
            </Link>
            <Formulario>
              <input type="text" placeholder="Digite sua busca" />
              <IoMdSearch className="iconSearch" />
            </Formulario>
            <Link to="/login" className="loginButton">
              Login
            </Link>
          </>
        )}
      </Container>
    </CabecalhoEstilizado>
  )
}

export default Cabecalho
