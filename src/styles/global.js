import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: radial-gradient(#00777701 5%, #0077771f 25%, #00777766, #007777ff);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: sans-serif;
    font-size: 14px;
  }
`;
