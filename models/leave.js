const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const leaves=sequelize.define('leave',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    emp_id:{
        type:Sequelize.STRING,
     required:true
    },
    from:{
      type:Sequelize.DATEONLY,
      required:true
    },
    to:{
      type:Sequelize.DATEONLY,
      required:true
    },
    reason:{
      type:Sequelize.STRING,
      required:true
    },
    LeaveType:{
        type:Sequelize.STRING,
     required:true
    }
});

module.exports=leaves;