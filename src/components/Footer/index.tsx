import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.Links>
            <S.Link
              title="clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              Ação
            </S.Link>
            <S.Link
              title="clique aqui para acessar jogos de esportes"
              to="/categories#sports"
            >
              Esportes
            </S.Link>
            <S.Link
              title="clique aqui para acessar jogos de simulação"
              to="/categories#simulation"
            >
              Simulação
            </S.Link>
            <S.Link
              title="clique aqui para acessar jogos de luta"
              to="/categories#fight"
            >
              Luta
            </S.Link>
            <S.Link
              title="clique aqui para acessar jogos de rpg"
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso Rápido</S.SectionTitle>
          <S.Links>
            <S.Link
              title="clique aqui para acessar a seção promoções"
              to="/#on-sale"
            >
              Promoções
            </S.Link>
            <S.Link
              title="clique aqui para acessar a seção em-breve"
              to="/#coming-soon"
            >
              Em breve
            </S.Link>
          </S.Links>
        </S.FooterSection>
        <S.Copy>
          {currentYear} - &copy; Steam Verde Todos os Direitos Reservados
        </S.Copy>
      </div>
    </S.Container>
  )
}

export default Footer
