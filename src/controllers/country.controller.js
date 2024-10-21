const { getAll,create,remove,update} = require("../services//country.sevice")

async function get(req, res, next) {
    try {
        res.json(await getAll())
    } catch (error) {
        console.log("error",error)
    }
}

async function createCountry(req,res,next) {
    try {
        res.json(await create(req.body))
    } catch (error) {
        console.log("error",err)
    }
}
async function updateCountry(req,res,next) {
    try {
        res.json(await update(req.params.id,req.body))
    } catch (error) {
        console.log("error",error)
    }
}
async function removeCountry(req,res,next) {
    try {
        res.json(await remove(req.params.id))
    } catch (error) {
        console.log("error",error)
    }
}
module.exports={
    get,
    createCountry,
    updateCountry,
    removeCountry,
}