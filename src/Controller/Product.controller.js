const db = require("../Config/db.config");

module.exports = {
  create: async (req, res) => {
    try {
      const{supplierId}=req.body;
      const newProduct = await db.Product.save({supplierId});
      return res.status(200).send(newProduct);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send(err.message)
    }
  },
};