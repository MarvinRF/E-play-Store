import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  border-radius: 8px;
  background-color: transparent;
  font-size: 1rem;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  border-radius: 8px;
  background-color: transparent;
  font-size: 1rem;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
`
