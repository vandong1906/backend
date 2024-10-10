const { Sequelize, DataTypes } = require('sequelize');
const db = require('../configs/db.config')

const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'mysql'
});

const product = require('./product.model');
const shoppingCart = require('./shoppingCart.model');
const products = require('./product.model');

const cart = sequelize.define('card', {
    cart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: DataTypes.NUMBER,
    Date: DataTypes.DATE,
}, {
    timestamps: false,
    tableName: 'cart'
}
);
cart.hasMany(products)
shoppingCart.hasMany(cart);


module.exports = cart;