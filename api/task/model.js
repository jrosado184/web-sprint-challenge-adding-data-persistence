// build your `Task` model here

const db = require("./../../data/dbConfig");

const getAll = () => {
  return db("tasks as ts")
    .leftJoin("projects as p", "p.project_id", "ts.project_id")
    .select(
      "ts.task_id",
      "ts.task_description",
      "ts.task_notes",
      "ts.task_completed",
      "p.project_name",
      "p.project_description"
    );
};

module.exports = {
  getAll,
};
