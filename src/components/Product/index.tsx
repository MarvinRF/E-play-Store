import React from 'react'
import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => {
  return (
    <Card>
      <img src="https://via.placeholder.com/222x250" alt="prod" />
      <Titulo>nome do jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Descricao>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt velit
        quia repudiandae corrupti
      </Descricao>
    </Card>
  )
}

export default Product
