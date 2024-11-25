const express = require('express');
const router = express.Router();
const modules=require('./infras/transport/index');
router.get('/', modules.get);
router.get('/where/:id', modules.getProduct);
router.post('/', modules.createProduct);
router.put('/:id', modules.updateProduct);
router.delete('/:id', modules.removeProduct);
module.exports = router;