const CartShopping = require("../model");
const Product = require('../../product/usecase/index')

function CheckProDuct(Carts) {
    const temp = true;
    Carts.map( async (cart) => {
        const isValid=await Product.check(cart.product_id, cart.number);
        if(!isValid){
        }

    })
}
async function getAll() {
    try {
        return await CartShopping.findAll();
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function create(carditem) {
    try {
        await cart.create({
            number: carditem.number,
            product_id: carditem.product_id,
            shoppingcartShoppingCartId: carditem.shoppingcartShoppingCartId,
            Date: Date.now()
        })

    } catch (error) {
        console.log("error", error)
    }
}
async function update(proId, useId, carditem) {
    try {
        const temp = await cartItem.findOne(
            {
                where:
                {
                    product_id: proId,
                    User_id: useId
                }
            })

        await temp.update({
            product_id: cartitem.product_id,
            number: carditem.number,
        })
        await temp.save();
        return cartItem.findAll()
    } catch (error) {
        throw error
    }
}
async function remove(params) {
    try {

        await cartItem.destroy({
            where: {
                product_id: proId,
                User_id: useId
            }
        })
        return cartItem.findAll()
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