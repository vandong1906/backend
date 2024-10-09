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
async function getAll() {
    try {
        return await Country.findAll();
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function create(Country) {
    try {
        await Country.create({
            Country_Name: Country.Country_Name,
        })
    } catch (error) {
        console.log("error", error)
    }
}
async function update(params,Country) {
    try {
        const temp = await Country.findOne(
            {where:{Country_id:params}})

        await temp.update({
            Country_Name:Country.Country_Name,
        })
        await temp.save();
        return Country.findAll()
    } catch (error) {
        throw error
    }
}
async function remove(params) {
    try {
        
        await Country.destroy({where:{Country_id:params}})
        return Country.findAll()
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