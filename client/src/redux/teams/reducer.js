import { TEAM_ACTIONS } from "./types";

const INITIAL_STATE = {
  team_leaderboard: [],
  member_leaderboard: [],
  team: {
    toolSets: [],
    appliedRules: [],
    metrics: []
  },
  member: {},
  message: ""
};

const teamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEAM_ACTIONS.GET_TEAM_LEADERBOARD:
      return {
        ...state,
        team_leaderboard: action.payload
      };
    case TEAM_ACTIONS.GET_MEMBER_LEADERBOARD:
      return {
        ...state,
        member_leaderboard: action.payload
      };
    case TEAM_ACTIONS.SET_TEAM_DETAILS:
      return {
        ...state,
        team: action.payload
      };
    case TEAM_ACTIONS.SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default teamsReducer;
