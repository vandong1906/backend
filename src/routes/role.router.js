const express = require('express');
const router = express.Router();
const roleController=require('../controllers/role.controller')
router.get('/', roleController.get);
router.post('/', roleController.createRole);
router.put('/:id', roleController.updateRole);
router.delete('/:id', roleController.removeRole);
module.exports = router;