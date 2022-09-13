import styled from 'styled-components';

interface GCBoxProps {
    width?: string;
    height?: string;
    mw?: string;
    miw?: string;
    fs?: string;
}

const GSBox = styled.div<GCBoxProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: ${props => props.width};
    height: ${props => props.height};
    max-width: ${props => props.mw};
    min-width: ${props => props.miw};
    font-size: ${props => props.fs};
`
export default GSBox;
