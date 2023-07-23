const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const PetitionersController = require("./Controllers/PetitionersController.js");

app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.use("/petitioners", PetitionersController);

app.get("/", (req, res) => {
    res.send("Welcome to our App");
});

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = app;