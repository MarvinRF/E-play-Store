import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Hero />
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
