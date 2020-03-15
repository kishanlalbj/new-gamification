const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RuleSchema = new Schema({
  ruleName: {
    type: String,
    required: true
  },
  ruleType: {
    type: String,
    enum: ["TEAM", "MEMBER"],
    required: true
  },
  ruleDescription: {
    type: String,
    required: true
  },
  toolName: {
    type: String,
    required: true
  },
  metricName: {
    type: String,
    requried: true
  },
  operator: {
    type: String,
    requried: true
  },
  threshold: {
    type: Number,
    required: true
  },
  reward: {
    type: Number,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

const Rules = mongoose.model("rule", RuleSchema);

module.exports = Rules;
