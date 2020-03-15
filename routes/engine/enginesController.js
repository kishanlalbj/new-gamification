const Team = require("../../models/Team");
const Rule = require("../../models/Rule");
const Member = require("../../models/TeamMembers");

const calculateMemberScore = async (successCB, errorCB) => {
  let members = await Member.find().select({
    teamMemberName: 1,
    score: 1,
    metrics: 1,
    appliedRules: 1
  });

  let rules = await Rule.find({ ruleType: "MEMBER" });

  for (let i = 0; i < members.length; i++) {
    members[i].appliedRules = [];
    members[i].score = 0;
    if (rules.length !== 0) {
      for (let j = 0; j < rules.length; j++) {
        for (let k = 0; k < members[i].metrics.length; k++) {
          console.log(
            rules[j].ruleName,
            "----",
            members[i].teamMemberName,
            "----",
            members[i].metrics[k].toolName,
            "-----",
            rules[j].threshold,
            "-------",
            members[i].metrics[k].value,
            "-----",
            members[i].appliedRules,
            "------"
          );

          if (
            members[i].metrics[k].toolName.toLowerCase() ===
              rules[j].toolName.toLowerCase() &&
            members[i].metrics[k].metricName.toLowerCase() ===
              rules[j].metricName.toLowerCase()
          ) {
            if (rules[j].operator === "gt") {
              if (members[i].metrics[k].value > rules[j].threshold) {
                let obj = {};
                obj.ruleId = rules[j]._id;
                obj.ruleName = rules[j].ruleName;
                obj.reward = rules[j].reward;
                obj.toolName = rules[j].toolName;
                members[i].appliedRules.push(obj);

                members[i].score = members[i].score + rules[j].reward;

                updateMemberscore(
                  members[i]._id,
                  members[i].score,
                  members[i].appliedRules
                );
              } else {
                updateMemberscore(
                  members[i]._id,
                  members[i].score,
                  members[i].appliedRules
                );
              }
            }

            if (rules[j].operator === "lt") {
              if (members[i].metrics[k].value < rules[j].threshold) {
                let obj = {};
                obj.ruleName = rules[j].ruleName;
                obj.ruleId = rules[j]._id;
                obj.reward = rules[j].reward;
                obj.toolName = rules[j].toolName;

                members[i].appliedRules.push(obj);

                members[i].score = members[i].score + rules[j].reward;

                updateMemberscore(
                  members[i]._id,
                  members[i].score,
                  members[i].appliedRules
                );
              }
            }

            if (rules[j].operator === "eq") {
              console.log("Got Operator");
              if (members[i].metrics[k].value === rules[j].threshold) {
                console.log("Checking Equality");
                let obj = {};
                obj.ruleId = rules[j]._id;
                obj.ruleName = rules[j].ruleName;
                obj.reward = rules[j].reward;
                obj.toolName = rules[j].toolName;
                members[i].appliedRules.push(obj);
                members[i].score = members[i].score + rules[j].reward;

                updateMemberscore(
                  members[i]._id,
                  members[i].score,
                  members[i].appliedRules
                );
              }
            }
          }
        }
      }
    } else {
      console.log("Gt in else");
      updateMemberscore(
        members[i]._id,
        members[i].score,
        members[i].appliedRules
      );
    }
  }
  successCB(true);
};

