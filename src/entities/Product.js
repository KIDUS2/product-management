const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Product",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        }, name: {
            type: "varchar",
        },
        description: {
            nullable: true,
            type: "varchar",
        }, category: {
            type: "varchar",
        }, quantity: {
            type: "int",
        }, price: {
            type: "float",
        }, supplier: {
            nullable: true,
            type: "int",
        }, restock_level: {
            nullable: true,
            type: "int",
        }, location: {
            nullable: true,
            type: "varchar",
        },
    },
    relations: {
        supplier: { // Define the relationship
            target: "Supplier", // Name of the entity to be linked
            type: "many-to-one",
            joinColumn: true,
            inverseSide: "products", // Name of the property in Supplier entity pointing back to products
        },
    },
})