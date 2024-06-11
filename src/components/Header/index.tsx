import React, { useState } from 'react'

import {
  HeaderBar,
  CartButton,
  LinkItem,
  Links,
  Hamburguer,
  HeaderRow,
  NavMobile
} from '../Header/styles'
import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho.svg'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

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
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
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
          {items.length}
          <span> - produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          {navOptions.map((option) => (
            <LinkItem key={option.name}>
              <Link to={option.href}>{option.name}</Link>
            </LinkItem>
          ))}
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
