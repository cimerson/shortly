import styled from 'styled-components';
import { theme } from '../../theme';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

interface SearchBoxProps {
    width?: string;
    height?: string;
    ml?: string;
    mr?: string
    pl?: string;
    pd?: string;
    bgc?: string;
    background?: string;
};

const SearchBox = styled.div<SearchBoxProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    padding-left: ${props => props.pl};
    padding-top: ${props => props.pd};
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 8px;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: 100% 168px;
    &.sb-in-cont{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
    }
    &.sb-box-1{
        justify-content: flex-start;
    }
    &.sb-box-5{
        justify-content: flex-start;
    }
    ${`@media(max-width: 630px)`}{
        &.sb-box-1{
            margin-left: 30px;
        }
    }
    ${mbBreak}{
        &.sb-box-1{
            margin: 0;
            width: 90%;
            height: 150px;
        }
        &.sb-box-2{
            flex-direction: column;
            height: 150px;
            padding: 5px 0;
            width: 100%;
            background-color: ${theme.colors.primary['dark-violet']};
        }
        &.sb-box-3{
            width: 100%;
            height: 120px;
        }
        &.sb-box-4{
            padding: 0;
            height: 90%;
        }
        &.sb-box-5{
            width: 100%;
            
            justify-content: center;
        }
        &.sb-box-6{
            width: 91%;
            height: 77%;
        }
    }
`
export default SearchBox;
