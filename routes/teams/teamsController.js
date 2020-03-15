const Team = require("../../models/Team");

const addTeam = (team, successCB, errorCB) => {
  let newTeam = new Team(team);

  newTeam
    .save()
    .then(team => {
      successCB(team);
    })
    .catch(err => {
      errorCB(err);
    });
};

const getTeams = async (successCB, errorCB) => {
  try {
    let response = await Team.find();
    successCB(response);
  } catch (error) {
    errorCB(error);
  }
};

const getTeam = async (id, successCB, errorCB) => {
  try {
    let response = await Team.findById(id);
    successCB(response);
  } catch (error) {
    errorCB(error);
  }
};

module.exports = {
  addTeam,
  getTeams,
  getTeam
};
