import expect from "expect";
import reducer from "reducers/campaign_reducer";
import { FETCH_CAMPAIGNS } from "actions/types";

describe("CAMPAIGN REDUCER", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it("should handle FETCH_CAMPAIGNS", () => {
    let success_response = [
      { id: 1, name: "test1" },
      { id: 2, name: "test1" },
      { id: 3, name: "test1" }
    ];

    expect(
      reducer(
        {},
        {
          type: FETCH_CAMPAIGNS,
          payload: success_response
        }
      )
    ).toEqual({
      collection: [
        { id: 1, name: "test1" },
        { id: 2, name: "test1" },
        { id: 3, name: "test1" }
      ]
    });
  });
});
