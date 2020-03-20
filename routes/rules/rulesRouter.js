const router = require("express").Router();
const rulesController = require("./rulesController");

router.post("/add", (req, res) => {
  try {
    console.log(req.body);
    rulesController.addRule(
      req.body,
      rule => {
        res.send(rule);
      },
      error => {
        console.log(error);
        res.status(400).json({ message: "Error In Adding Rule" });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/", (req, res) => {
  try {
    rulesController.getAllRules(
      rules => {
        res.send(rules);
      },
      error => {
        throw error;
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:id", (req, res) => {
  try {
    rulesController.getRule(
      req.params.id,
      rule => {
        res.send(rule);
      },
      err => {
        console.log(err);
        res.send(400).json({ message: "Error Fetching Rule" });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/delete/:id", (req, res) => {
  try {
    rulesController.deleteRule(
      req.params.id,
      response => {
        res.send(response);
      },
      error => {
        throw error;
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/update/:id", (req, res) => {
  console.log("Req body", req.body);
  try {
    rulesController.updateRule(
      req.params.id,
      req.body,
      updatedRule => {
        res.send(updatedRule);
      },
      error => {
        throw error;
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
