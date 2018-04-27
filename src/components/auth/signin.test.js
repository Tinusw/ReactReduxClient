import React from "react";
import * as test_tools from "../../testing/test_helper.js"

import { SignIn } from "./signin";

describe("<signIn/>", () => {
  const mockSignInfn = jest.fn();

  let actual

  beforeEach(() => {
    actual = test_tools.shallow(<SignIn signinUser={mockSignInfn} />);
  })

  it("renders correctly", () => {
    expect(actual).toMatchSnapshot();
  });

  it("should have the className SignIn", () => {
    expect(actual.find("form.SignIn").length).toBe(1);
  });

  it("should call signinUser on submit", () => {
    actual.find("form").simulate("submit", { preventDefault() {} });
    expect(mockSignInfn.mock.calls.length).toBe(1);
  });

  it("should call signinUser with the email and password in the state as arguments", () => {
    actual.find("#email").simulate("change", {
      target: { name: "email", value: "blah@gmail.com" }
    });
    actual.find("#password").simulate("change", {
      target: { name: "password", value: "1234" }
    });
    actual.find("form").simulate("submit", { preventDefault() {} });
    expect(mockSignInfn.mock.calls[1][0]).toEqual({
      email: "blah@gmail.com", password: "1234"
    });
  });
});
