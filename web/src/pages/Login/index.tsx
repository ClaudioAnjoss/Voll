import { Button } from '@mui/material'
import Botao from 'components/Botao'
import CampoDigitacao from 'components/CampoDigitacao'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import autenticaStore from 'stores/autentica.store'
import styled from 'styled-components'
import usePost from 'usePost'
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded'

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
const Formulario = styled.form`
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
    text-decoration: none;
  }

  .botao-large {
    width: 90%;
    max-width: 280px;
  }
`

interface ILogin {
  email: string
  senha: string
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { CadastrarDados, erro, sucesso, resposta } = usePost()
  const navigate = useNavigate()

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const usuario: ILogin = {
      email,
      senha,
    }

    try {
      CadastrarDados({ url: 'auth/login', dados: usuario })
      autenticaStore.login({ email, token: resposta })
      resposta && navigate('/dashboard')
    } catch (erro) {
      console.log(erro)
      console.log('erro de login')
      erro && alert('Nao foi possivel fazer login')
    }
  }

  return (
    <Formulario onSubmit={handleLogin}>
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
      <Button className="botao-large" onClick={() => navigate('/')}>
        Pagina Inicial <ReplyRoundedIcon />
      </Button>
      <span>Esqueceu sua senha?</span>
      <span>
        Ainda não tem conta?{' '}
        <Link to="/cadastro" className="cadastro">
          Faça seu cadastro!
        </Link>
      </span>
    </Formulario>
  )
}
