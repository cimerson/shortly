import styled from 'styled-components';
import { theme }  from '../../theme';

const NavModalBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.primary['dark-violet']};
    border-radius: 8px;
    padding: 25px 0px;
    &.nav-mod-box{
        width:50%;
        justify-content: unset;
    }
`
export default NavModalBox;
