const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamMemberSchema = new Schema({
  teamMemberName: {
    type: String,
    required: true
  },
  teamMemberEmail: {
    type: String,
    required: true
  },
  teamName: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    default: 0
  },
  metrics: [
    {
      metricName: {
        type: String
      },
      toolName: {
        type: String
      },
      value: {
        type: Number
      }
    }
  ],
  appliedRules: [
    {
      ruleName: {
        type: String
      },
      toolName: {
        type: String
      },
      reward: {
        type: Number
      }
    }
  ]
});

const TeamMember = mongoose.model("teammember", TeamMemberSchema);

module.exports = TeamMember;
