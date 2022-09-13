import styled from 'styled-components';
import { theme } from '../../theme';

import boostd from '../../assets/bg-boost-desktop.svg';
import boostm from '../../assets/bg-boost-mobile.svg';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

const GSContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 280px;
    font-family: ${theme.typography.fonts.family};
    background: ${theme.colors.primary['dark-violet']};
    background: url(${boostd});
    background-size: 100% 280px;
    background-repeat: no-repeat;
    ${mbBreak}{
        background-color: ${theme.colors.primary['dark-violet']};
        background: url(${boostm});
        background-size: 100% 280px;
        background-repeat: no-repeat;
    }
`
export default GSContainer;
