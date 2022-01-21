const Resource = require("./model");

const checkBody = (req, res, next) => {
  const { resource_name, resource_description } = req.body;

  if (!resource_name || !resource_description) {
    res.status(400).json({ message: "fill all required fields" });
  } else {
    next();
  }
};

module.exports = {
  checkBody,
};
