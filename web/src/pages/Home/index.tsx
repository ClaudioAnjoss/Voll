import styled from 'styled-components'
import Capa from 'assets/capa.png'
import Medicos from 'assets/medicos.png'
import Banner from 'components/Banner'
import Busca from 'components/Busca'

export default function Home() {
  return (
    <>
      <section>
        <Banner />

        {/* Busca */}
        <Busca />

        {/* Depoimentos */}
        <div></div>
      </section>
    </>
  )
}
