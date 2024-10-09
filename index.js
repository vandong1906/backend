var express = require('express');
var app = express();
const cors = require('cors');
app.use(express.json());
require('dotenv').config()

const brand=require("./src/routes/brand.router");
const cartitem=require("./src/routes/cartitem.router");
const country=require("./src/routes/country.router");
const image=require("./src/routes/image.router");
const product=require("./src/routes/product.router");
const role=require("./src/routes/role.router");
const user=require("./src/routes/user.router");

app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));
app.use('/v1/brand',brand );
app.use('/v1/cartitem',cartitem );
app.use('/v1/country',country);
app.use('/v1/image',image);
app.use('/v1/product',product );
app.use('/v1/role',role );
app.use('/v1/user',user );

app.listen(3000);