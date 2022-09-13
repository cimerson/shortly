import styled from 'styled-components';
import { theme }  from '../../theme';

const NavModalElement = styled.div`
    width: 80%;
    height: 30px;
    font-weight: ${theme.typography.fonts.weights[1]};
    font-size: 16px;
    color: white;
    &.nav-modal-btn-box{
        width: 80%;
    }
    &:hover{
        cursor: pointer;
    }
    &.nav-modal-line-box:hover{
        cursor: auto;
    }
`
export default NavModalElement;
