import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline: 0;
    box-sizing:border-box;
  }

  body {
    background-color: #F5F5DC;
    --webkit-font-smoothing: antialiased;
  }

  body, button {
    font: 16px Roboto, sans-serif;
  }
`;
