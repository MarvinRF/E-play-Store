import { useState } from 'react'

import * as S from '../Header/styles'
import logo from '../../assets/logo.svg'
import cart from '../../assets/carrinho.svg'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const navOptions = [
  {
    name: 'Categorias',
    href: '/categories',
    title: 'clique aqui para acessar a seção de categorias'
  },
  {
    name: 'Novidades',
    href: '/#coming-soon',
    title: 'clique aqui para acessar a seção de novidades'
  },
  {
    name: 'Promoções',
    href: '/#on-sale',
    title: 'clique aqui para acessar a seção de promoções'
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
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <img src={logo} alt="Eplay" />
          </Link>
          <nav>
            <S.Links>
              {navOptions.map((option) => (
                <S.LinkItem key={option.name}>
                  <HashLink title={option.title} to={option.href}>
                    {option.name}
                  </HashLink>
                </S.LinkItem>
              ))}
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={cart} alt="cart" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          {navOptions.map((option) => (
            <S.LinkItem key={option.name}>
              <HashLink to={option.href} onClick={() => setIsMenuOpen(false)}>
                {option.name}
              </HashLink>
            </S.LinkItem>
          ))}
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
