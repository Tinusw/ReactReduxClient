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
    // let actual = test_tools
    //   .shallow(<Authentication {...MockComponent} {...authed_props} />)
    //   .dive();
    // console.log(actual.props());
    // let actual = test_tools.shallow(<Authentication />);
  });

  it("successfully passes props to HOC", () => {
    const actual = test_tools.shallow(
      <MemoryRouter>
        <Authentication
          {...<div className="MockComponent" />}
          {...authed_props}
        />
      </MemoryRouter>
    );
    expect(actual.props().children.props.authenticated).toEqual(true);
  });
});
