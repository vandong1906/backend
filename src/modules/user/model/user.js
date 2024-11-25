
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../../configs/db.config');



const user = sequelize.define('user', {
    User_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    User_Name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    gmail:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING(64),
    },
    role:{
        type:DataTypes.STRING,
    },
    status:{
        type:DataTypes.STRING,
    }
}
);
module.exports=user;