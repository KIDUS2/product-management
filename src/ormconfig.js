module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'kidus@DB21!',
    database: 'notestutorial',
    synchronize: true,
    logging: true,
    entities: ['src/entities/**/*.js'], // Paths to your entity classes
  cli: {
    entitiesDir: 'src/entities', // Directory to generate entity files
  },
    // entities: ['src/entities//*.js'],
    // migrations: ['src/migrations//*.js'],
    // subscribers: ['src/subscribers/**/*.js'],
    // cli: {
    //   entitiesDir: 'src/entities',
    //   migrationsDir: 'src/migrations',
    //   subscribersDir: 'src/subscribers',
    // },
  };