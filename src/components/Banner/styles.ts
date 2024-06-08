import { TagContainer } from './../Tag/styles'
import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  .container {
    position: relative;
    padding-top: 21.25rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`
export const Titulo = styled.h2`
  font-size: 2.25rem;
  max-width: 450px;
`
export const Precos = styled.p`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  span {
    text-decoration: line-through;
  }
`
