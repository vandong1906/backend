const shoppingCart = require("../models/shoppingCart.model");
const Usershop = require("../models/user.model");


var jwt = require('jsonwebtoken');

async function getAll() {
    try {
        return await Usershop.findAll({
            include: {
                model: shoppingCart,
            }
        })
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function find(Users) {
    try {
        return await Usershop.findOne(
            {
                where: {
                    User_Name: Users.User_Name,
                    password: Users.password
                }
            })
    } catch (error) {
        throw error;
    }
}
async function create(Users) {
  
    try {
      
     
        if (await find(Users) == null) {
            const { User_Name, password } = Users;
            const payload = {
                User_Name,
                password
            }
            await Usershop.create({
                User_Name: User_Name,
                password: password,
                Role_id: 1,
            })
            return payload;
        }
        return 1;

    } catch (error) {
        console.log("error", error)
    }
}
async function update(params, Users) {
    try {
        const temp = await Usershop.findOne(
            { where: { User_id: params } })

        await temp.update({
            User_Name: Users.User_Name,
            Role_id: Users.Role_id,
            password: Users.password
        })
        await temp.save();
        return Usershop.findAll()
    } catch (error) {
        throw error
    }
}
async function remove(params) {
    try {

        await Usershop.destroy({ where: { User_id: params } })
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
    find,
}