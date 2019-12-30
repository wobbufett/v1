import { createGlobalStyle } from 'styled-components';
import { design } from '@styles';

const { colors, fontSizes, fonts } = design;


const GlobalStyle = createGlobalStyle`

    html {
        /* font-family: sans-serif; */
        box-sizing: border-box;
        width: 100%;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        background-color: ${colors.myrtlegreen};
        font-size: ${fontSizes.md};
        font-family: ${fonts.Raleway};

        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    h1 {
        font-weight: 600;
        line-height: 1.1;
        margin: 0;
        font-size: 2.25rem;
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.45rem;
    }
`;

export default GlobalStyle;