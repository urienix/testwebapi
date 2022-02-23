
const sql = require('sqlstoreprocedure');
const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD } = require('./config');

const pool = new sql(DB_USER, DB_HOST, DB_NAME, DB_PASSWORD);

module.exports = pool;