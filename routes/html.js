const router = require("express").Router();
const path = require("path");


  // index route
 router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // exercise route
 router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  // stats route
 router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "Fitness-Tracker/public/stats.html"));
  });

module.exports = router
