import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../components/pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => '/destaque'
    }),
    getOnsale: builder.query<Game[], void>({
      query: () => '/promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => '/em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => '/acao'
    }),
    getEsportGames: builder.query<Game[], void>({
      query: () => '/esportes'
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => '/rpg'
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => '/luta'
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => '/simulacao'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetOnsaleQuery,
  useGetSoonQuery,
  useGetActionGamesQuery,
  useGetEsportGamesQuery,
  useGetRpgGamesQuery,
  useGetFightGamesQuery,
  useGetSimulationGamesQuery,
  useGetGameQuery
} = api

export default api
