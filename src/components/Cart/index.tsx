import React from 'react'
import Button from '../Button'
import diab from '../../assets/images/diablo.png'
import close from '../../assets/close.png'
import { RootState } from '../../store/index'

import {
  CartContainer,
  Overlay,
  SideBar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { close as closeCa, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(closeCa())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, valoratual) => {
      return (acc += valoratual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <div></div>
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button
                type="button"
                title={'oi'}
                onClick={() => removeItem(item.id)}
              />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          total de {formataPreco(getTotalPrice())}{' '}
          <span>em até 6x sem juros</span>
        </Prices>
        <Button title="clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
