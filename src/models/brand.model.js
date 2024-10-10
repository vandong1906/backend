const { Sequelize, DataTypes} = require('sequelize');
const db = require('../configs/db.config')

const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'mysql'
});

const Brands = sequelize.define('brand', {
    Brand_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    Brand_Name: {
        type:DataTypes.STRING,
        allowNull: false
    },

    Country_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'country',
            key: 'Country_id'
        }

    }
}, {
    tableName: 'brand',
    timestamps: false
}
);

module.exports= Brands;