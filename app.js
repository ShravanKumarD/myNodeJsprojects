const express= require('express');
const bodyParser=require('body-parser');

const authRoutes=require('./routes/auth');

const app = express();
const User = require('./models/user');
const feedRoutes = require('./routes/feed');
const sequelize = require('./util/database');
const teamData=require('./models/team');
const DurationRoutes = require('./routes/feed');
const attendanceRoute = require('./routes/feed');
const attenadancemodel = require('./models/attendance');
const leavemodel = require('./models/leave');
const payslipmodel = require('./models/payslips');
const timefeed = require('./routes/feed');
const breakfeed=require('./routes/feed')

// sequelize.authenticate()
// .then(()=>{
//   console.log('database connected successfully')
// });
sequelize.sync().
then(()=>{
 const Category = sequelize.category;
 console.log(typeof(Category));
 console.log('database successfully synced');
})
.catch(err=>{
  console.log('database not synced',err);
});

app.use(bodyParser.json());
//get=>allusers(only for admin)=>auth/usersfeed
//signup=>auth/signup
//login=>auth/login
app.use('/auth',authRoutes);


//to add and post payslips
app.use('/payslip',feedRoutes);

//to add and post teammembers
app.use('/team',feedRoutes);

app.use('/leavefeed',DurationRoutes);
//to post and get  attendance 
app.use('/attendance',attendanceRoute);

app.use('/timefeed',timefeed);

app.use('/breakfeed',breakfeed);

app.listen(8000);

