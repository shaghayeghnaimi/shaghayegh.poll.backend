require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const userRouter = require('./src/module/users/route');
// const addressRouter = require('./src/module/adresses/route')
// const packageRouter =require('./src/module/packages/route')
var app = express();


app.use(cors({origin: ["http://localhost:3000"]}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRouter);
// app.use('/addresses', addressRouter);
// app.use('/packages', packageRouter);

app.post("/login", )

app.use(function(err, req, res, next) {
    res.status(500).send("route not found");
    res.status(404).send(err.message);
})



module.exports = app;
