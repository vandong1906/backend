const express = require('express');
const router = express.Router();
const modules=require('./infras/transprot/index')
router.get('/', modules.get);
router.post('/', modules.createcart);
router.put('/:id', modules.updatecart);
router.delete('/:id', modules.removecart);
module.exports = router;