const db = require("../Config/db.config");

module.exports = {
  create: async (req, res) => {
    try {
      const newSupplier = await db.Supplier.save(req.body);
      return res.status(200).send(newSupplier);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send(err.message)
    }
  },
};