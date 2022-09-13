import styled from 'styled-components';
import { theme } from '../../theme';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 120px;
    ${`@media(max-width: 630px)`}{
        margin-left: 30px;
    }
    ${mbBreak}{
        flex-direction: column-reverse;
        margin-left: 0px;
    }
`

export default InfoBox;
