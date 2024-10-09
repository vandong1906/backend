const express = require('express');
const router = express.Router();
const countryController=require('../controllers/country.controller')
router.get('/', countryController.get);
router.post('/', countryController.createBrand);
router.put('/:id', countryController.updateBrand);
router.delete('/:id', countryController.removeBrand);
module.exports = router;