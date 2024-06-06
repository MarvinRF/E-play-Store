import React from 'react'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'cinza' | 'black'
}

const ProductsList = ({ background, title }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          <Product
            category="ação"
            description="TESTE"
            system="Windows"
            title="Resident Evil"
            image="https://via.placeholder.com/222x250"
            infos={['-10%', 'R$ 150']}
          />
          <Product
            category="ação"
            description="TESTE"
            system="Windows"
            title="Resident Evil"
            image="https://via.placeholder.com/222x250"
            infos={['-10%', 'R$ 150']}
          />
          <Product
            category="ação"
            description="TESTE"
            system="Windows"
            title="Resident Evil"
            image="https://via.placeholder.com/222x250"
            infos={['-10%', 'R$ 150']}
          />
          <Product
            category="ação"
            description="TESTE"
            system="Windows"
            title="Resident Evil"
            image="https://via.placeholder.com/222x250"
            infos={['-10%', 'R$ 150']}
          />
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
