import expect from "expect";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import "../../test/mock_local_storage";

import { fetchCampaigns } from "../../actions/index";

import { FETCH_CAMPAIGNS, AUTH_ERROR } from "../../actions/types";

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

let store;
let url;

describe("CAMPAIGN ACTION CREATORS", () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
    url = "http://localhost:3030";
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("returns success message and dispatches FETCH_CAMPAIGNS", () => {
    const fetchSuccess = {
      data: {
        message: "yaaaay"
      }
    };

    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            message: "yaaaay"
          }
        }
      });
    });

    const expectedAction = { type: FETCH_CAMPAIGNS, payload: fetchSuccess };

    return store.dispatch(fetchCampaigns()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction[0]).toEqual(expectedAction);
    });
  });

  it("returns error message on error and dispatches AUTH_ERROR", () => {
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 401,
        response: {
          data: "Unauthorized",
          status: 401
        }
      });
    });

    const expectedAction = {
      type: AUTH_ERROR,
      payload: "Error: Request failed with status code 401"
    };

    return store.dispatch(fetchCampaigns()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction[0].type).toEqual(expectedAction.type);
      expect(actualAction[0].payload.toString()).toEqual(
        expectedAction.payload
      );
    });
  });
});
