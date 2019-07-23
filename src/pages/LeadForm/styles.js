import styled from "styled-components";
import Input from "../../components/Input";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 30px;
  border: 2px solid #007777;
  min-width: 300px;
  width: 30%;

  h1,
  p {
    margin-bottom: 20px;
  }

  ${Input} {
    width: 100%;
  }
`;
