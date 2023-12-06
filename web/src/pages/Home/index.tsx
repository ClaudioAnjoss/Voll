import styled from 'styled-components'
import Capa from 'assets/capa.png'
import Medicos from 'assets/medicos.png'
import Banner from 'components/Banner'
import Busca from 'components/Busca'
import NavigationMenu from 'components/NavigationMenu'
import Depoimentos from 'components/Depoimentos'

export default function Home() {
  return (
    <>
      <section>
        <Banner />

        <Busca />

        <NavigationMenu />

        <Depoimentos />
      </section>

      <section>{/* Depoimentos */}</section>
    </>
  )
}
