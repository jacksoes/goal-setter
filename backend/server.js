const express = require("express");
const app = express();

const routerSignUp = require("./routes/signUp.route.js")
const routerLogIn = require("./routes/logIn.route.js")
const routerTest = require("./routes/test.route.js")
const routerLogOut = require("./routes/logOut.route.js")
const routerAddGoal = require("./routes/addGoal.route.js")
const routerGetGoals = require("./routes/getGoals.route.js")
const routercompleteGoal = require("./routes/completeGoal.route.js")
const routerRemoveGoal = require("./routes/removeGoal.route.js")

const {applyMiddleWare} = require("./middleWare.js");
const {connectDatabase} = require("./database.js");
const User = require("./models/users.model.js")


const runServer = async (app, connectDatabase) =>
    {
        applyMiddleWare(app);
        await connectDatabase();
        app.use("/", routerSignUp);
        app.use("/", routerLogIn);
        app.use("/", routerTest);
        app.use("/", routerLogOut);
        app.use("/", routerAddGoal);
        app.use("/", routerGetGoals);
        app.use("/", routercompleteGoal);
        app.use("/", routerRemoveGoal);
       
    }

//applyMiddleWare(app);
app.listen(3000, "0.0.0.0");
runServer(app, connectDatabase);









app.listen(3000);