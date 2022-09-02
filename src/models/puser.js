// El DataTypes es un objeto de Sequelize
const DataTypes = require('sequelize');
const db = require('../config/config.db.js');
const bcrypt = require("bcrypt");

const Puser = db.define('Pusers', {
  // Model attributes are defined here
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  password: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
    
  });

module.exports = Puser;