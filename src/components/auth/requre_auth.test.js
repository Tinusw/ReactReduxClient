import React from "react";
import * as test_tools from "../../testing/test_helper.js";

import { MemoryRouter } from "react-router-dom";
import Authentication from "./require_auth";

describe("<Authentication/>", () => {
  const authed_props = {
    authenticated: true
  };

  const unauthed_props = {
    authenticated: false
  };

  let MockComponent;

  beforeEach(() => {
    MockComponent = () => <div className="MockComponent" />;
  });

  it("renders its children when authenticated", () => {
    const actual = test_tools.shallow(
      <Authentication {...MockComponent} {...authed_props} />
    );
    expect(actual.find("MockComponent").length).toEqual(1);
  });

  it("doesnt render its children when not authenticated", () => {
    const actual = test_tools.shallow(
      <Authentication {...MockComponent} {...unauthed_props} />
    );
    expect(actual.find("MockComponent").length).toEqual(0);
  });
});
