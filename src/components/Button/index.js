import React from "react";

import { Button as StyledButton } from "./styles";

export default function Button({ theme, ...props }) {
  return <StyledButton theme={theme} {...props} />;
}
