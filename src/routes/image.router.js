const express = require('express');
const router = express.Router();
const imageController=require('../controllers/image.controller')
router.get('/', imageController.get);
router.post('/', imageController.createBrand);
router.put('/:id', imageController.updateBrand);
router.delete('/:id', imageController.removeBrand);
module.exports = router;