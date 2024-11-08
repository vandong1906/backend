const express = require('express');
const router = express.Router();
const productController=require('../controllers/product.controller')
router.get('/', productController.get);
router.get('/where/:id', productController.getProduct);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.removeProduct);
module.exports = router;