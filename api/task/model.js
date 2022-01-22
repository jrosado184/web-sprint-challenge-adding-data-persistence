// build your `Task` model here

const db = require("./../../data/dbConfig");

const getAll = async () => {
  const rows = await db("tasks")
    .leftJoin("projects as p", "p.project_id", "tasks.project_id")
    .select(
      "task_id",
      "task_description",
      "task_notes",
      " task_completed",
      "p.project_name",
      "p.project_description"
    );

  const newRow = rows.map((row) => {
    const rowsNew = {
      task_id: row.task_id,
      task_description: row.task_description,
      task_notes: row.task_notes,
      task_completed: row.task_completed === 1 ? true : false,
      project_name: row.project_name,
      project_description: row.project_description,
    };
    return rowsNew;
  });
  return newRow;
};

const getId = async (task_id) => {
  const rows = await db("tasks")
    .where("task_id", task_id)
    .leftJoin("projects as p", "p.project_id", "tasks.project_id")
    .select(
      "task_id",
      "task_description",
      "task_notes",
      " task_completed",
      "p.project_name",
      "p.project_description"
    );

  const newRow = rows.map((row) => {
    const rowsNew = {
      task_id: row.task_id,
      task_description: row.task_description,
      task_notes: row.task_notes,
      task_completed: row.task_completed === 1 ? true : false,
      project_name: row.project_name,
      project_description: row.project_description,
    };
    return rowsNew;
  });
  return newRow[0];
};

const create = async (task) => {
  const rows = await db("tasks").insert(task);
  return rows;
};

module.exports = {
  getAll,
  create,
  getId,
};
