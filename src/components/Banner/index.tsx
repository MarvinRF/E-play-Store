import Tag from '../Tag'
import Button from '../Button'

import { parseToBrl } from '../../utils'
import { useGetFeaturedGameQuery } from '../../services/api'

import { Image, Title, Prices } from '../Banner/styles'
import Loader from '../Loader'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover}) ` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game?.name}</Title>
          <Prices>
            De <span>{parseToBrl(game.prices.old)}</span> <br /> Por apenas{' '}
            {parseToBrl(game.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          title="clique aqui para aproveitar esta oferta"
          to={`/product/${game.id}`}
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
