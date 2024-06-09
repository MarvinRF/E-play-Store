import React from 'react'

import { HeaderBar, CartButton, LinkItem, Links } from '../Header/styles'
import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho.svg'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'

const navOptions = [
  {
    name: 'Categorias',
    href: '/categories'
  },
  {
    name: 'Novidades',
    href: '/novidades'
  },
  {
    name: 'Promoções',
    href: '/promocoes'
  }
]

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="Eplay" />
        </Link>
        <nav>
          <Links>
            {navOptions.map((option) => (
              <LinkItem key={option.name}>
                <Link to={option.href}>{option.name}</Link>
              </LinkItem>
            ))}
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
