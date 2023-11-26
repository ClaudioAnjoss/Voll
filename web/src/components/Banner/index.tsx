import styled from 'styled-components'
import Capa from 'assets/capa.png'
import Medicos from 'assets/medicos.png'

const CapaDeFundo = styled.div`
  max-height: 377px;
  padding: 0 5%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background: url(${Capa}) #339cff no-repeat center;
  background-size: cover;

  h2 {
    font-family: Public Sans;
    font-size: max(16px, 2.22vw);
    font-weight: 700;
    max-width: 568px;

    text-align: left;
    color: #e7ebef;
  }

  @media only screen and (max-width: 620px) {
    img {
      max-width: 200px;
    }
  }

  @media only screen and (max-width: 360px) {
    display: none;
  }
`

export default function Banner() {
  return (
    <CapaDeFundo>
      <h2>
        Encontre profissionais de diversas especialidades e agende sua consulta
        com facilidade!
      </h2>
      <img src={Medicos} alt="Medicos" />
    </CapaDeFundo>
  )
}
