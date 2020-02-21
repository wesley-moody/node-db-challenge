const express = require("express");

const projects = require("./project-model.js");

const router = express.Router();

//  GET =======>

router.get("/", (res, req) => {
  Projects.getProject()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Err getting project" });
    });
});

//  POST =======>

router.post("/", (req, res) => {
  const projectData = req.body;
  Projects.add(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

//  GET =======>

router.get("/:id/project", (req, res) => {
  const { id } = req.params;

  Projects.findSteps(id)
    .then(project => {
      if (project.length) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ message: "Could not find project for given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get project" });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  Projects.findTasks(id)
    .then(tasks => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res
          .status(404)
          .json({ message: "Could not find tasks for given project" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

//  POST =======>

router.post("/:id/tasks", (req, res) => {
  const data = req.body;
  const { id } = req.params;
  Projects.findById(id)
    .then(task => {
      if (task) {
        Projects.addTask(data, id).then(task => {
          res.status(201).json(task);
        });
      } else {
        res.status(404).json({ message: "Could not find task with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

//  GET =======>

router.get("/:id/project", (req, res) => {
  const { id } = req.params;

  Projects.findResource(id)
    .then(resource => {
      if (resource.length) {
        res.json(resource);
      } else {
        res
          .status(404)
          .json({ message: "Could not find resource for given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resource" });
    });
});

//  POST =======>

router.post("/:id/resource", (req, res) => {
  const data = req.body;
  const { id } = req.params;
  Projects.findById(id)
    .then(resource => {
      if (resource) {
        Projects.addResource(data, id).then(resource => {
          res.status(201).json(resource);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find resource with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

module.exports = router;
