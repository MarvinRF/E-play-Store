import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../components/pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

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
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
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
  useGetGameQuery,
  usePurchaseMutation
} = api

export default api
