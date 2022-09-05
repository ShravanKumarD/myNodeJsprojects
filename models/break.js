const { STRING } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const breaks = sequelize.define("breaks",{
  date:{
  type:Sequelize.DATEONLY,
  },
  pause:{
    type:Sequelize.DATE,
  
  },
  resume:{
    type:Sequelize.DATE,
  }
})
  module.exports=breaks;
