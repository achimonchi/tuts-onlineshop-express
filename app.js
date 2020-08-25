// import modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// use modules
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// import database
require('./db');

// import routes
const authRoutes = require("./api/routes/auth.routes");

// use routes
app.use("/auth", authRoutes);

module.exports = app;