import { Box, Modal } from '@mui/material'
import CampoDigitacao from 'components/CampoDigitacao'
import Titulo from 'components/Titulo'
import { useState } from 'react'
import styled from 'styled-components'

const BoxCustomizado = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  max-height: 90vh;
  overflow-y: auto;
  background-color: white;
  border: none;
  border-radius: 16px;
  padding: 1em 5em;
`

const Formulario = styled.form`
  .endereco {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0 1em;
  }
`

export default function ModalCadastro({
  open,
  handleClose,
}: {
  open: boolean
  handleClose: () => void
}) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaRepeat, setSenhaRepeat] = useState('')
  const [especialidade, setEspecialidade] = useState('')
  const [crm, setCrm] = useState('')
  const [telefone, setTelefone] = useState('')
  const [url, setUrl] = useState('')
  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [estado, setEstado] = useState('')

  return (
    <Modal
      open={open}
      onClose={handleClose}
      // eslint-disable-next-line jsx-a11y/aria-props
      aria-Labelledby="Modal de cadastro do especialista"
      aria-describedby="Nesse modal tera os dados de cadastro do especialista"
    >
      <BoxCustomizado>
        <Titulo>Cadastre o especialista inserindo os dados abaixo:</Titulo>
        <Formulario>
          <div className="dados">
            <CampoDigitacao
              tipo="text"
              valor={nome}
              placeholder="Digite seu nome completo"
              onChange={setNome}
              label="Nome"
            />
            <CampoDigitacao
              tipo="text"
              valor={email}
              placeholder="Insira seu endereço de email"
              onChange={setEmail}
              label="Email"
            />
            <CampoDigitacao
              tipo="password"
              valor={senha}
              placeholder="Digite sua senha"
              onChange={setSenha}
              label="Crie uma senha"
            />
            <CampoDigitacao
              tipo="password"
              valor={senhaRepeat}
              placeholder="Repita a senha"
              onChange={setSenhaRepeat}
              label="Repita a senha anterior"
            />
            <CampoDigitacao
              tipo="text"
              valor={especialidade}
              placeholder="Qual sua especialidade?"
              onChange={setEspecialidade}
              label="Especialidade"
            />
            <CampoDigitacao
              tipo="text"
              valor={crm}
              placeholder="Insira seu número de registro"
              onChange={setCrm}
              label="CRM"
            />
            <CampoDigitacao
              tipo="text"
              valor={telefone}
              placeholder="(DDD) XXXXX-XXXX"
              onChange={setTelefone}
              label="Telefone"
            />
            <CampoDigitacao
              tipo="text"
              valor={url}
              placeholder="https://img.com/fotos/retrato-de-um-jovem-medico"
              onChange={setUrl}
              label="Insira a URL da imagem"
            />
            <CampoDigitacao
              tipo="text"
              valor={cep}
              placeholder="Insira o CEP"
              onChange={setCep}
              label="Endereço"
            />
          </div>
          <div className="endereco">
            <CampoDigitacao
              tipo="text"
              valor={rua}
              placeholder="Rua"
              onChange={setRua}
            />
            <CampoDigitacao
              tipo="text"
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
            <CampoDigitacao
              tipo="text"
              valor={estado}
              placeholder="Estado"
              onChange={setEstado}
            />
            <CampoDigitacao
              tipo="text"
              valor={estado}
              placeholder="Estado"
              onChange={setEstado}
            />
          </div>
          <div className="plano"></div>
        </Formulario>
      </BoxCustomizado>
    </Modal>
  )
}
