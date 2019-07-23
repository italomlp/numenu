import React from "react";
import styled from "styled-components";

import { Input as StyledInput, Container } from "./styles";

function Input({ className, ...restProps }) {
  return (
    <Container className={className}>
      <StyledInput {...restProps} />
    </Container>
  );
}

export default styled(Input)``;
