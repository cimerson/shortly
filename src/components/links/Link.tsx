import styled from 'styled-components';
import { theme } from '../../theme';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

const Link = styled.p`
    text-align: left;
    font-size: calc(6px + 0.5vw);
    color: ${props => props.color};
    ${mbBreak}{
        font-size: calc(8px + 0.4vw);
    }
`
export default Link;
