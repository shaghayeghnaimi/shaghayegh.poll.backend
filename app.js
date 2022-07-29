require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const userRouter = require('./src/module/user/router');
// const addressRouter = require('./src/module/adresses/route')
// const packageRouter =require('./src/module/packages/route')
const AuthMiddleware = require('./src/core/middleware/auth');
var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);
// app.use('/addresses', addressRouter);
// app.use('/packages', packageRouter);

app.post("/login", AuthMiddleware.login )

// app.use(function(err, req, res, next) {
//     res.status(500).send("route not found");
//     res.status(404).send(err.message);
// })



module.exports = app;
