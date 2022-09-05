const express=require('express');
const bodyParser=require('body-parser');
const User = require('../models/user');
const Sequelize = require('sequelize');
const database=require('../util/database');
const feedController=require('../controllers/feed');
const userController = require('../controllers/salaryController');
const teamData = require('../controllers/teamData');
const leaveController = require('../controllers/LeaveController');
const attendanceController = require('../controllers/attendanceController');
const teammembersController = require('../controllers/teamData');
const timeController=require('../controllers/attendanceController');
const breakController=require('../controllers/breakController');

const router = express.Router();

//router.get('/users',feedController.userData);
//to post =>payslip/postsalaryslip
router.post('/postsalaryslip',userController.postsalarySlip);
//to get =>payslip/salaryslips
router.get('/salaryslips',userController.getsalarySlip);
//to add a member =>team/addteammember
router.post('/addteammember',teammembersController.postteamData);
//to get data all teammembers =>team/teamdata
router.get('/teamdata',teammembersController.Team);
/**to post and get a leave */
//to get=>leavefeed/leaveduration
router.get('/leaveduration',leaveController.duration);
//to post=>leavefeed/newleave
router.post('/newleave',leaveController.leave);
/**to post and get attendance */
//to post clockin and clockout
router.post('/clockin',attendanceController.empClockin);
router.post('/clockout',attendanceController.empClockout);
//to get attendance=>attandancefeed/attendancesheet
router.get('/attendancesheet',attendanceController.getattendance);        
/**to get and post break */
//=>pause a break=>breakfeed/break
router.post('/pause',breakController.pause);
//resume break
router.post('/resume',breakController.resume);
//difference 
router.get('/diffintime',breakController.diffinTime);
//=>breakfeed/total
router.get('/total',breakController.total);


module.exports=router;

