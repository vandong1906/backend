const express = require('express');
const router = express.Router();
const usersController=require('../controllers/user.controller')
router.get('/', usersController.get);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.removeUser);
/*-----------------------------------------Signup/Signin----------------------- */
router.post('/signup', usersController.createUser);
router.post('/logout', usersController.logout);
/*--------------------get use -------------------- */
router.post('/', usersController.findUser);
router.get('/get-cookie', usersController.getCookies);
module.exports = router;