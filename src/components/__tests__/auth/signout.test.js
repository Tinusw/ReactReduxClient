import React from "react";
import * as test_tools from "../../../test/test_helper.js";

import { SignOut } from "../../../components/auth/signout";

describe("<SignOut/>", () => {
  const mockSignOutfn = jest.fn();

  let actual;

  beforeEach(() => {
    actual = shallow(<SignOut signoutUser={mockSignOutfn} />);
  });

  it("renders correctly", () => {
    expect(enzymeToJson(actual)).toMatchSnapshot();
  });

  it("should have the className Signout", () => {
    expect(actual.find("div.Signout").length).toBe(1);
    expect(actual.find("div.Signout").props().children).toEqual("Signed Out");
  });

  it("should call signoutUser on mount at least once", () => {
    expect(mockSignOutfn.mock.calls.length).toBeGreaterThan(0);
  });
});
