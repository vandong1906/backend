const express = require('express');
const router = express.Router();
const roleController=require('../controllers/role.controller')
router.get('/', roleController.get);
router.post('/', roleController.createBrand);
router.put('/:id', roleController.updateBrand);
router.delete('/:id', roleController.removeBrand);
module.exports = router;