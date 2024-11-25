
var jwt = require('jsonwebtoken');
const user = require('../model/user');
async function getAll() {
    try {
        return await user.findAll();
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function find(Users) {
    try {
        temp = await user.findOne(
            {
                where: {
                    User_Name: Users.User_Name
                }
            })
        if (temp != null) {
            return temp.dataValues;
        }
        return temp;

    } catch (error) {
        throw error;
    }
}
async function create(Users) {

    try {
        const { User_Name, password, mail } = Users;
        console.log(Users);
        const data=await user.create({
            User_Name: User_Name,
            password: password,
            role: 'user',
            status: "active",
            gmail: mail
        })
        if (data) {
            return 1;
        }
        return 0;

    } catch (error) {
        console.log("error", error)
    }
}
async function update(params, Users) {
    try {
        const temp = await user.findOne(
            { where: { User_id: params } })

        await temp.update({
            User_Name: Users.User_Name,
            Role_id: Users.Role_id,
            password: Users.password
        })
        await temp.save();
        return user.findAll()
    } catch (error) {
        throw error
    }
}
async function remove(params) {
    try {
        await user.destroy({ where: { User_id: params } })
        return user.findAll();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAll,
    create,
    update,
    remove,
    find,
}