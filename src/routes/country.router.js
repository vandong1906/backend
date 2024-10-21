const express = require('express');
const router = express.Router();
const countryController=require('../controllers/country.controller')
router.get('/', countryController.get);
router.post('/', countryController.createCountry);
router.put('/:id', countryController.updateCountry);
router.delete('/:id', countryController.removeCountry);
module.exports = router;