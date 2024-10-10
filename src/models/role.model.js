const { Sequelize, DataTypes } = require('sequelize');
const db = require('../configs/db.config')

const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'mysql'
});

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