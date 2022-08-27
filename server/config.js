const DB_DSN = process.env.DB_DSN;
const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
const SALT = process.env.SALT || 10;

module.exports = { DB_DSN, JWT_PRIVATE_KEY, SALT }