const cart = require("../models/cart.model");
const products = require("../models/product.model");
const shoppingCart = require("../models/shoppingCart.model");


async function getAll() {
    try {

        return await shoppingCart.findAll({
            include:cart
        });
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function create(carditem) {
    try {
        await shoppingCart.create({
            usershopUserId: carditem.usershopUserId,
            Date: Date.now()
        })

    } catch (error) {
        console.log("error", error)
    }
}
async function update(Id, useId, carditem) {
    try {
        const temp = await shoppingCart.findOne(
            {
                where: {
                    id: Id,
                    User_id:useId
                }
            })

        await temp.update({
            product_id: userShop.product_id,
            number: carditem.number,
        })
        await temp.save();
        return userShop.findAll()
    } catch (error) {
        throw error
    }
}
async function remove(params) {
    try {

        await shoppingCart.destroy({
            where: {
                id: Id
            }
        })
        return shoppingCart.findAll()
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