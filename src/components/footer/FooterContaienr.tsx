import styled from 'styled-components';
import { theme } from '../../theme';

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 300px;
    font-family: ${theme.typography.fonts.family};
    background-color: ${theme.colors.neutral['very-dark-violet']};
    ${`@media(max-width: 790px)`}{
        flex-direction: column;
    }
`
export default FooterContainer;
