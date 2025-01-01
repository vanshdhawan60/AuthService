const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS),
    JSON_SECRET_KEY: process.env.JSON_SECRET_KEY,
    DB_SYNC: process.env.DB_SYNC === 'true',
}