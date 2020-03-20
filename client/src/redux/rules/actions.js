import { RULE_ACTIONS } from "./types";

export const getAllRules = () => async dispatch => {
  try {
    let response = await fetch("/api/rules/");
    let data = await response.json();

    dispatch({
      type: RULE_ACTIONS.GET_ALL_RULES,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: RULE_ACTIONS.SET_MESSAGE,
      payload: error.message
    });
  }
};

export const addRule = rule => async dispatch => {
  try {
    let response = await fetch("/api/rules/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rule)
    });

    let data = await response.json();
    dispatch({
      type: RULE_ACTIONS.ADD_RULE,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: RULE_ACTIONS.SET_MESSAGE,
      payload: error.message
    });
  }
};

export const deleteRule = ruleId => async dispatch => {
  try {
    let response = await fetch(`/api/rules/delete/${ruleId}`, {
      method: "DELETE"
    });

    let data = await response.json();
    console.log(data);
    dispatch({
      type: RULE_ACTIONS.DELETE_RULE,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: RULE_ACTIONS.SET_MESSAGE,
      payload: error.message
    });
  }
};

export const getRule = ruleId => async dispatch => {
  try {
    let response = await fetch(`/api/rules/${ruleId}`);
    let data = await response.json();

    dispatch({
      type: RULE_ACTIONS.GET_RULE,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: RULE_ACTIONS.SET_MESSAGE,
      payload: error.message
    });
  }
};

export const editRule = (id, rule) => async dispatch => {
  try {
    console.log("EDit Rule", rule);
    let response = await fetch(`/api/rules/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rule)
    });

    let data = await response.json();

    console.log(data);
  } catch (error) {
    dispatch({
      type: RULE_ACTIONS.SET_MESSAGE,
      payload: error.message
    });
  }
};

export const filterRule = type => dispatch => {
  dispatch({
    type: RULE_ACTIONS.FILTER_TYPE,
    payload: type
  });
};
