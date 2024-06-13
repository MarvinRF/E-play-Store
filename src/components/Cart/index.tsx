import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { parseToBrl } from '../../utils'
import { RootReducer } from '../../store/index'
import { useNavigate } from 'react-router-dom'
import { close as closeCa, remove } from '../../store/reducers/cart'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(closeCa())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, currentItem) => {
      if (currentItem.prices.current) {
        return (acc += currentItem.prices.current)
      }
      return 0
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <div></div>
      <S.SideBar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button
                type="button"
                title={'oi'}
                onClick={() => removeItem(item.id)}
              />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          total de {parseToBrl(getTotalPrice())}{' '}
          <span>em até 6x sem juros</span>
        </S.Prices>
        <Button
          title="clique aqui para continuar com a compra"
          type="button"
          onClick={goToCheckout}
        >
          Continuar com a compra
        </Button>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
