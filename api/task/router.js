// build your `/api/tasks` router here
const Tasks = require("./../task/model");

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  Tasks.getAll()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      next(err);
    });
});

router.use((err, req, res, next) => {
  res.json({
    message: err.message,
    custom: "there was an error in the tasks router",
    stack: err.stack,
  });
});

module.exports = router;
