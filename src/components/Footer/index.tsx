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
            <Link>RPG</Link>
            <Link>Ação</Link>
            <Link>Esportes</Link>
            <Link>Aventura</Link>
            <Link>Estratégia</Link>
            <Link>FPS</Link>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso Rápido</SectionTitle>
          <Links>
            <Link>Novidades</Link>
            <Link>Promoções</Link>
            <Link>Em breve</Link>
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
