import { RULE_ACTIONS } from "./types";

const INITIAL_STATE = {
  rules: [],
  message: ""
};

const rulesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RULE_ACTIONS.GET_ALL_RULES:
      return {
        ...state,
        rules: action.payload,
        message: ""
      };
    case RULE_ACTIONS.ADD_RULE:
      return {
        ...state,
        rules: [...state.rules, action.payload]
      };
    case RULE_ACTIONS.DELETE_RULE: {
      let copyrules = [...state.rules];
      let updatedRules = copyrules.filter(
        rule => rule._id !== action.payload._id
      );

      return {
        ...state,
        rules: updatedRules
      };
    }
    default:
      return {
        ...state
      };
  }
};

export default rulesReducer;
