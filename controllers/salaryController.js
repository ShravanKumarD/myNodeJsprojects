const express = require('express');

const userSalSlip = require('../models/payslips');

const bodyParser=require('body-parser');
//const User = require('../models/user');

//to add
exports.postsalarySlip = async(req,res,next)=>{
      const emp_id = req.body.emp_id;
      const deductions = req.body.deductions;
      const pf = req.body.pf;

      userSalSlip.create({emp_id:emp_id,deductions:deductions,pf:pf});
      res.status(200).json({
            message:'details updated',
            post:{id: new Date().toISOString(),emp_id:emp_id,deductions:deductions,pf:pf}
      });
}
//to get 
exports.getsalarySlip = async(req,res,next)=>{
      const emp_id = req.body.emp_id;
      const deductions = req.body.deductions;
      const pf = req.body.pf;
      const salSlip = await userSalSlip.findOne({emp_id:emp_id});
      if(!salSlip){
            const error = new Error('no transactions');
            error.statuscode=404;
            throw error;
      }
      res.status(200).json({message:"employee details fetched succussfully",
                posts: { id :new Date().toISOString(),emp_id:emp_id,deductions:deductions,pf:pf}
      });
};


      