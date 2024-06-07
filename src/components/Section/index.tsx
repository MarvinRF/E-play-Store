import React from 'react'
import { Container, Title } from './styles'

export type Props = {
  title: string
  background: 'cinza' | 'black'
  children?: JSX.Element
}

const Section = ({ title, background, children }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        {children}
      </div>
    </Container>
  )
}

export default Section
