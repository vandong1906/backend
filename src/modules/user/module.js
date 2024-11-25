const express = require('express');
const router = express.Router();
const transport=require('./infras/transport/index');
router.get('/', transport.get);
router.put('/:id', transport.updateUser);
/*-----------------------------------------Register/singIn----------------------- */
router.post('/register',transport.sendMail);
router.post('/register/verify',transport.verifyMail);
router.post('/logout', transport.logout);
router.delete('/remove/:id',transport.Remove);
/*--------------------get use -------------------- */
router.post('/', transport.findUser);
router.get('/authenticateBearerToken',transport.authenticateBearerToken ,transport.get);
router.get('/authenticateCookiesToken',transport.authenticateCookiesToken ,transport.get);

module.exports = router;