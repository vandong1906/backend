const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/db.config')

const products = require('../models/product.model');

const Image = sequelize.define("image", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.BLOB('long'), 
    allowNull: false,
  },
  mimetype: {
    type: DataTypes.STRING,
  },
  size: {
    type: DataTypes.INTEGER,
  }

});
products.hasMany(Image,{
  sourceKey:'product_id',
  foreignKey:'product_id'
})
module.exports = Image;