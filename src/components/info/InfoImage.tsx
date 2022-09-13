import styled from 'styled-components';
import { theme } from '../../theme';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

const InfoImage = styled.img`
    width: 123%;
    height: 420px;
    ${mbBreak}{
        width: 110%;
        height: 250px;   
    }
`
export default InfoImage;
