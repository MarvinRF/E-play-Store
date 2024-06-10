import React, { useState } from 'react'
import Card from '../../Card'

import { InputGroup, Row, TabButton } from './styles'
import Button from '../../Button'

import boleto from '../../../assets/barcode.png'
import cartao from '../../../assets/credit.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, ' O nome precisa ter no minimo 5 caracteres')
        .required('Campo obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      cpf: Yup.string()
        .min(14, 'o campo precisa ter 14 caracteres')
        .max(14, 'o campo precisa ter 14 caracteres')
        .required('Campo obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deviveryEmail')], 'Os e-mails preicisam ser iguais')
        .required('Campo obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatorio') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) {
      return message
    }
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title={'Dados de Cobrança'}>
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input
                id="fullName"
                name="fullName"
                onChange={form.handleChange}
                value={form.values.fullName}
                onBlur={form.handleBlur}
                type="text"
                placeholder="Digite o seu nome"
              />
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                onChange={form.handleChange}
                value={form.values.email}
                type="email"
                placeholder="Digite o seu E-mail"
              />
              <small>{getErrorMessage('email', form.errors.email)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                placeholder="Digite o seu CPF"
                name="cpf"
                onChange={form.handleChange}
                value={form.values.cpf}
              />
              <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
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
                name="deliveryEmail"
                onChange={form.handleChange}
                value={form.values.deliveryEmail}
              />
              <small>
                {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o E-mail</label>
              <input
                id="confirmDeliveryEmail"
                type="email"
                placeholder="Digite o seu e-mail"
                name="confirmDeliveryEmail"
                onChange={form.handleChange}
                value={form.values.confirmDeliveryEmail}
              />
              <small>
                {getErrorMessage(
                  'confirmDeliveryEmail',
                  form.errors.confirmDeliveryEmail
                )}
              </small>
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
                    name="cardOwner"
                    onChange={form.handleChange}
                    value={form.values.cardOwner}
                  />
                  <small>
                    {getErrorMessage('cardOwner', form.errors.cardOwner)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cpfCardOwner">CPF do titular do cartão</label>
                  <input
                    type="text"
                    id="cpfCardOwner"
                    placeholder="CPF do titular"
                    name="cpfCardOwner"
                    onChange={form.handleChange}
                    value={form.values.cpfCardOwner}
                  />
                  <small>
                    {getErrorMessage('cpfCardOwner', form.errors.cpfCardOwner)}
                  </small>
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup>
                  <label htmlFor="cardDisplayName">Nome cartão</label>
                  <input
                    type="text"
                    id="cardDisplayName"
                    placeholder="Nome como no cartão"
                    name="cardDisplayName"
                    onChange={form.handleChange}
                    value={form.values.cardDisplayName}
                  />
                  <small>
                    {getErrorMessage(
                      'cardDisplayName',
                      form.errors.cardDisplayName
                    )}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardNumber">Numero do cartão</label>
                  <input
                    type="number"
                    id="cardNumber"
                    placeholder="Numero do cartão"
                    name="cardNumber"
                    onChange={form.handleChange}
                    value={form.values.cardNumber}
                  />
                  <small>
                    {getErrorMessage('cardNumber', form.errors.cardNumber)}
                  </small>
                </InputGroup>
                <InputGroup maxWidth="123px">
                  <label htmlFor="expiresMonth">Mês do vencimento</label>
                  <input
                    type="text"
                    id="expiresMonth"
                    placeholder="Data do vencimento"
                    name="expiresMonth"
                    onChange={form.handleChange}
                    value={form.values.expiresMonth}
                  />
                  <small>
                    {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
                  </small>
                </InputGroup>
                <InputGroup maxWidth="123px">
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input
                    type="text"
                    id="expiresYear"
                    placeholder="Ano de vencimento"
                    name="expiresYear"
                    onChange={form.handleChange}
                    value={form.values.expiresYear}
                  />
                  <small>
                    {getErrorMessage('expiresYear', form.errors.expiresYear)}
                  </small>
                </InputGroup>
                <InputGroup maxWidth="48px">
                  <label htmlFor="cardCode">CVV</label>
                  <input
                    type="text"
                    id="cardCode"
                    placeholder="CVV"
                    name="cardCode"
                    onChange={form.handleChange}
                    value={form.values.cardCode}
                  />
                  <small>
                    {getErrorMessage('cardCode', form.errors.cardCode)}
                  </small>
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup maxWidth="150px">
                  <label htmlFor="installments">Parcelamento</label>
                  <select
                    id="installments"
                    name="installments"
                    onChange={form.handleChange}
                    value={form.values.installments}
                  >
                    <option>1x de R$ 200,00</option>
                    <option>2x de R$ 200,00</option>
                    <option>3x de R$ 200,00</option>
                  </select>
                  <small>
                    {getErrorMessage('installments', form.errors.installments)}
                  </small>
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
    </form>
  )
}

export default Checkout
