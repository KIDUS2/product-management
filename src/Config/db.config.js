const { DataSource } = require("typeorm");
const Note = require("../entities/Note");
const db = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "kidus@DB21!",
  database: "notestutorial",
  entities: [Note],
  synchronize: true,
  logging: false,
});
db.Note = db.getRepository(Note);
module.exports =  db;