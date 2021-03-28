import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/y-so-serious-white.png';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: repeat;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score, .loading {
        color: #333;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: 'Roboto', sans-serif;
        background-size: 100%;
        background-clip: text;
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
        // background-image: linear-gradient(180deg, #fff, #87f1ff);
        // filter: drop-shadow(2px 2px #0085a3);
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
        // -moz-background-clip: text;
        // -moz-text-fill-color: transparent;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #d16860);
        border: 2px solid #d16860;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }
`