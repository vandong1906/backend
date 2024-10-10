const { Sequelize, DataTypes } = require('sequelize');
const db = require('../configs/db.config');
const Usershop = require('./user.model');

const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'mysql'
});


const shoppingCart = sequelize.define('shoppingcart', {
    shoppingCart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Date: DataTypes.DATE
}, {
    timestamps: false,
    tableName: 'shoppingcart'
}
);

Usershop.hasMany(shoppingCart);
module.exports = shoppingCart;