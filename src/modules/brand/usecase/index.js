const Brands = require("../model");


async function getAll() {
    try {
        return await Brands.findAll();
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function create(brand) {
    try {
        await Brands.create({
            Brand_Name: brand.Brand_Name,
            Country_id: brand.Country_id,
        })
    } catch (error) {
        console.log("error", error)
    }
}
async function update(params,brand) {
    try {
        const temp = await Brands.findOne(
            {where:{Brand_id:params}})

        await temp.update({
            Brand_Name:brand.Brand_Name,
            Country_id:brand.Country_id,
        })
        await temp.save();
        return Brands.findAll()
    } catch (error) {
        throw error
    }
}
async function remove(params) {
    try {
        
        await Brands.destroy({where:{Brand_id:params}})
        return Brands.findAll()
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