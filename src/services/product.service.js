const products=require('../models/product.model')
async function getAll() {
    try {
        return await products.findAll();
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function create(product) {
    try {
        await products.create({
            product_Name: product.product_Name,
            number:product.number,
            Brand_id: product.Brand_id,
        })
    } catch (error) {
        console.log("error", error)
    }
}
async function update(params, product) {
    try {
        const temp = await products.findOne(
            { where: { product_id: params } })

        await temp.update({
            product_Name: product.product_Name,
            number:product.number,
            Brand_id: product.Brand_id,
        })
        await temp.save();
        return products.findAll()
    } catch (error) {
        throw error
    }
}
async function remove(params) {
    try {

        await products.destroy({ where: { product_id: params } })
        return products.findAll()
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