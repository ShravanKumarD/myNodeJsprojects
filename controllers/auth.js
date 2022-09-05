const {express,body}=require('express-validator/check');
const validator=require('validator');
const bcrypt= require('bcryptjs');
const User = require('../models/user');
const bodyParser=require('body-parser');
//const jwt = require('jsonwebtoken');
//const token = require('../middlewares/is-auth');

/**user signup */
exports.signup= (req,res,next)=>{
const username = req.body.username;
const email=req.body.email;
const password = req.body.password;
console.log(req.body);

body('email')
.isEmail().withMessage('must be a valid email')
.normalizeEmail()
 User.findOne({ email: email })
.then(() => {
      console.log('email already exists');
    })
    .catch(err=>{
        console.log(err);
    });

//encryption of password
var hashedPwd;
bcrypt.genSalt(10, function(err, Salt) {
bcrypt.hash(password, Salt, function(err, hash) {
      if(err) {
          return console.log('Cannot encrypt');
           }
      hashedPwd = hash;
      bcrypt.compare(password,hashedPwd, 
          async function (err, isMatch) {  
          if (isMatch) {//comparing passwords
              console.log('Encrypted password is: ', hashedPwd);
              console.log('Decrypted password is: ' ,password);
              return User.create({username:username,email:email,password:hashedPwd});
          }
          if (!isMatch) {
              console.log(hashedPwd + ' is not encryption of '+ password);    
          };
      }); 
  });
})
res.status(200).json({message:'user created successfully'})
}
/**user login after signup*/ 
   exports.login = async(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
     console.log(req.body);
     const user = await User.findOne({email:email});
     if(!user){
      const error =new Error('email address not registered');
      error.statuscode=401;
      throw error;
     }
     const userpwd = await bcrypt.compare(password,user.password);
    //   const token = jwt.sign(
    //   {email:email,password:password},
    //   process.env.TOKEN_KEY,
    //   { expiresIn: "1h"});
    // user.token = token;
     if(!userpwd){
       const error = new Error('wrong password');
       error.statuscode = 401    ;
       throw error;
     }
    //  if(userpwd){
    //     token.sign({"email":email,"password":password})
    //}
res.status(200).json({message:'user login successfully'});
    }

exports.allUsers=(req,res,next)=>{
    const email = req.body.email;
   var condition = email ? {email:{[Op.like]:`%${email}%`}}:null;
   User.findAll({where:condition})
   .then(data=>{
    res.send(data);
   })
   .catch(err=>{
    res.status(500).send({
        message:
        err.message || "some error occured"
    })
   })
    }




