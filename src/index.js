
const express = require("express");
const studentsRoute=require("../src/routes/student.route")
const notesRoute=require("../src/routes/notes.route")
const { createConnection } = require('typeorm');
const ormconfig=require("./ormconfig")
const app = express();
app.use(express.json());

app.use("/api/students", studentsRoute)
app.use("/api/notes", notesRoute)

app.listen(8989, () => {
    console.log('Server is running on port 3000');
});
// createConnection(ormconfig)
//     .then(() => {
     
//     })
//     .catch((error) => console.error('Error:', error));
