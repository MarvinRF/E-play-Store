import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Categories from './components/pages/Categories'
import Product from './components/pages/Product'
import Checkout from './components/pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
