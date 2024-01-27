// Importing the 'fs' module for file system operations
const fs = require("fs");

// Middleware function for logging incoming HTTP requests
const logger = (req, res, next) => {
  // Appending request details to a log file ('logs.txt') in the current directory
  fs.appendFileSync("./logs.txt", `URL: ${req.url}, Method: ${req.method}, Timestamp: ${new Date()}\n`);

  // Passing control to the next middleware or route handler
  next();
};

// Exporting the logger middleware for use in other parts of the application
module.exports = {
  logger,
};
