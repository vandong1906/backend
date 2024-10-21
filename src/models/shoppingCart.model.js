const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/db.config');
const Usershop = require('./user.model');



const shoppingCart = sequelize.define('shoppingcart', {
    shoppingCart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Date: DataTypes.DATE
}
);

Usershop.hasMany(shoppingCart,{
    sourceKey:'User_id',
    foreignKey:'User_id'
});
module.exports = shoppingCart;