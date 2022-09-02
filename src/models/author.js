// El DataTypes es un objeto de Sequelize
const DataTypes = require('sequelize');
const db = require('../config/config.db.js');

const Author = db.define('Authors', {
  // Model attributes are defined here
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Author;