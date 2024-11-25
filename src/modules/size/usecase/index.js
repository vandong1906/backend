const size = require("../model");



async function getAll() {
    try {

        return await size.findAll();
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function create(size) {
    try {
        await sizes.create({
            product_id: productId.product_id,
            Date: Date.now(),
            number:size.number
        })

    } catch (error) {
        console.log("error", error)
    }
}
async function update(id,size) {
    try {
        const temp = await sizes.findOne(
            {
                where: {
                   size_id:id
                }
            })

        await temp.update({
            number: size.number+temp.number,
        })
        await temp.save();
        return sizes.findAll()
    } catch (error) {
        throw error
    }
}
async function remove(params) {
    try {

        await sizes.destroy({
            where: {
                id: Id
            }
        })
        return sizes.findAll()
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