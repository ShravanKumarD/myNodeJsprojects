const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const salarySchema = sequelize.define('salarySchema',{
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
      },
emp_id: {
    type:Sequelize.STRING,
     required:true
},
deductions:{  
    type:Sequelize.INTEGER,
    required:true
},
pf: {
type:Sequelize.INTEGER,
required:true
}
});

module.exports = salarySchema;