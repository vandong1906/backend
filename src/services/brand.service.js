const { Sequelize, DataTypes } = require('sequelize');
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
        type: DataTypes.STRING,

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
async function getAll() {
    try {
        return await Brands.findAll();
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function create(brand) {
    try {
        await Brands.create({
            Brand_Name: brand.Brand_Name,
            Coutry_id: brand.Coutry_id,
        })
    } catch (error) {
        console.log("error", error)
    }
}

module.exports = {
    getAll,
    create,
}