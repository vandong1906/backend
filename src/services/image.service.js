const { Sequelize, DataTypes } = require('sequelize');
const db = require('../configs/db.config')

const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'mysql'
});

const image = sequelize.define('image', {
    image_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    imageUrl: {
        type:DataTypes.STRING,
        allowNull: false
    },

    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'product',
            key: 'product_id'
        }

    }
}, {
    tableName: 'image',
    timestamps: false
}
);
async function getAll() {
    try {
        return await image.findAll();
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function create(image) {
    try {
        await image.create({
            imageUrl: image.imageUrl,
            product_id: image.product_id,
        })
    } catch (error) {
        console.log("error", error)
    }
}
async function update(params,image) {
    try {
        const temp = await image.findOne(
            {where:{image_id:params}})

        await temp.update({
            imageUrl:image.imageUrl,
            product_id:image.product_id,
        })
        await temp.save();
        return image.findAll()
    } catch (error) {
        throw error
    }
}
async function remove(params) {
    try {
        
        await image.destroy({where:{image_id:params}})
        return image.findAll()
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