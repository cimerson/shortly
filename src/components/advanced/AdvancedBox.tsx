import styled from 'styled-components';
import { theme } from '../../theme';

interface AdvancedBoxProps {
    fd?: string;
    jc?: string;
    ps?: string;
    mt?: string;
    ml?: string;
    mb?: string;
    pl?: string;
    width?: string;
    height?: string;
    bc?: string;
}

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

const AdvancedBox = styled.div<AdvancedBoxProps>`
    display: flex;
    flex-direction: ${props => props.fd? props.fd : "column"};
    justify-content: ${props => props.jc? props.jc : "center"};
    align-items: center;
    position: ${props => props.ps};
    margin-top: ${props => props.mt};
    margin-left: ${props => props.ml};
    margin-bottom: ${props => props.mb};
    padding-left: ${props => props.pl};
    width: ${props => props.width? props.width : "100%"};
    height: ${props => props.height};
    border-radius: 8px;
    background-color: ${props => props.bc};
    &.ft-card-2{
        padding-top:90px;
    }
    &.ft-card-3{
        padding-top:180px;
    }
    ${mbBreak}{
        &.ft-card-cont{
            flex-direction: column;
        }
        &.ft-head-box{
            margin-bottom: 40px;
        }
        &.ft-card-1,&.ft-card-2,&.ft-card-3{
            width: 90%;
            height: 200px;
        }
        &.ft-card-2,&.ft-card-3{
            padding-top:0;
        }
        &.ft-card-line{
            margin-top: 10px;
            margin-left: 0%;
            width: 2%;
            height: 383px;
        }
    }
`
export default AdvancedBox;
