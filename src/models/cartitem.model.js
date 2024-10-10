const { Sequelize, DataTypes } = require('sequelize');
const db = require('../configs/db.config')

const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'mysql'
});

const product =require('../models/product.model');
const userShop=require('../models/user.model');
const cartitem = sequelize.define('carditem', {
    product_id: {
        type: DataTypes.INTEGER,
        references:{
          model:product,
          key:'product_id'
        }
    },
    User_id: {
        type: DataTypes.INTEGER,
        references: {
            model:userShop,
            key: 'User_id'
        }

    },
    number:{
        type:DataTypes.INTEGER,
    }
}, {
    tableName: 'carditem',
    timestamps: false
}
);
product.belongsToMany(userShop,{through:cartitem});
userShop.belongsToMany(product,{through:cartitem});
module.exports=cartitem;