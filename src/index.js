const express = require("express");
const notesRoute = require("../src/routes/notes.route");
const db = require("./Config/db.config");
const app = express();

app.use(express.json());
db.initialize()
  .then(() => {
    console.log("connected successfully");
  })
  .catch((error) => console.log(error));
// app.use("/api/students", studentsRoute);
app.use("/api/notes", notesRoute);

app.listen(8989, () => {
  console.log("Server is running on port 8989");
});
