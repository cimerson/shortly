import styled from 'styled-components';
import { theme } from '../../theme';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

export const FooterBoxElements = styled.div`
    width: 90%;
    text-align: left;
    height:40px;
    color: ${theme.colors.neutral.gray};
    &:hover{
        cursor: pointer;
        color: ${theme.colors.primary.cyan}
    }
    ${`@media(max-width: 790px)`}{
        text-align: center;
    }
    ${mbBreak}{
        height:30px;
    }
`
export const FooterBoxElementHead = styled(FooterBoxElements)`
    color: white;
    height: 55px;
    &:hover{
        color: white;
        cursor: default;
    }
    ${mbBreak}{
        height:35px;
    }
`
