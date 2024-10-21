var express = require('express');
const path = require('path');
const cors = require('cors');
var app = express();
const bodyParser = require("body-parser")
var jwt = require('jsonwebtoken');
app.use(express.json());
require('dotenv').config();

const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(express.json());
const uploadPath = path.join('../backend', 'src', 'img');
/*-------------------------------test-------------------------------- */

/*-------------------------------test-------------------------------- */
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));



const brand = require("./src/routes/brand.router");
const country = require("./src/routes/country.router");
const product = require("./src/routes/product.router");
const role = require("./src/routes/role.router");
const user = require("./src/routes/user.router");
const shoppingcart = require("./src/routes/shoppingCart.route");
const cart = require("./src/routes/cart.router");
const sequelize = require('./src/configs/db.config');
const size = require("./src/routes/size.router");
const image = require("./src/routes/image.router");

sequelize.sync();

app.use('/v1/brand', brand);
app.use('/v1/country', country);
app.use('/v1/product', product);
app.use('/v1/role', role);
app.use('/v1/user', user);
app.use('/v1/shoppingCart', shoppingcart);
app.use('/v1/size', size);
app.use('/v1/cart', cart);
app.use('/v1/image',image );
/* -------------------------Json Web Tokens --------------------*/

app.listen(3000);