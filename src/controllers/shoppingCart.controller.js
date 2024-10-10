
const { getAll,create,remove,update} = require("../services/shopPingCart.services")

async function get(req, res, next) {
    try {
        res.json(await getAll())
    } catch (error) {
        console.log("error",error)
    }
}

async function createshoppingCart(req,res,next) {
    try {
        res.json(await create(req.body))
    } catch (error) {
        console.log("error",err)
    }
}
async function updateshoppingCart(req,res,next) {
    try {
        res.json(await update(req.params.id,req.body))
    } catch (error) {
        console.log("error",error)
    }
}
async function removeshoppingCart(req,res,next) {
    try {
        res.json(await remove(req.params.id))
    } catch (error) {
        console.log("error",error)
    }
}
module.exports={
    get,
    createshoppingCart,
    updateshoppingCart,
    removeshoppingCart,
}