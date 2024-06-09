import { Imagem, Titulo, Precos } from '../Banner/styles'
import Tag from '../Tag'
import Button from '../Button'

import { formataPreco } from '../ProductsList/index'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

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
