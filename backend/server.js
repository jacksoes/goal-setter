const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json())

app.get("/", (req, res) =>{
    res.send("hi")
})

app.get("/signUp", (req, res) =>{
    res.send("signup")
})

app.post("/signUp", (req, res) =>{
    console.log(req.body);
})


app.listen(3000);