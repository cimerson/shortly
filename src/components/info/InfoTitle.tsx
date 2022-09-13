import styled from 'styled-components';
import { theme } from '../../theme';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

const InfoTitle = styled.p`
    font-size: calc(25px + 3vw);
    font-weight: 10px;
    color: ${theme.colors.primary['dark-violet']};
    margin-bottom: 0;
    text-align: left;
    ${mbBreak}{
        text-align: center;  
        width: 90%;
    }
`
export default InfoTitle;
