import React from "react";

import { mount } from "enzyme";
import SubmitModal from "../../components/SubmitModal";

const errors = {
  name: "required"
};

const values = {
  name: "Italo Menezes"
};

const labels = {
  name: "Nome"
};

it("should render not visible", () => {
  const wrapper = mount(<SubmitModal />);
  expect(wrapper.isEmptyRender()).toBe(true);
});

it("should render visible", () => {
  const wrapper = mount(<SubmitModal visible />);

  expect(wrapper.isEmptyRender()).toBe(false);
});

it("should call onClose function onClick button", () => {
  const onClose = jest.fn();
  const wrapper = mount(<SubmitModal visible onClose={onClose} />);

  wrapper.find("button").simulate("click");

  expect(onClose).toHaveBeenCalled();
});

it("should call onClose function onClick overlay bg", () => {
  const onClose = jest.fn();
  const wrapper = mount(<SubmitModal visible onClose={onClose} />);

  wrapper.find("div#overlayBg").simulate("click");

  expect(onClose).toHaveBeenCalled();
});

it("should render labels", () => {
  const wrapper = mount(
    <SubmitModal visible errors={errors} labels={labels} />
  );

  expect(
    wrapper.containsAllMatchingElements([<label>{labels.name}</label>])
  ).toBe(true);
});

it("should list errors", () => {
  const wrapper = mount(
    <SubmitModal visible errors={errors} labels={labels} />
  );

  expect(wrapper.find("p").text()).toEqual(
    "O formulário apresenta os seguintes erros:"
  );

  expect(
    wrapper.containsAllMatchingElements([<label>{errors.name}</label>])
  ).toBe(true);
});

it("should list values", () => {
  const wrapper = mount(
    <SubmitModal visible values={values} labels={labels} />
  );

  expect(wrapper.find("p").text()).toEqual(
    "Você submeteu com sucesso as seguintes informações:"
  );

  expect(
    wrapper.containsAllMatchingElements([<label>{values.name}</label>])
  ).toBe(true);
});
