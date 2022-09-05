const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const teamMembers = sequelize.define('team_members',{
  name:{
    type:Sequelize.STRING,
    required:true
  },
  designation:{
    type:Sequelize.STRING,
    required:true
  },
  workingon:{
    type:Sequelize.STRING,
  
    required:true
  }
});
module.exports = teamMembers;
