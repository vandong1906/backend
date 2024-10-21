const { getAll,create,remove,update} = require("../services/product.service")

async function get(req, res, next) {
    try {
        res.json(await getAll())
    } catch (error) {
        console.log("error",error)
    }
}

async function createProduct(req,res,next) {
    try {
        res.json(await create(req.body))
    } catch (error) {
        console.log("error",err)
    }
}
async function updateProduct(req,res,next) {
    try {
        res.json(await update(req.params.id,req.body))
    } catch (error) {
        console.log("error",error)
    }
}
async function removeProduct(req,res,next) {
    try {
        res.json(await remove(req.params.id))
    } catch (error) {
        console.log("error",error)
    }
}
module.exports={
    get,
    createProduct,
    updateProduct,
    removeProduct,
}