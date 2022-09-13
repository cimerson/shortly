import styled from 'styled-components';
import { theme } from '../../theme';

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;

interface SearchFieldProps {
    error: string;
}

const SearchInput = styled.input<SearchFieldProps>`
    height: 60%;
    width: 100%;
    border: ${props => props.error? `2px solid ${theme.colors.secondary.red}`: "none"};
    border-radius: 8px;
    text-indent: 15px;
    font-family: ${theme.typography.fonts.family} !important;
    font-weight: ${theme.typography.fonts.weights[1]};
    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${props => props.error? theme.colors.secondary.red : theme.colors.neutral.gray};
        font-size: 15px;
    }
    :-ms-input-placeholder {
        color: ${props => props.error? theme.colors.secondary.red :theme.colors.neutral.gray};
        font-size: 15px;
    }
    &:focus{
        outline:none;
    }
    ${mbBreak}{
        height: 80%;
    }
`
export default SearchInput;
