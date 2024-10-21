const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/db.config')


const shoppingCart = require('./shoppingCart.model');



const products= require('./product.model');
const cart = sequelize.define('card', {
    cart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: DataTypes.INTEGER,
    Ngay: DataTypes.DATE,
},
);

products.hasMany(cart,{
    sourceKey:'product_id',
    foreignKey:'product_id'
})
shoppingCart.hasMany(cart, {
    foreignKey: 'shoppingCart_id',
    sourceKey: 'shoppingCart_id'
})


module.exports = cart;