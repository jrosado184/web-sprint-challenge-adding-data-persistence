const Resource = require("./model");

const checkBody = (req, res, next) => {
  const { resource_name } = req.body;

  if (!resource_name) {
    res.status(400).json({ message: "fill all required fields" });
  } else {
    next();
  }
};

const uniqueNames = async (req, res, next) => {
  try {
    const { resource_name } = req.body;
    const resources = await Resource.getAll();
    const newResources = resources.some(
      (r) => r.resource_name === resource_name
    );
    if (newResources) {
      res.status(400).json({ message: "resource name already exists" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkBody,
  uniqueNames,
};
