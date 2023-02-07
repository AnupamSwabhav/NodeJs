const Pool = require('pg').Pool
const { Sequelize } = require('sequelize')
const pool = new Pool(
  {
    user: "postgres",
    password: "swabhav",
    database: "contact_app",
    host: "127.0.0.1",
    port: "5432"
  }
);

const seq = new Sequelize("contact_app", "postgres", "swabhav", {
  dialect: 'postgres', host: pool.host
})
async function auth() {
  try {
    await seq.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
auth()

class DataBase {
  constructor() {
    this.pool = pool
  }
  databaseConnect() {
    if (!pool) {
      pool = new Pool(
        {
          user: "postgres",
          password: "root",
          database: "mydb",
          host: "localhost",
          port: "5432"
        }
      );
    }
    return pool
  }
}

module.exports = { DataBase }