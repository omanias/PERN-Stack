const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const tasksRoutes = require("./routes/tasks.routes");

const app = express();

/* A middleware that allows the application to accept requests from other domains. */
app.use(cors());

/* A middleware that logs all the requests to the console. */
app.use(morgan("dev"));

/* A middleware that parses the body of the request and makes it available on the request object. */
app.use(express.json());

/* Telling the application to use the routes defined in the tasks.routes.js file. */
app.use(tasksRoutes);

/* This is a middleware that handles errors. It is called when an error is thrown in the application. */
app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

/* Telling the application to listen on port 3000. */
app.listen(3000);

console.log("server is running on port 3000");
