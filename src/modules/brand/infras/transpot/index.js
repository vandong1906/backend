
const path = require('path');
const {  getAll,create,update,remove} = require('../../usecase');

async function get(req, res, next) {
    try {
        res.json(await getAll())
    } catch (error) {
        console.log("error", error)
    }
}

async function createBrand(req, res, next) {
    try {
        res.json(await create(req.body))
    } catch (error) {
        console.log("error", err)
    }
}
async function updateBrand(req, res, next) {
    try {
        res.json(await update(req.params.id, req.body))
    } catch (error) {
        console.log("error", error)
    }
}
async function removeBrand(req, res, next) {
    try {
        res.json(await remove(req.params.id))
    } catch (error) {
        console.log("error", error)
    }
}

module.exports = {
    get,
    createBrand,
    updateBrand,
    removeBrand,
}