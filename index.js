const serverless = require("serverless-http");
const express = require("express");
var app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports.handler = serverless(app);