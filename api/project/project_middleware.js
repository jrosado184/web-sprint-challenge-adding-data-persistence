const Projects = require("./model");

const checkBody = (req, res, next) => {
  const { project_name, project_description } = req.body;
  if (!project_name || !project_description) {
    res.status(400).json({ message: "fill out all required fields" });
  } else {
    next();
  }
};

module.exports = {
  checkBody,
};
