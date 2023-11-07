
module.exports = {
  name: "Category",
  columns: {
      id: {
          primary: true,
          type: "int",
          generated: true
      },
      description: {
          type: "varchar"
      }
  }
};
