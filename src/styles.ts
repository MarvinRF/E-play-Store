import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEEEEE',
  preto: '#111111',
  cinza: '#333333',
  verde: '#10AC84',
  cinzaClaro: '#a3a3a3'
}

export const BreakPoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  list-style: none;
}

body{
  background-color: ${cores.preto};
  color: ${cores.branca};
  padding-top: 40px;
}
.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media(max-width: ${BreakPoints.desktop}){
  max-width: 80%;
  }
}
`
