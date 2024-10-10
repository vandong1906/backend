const express = require('express');
const router = express.Router();
const cartController=require('../controllers/cart.controoler')
router.get('/', cartController.get);
router.post('/', cartController.createcart);
router.put('/:id', cartController.updatecart);
router.delete('/:id', cartController.removecart);
module.exports = router;