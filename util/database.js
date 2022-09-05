// const mysql = require('mysql2');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('logbook', 'root', '8008248021', {
  dialect: 'mysql',
  host: 'localhost'
})
module.exports  = sequelize;
