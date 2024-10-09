var express = require('express');
var app = express();
const cors = require('cors');
app.use(express.json());
require('dotenv').config()

const application = require('../Backend/src/routes/application.router')
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

app.use('/application', application)

app.listen(3000);