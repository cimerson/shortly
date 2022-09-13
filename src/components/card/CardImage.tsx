import styled from 'styled-components';

interface CardImageProps {
    card2?: boolean;
    card3?: boolean;
}

const CardImage = styled.img<CardImageProps>`
    width: 60%;
    height: 51%;
    top: ${props => (props.card2? "24%" : (props.card3? "25%" : "20%"))};
    left: ${props => props.card2? "20%" : (props.card3? "18%" : "18%")};
    position: absolute;
`
export default CardImage;
