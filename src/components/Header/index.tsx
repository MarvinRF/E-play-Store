import React from 'react'

import { HeaderBar, LinkCart, LinkItem, Links } from '../Header/styles'
import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho.svg'

const navOptions = [
  {
    name: 'Categorias',
    href: '#'
  },
  {
    name: 'Novidades',
    href: '#'
  },
  {
    name: 'Promoções',
    href: '#'
  }
]

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="Eplay" />
      <nav>
        <Links>
          {navOptions.map((option) => (
            <LinkItem key={option.name}>
              <a href={option.href}>{option.name}</a>
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
