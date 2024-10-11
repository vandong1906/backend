const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/db.config')


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
        type:DataTypes.STRING
    },

    Role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Role',
            key: 'Role_id'
        }

    }
}, {
    tableName: 'usershop',
    timestamps: false
}
);
module.exports=Usershop;