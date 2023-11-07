const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Note",
    columns: {
      id: {
        primary: true,
        type: "int",
        generated: true,
      },
      description: {
        nullable: true,
        type: "varchar",
      },
    },
  })