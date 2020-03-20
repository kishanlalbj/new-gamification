import { RULE_ACTIONS } from "./types";

const INITIAL_STATE = {
  rules: [],
  search_result: [],
  rule: {},
  message: ""
};

const rulesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RULE_ACTIONS.GET_ALL_RULES:
      return {
        ...state,
        rules: action.payload,
        search_result: action.payload,
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
    case RULE_ACTIONS.GET_RULE:
      return {
        ...state,
        rule: action.payload
      };

    case RULE_ACTIONS.FILTER_TYPE:
      let copy_rules = [...state.rules];
      let updatedRules = [];
      if (action.payload === "all") {
        updatedRules = copy_rules;
      } else {
        updatedRules = copy_rules.filter(
          rule => rule.ruleType.toLowerCase() === action.payload
        );
      }

      return {
        ...state,
        search_result: updatedRules
      };
    default:
      return {
        ...state
      };
  }
};

export default rulesReducer;
