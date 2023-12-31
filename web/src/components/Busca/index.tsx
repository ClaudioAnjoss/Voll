import Botao from 'components/Botao'
import styled from 'styled-components'
import { AiOutlineClose, AiOutlineMonitor } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'

const ContainerBusca = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 40px auto;
  padding: 32px;
  border-radius: 8px;
  gap: 32px;
  box-sizing: border-box;

  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`
const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 994px;
  gap: 20px;

  @media only screen and (max-width: 670px) {
    display: flex;
    flex-direction: column;
  }
`
const InputBusca = styled.div`
  display: flex;

  width: 100%;
  max-width: 439px;
  height: 48px;
  padding: 0px, 16px, 0px, 0px;
  border-radius: 8px;

  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  cursor: pointer;

  .icon {
    width: 56px;
    height: 52px;

    box-sizing: border-box;
    padding: 16px;
    gap: 10px;

    font-size: 24px;

    background: rgba(237, 237, 237, 1);
  }

  input {
    padding-left: 8px;
    font-size: 16px;

    border: 0 none;
    outline: 0;
  }
`
const BotaoEnviar = styled.button`
  width: 84px;
  height: 52px;
  background-color: var(--azul-escuro);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--branco);
  border: none;
  font-weight: 700;
  line-height: 19px;
`

const Descricao = styled.span`
  //styleName: H3 - bold;
  font-family: Public Sans;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0 auto;
`
const CardsBusca = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;

  span {
    margin: 4px;
    border-radius: 4px;

    background: rgba(231, 235, 239, 1);

    button {
      border: none;
      background: none;
      cursor: pointer;
    }
  }
`

export default function Busca() {
  return (
    <ContainerBusca>
      <ContainerInput>
        <InputBusca>
          <AiOutlineMonitor className="icon" />
          <input type="text" placeholder="Digite a especialidade" />
        </InputBusca>
        <InputBusca>
          <ImLocation2 className="icon" />
          <input type="text" placeholder="Digite sua localização" />
        </InputBusca>
        <BotaoEnviar>Buscar</BotaoEnviar>
      </ContainerInput>
      <Descricao>Você pode estar procurando por estas categorias:</Descricao>
      <CardsBusca>
        <span>
          Neurologista{' '}
          <button>
            <AiOutlineClose />
          </button>
        </span>
        <span>
          Dermatologista{' '}
          <button>
            <AiOutlineClose />
          </button>
        </span>
        <span>
          Cardiologista{' '}
          <button>
            <AiOutlineClose />
          </button>
        </span>
        <span>
          Ortopedista{' '}
          <button>
            <AiOutlineClose />
          </button>
        </span>
        <span>
          Oftalmologista{' '}
          <button>
            <AiOutlineClose />
          </button>
        </span>
        <span>
          Pediatria{' '}
          <button>
            <AiOutlineClose />
          </button>
        </span>
        <span>
          Reumatologista{' '}
          <button>
            <AiOutlineClose />
          </button>
        </span>
      </CardsBusca>
    </ContainerBusca>
  )
}
