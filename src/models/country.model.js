const { Sequelize, DataTypes } = require('sequelize');
const db = require('../configs/db.config')

const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'mysql'
});

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
  
}, {
    tableName: 'Country',
    timestamps: false
}
);
module.exports=Country;