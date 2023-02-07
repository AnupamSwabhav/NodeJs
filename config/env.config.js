const dotenv =  require("dotenv");
dotenv.config();

module.exports = {
  PORT,
  NODE_ENV,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  BCRYPT_SALT_ROUND,
  ACCESS_TOKEN_SECRET,
  REFRESS_TOKEN_SECRET,
} = process.env;

module.exports = isDev = NODE_ENV ? NODE_ENV === "development" : true;