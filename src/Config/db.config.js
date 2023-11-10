const { DataSource } = require("typeorm");
const Note = require("../entities/Note");
const Product = require("../entities/Product");
const Supplier = require("../entities/Supplier");
const Order = require("../entities/Order");
const db = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "kidus@DB21!",
  database: "notestutorial",
  entities: [Note,Product,Supplier,Order],
  synchronize: true,
  logging: false,
});
db.Note = db.getRepository(Note);
db.Product=db.getRepository(Product);
db.Supplier=db.getRepository(Supplier);
db.Order=db.getRepository(Order);
module.exports =  db;