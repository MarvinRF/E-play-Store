import ProductsList from '../../ProductsList'

import {
  useGetActionGamesQuery,
  useGetEsportGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetEsportGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportsGames && fightGames && simulationGames && rpgGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          background="black"
          title="Ação"
          id="action"
        />
        <ProductsList
          games={sportsGames}
          background="gray"
          title="Esportes"
          id="sports"
        />
        <ProductsList
          games={simulationGames}
          background="black"
          title="Simulação"
          id="simulation"
        />
        <ProductsList
          games={fightGames}
          background="gray"
          title="Luta"
          id="fight"
        />
        <ProductsList
          games={rpgGames}
          background="black"
          title="RPG"
          id="rpg"
        />
      </>
    )
  }
  return <div>Carregando...</div>
}

export default Categories
