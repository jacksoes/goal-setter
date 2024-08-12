const express = require('express');
const app = express();

const routerSignUp = require('./routes/signUp.route.js');
const routerLogIn = require('./routes/logIn.route.js');
const applyMiddleWare = require('./middleWare.js');
const {connectDatabase} = require('./database.js');
const User = require('./models/users.js')


const runServer = async (app, connectDatabase) =>
    {
        await connectDatabase();
        app.use('/', routerSignUp);
        //app.use('/', routerLogIn);
       
    }
    

applyMiddleWare(app);

runServer(app, connectDatabase);












app.listen(3000);