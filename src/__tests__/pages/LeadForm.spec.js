import React from "react";
import { mount } from "enzyme";

import LeadForm from "../../pages/LeadForm";
import SubmitModal from "../../components/SubmitModal";

it("should render", () => {
  mount(<LeadForm />);
});

it("should render form, inputs and button", () => {
  const wrapper = mount(<LeadForm />);

  expect(wrapper.find("form").exists()).toBe(true);
  expect(wrapper.find("input[name='name']").exists()).toBe(true);
  expect(wrapper.find("input[name='email']").exists()).toBe(true);
  expect(wrapper.find("input[name='age']").exists()).toBe(true);
  expect(wrapper.find("input[name='phone']").exists()).toBe(true);
  expect(wrapper.find("button[type='submit']").exists()).toBe(true);
});

it("should change modal state on submit", () => {
  const wrapper = mount(<LeadForm />);
  expect(wrapper.find(SubmitModal).length).toBe(1);

  expect(wrapper.find(SubmitModal).isEmptyRender()).toBe(true);
  wrapper.find("form").simulate("submit");
  expect(wrapper.find(SubmitModal).isEmptyRender()).toBe(false);
});
