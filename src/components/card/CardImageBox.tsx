import styled from 'styled-components';
import { theme } from '../../theme';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

const CardImageBox = styled.div`
    width: calc(40px + 2vw);
    height: calc(40px + 2vw);
    background-color: ${theme.colors.primary['dark-violet']};
    border-radius: 50%;
    position: absolute;
    top: -35px;
    left: 10px;
    ${mbBreak}{
        left: 40%;
    }
`
export default CardImageBox;
