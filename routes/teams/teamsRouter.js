const router = require("express").Router();
const teamController = require("./teamsController");

router.post("/add", (req, res) => {
  try {
    teamController.addTeam(
      req.body,
      team => {
        return res.send(team);
      },
      error => {
        return res
          .statusCode(400)
          .json({ message: "Error In Adding Team", error });
      }
    );
  } catch (error) {
    res.statusCode(500).json({ message: "Internale Server Error" });
  }
});

router.get("/", (req, res) => {
  console.log("Called");
  try {
    teamController.getTeams(
      teams => {
        console.log(teams);
        res.send(teams);
      },
      err => {
        console.log(err);
        throw err;
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Serer Error"
    });
  }
});

router.get("/:id", (req, res) => {
  try {
    console.log("REQ PARAMS", req.params.id);
    teamController.getTeam(
      req.params.id,
      team => {
        res.send(team);
      },
      error => {
        throw error;
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Serer Error"
    });
  }
});

module.exports = router;
