const express = require("express");
const notesRoute = require("../src/routes/notes.route");
const productRoute = require("../src/routes/product.route");
const SupplierRoute = require("../src/routes/Supplier.route");
const OrderRoute = require("../src/routes/order.route");
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
app.use("/api/product",productRoute);
app.use("/api/supplier",SupplierRoute);
app.use("/api/order",OrderRoute);

app.listen(8989, () => {
  console.log("Server is running on port 8989");
});
