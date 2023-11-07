var typeorm = require("typeorm");
var EntitySchema = typeorm.EntitySchema;

const  db = typeorm.createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'kidus@DB21!',
    database: 'notestutorial',
    synchronize: true,
    logging: true,
    entities: [
        new EntitySchema({
            name: "Note",
            columns: {
                id: {
                    primary: true,
                    type: "int",
                    generated: true
                },
                description: {
                    nullable:true,
                    type: "varchar"
                }
            }
        })
 
    ]
}).then(function () {
    return connection
}).catch(function(error) {
  console.log("Error: ", error);

    return error
});
module.exports=db;