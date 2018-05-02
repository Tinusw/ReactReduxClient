import React from "react";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";

import expect from "expect";
import App from "./App";

// Helpers
import reactElementToJSXString from "react-element-to-jsx-string";

describe("AppComponent", () => {
  const renderer = new ShallowRenderer();
  const actual = renderer.render(<App />);
  const actual_children = actual.props.children;

  it("renders correctly", () => {
    expect(actual).toMatchSnapshot();
  });

  it("has a class of App", () => {
    const expected = "App";
    expect(actual.props.className).toContain(expected);
  });

  it("renders the redux-wrapped Header component", () => {
    expect(
      actual_children.some(
        x =>
          x.type.displayName.includes("Connect(Header)") &&
          x.type.WrappedComponent.toString().includes("Header")
      )
    ).toEqual(true);
  });

  it("renders the root component", () => {
    expect(
      actual_children.some(
        x =>
          x.props.path === "/" && x.props.component.toString().includes("Root")
      )
    ).toEqual(true);
  });

  it("renders the redux-wrapped Signin component", () => {
    expect(
      actual_children.some(
        x =>
          x.props.path === "/signin" &&
          x.props.component.WrappedComponent.toString().includes("SignIn")
      )
    ).toEqual(true);
  });

  it("renders the redux-wrapped SignUp component", () => {
    expect(
      actual_children.some(
        x =>
          x.props.path === "/signup" &&
          x.props.component.WrappedComponent.toString().includes("SignUp")
      )
    ).toEqual(true);
  });

  it("renders the redux-wrapped HOC AUTH component (campaign/index)", () => {
    expect(
      actual_children.some(
        x =>
          x.props.path === "/campaign/index" &&
          x.props.component.WrappedComponent.toString().includes(
            "Authentication"
          )
      )
    ).toEqual(true);
  });

  it("renders all child components", () => {
    expect(actual_children.length).toEqual(6);
  });
});
