import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import campaignReducer from "./campaign_reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  campaigns: campaignReducer
});

export default rootReducer;
