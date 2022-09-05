const express = require('express');
const bodyParser = require('body-parser');
const attendanceController = require('../models/attendance');
var moment = require('moment')

exports.empClockin=(req,res,next)=>{
  const id = req.body.id;
  const clockin = req.body.clockin;
  const clockout=null;
  attendanceController.create({clockin:clockin,clockout:null});
  res.status(200).json({
    message:'clockin time added successfully',clockin:clockin});
}
exports.empClockout=(req,res,next)=>{
  clockout = req.body.clockout;
  attendanceController.update({
    clockout:clockout,
  },
  {
    where:{clockout:null}
  })
  res.status(200).json({message:'clockout time added successfully',clockout:clockout})
}
 exports.getattendance =async(req, res,next) => {
   const clockin = req.body.clockin;
   const clockout = req.body.clockout; 
const timeOftheday = await attendanceController.findAll({
  where:{id:"1  "}})
let totalhours=0;
var totalAttendance=timeOftheday.map(x=>{
  startDate = moment(x.clockin, 'YYYY-M-DD HH:mm:ss')
  endDate = moment(x.clockout, 'YYYY-M-DD HH:mm:ss')
  
  diffTime=endDate.diff(startDate,'hours')
  totalhours=totalhours+diffTime;
  combined1= timeOftheday.concat(totalhours);
})
const time =await attendanceController.findAll();
let count=0;
var totalAttendance=time.map(x=>{
  startDate = moment(x.clockin, 'YYYY-M-DD HH:mm:ss')
  endDate = moment(x.clockout, 'YYYY-M-DD HH:mm:ss')
  diffinTime=endDate.diff(startDate,'hours')
count = count+diffinTime;
//concating date with total hours
combined=time.concat(count);
})
   res.status(200).json({message:"employee attendance",
   totalAttendanceHoursoftheDay:combined1,
   totalAttenadanceoftheMonthinMinutes:combined});
}