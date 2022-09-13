import styled from 'styled-components';
import { theme } from '../../theme';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

interface CardTextBoxProps {
    width?: string;
    mw?: string;
    mb?: string;
    fs?: string;
    fw?: string;
    color?: string; 
}

const CardTextBox = styled.p<CardTextBoxProps>`
    width: ${props => props.width};
    max-width: ${props => props.mw};
    margin-bottom: ${props => props.mb};
    font-size: ${props => props.fs};
    font-weight: ${props => props.fw};
    color: ${props => props.color};
    text-align: left;
    ${mbBreak}{
        text-align: center;
        &.card-head{
            font-size: 13px;
        }
        &.card-content{
            font-size: 9px;
        }
    }
`
export default CardTextBox;
