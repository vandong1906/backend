const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/db.config');
const Roles = require('./role.model');


const Usershop = sequelize.define('usershop', {
    User_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    User_Name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    password:{
        type:DataTypes.STRING(64),
    },
}
);
Roles.hasMany(Usershop,{
    foreignKey:'Role_id',
    sourceKey:'Role_id'
})
module.exports=Usershop;