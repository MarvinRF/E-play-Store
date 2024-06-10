import React, { useState } from 'react'
import Card from '../../Card'

import { InputGroup, Row, TabButton } from './styles'
import Button from '../../Button'

import boleto from '../../../assets/barcode.png'
import cartao from '../../../assets/credit.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

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
      <Card title="Pagamento">
        <div>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="Boleto bancario" />
            Boleto Bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartao} alt="Cartão de crédito" />
            Boleto Bancário
          </TabButton>
          {payWithCard ? (
            <>
              <Row>
                <InputGroup>
                  <label htmlFor="cardOwner">Nome do titular do cartão</label>
                  <input
                    type="text"
                    id="cardOwner"
                    placeholder="Nome completo"
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cpfcardOwner">CPF do titular do cartão</label>
                  <input
                    type="text"
                    id="cpfcardOwner"
                    placeholder="CPF do titular"
                  />
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup>
                  <label htmlFor="cardDisplayName">Nome cartão</label>
                  <input
                    type="text"
                    id="ccardDisplayName"
                    placeholder="Nome como no cartão"
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardNumber">Numero do cartão</label>
                  <input
                    type="number"
                    id="cardNumber"
                    placeholder="Numero do cartão"
                  />
                </InputGroup>
                <InputGroup maxWidth="123px">
                  <label htmlFor="expiresMonth">Mês do vencimento</label>
                  <input
                    type="text"
                    id="expiresMonth"
                    placeholder="Data do vencimento"
                  />
                </InputGroup>
                <InputGroup maxWidth="123px">
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input
                    type="text"
                    id="expiresYear"
                    placeholder="Ano de vencimento"
                  />
                </InputGroup>
                <InputGroup maxWidth="48px">
                  <label htmlFor="cardCode">CVV</label>
                  <input type="text" id="cardCode" placeholder="CVV" />
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup maxWidth="150px">
                  <label htmlFor="installments">Parcelamento</label>
                  <select>
                    <option>1x de R$ 200,00</option>
                    <option>2x de R$ 200,00</option>
                    <option>3x de R$ 200,00</option>
                  </select>
                </InputGroup>
              </Row>
            </>
          ) : (
            <p>
              Ao optar por essa forma de pagamento, é importante lembrar que a
              confirmação pode levar até 3 dias úteis, devido aos prazos
              estabelecidos pelas instituições financeiras. Portanto, a
              liberação do código de ativação do jogo adquirido ocorrerá somente
              após a aprovação do pagamento do boleto.
            </p>
          )}
        </div>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </div>
  )
}

export default Checkout
