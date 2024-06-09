import React from 'react'
import Button from '../Button'
import diab from '../../assets/images/diablo.png'
import close from '../../assets/close.png'

import {
  CartContainer,
  Overlay,
  SideBar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import Tag from '../Tag'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <div></div>
      <SideBar>
        <ul>
          <CartItem>
            <img src={diab} alt="" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 250,00</span>
            </div>
            <button type="button" title={'oi'} />
          </CartItem>
        </ul>
        <Quantity>2 jogos no carrinho</Quantity>
        <Prices>
          total de R$ 250,00 <span>em até 6x sem juros</span>
        </Prices>
        <Button title="clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
