const express = require('express');
const app = express();
const cors = require('cors');

const signUpRouter = require('./controllers/signUp.controller.js');
const applyMiddleWare = require('./middleWare.js');
const {connectDatabase} = require('./database.js');

const runServer = async (app, connectDatabase) =>
    {
        await connectDatabase();
        app.use("/", signUpRouter);
    }
    

applyMiddleWare(app);

runServer(app, connectDatabase);












app.listen(3000);