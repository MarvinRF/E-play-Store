import React from 'react'

import hogwarts from '../../assets/images/hogwarts.png'
import { ContainerBanner, Infos } from './style'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  return (
    <ContainerBanner style={{ backgroundImage: `url(${hogwarts})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$ 250,00</span>
            Por R$ 139,90
          </p>
          <Button
            type="button"
            title="Clique aqui para adicionar este jogo ao carrinho"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        </Infos>
      </div>
    </ContainerBanner>
  )
}

export default Banner
