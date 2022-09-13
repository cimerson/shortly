import styled from 'styled-components';

interface AdvancedTextBoxProps {
    width?: string;
    mw?: string;
    mb?: string;
    fs?: string;
    color?: string;
}

const AdvancedTextBox = styled.p<AdvancedTextBoxProps>`
    width: ${props => props.width};
    max-width: ${props => props.mw};
    margin-bottom: ${props => props.mb};
    font-size: ${props => props.fs};
    color: ${props =>props.color};
`
export default AdvancedTextBox;
