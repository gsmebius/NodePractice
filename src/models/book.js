// El DataTypes es un objeto de Sequelize
const DataTypes = require('sequelize');
const db = require('../config/config.db.js');
const Author = require('../models/author.js');

const Book = db.define('Books', {
  // Model attributes are defined here
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Author,
      key: "id",
    },
  }
});

Author.hasOne(Book, { foreignKey: 'author' });
Book.belongsTo (Author, { foreignKey: 'author' });

module.exports = Book;
