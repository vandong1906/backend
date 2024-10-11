const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/db.config')


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
    },

    Brand_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'brand',
            key: 'brand_id'
        }

    }
}, {
    tableName: 'product',
    timestamps: false
}
);
module.exports=products;