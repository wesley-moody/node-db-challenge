const db = require("../data/dbConfig");

module.exports = {
  getProjects,
  // findSteps,
  addProject,
  getProjectById,
  findTasks,
  addTask,
  getResources,
  addResource
};

function getProjects() {
  return db("projects");
}

function addProject(project) {
  return db("data")
    .insert(project, "id")
    .then(ids => findByID(ids[0]));
}

function getProjectById(id) {
  return db("data").where({ id });
}

function findTasks(id) {
  return db("tasks").join("data", "data.id", "=", "tasks.data_id");
}

function addTask(task) {
  return db("tasks")
    .insert(task, "id")
    .then(ids => findByID(ids[0]));
}

function getResources(id) {
  return db("resources").join("data", "data.id", "=", "resources.data_id");
}

function addResource(resource) {
  return db("resources")
    .insert(resource, "id")
    .then(ids => findByID(ids[0]));
}
