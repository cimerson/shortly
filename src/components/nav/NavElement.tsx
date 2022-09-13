import { theme } from '../../theme';
import styled from 'styled-components';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

const NavElement = styled.div`
    width: 40%;
    max-width: 90px;
    font-weight: ${theme.typography.fonts.weights[1]};
    font-size: 14px;
    color: ${theme.colors.neutral.gray};
    &.nav-long-box-el{
        max-width: 80px;
        padding-top: 2px;
    }
    &.nav-short-box-btn-cont{
        width:80%;
        max-width:105px;
    }
    &.nav-image-box{
        width:40%;
        min-width:90px;
        max-width: 230px;
        margin-right: 15px;
        display:flex;
        justify-content: flex-end;
    }
    &.nav-sideBar-cont{
        display:none;
        width: 40px;
        padding-right: 15px;
        height: 26px;
    }
    &.nav-short-box-btn-cont :hover{
        cursor:pointer;
    }
    &:hover{
        cursor: pointer;
        color: ${theme.colors.primary['dark-violet']}
    }
    ${`@media(max-width: 550px)`}{
        &.nav-long-box-el{
            font-size: 10px;
            max-width: 50px;
        }
        &.nav-short-box-btn-cont{
            font-size: 11px;
        }
        &.nav-image-box{
            width: 32%;
        }
    }
    ${mbBreak}{
        &.nav-sideBar-cont{
            display:block;
        }
    }
`
export default NavElement;
