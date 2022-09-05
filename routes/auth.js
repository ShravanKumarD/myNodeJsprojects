const express = require('express');
const {body } = require('express-validator/check');
const User = require('../models/user');
const authController = require('../controllers/auth')
const bodyParser=require('body-parser');

const router = express.Router();
router.post('/signup',
[body('username'),
body('email')
    .isEmail()
    .withMessage('Please enter a valid email.')
    .custom((value, { req }) => {
      return User.findOne({ email: value }).then(userDoc => {
        if (userDoc) {
          return Promise.reject('E-Mail address already exists!');
        }
      });
    })
    .normalizeEmail(),body('password').trim()
    .isLength({ min: 5 }),
  body('name').trim().not().isEmpty()],
authController.signup);

router.post('/login',authController.login);
router.get('/usersfeed',authController.allUsers);


  module.exports = router;
