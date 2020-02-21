exports.up = function(knex) {
  return knex.schema

    .createTable("tasks", tbl => {
      tbl
        .increments()
        .notNullable()
        .unsigned()
        .references("project_tasks")
        .inTable("projects");
      tbl.string("tasks_desc").notNullable();
      tbl.string("tasks_notes");
      tbl.boolean("task_completed").defaultTo("false");
    })

    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .string("resource_name")
        .notNullable()
        .references("project_resources")
        .inTable("projects");
      tbl.string("resource_desc");
    })

    .createTable("project_resources", tbl => {
      tbl.increments();
      tbl.primary(["project_id", "resource_id"]);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT");
      onUpdate("CASCADE");
    })

    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("project_name").notNullable();
      tbl.string("project_desc");
      tbl.string("project_resources").notNullable();
      tbl.string("project_tasks").notNullable();
      tbl
        .boolean()
        .notNullable()
        .defaultTo("false");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("project_resources")
    .dropTableIfExists("projects");
};
