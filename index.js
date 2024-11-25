var express = require('express');
var app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser")
app.use(express.json());
require('dotenv').config();
const fileUpload = require('express-fileupload');
var cookieParser = require('cookie-parser');


app.use(cookieParser());
app.use(fileUpload());
app.use('/uploads', express.static(path.join(__dirname, 'src', 'uploads')));
/*-------------------------------test-------------------------------- */

/*-------------------------------test-------------------------------- */
app.use(cors({
  origin: 'http://localhost:3006',
  allowedHeaders: ['sessionId', 'Content-Type', 'Authorization'],
  exposedHeaders: ['sessionId'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  preflightContinue: false,
}));
const brand = require('./src/modules/brand/module');
const product = require('./src/modules/product/module');
const user = require('./src/modules/user/module');
const CartShopping = require('./src/modules/CartShopping/module');
const size = require('./src/modules/size/module');
const cart = require('./src/modules/cart/module');
const sequelize = require('./src/configs/db.config');
sequelize.sync();

app.use('/v1/brand', brand);
app.use('/v1/product', product);
app.use('/v1/cart', cart);
app.use('/v1/user', user);
app.use('/v1/CartShopping', CartShopping);
app.use('/v1/size', size);
app.get('/', (req, res) => {
  res.send('sucees').status(200);
})
// async function createProductAndPrice() {
//   try {
//     const product = await stripe.products.create({
//       name: 'Jordan'
//     });
//     const { amount } = req.body;
//
//
//     console.log('Product created:', product.id);
//
//     const price = await stripe.prices.create({
//       unit_amount: amount, // amount in cents
//       currency: 'usd',
//       product: product.id,
//     });
//
//     console.log('Price created:', price.id);
//   } catch (error) {
//     console.error('Error creating product or price:', error);
//   }
// }

app.listen(3000);