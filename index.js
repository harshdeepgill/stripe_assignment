// Importing the Express framework for building web applications
const express = require("express");

// Loading environment variables from a .env file into the process.env object
require("dotenv").config();

// Importing the path module for handling file paths
const path = require("path");

// Importing the router and logger middleware from separate files
const { router } = require("./controller/router");
const { logger } = require("./middleware/logger.middleware");

// Creating an instance of the Express application
const app = express();

// Using the logger middleware to log incoming requests
app.use(logger);

// Mounting the router middleware at the "/api/v1" path
app.use("/api/v1", router);

// Setting up the port for the server to listen on, using the specified port from the environment variables or defaulting to 3000
const PORT = process.env.PORT || 3000;

// Starting the server and listening on the specified port
app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
});
