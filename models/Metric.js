const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MetricSchema = new Schema({
  toolName: {
    type: String,
    required: true
  },
  metricType: {
    type: String,
    enum: ["TEAM", "INDIVIDUAL"],
    required: true
  },
  teamName: {
    type: String,
    required: true
  },
  metrics: [
    {
      metricName: {
        type: String,
        required: true
      },
      value: {
        type: Number,
        required: true
      }
    }
  ]
});

const Metric = mongoose.model("metric", MetricSchema);

module.exports = Metric;
