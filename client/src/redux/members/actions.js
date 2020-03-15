import { MEMBER_ACTIONS } from "./types";

export const getMembersLeaderboard = () => async dispatch => {
  const members = [
    {
      teamMemberName: "Pallavi",
      score: 40
    },
    {
      teamMemberName: "Kishanlal B J",
      score: 39
    },
    {
      teamMemberName: "Ashwin Kumar",
      score: 21
    }
  ];

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
