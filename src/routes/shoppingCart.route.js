const express = require('express');
const router = express.Router();
const shoppingCartController=require('../controllers/shoppingCart.controller')
router.get('/', shoppingCartController.get);
router.post('/', shoppingCartController.createshoppingCart);
router.put('/:id', shoppingCartController.updateshoppingCart);
router.delete('/:id', shoppingCartController.removeshoppingCart);
module.exports = router;