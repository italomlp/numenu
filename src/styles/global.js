import { createGlobalStyle } from "styled-components";
import color from "color";
import { colors } from "./colors";

const primaryWrappedColor = color(colors.primary);

const documentBgColors = {
  primary: primaryWrappedColor.alpha(0.01).toString(),
  second: primaryWrappedColor.alpha(0.12).toString(),
  third: primaryWrappedColor.alpha(0.4).toString(),
  forth: primaryWrappedColor.toString()
};

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
    background:radial-gradient(
      ${documentBgColors.primary} 5%,
      ${documentBgColors.second} 25%,
      ${documentBgColors.third},
      ${documentBgColors.forth}
    );
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
