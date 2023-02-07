const { Sequelize } = require("sequelize");
const dbConfig = require("./config/db.config");
const { isDev } = require("./config/env.config");

const { database, username, password, dialect, host } = dbConfig;

const sequelize = new Sequelize(database, username, password, {
  define: {
    underscored: true,
  },
  dialect,
  host,
  logging: msg => isDev?logger.debug(msg):logger.info(msg),
});

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ alter: true })
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
}
// export default connectToDatabase;
module.exports =  { sequelize, connectToDatabase};
