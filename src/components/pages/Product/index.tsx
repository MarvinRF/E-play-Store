import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Section from '../../Section'
import Gallery from '../../Gallery'
import { Game } from '../Home'
import hogwarts from '../../../assets/images/hog-2.png'
import Banner from '../../Banner'
import Hero from '../../Hero'

const Product = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [id])

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
