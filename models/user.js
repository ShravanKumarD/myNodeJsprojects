const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type:Sequelize.STRING,
    required:true
  },
  email: {
    type:Sequelize.STRING,
    required:true
  },
  password: {
    type:Sequelize.STRING,
    required:true
  }
});

module.exports = User;
