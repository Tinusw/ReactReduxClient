import React from "react";
import * as test_tools from "../../../test/test_helper.js";

import { SignUp } from "../../../components/auth/signup";

describe("<signUp/>", () => {
  const mockSignUpfn = jest.fn();

  let actual;

  beforeEach(() => {
    actual = shallow(<SignUp signUpUser={mockSignUpfn} />);
  });

  it("renders correctly", () => {
    expect(enzymeToJson(actual)).toMatchSnapshot();
  });

  it("should have the className SignUp", () => {
    expect(actual.find("form.SignUp").length).toBe(1);
  });

  it("should call signinUser on submit", () => {
    actual.find("form").simulate("submit", { preventDefault() {} });

    expect(mockSignUpfn.mock.calls.length).toBe(1);
  });

  it("should call signinUser with the email and password in the state as arguments", () => {
    actual.find("#email").simulate("change", {
      target: { name: "email", value: "blah@gmail.com" }
    });

    actual.find("#password").simulate("change", {
      target: { name: "password", value: "1234" }
    });

    actual.find("#passwordConfirm").simulate("change", {
      target: { name: "passwordConfirm", value: "1234" }
    });

    actual.find("form").simulate("submit", { preventDefault() {} });

    expect(mockSignUpfn.mock.calls[1][0]).toEqual({
      email: "blah@gmail.com",
      password: "1234",
      passwordConfirm: "1234"
    });
  });

  it("should render an error div if passwords do not match", () => {
    actual.find("#password").simulate("change", {
      target: { name: "password", value: "1234" }
    });

    actual.find("#passwordConfirm").simulate("change", {
      target: { name: "passwordConfirm", value: "124" }
    });

    expect(actual.find("#error").length).toBe(1);
  });
});
