import { useParams } from 'react-router-dom'

import Section from '../../Section'
import Gallery from '../../Gallery'
import Hero from '../../Hero'

import { useGetGameQuery } from '../../../services/api'

const Product = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title={'Sobre o Jogo'} background={'black'}>
        <p>{game.description}</p>
      </Section>
      <Section title={'Mais Detalhes'} background={'cinza'}>
        <p>
          <b>Plataforma:</b> {game.details.platforms}
          <br />
          <b>Desenvolvedor:</b> {game.details.developer}
          <br />
          <b>Editora:</b> {game.details.publisher}
          <br />
          <b>Idiomas:</b>
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
