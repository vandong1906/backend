const { getAll,create,remove,update,getOne} = require("../../usecase");
const path=require('path');
async function get(req, res, next) {
    try {
        res.json(await getAll())
    } catch (error) {
        console.log("error",error)
    }
}
async function getProduct(req, res, next) {
    try {
        res.json(await getOne(req.params.id))
    } catch (error) {
        console.log("error",error)
    }
}



async function  createProduct(req,res,next) {
    try {
        const imageFile = req.files.file;
        console.log(imageFile);
       const flag=await create(req.body,imageFile);
       if(flag){
        res.status(200).send("succes");
       }
       
    } catch (error) {
        console.log("error",error)
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
    getProduct,
}