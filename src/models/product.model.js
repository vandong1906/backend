const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/db.config');
const Brands = require('./brand.model');



const products = sequelize.define('product', {
    product_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    product_Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number:{
        type:DataTypes.INTEGER
    } 
}
);

Brands.hasMany(products,{
    sourceKey:'Brand_id',
    foreignKey:'Brand_id'
}),
module.exports=products;