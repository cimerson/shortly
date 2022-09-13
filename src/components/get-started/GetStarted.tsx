import GSContainer from './GetStartedContainer';
import GSBox from './GetStartedBox';
import GSText from './GetStartedText';
import Button from '../common/Button';


const GetStarted = () => {
    return (

        <GSContainer style={{ backgroundColor: "hsl(257, 27%, 26%)" }}>
            <GSBox>
                <GSText fw="800" fs="calc(20px + 1vw)">Boost your links today</GSText>
                <GSBox width="25%" height="45px" mw="180px" miw="110px" >
                    <Button light={true} borderRadius="18px">Get Started</Button>
                </GSBox>
            </GSBox>
        </GSContainer>

    );
};

export default GetStarted;
