import styled from 'styled-components';
import { theme } from '../../theme';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

const InfoElement = styled.div`
    display:flex;
    flex-direction: column;
    &.cov-box-1{
        width:69%;
        padding-left: 10px;
    }
    &.cov-taghead-cont{
        width: 94%;
    }
    &.cov-tagline-cont{
        width: 73%;
    }
    &.cov-btn-cont{
        width: 100%;
        max-width: 150px;
        margin-left: -2px;
        height: 40px;
        font-size: 14px;
    }
    ${`@media(max-width: 580px)`}{
        &.cov-box-1{
            margin-right:10px;
        }
        &.cov-box-2{
            margin-left: 10px;
        }
    }
    ${mbBreak}{
        &.cov-box-1{
            width:100%;
            min-height: 200px;
            padding-left: 0;
        }
        &.cov-box-2{
            width: 100%;
            margin-left: 12px;
        }  
        &.cov-tag-box{
            align-items:center;
        } 
        &.cov-btn-box{
            align-items: center;

        }
        &.cov-taghead-cont{
            width: 90%;
            align-items: center;
        }
        &.cov-tagline-cont{
            width:69%;
        }
    }
`

export default InfoElement;
