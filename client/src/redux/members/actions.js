import { MEMBER_ACTIONS } from "./types";

export const getMembersLeaderboard = () => async dispatch => {
  const members = [];

  let response = await members;

  if (response.length > 0) {
    dispatch({
      type: MEMBER_ACTIONS.GET_MEMBER_LEADERBOARD,
      payload: response
    });
  } else {
    dispatch({
      type: MEMBER_ACTIONS.SET_MESSAGE,
      payload: "No Members Found"
    });
  }
};

export const getMember = id => async dispatch => {
  try {
    let response = await fetch(`/api/members/${id}`);
    let data = await response.json();

    dispatch({
      type: MEMBER_ACTIONS.GET_MEMBER,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: MEMBER_ACTIONS.SET_MESSAGE,
      payload: "Error Fetching Member"
    });
  }
};
