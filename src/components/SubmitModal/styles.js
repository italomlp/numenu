import styled from "styled-components";
import { colors } from "../../styles/colors";

export const OverlayBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: #0005;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  min-width: 300px;
  min-height: 300px;
  width: 60%;
  height: 70%;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  z-index: 11;
  flex-direction: column;
  overflow: scroll;

  p,
  h1 {
    margin-bottom: 25px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  border-left: 2px solid #0003;
  border-right: 2px solid #0003;
  padding: 10px;
  border-top: 1px solid #0003;
  border-bottom: 1px solid #0003;

  &:only-child {
    border-top: 2px solid #0003;
    border-bottom: 2px solid #0003;
  }

  &:first-child {
    border-top: 2px solid #0003;
  }
  &:last-child {
    border-bottom: 2px solid #0003;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

export const Value = styled.label`
  flex: 2;
  color: ${({ error }) => (error ? colors.warn : colors.primary)};
`;

export const ActionsContainer = styled.div`
  margin-top: auto;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
