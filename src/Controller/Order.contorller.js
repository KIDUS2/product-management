const db = require("../Config/db.config");
const OrderStatus = require("../Status/order.status");

module.exports = {
  create: async (req, res) => {
    try {
      const { date, products, quantities, total_cost, supplier } = req.body;
      const existingProduct = await db.Product.findOne({ where: { id: products } });
      const existingSupplier = await db.Supplier.findOne({ where: { id: supplier } });

      if (!existingProduct) {
        return res.status(404).send("Product ID not found");
      }

      if (!existingSupplier) {
        return res.status(404).send("Supplier ID not found");
      }
      const newOrder = await db.Order.save({
        date,
        products, 
        quantities, 
        total_cost,
        supplier, 
        status: OrderStatus.PENDING,
      });

      return res.status(200).send(newOrder);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send(err.message);
    }
  },
};
