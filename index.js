const express = require("express");
require("dotenv").config();

const path = require("path");
const { router } = require("./controller/router");
const { logger } = require("./middleware/logger.middleware");

const app = express();
app.use(logger);

app.use("/api/v1", router);


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
})