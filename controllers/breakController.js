const Sequelize = require('sequelize');
const sequelize = require('../util/database')
const express = require('express');
const breakController = require('../models/break');
const bodyParser= require('body-parser');
const { condition } = require('sequelize');
var moment = require('moment')

exports.pause=(req,res,next)=>{
   const date = req.body.date;
    const pause=req.body.pause;
    const resume=null;
breakController.create({date:date,pause:pause,resume:null});
res.status(200).json({message:"PAUSE",pause:pause}); 
};
exports.resume=(req,res,next)=>{
  const date = req.body.date
 const resume=req.body.resume;
  breakController.update({
    resume:resume,
  },
  {
    where:{resume:null}
  })
  res.status(200).json({message:'RESUME',resume:resume});
}
exports.diffinTime =async(req,res,next)=>{
  const date = req.date;
  const pause=req.pause;
  const resume =req.resume;
  const time =await breakController.findAll({
  where:{date:"2022-07-24"}
})
let timeDiff =0;
const allTimeiff=time.map(x=>{
var startDate = moment(x.pause, 'YYYY-M-DD HH:mm:ss')
var endDate = moment(x.resume, 'YYYY-M-DD HH:mm:ss')
var secondsDiff = endDate.diff(startDate, 'minutes');
timeDiff+=secondsDiff
   combined1 = time.concat(timeDiff);
console.log(combined1);
})
const newtime=await breakController.findAll();
let timeDiffMonthly=0;
  var DiffMonthly=newtime.map(x=>{
     startDate = moment(x.pause, 'YYYY-M-DD HH:mm:ss')
     endDate = moment(x.resume, 'YYYY-M-DD HH:mm:ss')
     DiffinMin = endDate.diff(startDate, 'minutes')
    timeDiffMonthly+=DiffinMin;
 combined = newtime.concat(timeDiffMonthly); 
    console.log(combined);
  })
res.status(200).json({message:"totaltime",
totalBreaksinAdayinMinutes:combined1,
totalbreaksInTheMonthinMinutes:combined}); 
}
   exports.total = async(req,res,next) => {
    const id = req.body.id; 
    const date = req.body.date;
    const pause=req.body.pause;
    const resume =req.body.resume;

     breakController.findAll()
     .then(data=>{
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving time."
      });
    });
  }