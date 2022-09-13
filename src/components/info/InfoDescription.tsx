import styled from 'styled-components';
import { theme } from '../../theme';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

const InfoDescription = styled.p`
    font-size: calc(4px + 1vw);
    color: ${theme.colors.neutral.gray};
    margin-top: 0;
    margin-bottom: 15px;
    text-align: left;
    ${mbBreak}{
        text-align: center;  
        width: 95%;
        font-size: 13px;
    }
`
export default InfoDescription;
