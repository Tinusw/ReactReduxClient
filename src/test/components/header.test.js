import React from "react";
import * as test_tools from "test/test_helper.js";
import { MemoryRouter } from "react-router-dom";

import { Header } from "components/header";

describe("<Header/>", () => {
  let actual;

  const authed_props = {
    authenticated: true
  };

  const unauthed_props = {
    authenticated: false
  };

  describe("given the user is authenticated", () => {
    beforeEach(() => {
      actual = render(
        <MemoryRouter>
          <Header {...authed_props} />
        </MemoryRouter>
      );
    });

    it("renders correctly", () => {
      expect(actual).toMatchSnapshot();
    });

    it("should have the className Header", () => {
      expect(actual.find("Header"));
    });

    it("should have one li item", () => {
      expect(actual.find("ul").children().length).toEqual(1);
    });

    it("should be a signout link", () => {
      expect(actual.find("ul").html()).toContain(
        '<li class="nav-item"><a class="nav-link" href="/signout">Sign Out</a></li>'
      );
    });
  });

  describe("given the user is not authenticated", () => {
    beforeEach(() => {
      actual = render(
        <MemoryRouter>
          <Header {...unauthed_props} />
        </MemoryRouter>
      );
    });

    it("should have the className Header", () => {
      expect(actual.find("Header"));
    });

    it("should have two li items", () => {
      expect(actual.find("ul").children().length).toEqual(2);
    });

    it("should be a signin link", () => {
      expect(actual.find("ul").html()).toContain(
        '<li class="nav-item"><a class="nav-link" href="/signin">Sign in</a></li>'
      );
    });

    it("should be a signup link", () => {
      expect(actual.find("ul").html()).toContain(
        '<li class="nav-item"><a class="nav-link" href="/signup">Sign up</a></li>'
      );
    });
  });
});