const updateTeamScore = async (teamid, score, appliedRules) => {
  try {
    let rule = await Team.findByIdAndUpdate(teamid, {
      $set: {
        score,
        appliedRules
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const updateMemberscore = async (memberid, score, appliedRules) => {
  await Member.findByIdAndUpdate(memberid, {
    $set: {
      score,
      appliedRules
    }
  });
};

// console.log(
//   rules[j].ruleName,
//   "----",
//   teams[i].teamName,
//   "----",
//   teams[i].metrics[k].toolName,
//   "-----",
//   teams[i].score,
//   "-----",
//   teams[i].appliedRules
// );
const calculateTeamScore = async (successCB, errorCB) => {
  try {
    let teams = await Team.find().select({
      teamName: 1,
      metrics: 1,
      score: 1,
      appliedRules: 1
    });
    let rules = await Rule.find({ ruleType: "TEAM" });

    for (let i = 0; i < teams.length; i++) {
      teams[i].appliedRules = [];
      teams[i].score = 0;
      if (rules.length !== 0) {
        for (let j = 0; j < rules.length; j++) {
          for (let k = 0; k < teams[i].metrics.length; k++) {
            if (
              teams[i].metrics[k].toolName.toLowerCase() ===
                rules[j].toolName.toLowerCase() &&
              teams[i].metrics[k].metricName.toLowerCase() ===
                rules[j].metricName.toLowerCase()
            ) {
              if (rules[j].operator === "gt") {
                if (teams[i].metrics[k].value > rules[j].threshold) {
                  let obj = {};
                  obj.ruleName = rules[j].ruleName;
                  obj.ruleId = rules[j]._id;
                  obj.toolName = rules[j].toolName;
                  obj.reward = rules[j].reward;
                  teams[i].appliedRules.push(obj);

                  teams[i].score = teams[i].score + rules[j].reward;

                  updateTeamScore(
                    teams[i]._id,
                    teams[i].score,
                    teams[i].appliedRules
                  );
                } else {
                  updateTeamScore(
                    teams[i]._id,
                    teams[i].score,
                    teams[i].appliedRules
                  );
                }
              }

              if (rules[j].operator === "lt") {
                if (teams[i].metrics[k].value < rules[j].threshold) {
                  let obj = {};
                  obj.ruleName = rules[j].ruleName;
                  obj.toolName = rules[j].toolName;
                  obj.ruleId = rules[j]._id;
                  obj.reward = rules[j].reward;
                  teams[i].appliedRules.push(obj);

                  teams[i].score = teams[i].score + rules[j].reward;

                  updateTeamScore(
                    teams[i]._id,
                    teams[i].score,
                    teams[i].appliedRules
                  );
                } else {
                  updateTeamScore(
                    teams[i]._id,
                    teams[i].score,
                    teams[i].appliedRules
                  );
                }
              }

              if (rules[j].operator === "eq") {
                if (teams[i].metrics[k].value === rules[j].threshold) {
                  let obj = {};
                  obj.ruleName = rules[j].ruleName;
                  obj.toolName = rules[j].toolName;
                  obj.ruleId = rules[j]._id;
                  obj.reward = rules[j].reward;
                  teams[i].appliedRules.push(obj);

                  teams[i].score = teams[i].score + rules[j].reward;

                  updateTeamScore(
                    teams[i]._id,
                    teams[i].score,
                    teams[i].appliedRules
                  );
                } else {
                  updateTeamScore(
                    teams[i]._id,
                    teams[i].score,
                    teams[i].appliedRules
                  );
                }
              }
            } else {
              console.log("ElSE");
            }
          }
        }
      } else {
        updateTeamScore(teams[i]._id, teams[i].score, teams[i].appliedRules);
      }
    }
    successCB(true);
  } catch (error) {
    errorCB(error);
  }
};

const sortedTeamLeaderboard = async (successCB, errorCB) => {
  try {
    let teams = await Team.find().sort({ score: -1 });

    let updatedTeams = [];
    for (let i = 0; i < teams.length; i++) {
      let memberCount = await Member.find({
        teamName: teams[i].teamName
      }).countDocuments();
      updatedTeams.push({ ...teams[i].toObject(), memberCount });
    }

    // console.log(JSON.stringify(updatedTeams, undefined, 2));
    successCB(updatedTeams);
  } catch (error) {
    console.log(error);
    errorCB(error);
  }
};

const sortedTeamMemberLeaderboard = async (successCB, errorCB) => {
  try {
    let response = await Member.find().sort({ score: -1 });
    successCB(response);
  } catch (error) {
    errorCB(error);
  }
};

module.exports = {
  sortedTeamLeaderboard,
  updateTeamScore,
  sortedTeamMemberLeaderboard,
  calculateTeamScore,
  calculateMemberScore
};
