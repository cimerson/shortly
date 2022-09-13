// import { DefaultTheme } from 'styled-components';

// const theme: DefaultTheme = {
const theme = {

    colors: {
        primary: {
            'cyan': 'hsl(180, 66%, 49%)',
            'dark-violet': 'hsl(257, 27%, 26%)'
        },
        secondary: {
            'red': 'hsl(0, 87%, 67%)'
        },
        neutral: {
            'gray': 'hsl(0, 0%, 75%)',
            'grayish-violet': 'hsl(257, 7%, 63%)',
            'very-dark-blue': 'hsl(255, 11%, 22%)',
            'very-dark-violet': 'hsl(260, 8%, 14%)',
        }
    },

    typography: {
        'body-copy': {
            'font-size': '18px'
        },
        'fonts': {
            'family': `'Poppins', sans-serif`,
            'weights': ['500', '700']
        }
    },

    breakpoints: ['375px', '1440px']

};

export { theme };