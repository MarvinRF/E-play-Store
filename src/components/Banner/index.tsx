import { useEffect, useState } from 'react'
import { Imagem, Titulo, Precos } from '../Banner/styles'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../pages/Home'
import { formataPreco } from '../ProductsList/index'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover}) ` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br /> Por apenas{' '}
            {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          title="clique aqui para aproveitar esta oferta"
          to={`/product/${game.id}`}
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
