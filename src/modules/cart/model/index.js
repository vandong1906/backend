const { DataTypes } = require('sequelize');
const sequelize = require('../../../configs/db.config');
const products = require('../../product/model');

const cart = sequelize.define('cart',
    {
        cart_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number: DataTypes.INTEGER,
        Ngay: DataTypes.DATE,
    },
);
products.hasMany(cart, {
    sourceKey: 'product_id',
    foreignKey: 'product_id'
})
module.exports = cart;