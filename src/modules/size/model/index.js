const { DataTypes } = require("sequelize");
const sequelize = require("../../../configs/db.config");
const products = require("../../product/model");

const size = sequelize.define('size', {
    size_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    number: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    Date: DataTypes.DATE
  }, 
{
    timestamps: false,
}
);

products.hasMany(size, {
    foreignKey: 'product_id',
    sourceKey: 'product_id'
})
module.exports = size;