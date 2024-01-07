import { Step, StepLabel, Stepper } from '@mui/material'
import Botao from 'components/Botao'
import CampoDigitacao from 'components/CampoDigitacao'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import IClinica from 'types/IClinica'
import usePost from 'usePost'

interface PropsCustomizadas {
  cor: string
}
const StepCustomizado = styled.div<PropsCustomizadas>`
  background-color: ${({ cor }) => cor};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-top: 5.5em;
`

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  max-width: 588px;

  .botao-large {
    width: 100%;
    max-width: 312px;

    cursor: pointer;
  }
`

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
  display: grid;
  width: 100%;
  grid-template-columns: 30% 65%;
  justify-content: space-between;
`

export default function Cadastro() {
  const [etapaAtiva, setEtapaAtiva] = useState(0)
  const [nome, setNome] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaVerificada, setSenhaVerificada] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [estado, setEstado] = useState('')
  const { CadastrarDados, erro, sucesso } = usePost()
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const clinica: IClinica = {
      email,
      nome,
      senha,
      endereco: {
        cep,
        rua,
        numero,
        complemento,
        estado,
      },
    }

    if (etapaAtiva !== 0) {
      try {
        CadastrarDados({ url: 'clinica', dados: clinica })
        navigate('/login')
      } catch (erro) {
        erro && alert('Erro ao cadastrar os dados')
      }
    }

    setEtapaAtiva(etapaAtiva + 1)
  }

  return (
    <>
      <Stepper activeStep={etapaAtiva}>
        <Step>
          <StepLabel
            StepIconComponent={(props) => (
              <StepCustomizado cor={props.active ? 'lightblue' : 'lightgray'} />
            )}
          />
        </Step>
        <Step>
          <StepLabel
            StepIconComponent={(props) => (
              <StepCustomizado cor={props.active ? 'lightblue' : 'lightgray'} />
            )}
          />
        </Step>
      </Stepper>
      {etapaAtiva === 0 ? (
        <>
          <Titulo>Primeiro, alguns dados básicos:</Titulo>

          <Formulario onSubmit={handleSubmit}>
            <CampoDigitacao
              tipo="text"
              valor={nome}
              placeholder="Digite o nome da clínica"
              onChange={setNome}
              label="Nome"
            />
            <CampoDigitacao
              tipo="text"
              valor={cnpj}
              placeholder="Digite o CNPJ"
              onChange={setCnpj}
              label="CNPJ"
            />
            <CampoDigitacao
              tipo="text"
              valor={email}
              placeholder="Insira o endereço de e-mail para login"
              onChange={setEmail}
              label="Email"
            />
            <CampoDigitacao
              tipo="text"
              valor={senha}
              placeholder="Digite sua senha"
              onChange={setSenha}
              label="Crie uma senha"
            />
            <CampoDigitacao
              tipo="text"
              valor={senhaVerificada}
              placeholder="Repita a senha anterior"
              onChange={setSenhaVerificada}
              label="Repita a senha"
            />
            <Botao className="botao-large">Avancar</Botao>
          </Formulario>
        </>
      ) : (
        <>
          <Titulo>Agora, os dados técnicos:</Titulo>
          <Formulario onSubmit={handleSubmit}>
            <CampoDigitacao
              tipo="tel"
              label="Telefone"
              valor={telefone}
              placeholder="(DDD) XXXXX-XXXX"
              onChange={setTelefone}
            />
            <CampoDigitacao
              tipo="number"
              label="CEP"
              valor={cep}
              placeholder="Insira o CEP"
              onChange={setCep}
            />
            <CampoDigitacao
              tipo="text"
              label="Rua"
              valor={rua}
              placeholder="Rua"
              onChange={setRua}
            />
            <Container>
              <CampoDigitacao
                tipo="number"
                valor={numero}
                placeholder="Número"
                onChange={setNumero}
              />
              <CampoDigitacao
                tipo="text"
                valor={complemento}
                placeholder="Complemento"
                onChange={setComplemento}
              />
              <CampoDigitacao
                tipo="text"
                valor={estado}
                placeholder="Estado"
                onChange={setEstado}
              />
            </Container>
            <Botao type="submit">Cadastrar</Botao>
          </Formulario>
        </>
      )}
    </>
  )
}
