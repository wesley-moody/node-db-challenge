const apiRouter = require("./api-router");
// const configureMiddleware = require('./configure-middleware');

const server = express();

server.use("/api", apiRouter); // after the api endpoint is reached, activate "apiRouter"
module.exports = server;
