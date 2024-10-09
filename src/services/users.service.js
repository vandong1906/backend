const { Sequelize, DataTypes } = require('sequelize');
const db = require('../configs/db.config')

const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'mysql'
});

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
async function getAll() {
    try {
        return await Usershop.findAll();
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function create(Users) {
    try {
        await Usershop.create({
            User_Name: Users.User_Name,
            password:Users.password,
            Role_id: Users.Role_id,
        })
    } catch (error) {
        console.log("error", error)
    }
}
async function update(params,Users) {
    try {
        const temp = await Usershop.findOne(
            {where:{Users_id:params}})

        await temp.update({
            User_Name:Users.User_Name,
            Role_id:Users.Role_id,
        })
        await temp.save();
        return Users.findAll()
    } catch (error) {
        throw error
    }
}
async function remove(params) {
    try {
        
        await Usershop.destroy({where:{User_id:params}})
        return Users.findAll()
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