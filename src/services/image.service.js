const image=require('../models/image.model');
async function getAll() {
    try {
        return await image.findAll();
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function create(image) {
    try {
        await image.create({
            imageUrl: image.imageUrl,
            product_id: image.product_id,
        })
    } catch (error) {
        console.log("error", error)
    }
}
async function update(params,image) {
    try {
        const temp = await image.findOne(
            {where:{image_id:params}})

        await temp.update({
            imageUrl:image.imageUrl,
            product_id:image.product_id,
        })
        await temp.save();
        return image.findAll()
    } catch (error) {
        throw error
    }
}
async function remove(params) {
    try {
        
        await image.destroy({where:{image_id:params}})
        return image.findAll()
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