import React from 'react'
import {
  Container,
  Copy,
  FooterSection,
  Link,
  Links,
  SectionTitle
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <Link to="/categories#action">Ação</Link>
            <Link to="/categories#sports">Esportes</Link>
            <Link to="/categories#simulation">Simulação</Link>
            <Link to="/categories#fight">Luta</Link>
            <Link to="/categories#rpg">RPG</Link>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso Rápido</SectionTitle>
          <Links>
            <Link to="/#on-sale">Promoções</Link>
            <Link to="/#coming-soon">Em breve</Link>
          </Links>
        </FooterSection>
        <Copy>
          {currentYear} - &copy; Steam Verde Todos os Direitos Reservados
        </Copy>
      </div>
    </Container>
  )
}

export default Footer
