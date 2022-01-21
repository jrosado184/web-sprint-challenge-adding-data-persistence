// build your `Project` model here
const db = require("../../data/dbConfig");

const getAll = () => {
  return db("projects");
};

const create = async (project) => {
  const [project_id] = await db("projects").insert(project);
  return getAll().where({ project_id });
};

module.exports = {
  getAll,
  create,
};
