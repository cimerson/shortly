import styled from 'styled-components';
import { theme } from '../../theme';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Box1 = styled(Box)`
    width: 24%;
    min-width: 80px;
    padding-top: 40px;
    ${`@media(max-width: 790px)`}{
        width: 100%;
        padding-top:50px;
    }
`
export const Box1a = styled(Box)`
    width: 100%;
    justify-content: flex-end;
    height: 50px;
    ${`@media(max-width: 790px)`}{
        justify-content: center;
    }
`
export const Box2 = styled(Box)`
    width:50%;
    padding-top: 40px;
    justify-content: flex-end;
    &.foot-box2-cont-2{
        width: 87%;
        max-width: 460px;
        justify-content: space-between;
        padding-top:0;
    }
    ${`@media(max-width: 790px)`}{
        width: 100%;
        padding-top:10px;
        justify-content: center;
        text-align:center;
        &.foot-box2-cont-2{
            width:95%;
        }
    }
    ${mbBreak}{
        flex-direction: column;
        align-items:center;
    }
`
export const Box2a = styled(Box)`
    width: 20%;
    min-width: 138px;
    display:flex;
    flex-direction: column;
    justify-content: unset;
    ${`@media(max-width: 790px)`}{
        width: 60%;
        min-width:124px;
    }
    ${mbBreak}{
        padding-bottom: 10px;
        align-items: center;
    }
`
export const Box3 = styled(Box)`
    width: 25%;
    padding-top: 40px;
    justify-contetn: flex-start;
    ${`@media(max-width: 790px)`}{
        width: 100%;
        padding-top: 10px;
        justify-contetn: center;
    }
`
export const Box3a = styled(Box)`
    width: 100%;
    height: 40px;
`
export const Box3ab = styled(Box3a)`
    width: 80%;
    display:flex;
    justify-content: space-evenly;
    ${`@media(max-width: 790px)`}{
        width: 100%;
        justify-content: center;
    }
`
