import React, { useEffect, useState } from 'react'
import ProductsList from '../../ProductsList'
import Banner from '../../Banner'

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
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [embreve, setEmbreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmbreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promocoes} background="gray" title="Promoções" />
      <ProductsList games={embreve} background="black" title="Em Breve" />
    </>
  )
}

export default Home
