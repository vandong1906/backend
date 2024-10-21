const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../configs/db.config');
const Country = require('./country.model');



const Brands = sequelize.define('brand', {
    Brand_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    Brand_Name: {
        type:DataTypes.STRING,
        allowNull: false
    },
}
);
Country.hasMany(Brands,{
    sourceKey:'Country_id',
    foreignKey:'Country_id'
})

module.exports= Brands;