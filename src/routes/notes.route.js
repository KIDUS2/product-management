const express=require("express")
const route=express.Router()
const noteController = require("../Controller/notes.controller");
route.post("/post", noteController.createNote)

// route.get("/getAll", noteController.getAllNotes)

// route.get("/getByid", noteController.getOneNote)

// route.put("/update", noteController.updateOneNote);

// route.delete("/delete", noteController.deleteOneNote)
module.exports=route