// build your `/api/tasks` router here
const Tasks = require("./../task/model");
const { checkBody, checkId } = require("./task_middleware");
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

router.post("/", checkBody, checkId, (req, res, next) => {
  const { task_description, task_notes, task_completed, project_id } = req.body;
  Tasks.create({
    task_description,
    task_notes,
    task_completed,
    project_id,
  })
    .then((task) => {
      Tasks.getId(task).then((task) => {
        res.status(201).json(task);
      });
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
