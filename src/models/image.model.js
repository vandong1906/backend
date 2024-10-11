const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/db.config')


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
module.exports=image;