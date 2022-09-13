import styled from 'styled-components';
import { theme } from '../../theme';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    max-width: 315px;
    min-height: 225px;
    background-color: white;
    z-index: 20;
    ${mbBreak}{
        min-height: 140px;
    }
`
export default CardContainer;
