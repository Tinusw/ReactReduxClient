import expect from "expect";
import reducer from "../../reducers/auth_reducer";
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from "../../actions/types";

describe("AUTH REDUCER", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it("should handle AUTH_USER", () => {
    expect(
      reducer(
        {},
        {
          type: AUTH_USER
        }
      )
    ).toEqual({
      authenticated: true,
      error: ""
    });
  });

  it("should handle UNAUTH_USER", () => {
    expect(
      reducer(
        {},
        {
          type: UNAUTH_USER
        }
      )
    ).toEqual({
      authenticated: false
    });
  });

  it("should handle AUTH_ERROR", () => {
    let error = {
      response: {
        data: "Unauthorized",
        status: 401,
        statusText: "Unauthorized"
      }
    };

    let reducerErrorText = {
      data: "Unauthorized",
      status: 401,
      statusText: "Unauthorized"
    };

    expect(
      reducer(
        {},
        {
          type: AUTH_ERROR,
          payload: error
        }
      )
    ).toEqual({
      error: { data: "Unauthorized", status: 401, statusText: "Unauthorized" }
    });
  });
});
