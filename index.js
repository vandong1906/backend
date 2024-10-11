var express = require('express');
var app = express();
const cors = require('cors');
app.use(express.json());
require('dotenv').config()
const jwt = require("jsonwebtoken");

const brand=require("./src/routes/brand.router");
const cart=require("./src/routes/cart.router");
const country=require("./src/routes/country.router");
const image=require("./src/routes/image.router");
const product=require("./src/routes/product.router");
const role=require("./src/routes/role.router");
const user=require("./src/routes/user.router");
const shoppingcart=require("./src/routes/shoppingCart.route");
const sequelize = require('./src/configs/db.config');
const size=require("./src/routes/size.router");

app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));
sequelize.sync();
app.use('/v1/brand',brand );
app.use('/v1/cart',cart );
app.use('/v1/country',country);
app.use('/v1/image',image);
app.use('/v1/product',product );
app.use('/v1/role',role );
app.use('/v1/user',user );
app.use('/v1/shoppingCart',shoppingcart);
app.use('/v1/size',size);
app.listen(3000);