import styled from 'styled-components';
import { theme } from '../../theme';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

interface GSTextProps {
    fs?: string;
    fw?: string;
}

const GSText = styled.p<GSTextProps>`
    text-align: center;
    height: 40px;
    font-size: ${props => props.fs};
    font-weight: ${props => props.fw};
    margin-top: 10px;
    color: white;
    ${mbBreak}{
        margin-bottom: 2px;
    }
`
export default GSText;
