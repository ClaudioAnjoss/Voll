import { CheckBox, Close } from '@mui/icons-material'
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  Switch,
} from '@mui/material'
import Botao from 'components/Botao'
import CampoDigitacao from 'components/CampoDigitacao'
import Subtitulo from 'components/Subtitulo'
import Titulo from 'components/Titulo'
import React, { useState } from 'react'
import autenticaStore from 'stores/autentica.store'
import styled from 'styled-components'
import IProfissional from 'types/IProfissional'
import usePost from 'usePost'

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

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--azul-claro);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--cinza-claro);
    border-radius: 10px;
    margin: 10px;
  }
`
const CloseCustomizado = styled(Close)`
  width: 24px;
  height: 24px;
  color: var(--azul-claro);
  position: fixed;
  top: 24px;
  right: 24px;
  cursor: pointer;
`

const Formulario = styled.form`
  .endereco {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0 1em;
  }
`

const ContainerSwitch = styled.div`
  text-align: center;
`
const TextoSwitch = styled.p`
  color: var(--cinza);
`
const BotaoCustomizado = styled(Botao)`
  width: 50%;
  display: block;
  margin: 0 auto;
  cursor: pointer;
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
  const [possuiPlano, setPossuiPlano] = useState(false)
  const [planoSelecionado, setPlanoSelecionado] = useState<string[]>([])
  const label = { inputProps: { 'aria-label': 'Atende por plano?' } }
  const { CadastrarDados } = usePost()
  const { usuario } = autenticaStore

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxValue = event.target.value

    if (event.target.checked) {
      setPlanoSelecionado([...planoSelecionado, checkboxValue])
    } else {
      setPlanoSelecionado(
        planoSelecionado.filter((plano) => plano !== checkboxValue),
      )
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const profissional: IProfissional = {
      nome,
      crm,
      especialidade,
      possuiPlanoSaude: possuiPlano,
      senha,
      planosSaude: planoSelecionado,
      estaAtivo: true,
      imagem: url,
      email,
      telefone,
      endereco: {
        cep,
        rua,
        estado,
        numero,
        complemento,
      },
    }

    await CadastrarDados({
      url: 'especialista',
      dados: profissional,
      token: usuario.token,
    })
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      // eslint-disable-next-line jsx-a11y/aria-props
      aria-Labelledby="Modal de cadastro do especialista"
      aria-describedby="Nesse modal tera os dados de cadastro do especialista"
    >
      <BoxCustomizado>
        <CloseCustomizado onClick={handleClose} />
        <Titulo>Cadastre o especialista inserindo os dados abaixo:</Titulo>
        <Formulario onSubmit={handleSubmit}>
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
              tipo="number"
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
          </div>
          <ContainerSwitch>
            <Subtitulo>Atende por plano?</Subtitulo>
            <Switch
              checked={possuiPlano}
              {...label}
              onChange={(event) => {
                setPossuiPlano(event.target.checked)
              }}
            />
            <TextoSwitch>Não/Sim</TextoSwitch>
          </ContainerSwitch>
          {possuiPlano ? (
            <>
              <Subtitulo>Selecione os planos:</Subtitulo>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChange} value="Sulamerica" />
                  }
                  label="Sulamerica"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} value="Unimed" />}
                  label="Unimed"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChange} value="Bradesco" />
                  }
                  label="Bradesco"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} value="Amil" />}
                  label="Amil"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChange} value="Biosaúde" />
                  }
                  label="Biosaúde"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} value="Biovida" />}
                  label="Biovida"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} value="Outro" />}
                  label="Outro"
                />
              </FormGroup>
            </>
          ) : (
            ''
          )}

          <BotaoCustomizado>Cadastrar</BotaoCustomizado>
        </Formulario>
      </BoxCustomizado>
    </Modal>
  )
}
