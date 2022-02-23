require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 4000,
    DB_USER: process.env.DB_USER,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD
}