const express = require("express");
const config = require("./config");
const loaders = require("./loaders");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");

config();
loaders();

const app = express();
app.use("/uploads", express.static(path.join(__dirname, "./", "uploads")));

app.use(express.json());
app.use(helmet());
app.use(cors());

app.listen(config.server.port, () => {
    console.log(`Server is running on port ${config.server.port}`);
});