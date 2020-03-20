const Member = require("../../models/TeamMembers");

const addMembers = async (teamMembers, successCB, errorCB) => {
  let newMembersAdded = [];

  try {
    for (let i = 0; i < teamMembers.length; i++) {
      let newTeamMember = new Member(teamMembers[i]);

      let response = await newTeamMember.save();

      newMembersAdded.push(response);
    }

    successCB(newMembersAdded);
  } catch (error) {
    errorCB(error);
  }
};

const getTeamMembers = async (teamName, successCB, errorCB) => {
  try {
    let response = await Member.find({ teamName: teamName });
    successCB(response);
  } catch (error) {
    errorCB(error);
  }
};

const getTeamMember = async (id, successCB, errorCB) => {
  try {
    let response = await Member.findById(id);
    successCB(response);
  } catch (error) {
    errorCB(error);
  }
};

const teamMemberCount = async (teamid, successCB, errorCB) => {
  try {
    let response = await Member.find({ teamID: teamid }).count();
    successCB(response);
  } catch (error) {
    errorCB(error);
  }
};

module.exports = {
  addMembers,
  teamMemberCount,
  getTeamMembers,
  getTeamMember
};
