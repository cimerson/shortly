import styled from 'styled-components';

interface CardBoxProps {
    ml?: string;
    pl?: string;
    width?: string;
    height?: string;
    pos?: string;
}

const CardBox = styled.div<CardBoxProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: ${props => props.ml};
    padding-left: ${props => props.pl};
    width: ${props => props.width? props.width : "100%"};
    height: ${props => props.height};
    position: ${props => props.pos};
    border-radius: 2px;
    &.cd-box-3{
        box-sizing: border-box;
        padding: 0 20px;
        padding-top: 15px;
        justify-content: flex-start;
    }
    &.cd-box-4{
        box-sizing: border-box;
        justify-content: flex-start;
        padding-top: 15px;
    }
    ${`@media(max-width: 500px)`}{
        &.cd-box-3{
            padding: 0 5px;
        }
    }
`
export default CardBox;
