import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --text-title: #101820;
    --text-body: #48626F;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // default font-size = 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%;  // 14px
    }
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: var(--text-body)
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: var(--text-title)
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`;
