const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const teamsRouter = require("./routes/teams/teamsRouter");
const enginesRouter = require("./routes/engine/enginesRouter");
const rulesRouter = require("./routes/rules/rulesRouter");
const membersRouter = require("./routes/teamMembers/teamMembersRouter");
const metricsRouter = require("./routes/metrics/metricsRouter");

mongoose
  .connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch(err => {
    console.error(err);
  });

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/teams/", teamsRouter);
app.use("/api/engine", enginesRouter);
app.use("/api/rules", rulesRouter);
app.use("/api/members/", membersRouter);
app.use("/api/metrics/", metricsRouter);

module.exports = app;
