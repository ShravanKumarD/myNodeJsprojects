const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const attendanceSchema =sequelize.define('attendanceSchema',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    clockin:{
     type:Sequelize.DATE,
    },  
    clockout:{
        type:Sequelize.DATE,
    }
});

module.exports = attendanceSchema;