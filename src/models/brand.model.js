const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../configs/db.config')



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

    Country_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'country',
            key: 'Country_id'
        }

    }
}, {
    tableName: 'brand',
    timestamps: false
}
);

module.exports= Brands;