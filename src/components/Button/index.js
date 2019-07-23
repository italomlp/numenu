import React from "react";

import { Button as StyledButton } from "./styles";

export default function Button({ error, ...props }) {
  return <StyledButton error={error} {...props} />;
}
