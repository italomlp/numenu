import React, { useState } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import { Button } from "../../components/Button/styles";

import { Container, Form } from "./styles";
import SubmitModal from "../../components/SubmitModal";

const LABELS = {
  name: "Nome",
  email: "Email",
  age: "Idade",
  phone: "Telefone"
};

function LeadForm({ handleChange, handleSubmit, values, errors }) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length) {
      toggleModal();
    }
    handleSubmit();
  }

  return (
    <Container>
      <Form onSubmit={onSubmit} noValidate>
        <h1>Cadastro</h1>
        <p>Forneça as seguintes informações:</p>
        <Input
          placeholder="Nome"
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
          maxLength={50}
        />
        <Input
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          maxLength={50}
        />
        <Input
          placeholder="Idade"
          type="number"
          name="age"
          onChange={handleChange}
          value={values.age}
          min={0}
          max={200}
          step={1}
        />
        <Input
          placeholder="Telefone"
          type="text"
          name="phone"
          maxLength={15}
          onChange={handleChange}
          value={values.phone}
        />

        <Button type="submit">Enviar</Button>
      </Form>
      {!!showModal && (
        <SubmitModal
          labels={LABELS}
          values={values}
          errors={errors}
          onClose={toggleModal}
        />
      )}
    </Container>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    age: "",
    phone: ""
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Digite o nome completo")
      .max(50, "O nome pode ter no máximo 50 caracteres")
      .required("Campo obrigatório"),
    email: Yup.string()
      .email("Email inválido")
      .min(10, "Digite o email completo")
      .max(50, "O email pode ter no máximo 50 caracteres")
      .required("Campo obrigatório"),
    age: Yup.number()
      .min(0, "Idade deve ser maior ou igual a 0")
      .max(200, "Idade deve ser menor ou igual a 200")
      .required("Campo obrigatório"),
    phone: Yup.string()
      .matches(
        /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/g,
        "Telefone não está no formato certo: (99) 99999-9999"
      )
      .required("Campo obrigatório")
  }),

  handleSubmit: (values, { props }) => {
    console.log(values, props);
  }
})(LeadForm);
