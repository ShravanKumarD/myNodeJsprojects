const bodyParser = require('body-parser');
const express = require('express');
const { DATE } = require('sequelize');
const leaveController = require('../models/leave');
const user = require('../models/user');
const moment = require('moment');

exports.leave=((req,res,next)=>{
  const emp_id=req.body.emp_id;
  const from = req.body.from;
  const to = req.body.to;
  const reason = req.body.reason;
  const LeaveType = req.body.LeaveType;
  leaveController.create({emp_id:emp_id,from:from,to:to,reason:reason,LeaveType:LeaveType});
  res.status(200).json({message:"application for leave sent successfully",
  posts:{
    id : new Date().toISOString(),emp_id:emp_id,from:from,to:to,reason:reason,LeaveType:LeaveType}
  });
  });

exports.duration = async(req,res,next)=>{
const emp_id=req.body.emp_id;
const from = req.body.from;
const to = req.body.to;
const reason = req.body.reason;
const LeaveType = req.body.LeaveType;
  const totaltime =await leaveController.findAll();
  let timeDiff=0;
  var DiffMonthly=totaltime.map(x=>{
  var startDate = moment(x.from, 'YYYY-M-DD HH:mm:ss')
  var endDate = moment(x.to, 'YYYY-M-DD HH:mm:ss')
  var DiffinMin = endDate.diff(startDate, 'days')
 timeDiff+=DiffinMin  
});
  res.status(200).json({message:"youre leave duration is",
  totaltime:totaltime,DifferenceinMinutes:timeDiff
})
};
