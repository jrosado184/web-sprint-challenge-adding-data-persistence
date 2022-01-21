// build your `/api/resources` router here

const express = require("express");
const router = express.Router();
const Resource = require("./model");
const { checkBody } = require("./resource_middleware");

router.get("/", (req, res, next) => {
  Resource.getAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/", checkBody, (req, res, next) => {
  const { resource_name, resource_description } = req.body;
  Resource.create({ resource_name, resource_description })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.json({
    message: err.message,
    custom: "there was an error in the resource router",
    stack: err.stack,
  });
});

module.exports = router;
