import styled from 'styled-components'
import { theme } from '../../theme';

const MainContainer = styled.div`
  text-align: center;
  font-family: ${theme.typography.fonts.family};
  font-weight: ${theme.typography.fonts.weights[1]};
  overflow-x: hidden;

  background-color:white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography['body-copy']};
`

export default MainContainer;
