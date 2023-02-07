const { Sequelize } = require("sequelize");
const dbConfig = require("./config/db.config");
const { isDev } = require("./config/env.config");

const { database, username, password, dialect, host } = dbConfig;
const sequelize = new Sequelize("contact_app", "postgres", "swabhav", {
  dialect: 'postgres',
  host: "localhost",
  port: "5432",
  logging: console.log,
})

async function connectToDatabase() {
  try {
    console.log("sequalize =======>",sequelize)
    await sequelize.authenticate();
    // await sequelize.sync({ alter: true })
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
}
// export default connectToDatabase;
module.exports =  { sequelize, connectToDatabase};
