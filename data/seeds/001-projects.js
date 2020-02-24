exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          project_name: "first project",
          project_desc: "description",
          project_resources: "all the resources",
          project_tasks: "all the tasks",
          completed: false
        },
        {
          id: 2,
          project_name: "second project",
          project_desc: "description2",
          project_resources: "all the 2nd resources",
          project_tasks: "all the 2nd tasks",
          completed: false
        },
        {
          id: 3,
          project_name: "third project",
          project_desc: "description3",
          project_resources: "all the 3rd resources",
          project_tasks: "all the 3rd tasks",
          completed: false
        }
      ]);
    });
};
