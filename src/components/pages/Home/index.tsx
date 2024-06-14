import ProductsList from '../../ProductsList'
import Banner from '../../Banner'

import { useGetOnsaleQuery, useGetSoonQuery } from '../../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: onSaleLoading } = useGetOnsaleQuery()
  const { data: soonGames, isLoading: soonLoading } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        background="gray"
        title="Promoções"
        id="on-sale"
        isLoading={onSaleLoading}
      />
      <ProductsList
        games={soonGames}
        background="black"
        title="Em Breve"
        id="coming-soon"
        isLoading={soonLoading}
      />
    </>
  )
}

export default Home
