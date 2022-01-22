const Projects = require("./model");

const checkBody = (req, res, next) => {
  const { project_name } = req.body;
  if (!project_name) {
    res.status(400).json({ message: "fill out all required fields" });
  } else {
    next();
  }
};

module.exports = {
  checkBody,
};
