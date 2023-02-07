const dotenv =  require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "postgres",
    password: "swabhav",
    database: "contact_app",
    host: "localhost",
    dialect: "postgres",
  }
}

// module.exports = isDev = NODE_ENV ? NODE_ENV === "development" : true;