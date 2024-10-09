const express = require('express');
const router = express.Router();
const usersController=require('../controllers/user.controller')
router.get('/', usersController.get);
router.post('/', usersController.createBrand);
router.put('/:id', usersController.updateBrand);
router.delete('/:id', usersController.removeBrand);
module.exports = router;