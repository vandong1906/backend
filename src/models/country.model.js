const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/db.config')


const Country = sequelize.define('Country', {
    Country_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    Country_Name: {
        type:DataTypes.STRING,
        allowNull: false
    }
  
}
);
module.exports=Country;