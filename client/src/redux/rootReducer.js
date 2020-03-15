import { combineReducers } from "redux";

import teamsReducer from "./teams/reducer";
import membersReducer from "./members/reducer";
import rulesReducer from "./rules/reducer";

const rootReducer = combineReducers({
  teams: teamsReducer,
  members: membersReducer,
  rules: rulesReducer
});

export default rootReducer;
