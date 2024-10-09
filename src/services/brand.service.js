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
            Country_id: brand.Country_id,
        })
    } catch (error) {
        console.log("error", error)
    }
}
async function update(params,brand) {
    try {
        const temp = await Brands.findOne(
            {where:{Brand_id:params}})

        await temp.update({
            Brand_Name:brand.Brand_Name,
            Country_id:brand.Country_id,
        })
        await temp.save();
        return Brands.findAll()
    } catch (error) {
        throw error
    }
}
async function remove(params) {
    try {
        
        await Brands.destroy({where:{Brand_id:params}})
        return Brands.findAll()
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAll,
    create,
    update,
    remove,
}