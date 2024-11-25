
const multer = require('multer');

const fileUpload = require('express-fileupload');
const path=require('path');
const products = require('../model');

async function getAll() {
    try {
        return await products.findAll();
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}


async function getOne(id) {
    try {
        return await products.findOne(
            { where: { product_id: id } })
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function Check(id,number) {
    try {
        return await products.findOne(
            { where: { product_id: id,
                number:number
             } })
    }
    catch (error) {

        console.error('Unable to connect to the database:', error);
    }

}
async function create(product, imageFile) {

    try {
        const uploadDir = path.join('src', 'uploads');
        console.log(uploadDir);
        const name=imageFile.name.split(".");
        console.log(name);
        const pathName= name[0]+ Date.now()+'.'+name[1];
        const uploadPath = path.join(uploadDir,pathName);
        imageFile.mv(uploadPath, (err) => {
            if (err) {
                return 0;
            }

        });
        console.log(imageFile);
       const a= await products.create({
            product_Name: product.product_Name,
            number: product.number,
            Brand_id: product.Brand_id,
            image_data:  pathName,
        })
        if(a!=null){
            return 1;
        }
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
            number: product.number,
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
    getOne,
    Check,
}