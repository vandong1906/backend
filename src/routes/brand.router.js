const express = require('express');
const router = express.Router();
const brandController=require('../controllers/brand.controller')
router.get('/', brandController.get);
router.post('/', brandController.createBrand);
router.put('/:id', brandController.updateBrand);
router.delete('/:id', brandController.removeBrand);
module.exports = router;