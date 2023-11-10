const db = require("../Config/db.config");

module.exports = {
  create: async (req, res) => {
    try {
      const newNote = await db.Note.save(req.body);
      return res.status(200).send(newNote);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send(err.message)
    }
  },
  update: async (req, res) => {
    try {

      const id = req.query.id;

      const note = await db.manager.getRepository('Note').findOneBy({
        id
      });
      const updatedNote = await db.Note.save({...req.body,id:note.id});
      return res.status(200).send(updatedNote);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send(err.message)
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.query.id;
      const notes = await db.manager.getRepository('Note').delete(id);

      return res.status(200).send(notes);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send(err.message)
    }
  },
  getAll: async (req, res) => {
    try {
      const notes = await db.manager.getRepository('Note').findAndCount();

      return res.status(200).send(notes);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send(err.message)
    }
  },
  getById: async (req, res) => {
    try {
      const id = req.query.id;

      const notes = await db.manager.getRepository('Note').findOneBy({
        id
      });

      return res.status(200).send(notes);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send(err.message)
    }
  },
};
