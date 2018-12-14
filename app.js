var express = require('express');
var cors = require("cors");
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// This creates the Express app which is configured below.  
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use("/api", require('./api/fcm'));

app.get('/', (req, res) => res.status(200).send('API WORKING'))

// This comes into play when we deploy the application to 
// Cloud Functions.

module.exports = app;

let port = 8081

app.listen(port, () => {
    console.log(`Express server running on port ${port}`)
})