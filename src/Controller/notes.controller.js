// // src/controllers/NoteController.js
// // const express = require('express');
// const { getRepository } = require('typeorm');
// const Note = require('../entities/Note');
// const db=require("../entities")
// // const router = express.Router();


// exports.createNote = async(req, res) => {
//     try {
//         const noteRepository =await db.getRepository("Note");
//         const newNote = noteRepository.create(req.body);
//         await noteRepository.save(newNote);
//         res.json(newNote);
//     } catch (err) {
//         console.error(err.message)
//     }
// }

// // // Create a new note
// // router.post('/notes', async (req, res) => {
// //   const newNote = noteRepository.create(req.body);
// //   await noteRepository.save(newNote);
// //   res.json(newNote);
// // });

// // // Retrieve all notes
// // router.get('/notes', async (req, res) => {
// //   const notes = await noteRepository.find();
// //   res.json(notes);
// // });

// // module.exports = router;