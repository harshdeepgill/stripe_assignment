const fs = require("fs");

const logger = (req, res, next) => {
  fs.appendFileSync("./logs.txt", `URL: ${req.url}, Method: ${req.method}, Timestamp: ${new Date}\n`);
  next();
};

module.exports = {
  logger,
};