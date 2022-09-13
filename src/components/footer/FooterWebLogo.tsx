import styled from 'styled-components';

const FooterWebLogo = styled.img`
    width: 38%;
    min-width:110px;
    filter: brightness(0) invert(1);
    ${`@media(max-width: 790px)`}{
        max-width: 100px;
    }
`
export default FooterWebLogo;
