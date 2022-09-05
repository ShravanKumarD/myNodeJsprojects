const fs=require('fs'); 
const path=require('path');
const express=require('express');
const Users=require('../models/user');
const validationResult = require('express-validator');
const user = require('../models/user');
var router = express.Router();
var db=require('../util/database');

exports.userData = (req,res,next) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  db.user.userData({ where: condition })
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
