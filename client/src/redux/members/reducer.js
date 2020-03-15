import { MEMBER_ACTIONS } from "./types";

const INITIAL_STATE = {
  member_leaderboard: [],
  message: ""
};

const membersReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case MEMBER_ACTIONS.GET_MEMBER_LEADERBOARD:
      return {
        ...state,
        member_leaderboard: action.payload
      };

    case MEMBER_ACTIONS.SET_MESSAGE:
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

export default membersReducer;
