import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        transition: all 0.3s;
    }

    ol, ul {
        list-style: none;
    }

    body {
        font-family: ${({theme}) => theme.fonts[0]}
    }
`;

export default GlobalStyle;