import ProductsList from '../../ProductsList'

import resident from '../../../assets/images/resident.png'
import diablo from '../../../assets/images/diablo.png'
import star from '../../../assets/images/star_wars.png'
import zelda from '../../../assets/images/zelda.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [gameAcao, setGameAcao] = useState<Game[]>([])
  const [gameEsportes, setGameEsportes] = useState<Game[]>([])
  const [gameSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gameLuta, setGameLuta] = useState<Game[]>([])
  const [gameRpg, setGameRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRpg(res))
  }, [])

  return (
    <>
      <ProductsList games={gameAcao} background="black" title="Ação" />
      <ProductsList games={gameEsportes} background="gray" title="Esportes" />
      <ProductsList
        games={gameSimulacao}
        background="black"
        title="Simulação"
      />
      <ProductsList games={gameLuta} background="gray" title="Luta" />
      <ProductsList games={gameRpg} background="black" title="RPG" />
    </>
  )
}

export default Categories
