const Rule = require("../../models/Rule");

const addRule = (rule, successCB, errorCB) => {
  console.log(rule);
  let newRule = new Rule(rule);
  newRule
    .save()
    .then(rule => {
      successCB(rule);
    })
    .catch(err => {
      errorCB(err);
    });
};

const getRule = async (id, successCB, errorCB) => {
  try {
    let rule = await Rule.findById(id);
    successCB(rule);
  } catch (error) {
    errorCB(error);
  }
};

const deleteRule = async (ruleId, successCB, errorCB) => {
  try {
    console.log(ruleId);
    let response = await Rule.findOneAndDelete({ _id: ruleId });
    successCB(response);
  } catch (error) {
    errorCB(error);
  }
};

const updateRule = async (ruleId, ruleData, successCB, errorCB) => {
  console.log(ruleId, ruleData);
  try {
    await Rule.findOneAndUpdate(
      {_id:ruleId},
      ruleData,
      { upsert: true, useFindAndModify: false }
    )
      .then(res => {
        console.log(res);
        successCB(true);
      })
      .catch(err => {
        errorCB(err);
      });
  } catch (error) {
    errorCB(error);
  }
};

const getAllRules = async (successCB, errorCB) => {
  try {
    let rules = await Rule.find();
    successCB(rules);
  } catch (error) {
    errorCB(error);
  }
};

const getTeamRules = async (successCB, errorCB) => {
  try {
    let teamRules = await Rule.find({ ruleType: "TEAM" });
    successCB(teamRules);
  } catch (error) {
    errorCB(error);
  }
};

const getMemberRules = async (successCB, errorCB) => {
  try {
    let memberRules = await Rule.find({ ruleType: "MEMBER" });
    successCB(memberRules);
  } catch (error) {
    errorCB(error);
  }
};

module.exports = {
  addRule,
  getAllRules,
  getTeamRules,
  getMemberRules,
  deleteRule,
  updateRule,
  getRule
};
