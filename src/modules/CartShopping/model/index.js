const { DataTypes } = require('sequelize');
const sequelize = require('../../../configs/db.config');
const user = require('../../user/model/user');
const cart = require('../../cart/model');

const CartShopping = sequelize.define('CartShopping',
    {
        CartShopping_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    },
);

user.hasMany(CartShopping,{
    sourceKey:'User_id',
    foreignKey:'User_id'
})
CartShopping.hasMany(cart,{
    foreignKey:'CartShopping_id',
    sourceKey:'CartShopping_id'
})
module.exports = CartShopping;