const express = require('express');
const router = express.Router();
const usersController=require('../controllers/user.controller')
router.get('/', usersController.get);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.removeUser);
/*-----------------------------------------Signup/Signin----------------------- */
router.post('/signup', usersController.createUser);
/*--------------------get use -------------------- */
router.post('/login', usersController.findUser);
module.exports = router;