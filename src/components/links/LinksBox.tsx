import styled from 'styled-components';
import { theme } from '../../theme';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

interface LinksBoxProps {
    width?: string;
    height?: string;
    ml?: string;
    pl?: string;
}

const LinksBox = styled.div<LinksBoxProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${props=>props.ml};
    padding-left: ${props=>props.pl};
    width: ${props=>props.width};
    height: ${props=>props.height};
    border-radius: 3px;
    &.lb-box-1{
        justify-content: flex-start;
    }
    &.lb-box-2{
        background-color: white;
    }
    &.lb-box-3{
        justify-content: space-between;
    }
    &.lb-box-4{
        justify-content: center;
    }
    &.lb-box-5{
        font-size: calc(5px + 0.5vw);
        max-width: 100px;
    }
    &.lb-link-box-1{
        justify-content: flex-start;
        padding-left: 15px;
    }
    &.lb-link-box-2{
        justify-content: flex-end;
    }
    ${`@media(max-width: 630px)`}{
        &.lb-box-1{
            margin-left: 30px;
        }
    }
    ${mbBreak}{
        &.lb-box-1{
            height: 130px;
        }
        &.lb-box-2{
            height: 95%;
            flex-direction: column;
            justify-content: space-evenly;
        }
        &.lb-box-3{
            flex-direction: column;
            width: 93%;
            height: 65px;
        }
        &.lb-box-4{
            width: 93%;
            height: 25px;
        }
        &.lb-box-5{
            width: 95%;
            height: 100%;
            max-width: 400px;
            font-size: calc(8px + 0.8vw);
        }
        &.lb-link-box-1,&.lb-link-box-2{
            padding: 0;
            width: 95%;
            justify-content: flex-start;
        }
    }
`
export default LinksBox;
