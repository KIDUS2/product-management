const express = require("express");
const route = express.Router();
const supplierController = require("../Controller/Supplier.controller");

route.post("/post", supplierController.create);
// route.put("/update", noteController.update);
// route.delete("/delete", noteController.delete);
// route.get("/getAll", noteController.getAll);
// route.get("/getById", noteController.getById);

module.exports = route;
