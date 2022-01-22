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

const getByProjectId = async (project_id) => {
  const rows = await db("projects").where({ project_id });
  const newRow = rows.map((row) => {
    const rowsNew = {
      project_id: row.project_id,
      project_name: row.project_name,
      project_description: row.project_description,
      project_completed: row.project_completed === 1 ? true : false,
    };
    return rowsNew;
  });

  return newRow[0];
};

const create = async (project) => {
  const rows = await db("projects").insert(project);
  return rows;
};

module.exports = {
  getAll,
  create,
  getByProjectId,
};
