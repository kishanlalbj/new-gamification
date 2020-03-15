const Metric = require("../../models/Metric");
const Team = require("../../models/Team");
const Member = require("../../models/TeamMembers");

const addTeamMetrics = async (metrics, successCB, errorCB) => {
  try {
    console.log(metrics);

    let response = await Team.update(
      {
        teamName: metrics.teamName
      },
      {
        $set: { metrics: metrics.metrics }
      }
    );
    successCB(response);
  } catch (error) {
    errorCB(error);
  }
};

const addMemberMetrics = async (metrics, successCB, errorCB) => {
  try {
    console.log(metrics);

    let response;

    for (let i = 0; i < metrics.length; i++) {
      response = await Member.update(
        {
          teamMemberName: metrics[i].teamMemberName,
          teamName: metrics[i].teamName
        },
        {
          $set: { metrics: metrics[i].metrics }
        }
      );
    }

    successCB(response);
  } catch (error) {
    errorCB(error);
  }
};

module.exports = {
  addTeamMetrics,
  addMemberMetrics
};
