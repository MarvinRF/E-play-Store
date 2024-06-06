import React from 'react'
import {
  Container,
  Copy,
  FooterSection,
  Link,
  Links,
  sectionTitle
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <h4>Categorias</h4>
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
          <h4>Acesso Rápido</h4>
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
