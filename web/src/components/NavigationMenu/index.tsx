import { AiOutlineShop } from 'react-icons/ai'
import styled from 'styled-components'

export default function NavigationMenu() {
  const ContainerMenu = styled.div`
    display: flex;
    justify-content: space-between;

    max-width: 1200px;
    height: 132px;

    margin: 0 auto;
  `
  const CardMenu = styled.div`
    width: 283px;
    height: 132px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgba(231, 235, 239, 1);
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.15);

    .icon {
      width: 72px;
      height: 72px;

      color: rgba(11, 59, 96, 1);
    }

    span {
      font-size: 16px;
      font-weight: 500;
      color: rgba(11, 59, 96, 1);
    }
  `

  return (
    <ContainerMenu>
      <CardMenu>
        <AiOutlineShop className="icon" />
        <span>Encontre especialistas</span>
      </CardMenu>
      <CardMenu>
        <AiOutlineShop className="icon" />
        <span>Encontre especialistas</span>
      </CardMenu>
      <CardMenu>
        <AiOutlineShop className="icon" />
        <span>Encontre especialistas</span>
      </CardMenu>
      <CardMenu>
        <AiOutlineShop className="icon" />
        <span>Encontre especialistas</span>
      </CardMenu>
    </ContainerMenu>
  )
}
