import React from "react";
import * as test_tools from "../../../test/test_helper.js";

import { MemoryRouter } from "react-router-dom";
import Authentication from "../../../components/auth/require_auth";

describe("<Authentication/>", () => {
  const authedProps = {
    authenticated: true
  };

  const unauthedProps = {
    authenticated: false
  };

  let MockComponent;

  it("successfully passes props to HOC", () => {
    const actual = shallow(
      <MemoryRouter>
        <Authentication
          {...<div className="MockComponent" />}
          {...authedProps}
        />
      </MemoryRouter>
    );
  });
});
