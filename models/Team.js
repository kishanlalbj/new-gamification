const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  teamName: {
    type: String,
    required: true
  },
  toolSets: [
    {
      toolName: {
        type: String
      },
      type: {
        type: String
      }
    }
  ],
  score: {
    type: Number,
    default: 0
  },
  appliedRules: [
    {
      ruleId: {
        type: Schema.Types.ObjectId,
        ref: "rules"
      },
      ruleName: {
        type: String
      },
      metricName: {
        type: String
      },
      toolName: {
        type: String
      },
      reward: {
        type: Number
      }
    }
  ],
  metrics: [
    {
      toolName: {
        type: String
      },
      metricName: {
        type: String
      },
      value: {
        type: String
      }
    }
  ],
  createdOn: {
    type: Date,
    default: Date.now()
  }
});

const Team = mongoose.model("team", TeamSchema);

module.exports = Team;
