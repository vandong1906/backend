const express = require('express');
const router = express.Router();
const productController=require('../controllers/product.controller')
router.get('/', productController.get);
router.post('/', productController.createBrand);
router.put('/:id', productController.updateBrand);
router.delete('/:id', productController.removeBrand);
module.exports = router;