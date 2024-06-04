import React from 'react'
import { Imagem, Titulo, Precos } from './styles'
import BannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Hero = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${BannerImg}) ` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
          <Precos>
            De <span>R$ 250,00</span> <br /> Por apenas R$ 99,90
          </Precos>
        </div>
        <Button
          type="link"
          title="clique aqui para aproveitar esta oferta"
          to="/produto"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Hero
