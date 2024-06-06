import React from 'react'

import { HeaderBar, LinkCart, LinkItem, Links } from '../Header/styles'
import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho.svg'
import { Link } from 'react-router-dom'

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

const Header = () => (
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
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
