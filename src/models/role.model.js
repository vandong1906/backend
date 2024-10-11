const { Sequelize, DataTypes } = require('sequelize');
const sequelize= require('../configs/db.config')


const Roles = sequelize.define('Role', {
    Role_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    Role_permission: {
        type:DataTypes.STRING,
        allowNull: false
    }
   
}, {
    tableName: 'role',
    timestamps: false
}
);
module.exports=Roles;