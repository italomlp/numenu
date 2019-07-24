import React from "react";

import {
  OverlayBackground,
  Container,
  Row,
  Label,
  Value,
  ActionsContainer
} from "./styles";
import Button from "../Button";

function ListItem({ error = false, label, value }) {
  return (
    <Row>
      <Label>{label}</Label>
      <Value error={error}>{value}</Value>
    </Row>
  );
}

export default function SubmitModal({
  visible = false,
  errors = {},
  values = {},
  labels = {},
  onClose = () => {},
  ...restProps
}) {
  if (!visible) {
    return null;
  }

  const errorsKeys = Object.keys(errors);
  const valuesKeys = Object.keys(values);
  const isError = errorsKeys && !!errorsKeys.length;
  const renderValues = isError
    ? { keys: errorsKeys, values: errors }
    : { keys: valuesKeys, values };

  return (
    <>
      <OverlayBackground id="overlayBg" onClick={onClose} />
      <Container {...restProps}>
        <h1>Envio</h1>
        {isError ? (
          <p>O formulário apresenta os seguintes erros:</p>
        ) : (
          <p>Você submeteu com sucesso as seguintes informações:</p>
        )}
        <div>
          {renderValues.keys.map(key => (
            <ListItem
              key={key}
              error={isError}
              label={labels[key]}
              value={renderValues.values[key]}
            />
          ))}
        </div>
        <ActionsContainer>
          <Button theme="warn" onClick={onClose}>
            Fechar
          </Button>
        </ActionsContainer>
      </Container>
    </>
  );
}
