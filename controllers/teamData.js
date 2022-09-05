const express = require('express');

const teammembers=require('../models/team');

const bodyParser = require('body-parser');

exports.postteamData = async(req,res,next)=>{
    const name=req.body.name;
    const designation=req.body.designation;
    const workingon=req.body.workingon;
    console.log(req.body);
    teammembers.create({name:name,designation:designation,workingon:workingon});
    res.status(200).json({
        message:"member added successfully",
        posts:{
            id :new Date().toISOString(),
            name:name
        }
    });
};
exports.Team = (req,res,next) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
   teammembers.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };  
