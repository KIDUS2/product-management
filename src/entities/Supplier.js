const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Supplier",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        }, 
        name: {
           
            type: "varchar",
    
        }, 
        contact_information: {
            nullable: true,
            type: "varchar",
        }, 
        address: {
            type: "varchar",
        },
    },
})