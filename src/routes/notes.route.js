const express = require("express");
const route = express.Router();
const noteController = require("../Controller/new.controller");

route.post("/post", noteController.create);
route.put("/update", noteController.update);
route.delete("/delete", noteController.delete);
route.get("/getAll", noteController.getAll);
route.get("/getById", noteController.getById);

module.exports = route;
