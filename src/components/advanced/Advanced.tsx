import { theme } from '../../theme';

import Card from '../card/Card';
import AdvancedContainer from './AdvancedContainer';
import AdvancedBox from './AdvancedBox';
import AdvancedTextBox from './AdvancedTextbox';

import CARDS from '../card/cards-data';


const Advanced = () => {

    return(
        <AdvancedContainer>
            <AdvancedBox width="90%" height="95%">
                <AdvancedBox height="20%" mt="30px" className="ft-head-box">
                    <AdvancedBox height="100%">
                        <AdvancedTextBox fs="30px"  mb="0" color={theme.colors.primary['dark-violet']}>Advanced Statistics</AdvancedTextBox>
                        <AdvancedTextBox width="50%" mw="419px" fs="14px" color={theme.colors.neutral.gray}>
                            Track how your links are performing across the web with our advanced statistics dashbaord
                        </AdvancedTextBox>
                    </AdvancedBox>
                </AdvancedBox>
                <AdvancedBox width="83%" height="80%" fd="row" jc="space-evenly" className="ft-card-cont">
                    <AdvancedBox width="30%" height="100%" jc="flex-start" className="ft-card-1">
                        <Card head={CARDS[0].head} content={CARDS[0].content} image={CARDS[0].image} />
                    </AdvancedBox>
                    <AdvancedBox width="30%" height="100%"  jc="flex-start" className="ft-card-2">
                        <Card head={CARDS[1].head} content={CARDS[1].content} image={CARDS[1].image} card2={true} />
                    </AdvancedBox>
                    <AdvancedBox width="30%" height="100%"  jc="flex-start" className="ft-card-3">
                        <Card head={CARDS[2].head} content={CARDS[2].content} image={CARDS[2].image} card3={true} />
                    </AdvancedBox>
                    <AdvancedBox width="60%" height="10px" bc={theme.colors.primary.cyan} className="ft-card-line"  ps="absolute" mt="3%"></AdvancedBox>
                </AdvancedBox>
            </AdvancedBox>
        </AdvancedContainer>
    )
};

export default Advanced;
