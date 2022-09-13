import styled, { css } from 'styled-components';
import { theme } from '../../theme';

interface ButtonBoxProps {
    borderRadius?: string;
    light?: boolean;
    dark?: boolean;
    disabled?: boolean
}

const ButtonBox = styled.button<ButtonBoxProps>`
    font-size: 1em;
    border-radius: 3px;   
    color: white;
    width: 100%;
    height: 100%;
    font-family: ${theme.typography.fonts.family};
    font-weight: ${theme.typography.fonts.weights[1]};
    border-width: 0px;
    border-radius: ${props => props.borderRadius};
    ${props =>
            props.light &&
            css`
        background: ${theme.colors.primary.cyan}
    `};
    ${props =>
            props.dark &&
            css`
        background: ${theme.colors.primary['dark-violet']}
    `};
    &:hover{
    cursor:pointer;
    }
    ${props =>
            props.disabled === true &&
            css`
    background: #8ea8a8;
    &:hover{
        cursor:inherit;
    }
    `};
`

interface ButtonProps {
    light?: boolean | undefined;
    dark?: boolean | undefined;
    disabled?: boolean | undefined;
    borderRadius?: string | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode
}

const Button = ({
    light,
    dark,
    disabled,
    borderRadius,
    onClick,
    children,
}: ButtonProps) => {
    return (
        <ButtonBox
            light={light}
            dark={dark}
            disabled={disabled}
            borderRadius={borderRadius}
            onClick={onClick}
        >
            {children}
        </ButtonBox>
    )
};

export default Button;
