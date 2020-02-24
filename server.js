const express = require("express");

const ProjectRouter = require("./projects/project-router.js");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectRouter); //  after the API endpoint is reached, activate "apiRouter"
// server.use("/api/:id/projects", ProjectRouter);

// server.get("/", (req, res) => { res.send("<h3> DBMS SPRINT TIME </h3>")
// });

module.exports = server;
