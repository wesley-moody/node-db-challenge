module.exports = {
  getProjects,
  addProject,
  getProjectById,
  getTasks,
  addTask,
  getResources,
  addResource
};

function getProjects() {
  return db("data");
}

function addProject(project) {
  return db("data")
    .insert(project, "id")
    .then(ids => findByID(ids[0]));
}

function getProjectById(id) {
  return db("data").where({ id });
}

function getTasks(id) {
  return db("tasks").join("data", "data.id", "=", "tasks.data_id");
}

function addTask(task) {
  return db("tasks")
    .insert(task)
    .then(id => {
      const [id] = id;
      return getTasks(id);
    });
}

function getResources(id) {
  return db("resources").join("data", "data.id", "=", "resources.data_id");
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(id => {
      const [id] = id;
      return getResources(id);
    });
}
