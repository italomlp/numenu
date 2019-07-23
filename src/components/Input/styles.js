import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #212121;

  &:focus,
  &:hover {
    box-shadow: 0 0 5px #007777;
  }
`;
