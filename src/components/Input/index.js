import styled from "styled-components";
import { colors } from "../../styles/colors";

const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  width: 100%;
  min-width: 200px;
  margin-bottom: 10px;
  border: 1px solid ${colors.dark};

  &:focus,
  &:hover {
    box-shadow: 0 0 5px ${colors.primary};
  }
`;

export default Input;
