const router = require("express").Router();
const teamMembersController = require("./teamMembersController");

router.post("/add", (req, res) => {
  try {
    teamMembersController.addMembers(
      req.body,
      teamMembers => {
        res.send(teamMembers);
      },
      error => {
        console.log(error);
        res.statusCode(400).json({ message: "Error In Adding TeamMembers" });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/list/:teamName", (req, res) => {
  try {
    teamMembersController.getTeamMembers(
      req.params.teamName,
      members => {
        res.send(members);
      },
      err => {
        res.status(500).json({ message: "Error in getting members" });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ messge: "Internal Server Error" });
  }
});

router.get("/count/:teamid", (req, res) => {
  try {
    teamMembersController.teamMemberCount(count => {
      res.send(count);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
