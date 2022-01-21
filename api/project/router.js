// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const Projects = require("./model");
const { checkBody } = require("./project_middleware");

router.get("/", (req, res, next) => {
  Projects.getAll()
    .then((projects) => {
      res.json(projects);
    })
    .catch(next);
});

router.post("/", checkBody, (req, res, next) => {
  const { project_name, project_description, project_completed } = req.body;
  Projects.create({ project_name, project_description, project_completed })
    .then((projects) => {
      res.status(201).json(projects);
    })
    .catch((err) => {
      next(err);
    });
});

router.use((err, req, res, next) => {
  res.json({
    message: err.message,
    custom: "an error occured in the projects router",
    stack: err.stack,
  });
});

module.exports = router;
