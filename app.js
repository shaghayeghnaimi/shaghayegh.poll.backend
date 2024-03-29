var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
var app = express();
const userRouter = require("./src/module/user/router");
const pollRouter = require("./src/module/poll/router");
const choiceRouter = require("./src/module/choice/router");
const participentRouter = require("./src/module/participent/router");
const participentChoiceRouter = require("./src/module/participent-choice/router");
const AuthMiddleware = require("./src/core/middleware/auth");
var cors = require('cors');
var { errors } = require ("celebrate")


app.use(logger("dev"));
app.use(cors({origin: ["http://localhost:3000"]}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/user", userRouter);
app.post("/login", AuthMiddleware.login);
app.use("/poll", pollRouter);
app.use("/choice", choiceRouter);
app.use("/participent", participentRouter);
app.use("/choices", participentChoiceRouter);



app.use(errors());





// app.use('/addresses', addressRouter);
// app.use('/packages', packageRouter);



// app.use(function(err, req, res, next) {
//     res.status(500).send("route not found");
//     res.status(404).send(err.message);
// })



module.exports = app;
