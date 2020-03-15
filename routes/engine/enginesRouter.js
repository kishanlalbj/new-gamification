const router = require("express").Router();
const engineController = require("./enginesController");

router.get("/team/leaderboard", (req, res) => {
  try {
    engineController.calculateTeamScore(
      status => {
        if (status) {
          engineController.sortedTeamLeaderboard(
            leaderboard => {
              res.send(leaderboard);
            },
            error => {
              res.status(500).json({ error });
            }
          );
        }
      },
      error => {
        console.log(error);
        res.status(500).json({ error });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/member/leaderboard/", (req, res) => {
  try {
    engineController.calculateMemberScore(
      status => {
        if (status) {
          engineController.sortedTeamMemberLeaderboard(
            leaderboardData => {
              res.send(leaderboardData);
            },
            error => {
              res.status(500).json({ error });
            }
          );
        }
      },
      error => {
        res.status(500).json({ error });
      }
    );
  } catch (error) {
    console.log(error);
    res.sta;
  }
});

module.exports = router;
