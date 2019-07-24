import styled from "styled-components";
import { colors } from "../../styles/colors";

function selectThemeColor(theme) {
  switch (theme) {
    case "warn":
      return colors.warn;
    case "primary":
    default:
      return colors.primary;
  }
}

export const Button = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => selectThemeColor(theme)};
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    box-shadow: 0 0 5px ${({ theme }) => selectThemeColor(theme)};
  }
`;
