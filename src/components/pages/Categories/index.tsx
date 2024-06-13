import ProductsList from '../../ProductsList'

import {
  useGetActionGamesQuery,
  useGetEsportGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: actionGamesLoading } =
    useGetActionGamesQuery()
  const { data: sportsGames, isLoading: sportsGamesLoading } =
    useGetEsportGamesQuery()
  const { data: fightGames, isLoading: fightGamesLoading } =
    useGetFightGamesQuery()
  const { data: simulationGames, isLoading: simulationGamesLoading } =
    useGetSimulationGamesQuery()
  const { data: rpgGames, isLoading: rpgGamesLoading } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        background="black"
        title="Ação"
        id="action"
        isLoading={actionGamesLoading}
      />
      <ProductsList
        games={sportsGames}
        background="gray"
        title="Esportes"
        id="sports"
        isLoading={sportsGamesLoading}
      />
      <ProductsList
        games={simulationGames}
        background="black"
        title="Simulação"
        id="simulation"
        isLoading={simulationGamesLoading}
      />
      <ProductsList
        games={fightGames}
        background="gray"
        title="Luta"
        id="fight"
        isLoading={fightGamesLoading}
      />
      <ProductsList
        games={rpgGames}
        background="black"
        title="RPG"
        id="rpg"
        isLoading={rpgGamesLoading}
      />
    </>
  )
}

export default Categories
