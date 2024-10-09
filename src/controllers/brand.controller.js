const { getAll,create } = require("../services/brand.service")

async function get(req, res, next) {
    try {
        res.json(await getAll())
    } catch (error) {
        console.log("error",error)
    }
}

async function createBrand(req,res,next) {
    try {
        res.json(await create(req.params.id))
    } catch (error) {
        console.log("error",err)
    }
}
module.exports={
    get,
    createBrand,
}