const Project = require("./../project/model");

const checkBody = (req, res, next) => {
  const { task_description, project_id } = req.body;
  if (!task_description || !project_id) {
    res.status(400).json({ message: "fields missing" });
  } else {
    next();
  }
};

const checkId = async (req, res, next) => {
  try {
    const { project_id } = req.body;
    const task = await Project.getAll();
    const checkId = task.some((task) => task.project_id === project_id);

    if (!checkId) {
      res.status(400).json({ message: `${project_id} does not exist` });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkBody,
  checkId,
};
