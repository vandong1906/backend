const express = require('express');
const router = express.Router();
const modules=require('../brand/infras/transpot/index')
router.get('/', modules.get);
router.post('/', modules.createBrand);
router.put('/:id', modules.updateBrand);
router.delete('/:id', modules.removeBrand);
module.exports = router;