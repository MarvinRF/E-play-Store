import React from 'react'
import Card from '../../Card'

import { InputGroup, Row } from './styles'
import Button from '../../Button'

const Checkout = () => {
  return (
    <div className="container">
      <Card title={'Dados de Cobrança'}>
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullname">Nome Completo</label>
              <input
                id="fullname"
                type="text"
                placeholder="Digite o seu Nome"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="Digite o seu E-mail"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" placeholder="Digite o seu CPF" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dado de entrega - conteúdo Digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input
                id="deliveryEmail"
                type="email"
                placeholder="Digite o seu e-mail"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confitmDeliveryEmail">Confirme o E-mail</label>
              <input
                id="confitmDeliveryEmail"
                type="email"
                placeholder="Digite o seu e-mail"
              />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="pagamento">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
            dolores esse inventore ex fuga ducimus iste quae quo exercitationem
            fugiat sapiente magni ipsa officia nobis dignissimos sequi. Et, non
            quaerat.
          </p>
        </div>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </div>
  )
}

export default Checkout
