// build your `Resource` model here
const db = require("../../data/dbConfig");

const getAll = () => {
  return db("resources");
};
const create = async (resource) => {
  const [resource_id] = await db("resources").insert(resource);
  return getAll().where({ resource_id }).first();
};

module.exports = {
  getAll,
  create,
};
