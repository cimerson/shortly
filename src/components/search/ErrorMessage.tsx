import styled from 'styled-components';
import { theme } from '../../theme';

const ErrorMessage = styled.p`
    color: ${theme.colors.secondary.red};
    margin: 0;
    margin-top: 5px;
    font-size: 12px;
    font-style: italic;
    font-weight: ${theme.typography.fonts.weights[1]};
`
export default ErrorMessage;
