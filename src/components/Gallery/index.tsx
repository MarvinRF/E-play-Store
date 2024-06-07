import React from 'react'
import Section from '../Section'
import hog2 from '../../assets/images/hog-2.png'
import { Items, Item } from './styles'

const Gallery = () => {
  return (
    <Section title={'Galeria'} background={'black'}>
      <Items>
        <Item>
          <img src={hog2} alt="imagem do link" />
        </Item>
        <Item>
          <img src={hog2} alt="imagem do link" />
        </Item>
        <Item>
          <img src={hog2} alt="imagem do link" />
        </Item>
        <Item>
          <img src={hog2} alt="imagem do link" />
        </Item>
      </Items>
    </Section>
  )
}

export default Gallery
