import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import { GlobalCss } from './styles'
import Product from './components/Product'
import ProductsList from './components/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Hero />
        <ProductsList background="cinza" title="Promoções" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
