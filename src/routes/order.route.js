const express = require("express");
const route = express.Router();
const orderController = require("../Controller/Order.contorller");

route.post("/post", orderController.create);
// route.put("/update", noteController.update);
// route.delete("/delete", noteController.delete);
// route.get("/getAll", noteController.getAll);
// route.get("/getById", noteController.getById);

module.exports = route;
