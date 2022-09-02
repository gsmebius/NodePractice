const Sequelize = require("sequelize");
// Procesa todo lo puesto en el .env
require('dotenv').config();
const db = new Sequelize(process.env.DB, process.env.DBUSER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
module.exports = db;
