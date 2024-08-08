const express = require('express');
const app = express();
const cors = require('cors');

const signUpRouter = require('./controllers/signUp.controller.js');
const applyMiddleWare = require('./middleWare.js');

applyMiddleWare(app);

app.use("/", signUpRouter);



//app.post("/signUp", (req, res) =>{
//    console.log(req.body);
//})


app.listen(3000);