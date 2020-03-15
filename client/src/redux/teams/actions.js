import { TEAM_ACTIONS } from "./types";

export const getTeamsLeaderboard = () => async dispatch => {
  try {
    console.log("CALLEDDD");
    let response = await fetch("/api/engine/team/leaderboard");
    let data = await response.json();
    console.log("data", data);
    if (data.length > 0) {
      dispatch({
        type: TEAM_ACTIONS.GET_TEAM_LEADERBOARD,
        payload: data
      });
    }
  } catch (error) {
    dispatch({
      type: TEAM_ACTIONS.SET_MESSAGE,
      payload: error.message
    });
  }
};

export const getMemberLeaderboard = () => async dispatch => {
  try {
    let response = await fetch("/api/engine/member/leaderboard");
    let data = await response.json();

    if (data.length > 0) {
      dispatch({
        type: TEAM_ACTIONS.GET_MEMBER_LEADERBOARD,
        payload: data
      });
    }
  } catch (error) {
    dispatch({
      type: TEAM_ACTIONS.SET_MESSAGE,
      payload: error.message
    });
  }
};

export const getTeamDetails = id => async dispatch => {
  try {
    let response = await fetch(`/api/teams/${id}`);
    let data = await response.json();
    dispatch({
      type: TEAM_ACTIONS.SET_TEAM_DETAILS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TEAM_ACTIONS.SET_MESSAGE,
      payload: error.message
    });
  }
};

export const addRule = rule => dispatch => {
  dispatch({
    type: TEAM_ACTIONS.ADD_RULE,
    payload: rule
  });
};
