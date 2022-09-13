import { theme } from '../../theme'

import CardContainer from './CardContainer';
import CardBox from './CardBox';
import CardImageBox from './CardImageBox';
import CardImage from './CardImage';
import CardTextBox from './CardTextBox';

interface CardProps {
    image: string;
    head: string;
    card2?: boolean;
    card3?: boolean;
    content: string;
}

const Card = ({ image, head, card2, card3, content }: CardProps) => {
    
    return(
        <CardContainer>
            <CardBox width="95%" height="95%">
                <CardBox height="8%" pos="relative">
                    <CardImageBox>
                        <CardImage src={image} alt={head} card2={card2} card3={card3} />
                    </CardImageBox>
                </CardBox>
                <CardBox height="90%" className="cd-box-3">
                    <CardBox height="90%" className="cd-box-4">
                        <CardTextBox width="100%" fs="calc(5px + 1vw)" mb="0" fw="800" color={theme.colors.primary['dark-violet']} className="card-head">
                            {head}
                        </CardTextBox>
                        <CardTextBox width="100%" fs="calc(5px + 0.6vw)" mb="1em" color={theme.colors.neutral.gray} className="card-content">
                            {content}
                        </CardTextBox>
                    </CardBox>
                </CardBox>
            </CardBox>
        </CardContainer>
    )
};

export default Card;
