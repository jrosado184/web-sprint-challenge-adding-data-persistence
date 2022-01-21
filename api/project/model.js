// build your `Project` model here
const db = require("../../data/dbConfig");

const getAll = async () => {
  const rows = await db("projects");
  const newRow = rows.map((row) => {
    const rowsNew = {
      project_id: row.project_id,
      project_name: row.project_name,
      project_description: row.project_description,
      project_completed: row.project_completed === 1 ? true : false,
    };
    return rowsNew;
  });

  return newRow;
};

const create = async (project) => {
  const [project_id] = await db("projects").insert(project);
  return db("projects").where({ project_id });
};

module.exports = {
  getAll,
  create,
};
