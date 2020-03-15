const router = require("express").Router();
const metricsController = require("./metricsController");

router.post("/teams/add", (req, res) => {
  try {
    metricsController.addTeamMetrics(
      req.body,
      metrics => {
        console.log(metrics);
        res.send(metrics);
      },
      error => {
        console.log(error);
        throw err;
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/members/add", (req, res) => {
  try {
    metricsController.addMemberMetrics(
      req.body,
      metrics => {
        res.send(metrics);
      },
      error => {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
