import ProductsList from '../../ProductsList'
import Banner from '../../Banner'

import { useGetOnsaleQuery, useGetSoonQuery } from '../../../services/api'
export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string

  prices: {
    discount?: number
    old?: number
    current?: number
  }

  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
    platforms: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnsaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          background="gray"
          title="Promoções"
          id="on-sale"
        />
        <ProductsList
          games={soonGames}
          background="black"
          title="Em Breve"
          id="coming-soon"
        />
      </>
    )
  }
  return (
    <>
      <h4>Carregando...</h4>
    </>
  )
}

export default Home
