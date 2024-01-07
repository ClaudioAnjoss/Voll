import Botao from 'components/Botao'
import CampoDigitacao from 'components/CampoDigitacao'
import { useState } from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
  color: var(--Text-Text-1, #6b6e71);
  text-align: center;

  /* H2 - bold */
  font-family: Public Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  span {
    color: var(--azul-escuro);
    text-align: center;

    /* Paragraph - regular */
    font-family: Public Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.4px; /* 121.25% */
  }

  .cadastro {
    color: #339cff;
    font-weight: bold;
    cursor: pointer;
  }

  .botao-large {
    width: 90%;
    max-width: 280px;
  }
`

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <Container>
      <Titulo>Faça login em sua conta</Titulo>
      <CampoDigitacao
        valor={email}
        tipo="text"
        placeholder="Insira seu endereço de email"
        onChange={setEmail}
        label="Email"
      />
      <CampoDigitacao
        valor={senha}
        tipo="text"
        placeholder="Insira sua senha"
        onChange={setSenha}
        label="Senha"
      />
      <Botao className="botao-large">Entrar</Botao>
      <span>Esqueceu sua senha?</span>
      <span>
        Ainda não tem conta?{' '}
        <span className="cadastro">Faça seu cadastro!</span>
      </span>
    </Container>
  )
}
