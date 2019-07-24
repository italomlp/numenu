import React from "react";
import { mount } from "enzyme";

import App from "../App";
import LeadForm from "../pages/LeadForm";

it("should render", () => {
  mount(<App />);
});

it("should render LeadForm", () => {
  const wrapper = mount(<App />);

  expect(wrapper.contains(<LeadForm />)).toBe(true);
});
