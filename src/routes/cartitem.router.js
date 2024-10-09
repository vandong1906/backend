const express = require('express');
const router = express.Router();
const cartitemController=require('../controllers/cartitem.controoler')
router.get('/', cartitemController.get);
router.post('/', cartitemController.createBrand);
router.put('/:id', cartitemController.updateBrand);
router.delete('/:id', cartitemController.removeBrand);
module.exports = router;