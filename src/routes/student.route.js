const express = require("express")
const route = express.Router()
const StudentController = require("../Controller/StudentController");
route.post("/post", StudentController.createStudent)
module.exports = route