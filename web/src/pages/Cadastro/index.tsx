import { Step, StepLabel, Stepper } from '@mui/material'
import Botao from 'components/Botao'
import CampoDigitacao from 'components/CampoDigitacao'
import { useState } from 'react'
import styled from 'styled-components'

interface PropsCustomizadas {
  cor: string
}
const StepCustomizado = styled.div<PropsCustomizadas>`
  background-color: ${({ cor }) => cor};
  width: 24px;
  height: 24px;
  border-radius: 50%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  max-width: 588px;

  margin-top: 5.5em;

  .botao-large {
    width: 100%;
    max-width: 312px;
  }
`

export default function Cadastro() {
  const [etapaAtiva, setEtapaAtiva] = useState(0)
  const [nome, setNome] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <Container>
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
        valor={senha}
        placeholder="Repita a senha anterior"
        onChange={setSenha}
        label="Repita a senha"
      />
      <Botao className="botao-large">Avancar</Botao>
    </Container>
  )
}
