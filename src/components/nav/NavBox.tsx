import { theme } from '../../theme';
import styled from 'styled-components';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

const NavBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    &.nav-box-1{
        width:50%;
        justify-content: unset;
    }
    &.nav-box-2{
        width: 25%;
        justify-content: flex-end;
        justify-content: unset;
    }
    &.nav-long-box-cont{
        justify-content: unset;
        width:80%;
    }
    ${mbBreak}{
        &.nav-box-1,&.nav-box-2{
            display: none;
        }
        &.nav-long-box-cont{
            width:50%;
            margin-left: 20px;
        }
    }
`
export default NavBox;
