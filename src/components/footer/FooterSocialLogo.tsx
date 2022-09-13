import styled from 'styled-components';

const FooterSocialLogo = styled.img`
    width: 8%;
    height: 25px;
    min-width: 20px;
    &:hover{
        cursor: pointer;
        filter: invert(.5) sepia(1) saturate(3) hue-rotate(134deg);
    }
    ${`@media(max-width: 790px)`}{
        width: 4%;
        padding: 0 15px;
    }
`
export default FooterSocialLogo;
