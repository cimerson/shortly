import FooterContainer from './FooterContaienr';
import { Box1, Box1a, Box2, Box2a, Box3, Box3a, Box3ab } from './FooterBoxs';
import FooterWebLogo from './FooterWebLogo';
import { FooterBoxElements, FooterBoxElementHead } from './FooterBoxElements';
import FooterSocialLogo from './FooterSocialLogo';

import logo from '../../assets/logo.svg';
import facebook from '../../assets/icon-facebook.svg';
import twitter from '../../assets/icon-twitter.svg';
import pinterest from '../../assets/icon-pinterest.svg';
import instagram from '../../assets/icon-instagram.svg';


const Footer = () => {
    
    const Features= ["Link Shortening","Branded Links","Analytics"]
    const Resources= ["Blog","Developer","Support"]
    const Company= ["About","Our Team","Careers","Contact"]

    return(
        <FooterContainer>
            <Box1>
                <Box1a>
                    <FooterWebLogo src={logo} alt="logo"></FooterWebLogo>
                </Box1a>
            </Box1>
            <Box2>
                <Box2 className="foot-box2-cont-2">
                    <Box2a>
                        <FooterBoxElementHead>Features</FooterBoxElementHead>
                        {Features.map((ft,i)=>{
                            return(
                                <FooterBoxElements key={i}>{ft}</FooterBoxElements>
                            )
                        })}
                    </Box2a>
                    <Box2a>
                        <FooterBoxElementHead>Resources</FooterBoxElementHead>
                        {Resources.map((re,i)=>{
                            return(
                                <FooterBoxElements key={i}>{re}</FooterBoxElements>
                            )
                        })}
                    </Box2a>
                    <Box2a>
                        <FooterBoxElementHead>Company</FooterBoxElementHead>
                        {Company.map((co,i)=>{
                            return(
                                <FooterBoxElements key={i}>{co}</FooterBoxElements>
                            )
                        })}
                    </Box2a>
                </Box2>
            </Box2>
            <Box3>
                <Box3a>
                    <Box3ab>
                        <FooterSocialLogo src={facebook} alt="facebook"></FooterSocialLogo>
                        <FooterSocialLogo src={twitter} alt="twitter"></FooterSocialLogo>
                        <FooterSocialLogo src={pinterest} alt="pinterest"></FooterSocialLogo>
                        <FooterSocialLogo src={instagram} alt="instagram"></FooterSocialLogo>
                    </Box3ab>
                </Box3a>
            </Box3>
        </FooterContainer>
    )
};

export default Footer;
