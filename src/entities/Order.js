const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Order",
    columns: {

        id: {
            primary: true,
            type: "int",
            generated: true,
        }, date: {
            type: "timestamp",
        }, products: {
            nullable: true,
            type: "int",
        }, quantities: {
            type: "simple-array", 
            nullable: true,
            transformer: {
                to: (value) => value.join(','), 
                from: (value) => value.split(','), 
            },
        }, total_cost: {
            type: "float",
        }, supplier: {
            nullable: true,
            type: "int",
        }, status: {
            type: "varchar",
        },
    },
    relations: {
        supplier: { // Define the relationship
            target: "Supplier", // Name of the entity to be linked
            type: "many-to-one",
            joinColumn: true,
            inverseSide: "orders", // Name of the property in Supplier entity pointing back to products
        },
        products: { // Define the relationship
            target: "Product", // Name of the entity to be linked
            type: "many-to-one",
            joinColumn: true,
            inverseSide: "orders", // Name of the property in Supplier entity pointing back to products
        },
    },
})