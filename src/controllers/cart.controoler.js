const { getAll,create,remove,update} = require("../services/cart.sevice")

async function get(req, res, next) {
    try {
        res.json(await getAll())
    } catch (error) {
        console.log("error",error)
    }
}

async function createcart(req,res,next) {
    try {
        res.json(await create(req.body))
    } catch (error) {
        console.log("error",err)
    }
}
async function updatecart(req,res,next) {
    try {
        res.json(await update(req.params.id,req.body))
    } catch (error) {
        console.log("error",error)
    }
}
async function removecart(req,res,next) {
    try {
        res.json(await remove(req.params.id))
    } catch (error) {
        console.log("error",error)
    }
}
module.exports={
    get,
    createcart,
    updatecart,
    removecart,
}