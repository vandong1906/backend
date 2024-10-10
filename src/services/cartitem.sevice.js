const cartItem1 = require("../models/cartitem.model");

const cartItem=cartItem1;
async function getAll() {
    try {
        return await cartItem.findAll();
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function create(carditem) {
    try {
        await cartItem.create({
            product_id: cartitem.product_id,
            User_id:cartitem.User_id,
            number:cartitem.number
        })
    } catch (error) {
        console.log("error", error)
    }
}
async function update(proId,useId,carditem) {
    try {
        const temp = await cartItem.findOne(
            {where:{product_id:proId,
                User_id:useId
            }})

        await temp.update({
          product_id:cartitem.product_id,
          number:carditem.number,
        })
        await temp.save();
        return cartItem.findAll()
    } catch (error) {
        throw error
    }
}
async function remove(params) {
    try {
        
        await cartItem.destroy( {where:{product_id:proId,
            User_id:useId
        }})
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