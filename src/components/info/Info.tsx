import InfoContainer from './InfoContainer';
import InfoBox from './InfoBox';
import InfoElement from './InfoElement';
import InfoTitle from './InfoTitle';
import InfoDescription from './InfoDescription';
import InfoImage from './InfoImage';
import Button from '../common/Button';

import iillustration from '../../assets/illustration-working.svg';


const Info = () => {
    
    return(
        <InfoContainer>
            <InfoBox>
                <InfoElement className="cov-box-1">
                    <InfoElement className="cov-tag-box">
                        <InfoElement className="cov-taghead-cont">
                            <InfoTitle>More than just shorter links</InfoTitle>
                        </InfoElement>
                        <InfoElement className="cov-tagline-cont">
                            <InfoDescription>Build your brand's recognition and get detailed insights on how your links are performing.</InfoDescription>
                        </InfoElement>
                    </InfoElement>
                    <InfoElement className="cov-btn-box">
                        <InfoElement className="cov-btn-cont">
                            <Button light={true} borderRadius="18px">
                                Get Started
                            </Button>
                        </InfoElement>
                    </InfoElement>
                </InfoElement>
                <InfoElement className="cov-box-2">
                    <InfoImage src={iillustration} alt="cover" />
                </InfoElement>
            </InfoBox>
        </InfoContainer>
    );
};

export default Info;
