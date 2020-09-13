import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import { Provider } from "react-redux";

describe("<App />", () => {
  it("should Provider ", () => {
    const component = shallow(<App />);
    expect(component.find(Provider).exists()).toBeTruthy();
  });
});
