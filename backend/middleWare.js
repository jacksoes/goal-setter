const express = require('express');
const cors = require('cors');

const applyMiddleWare = (app) => {
    console.log("middleware running");
    app.use(cors());
    app.use(express.json());
};

module.exports = applyMiddleWare;