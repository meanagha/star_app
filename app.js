var express=require('express');
var app=express();
//console.log("hello1");
app.set('view engine','ejs');//'view engine' this is perfet name.This line is just like allow views
//in project.means .ejs file allowed like "home" this is why we used this .


var routes=require('./routes');//automatic it will goes to routes/index.js

//bcz of this following 2 lines u can access images easily.no need to put extra url in brif.
//like public/images and all this.I put public/images this also but still not worked .So i 
//make this.Public folder is seting from here 
var path=require('path');
app.use(express.static(path.join(__dirname,'public')));//gere public set




//Routes

//home
app.get('/',routes.home);
app.get('/episode/:episod_no?',routes.single_movie);
app.get('*',routes.notfound1);
// app.listen('3000',function()
// {
//     console.log("running");
// });
app.listen(process.env.PORT || 3000);