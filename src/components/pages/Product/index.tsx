import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../Banner'
import Section from '../../Section'
import Gallery from '../../Gallery'

import hogwarts from '../../../assets/images/hog-2.png'

const Product = () => {
  const { id } = useParams()
  return (
    <>
      <Banner />
      <Section title={'Sobre o Jogo'} background={'black'}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          iusto delectus? Quisquam fugit sit esse quam? Error consectetur et
          tempore minima, at in aut quidem temporibus quod amet quas atque.
        </p>
      </Section>
      <Section title={'Mais Detalhes'} background={'cinza'}>
        <p>
          <b>Plataforma:</b> PlayStation 5 <br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Games, subsidiária da Warner Bros. Interactive
          Entertainment <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          inglês, espanhol, francês, alemão, italiano, português, entre outros.
          As opções de áudio e legendas podem ser ajustadas nas configurações do
          jogo.
        </p>
      </Section>
      <Gallery name="Hogwarts Legacy" defaultCover={hogwarts} />
    </>
  )
}

export default Product
