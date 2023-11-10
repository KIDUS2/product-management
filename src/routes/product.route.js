const express = require("express");
const route = express.Router();
const productController = require("../Controller/Product.controller");

route.post("/post", productController.create);
// route.put("/update", noteController.update);
// route.delete("/delete", noteController.delete);
// route.get("/getAll", noteController.getAll);
// route.get("/getById", noteController.getById);

module.exports = route;
